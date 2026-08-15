// ============================================================
// WijTech CCTV Simulator - Application Logic
// ============================================================

// ============================================================
// STATE
// ============================================================
const appState = {
    image: null,
    imageData: null,
    scale: 0,
    scaleCalibrated: false,
    cameras: [],
    selectedCameraId: null,
    areas: [],
    pointsOfInterest: [],
    isMeasuring: false,
    measurePoints: [],
    isSimulating: false,
    isAddingCamera: false,
    isCalibrating: false,
    calibPoints: [],
    dragTarget: null,
    dragOffset: null,
    mouseX: 0,
    mouseY: 0,
    canvasWidth: 0,
    canvasHeight: 0,
    imageX: 0,
    imageY: 0,
    imageWidth: 0,
    imageHeight: 0,
    imageScale: 1,
    nextCameraId: 1,
    selectedCamera: null,
    isDraggingDial: false,
};

// ============================================================
// DOM REFERENCES
// ============================================================
const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');
const cameraList = document.getElementById('cameraList');
const propertiesPanel = document.getElementById('properties-panel');
const statusScale = document.getElementById('statusScale');
const scaleDisplay = document.getElementById('scaleDisplay');
const coordX = document.getElementById('coordX');
const coordY = document.getElementById('coordY');
const activeCameraDisplay = document.getElementById('activeCameraDisplay');
const modeDisplay = document.getElementById('modeDisplay');
const cameraCount = document.getElementById('cameraCount');
const totalCameras = document.getElementById('totalCameras');
const tooltip = document.getElementById('tooltip');
const fileInput = document.getElementById('fileInput');
const projectInput = document.getElementById('projectInput');
const dropOverlay = document.getElementById('dropOverlay');
const calibrationOverlay = document.getElementById('calibrationOverlay');
const calibInput = document.getElementById('calibInput');
const calibPixels = document.getElementById('calibPixels');
const camEditNumber = document.getElementById('camEditNumber');

// Dial
const dialCanvas = document.getElementById('dialCanvas');
const dialCtx = dialCanvas.getContext('2d');

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
function pxToMeters(px) {
    return px * appState.scale;
}

function metersToPx(m) {
    return appState.scale > 0 ? m / appState.scale : 0;
}

function calculateDistance(px1, py1, px2, py2) {
    const dx = px2 - px1;
    const dy = py2 - py1;
    const distPx = Math.sqrt(dx * dx + dy * dy);
    return pxToMeters(distPx);
}

function generateId() {
    return 'cam-' + String(appState.nextCameraId++).padStart(3, '0');
}

function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
}

function degToRad(deg) {
    return deg * Math.PI / 180;
}

function radToDeg(rad) {
    return rad * 180 / Math.PI;
}

function normalizeAngle(deg) {
    deg = deg % 360;
    if (deg < 0) deg += 360;
    return deg;
}

function getCanvasCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
    };
}

function getImageCoords(canvasX, canvasY) {
    const imgX = (canvasX - appState.imageX) / appState.imageScale;
    const imgY = (canvasY - appState.imageY) / appState.imageScale;
    return { x: imgX, y: imgY };
}

function getCanvasCoordsFromImage(imgX, imgY) {
    return {
        x: imgX * appState.imageScale + appState.imageX,
        y: imgY * appState.imageScale + appState.imageY,
    };
}

function isOnImage(canvasX, canvasY) {
    return canvasX >= appState.imageX &&
           canvasX <= appState.imageX + appState.imageWidth &&
           canvasY >= appState.imageY &&
           canvasY <= appState.imageY + appState.imageHeight;
}

// ============================================================
// DRAWING FUNCTIONS
// ============================================================
function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    ctx.fillStyle = '#0a0e17';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw image
    if (appState.image) {
        ctx.drawImage(appState.image, appState.imageX, appState.imageY, appState.imageWidth, appState.imageHeight);
    }

    // Draw areas
    drawAreas();

    // Draw measure points
    drawMeasurements();

    // Draw cameras
    drawCameras();

    // Draw calibration line
    if (appState.isCalibrating && appState.calibPoints.length === 2) {
        const p1 = appState.calibPoints[0];
        const p2 = appState.calibPoints[1];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = '#ffa502';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#ffa502';
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p2.x, p2.y, 5, 0, Math.PI * 2);
        ctx.fill();

        const distPx = Math.sqrt(
            Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
        );
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        ctx.fillStyle = '#ffa502';
        ctx.font = '13px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${distPx.toFixed(1)} px`, midX, midY - 10);
    }
}

function drawAreas() {
    appState.areas.forEach(area => {
        ctx.beginPath();
        const pts = area.points;
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
            ctx.lineTo(pts[i].x, pts[i].y);
        }
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 168, 255, 0.08)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(0, 168, 255, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (area.label) {
            const cx = pts.reduce((s, p) => s + p.x, 0) / pts.length;
            const cy = pts.reduce((s, p) => s + p.y, 0) / pts.length;
            ctx.fillStyle = 'rgba(0, 168, 255, 0.6)';
            ctx.font = '11px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(area.label, cx, cy);
        }
    });
}

function drawMeasurements() {
    if (appState.measurePoints.length > 0) {
        const pts = appState.measurePoints;
        ctx.fillStyle = '#00d2a0';
        pts.forEach((p, i) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
            ctx.fill();
            if (i > 0) {
                ctx.beginPath();
                ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
                ctx.lineTo(p.x, p.y);
                ctx.strokeStyle = '#00d2a0';
                ctx.lineWidth = 1.5;
                ctx.setLineDash([4, 4]);
                ctx.stroke();
                ctx.setLineDash([]);
                const dist = calculateDistance(pts[i - 1].x, pts[i - 1].y, p.x, p.y);
                const midX = (pts[i - 1].x + p.x) / 2;
                const midY = (pts[i - 1].y + p.y) / 2;
                ctx.fillStyle = '#00d2a0';
                ctx.font = '12px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillText(`${dist.toFixed(2)}m`, midX, midY - 4);
            }
        });
    }
}

function drawCameras() {
    appState.cameras.forEach(cam => {
        const pos = getCanvasCoordsFromImage(cam.x, cam.y);
        drawCamera(cam, pos, cam.id === appState.selectedCameraId);
    });
}

function drawCamera(cam, pos, selected) {
    const radius = 18;
    const distancePx = metersToPx(cam.distance);
    const fovRad = degToRad(cam.fov);
    const angleRad = degToRad(cam.rotation);

    // FOV cone
    ctx.save();
    ctx.translate(pos.x, pos.y);
    ctx.rotate(angleRad);

    const startAngle = -fovRad / 2;
    const endAngle = fovRad / 2;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, distancePx, startAngle, endAngle);
    ctx.closePath();

    if (cam.active !== false) {
        ctx.fillStyle = 'rgba(0, 210, 160, 0.15)';
        ctx.strokeStyle = 'rgba(0, 210, 160, 0.5)';
    } else {
        ctx.fillStyle = 'rgba(255, 71, 87, 0.1)';
        ctx.strokeStyle = 'rgba(255, 71, 87, 0.4)';
    }
    ctx.fill();
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Distance line
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(distancePx, 0);
    ctx.strokeStyle = cam.active !== false ? 'rgba(0, 210, 160, 0.3)' : 'rgba(255, 71, 87, 0.3)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.restore();

    // Camera body
    ctx.save();
    ctx.translate(pos.x, pos.y);

    if (selected) {
        ctx.shadowColor = '#00a8ff';
        ctx.shadowBlur = 20;
    }

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fillStyle = selected ? 'rgba(0, 168, 255, 0.2)' : 'rgba(0, 168, 255, 0.08)';
    ctx.fill();
    ctx.strokeStyle = selected ? '#00a8ff' : (cam.active !== false ? '#00d2a0' : '#ff4757');
    ctx.lineWidth = selected ? 3 : 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, Math.PI * 2);
    ctx.fillStyle = cam.active !== false ? '#00d2a0' : '#ff4757';
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.restore();

    // Label
    ctx.fillStyle = selected ? '#00a8ff' : 'rgba(224, 230, 237, 0.7)';
    ctx.font = selected ? 'bold 12px Inter, sans-serif' : '11px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    const label = cam.name || `Cámara ${cam.id}`;
    ctx.fillText(label, pos.x, pos.y - radius - 6);

    if (selected && appState.scaleCalibrated) {
        ctx.fillStyle = '#8a9bb5';
        ctx.font = '10px Inter, sans-serif';
        ctx.textBaseline = 'top';
        ctx.fillText(`${cam.distance.toFixed(1)}m`, pos.x + radius + 12, pos.y - 6);
    }
}

// ============================================================
// CAMERA OPERATIONS
// ============================================================
function addCamera(x, y) {
    if (!appState.image) {
        alert('Carga un plano primero.');
        return null;
    }
    const imgCoords = getImageCoords(x, y);
    const cam = {
        id: generateId(),
        name: `Cámara ${appState.nextCameraId - 1}`,
        x: imgCoords.x,
        y: imgCoords.y,
        rotation: 0,
        distance: 4.0,
        fov: 81,
        model: '2.8mm - 110°',
        active: true,
    };
    appState.cameras.push(cam);
    appState.selectedCameraId = cam.id;
    appState.selectedCamera = cam;
    updateUI();
    saveState();
    return cam;
}

function deleteCamera(id) {
    if (!confirm('¿Eliminar esta cámara?')) return;
    appState.cameras = appState.cameras.filter(c => c.id !== id);
    if (appState.selectedCameraId === id) {
        appState.selectedCameraId = null;
        appState.selectedCamera = null;
        propertiesPanel.classList.add('hidden');
        activeCameraDisplay.textContent = 'Ninguna';
    }
    updateUI();
    saveState();
}

function deleteSelectedCamera() {
    if (appState.selectedCameraId) {
        deleteCamera(appState.selectedCameraId);
    } else {
        alert('Selecciona una cámara para eliminar.');
    }
}

function clearAllCameras() {
    if (appState.cameras.length === 0) return;
    if (!confirm('¿Eliminar todas las cámaras?')) return;
    appState.cameras = [];
    appState.selectedCameraId = null;
    appState.selectedCamera = null;
    propertiesPanel.classList.add('hidden');
    activeCameraDisplay.textContent = 'Ninguna';
    updateUI();
    saveState();
}

function selectCamera(id) {
    appState.selectedCameraId = id;
    const cam = appState.cameras.find(c => c.id === id);
    appState.selectedCamera = cam || null;
    if (cam) {
        loadProperties(cam);
        propertiesPanel.classList.remove('hidden');
        camEditNumber.textContent = appState.cameras.indexOf(cam) + 1;
        activeCameraDisplay.textContent = cam.name || cam.id;
    } else {
        propertiesPanel.classList.add('hidden');
        activeCameraDisplay.textContent = 'Ninguna';
    }
    updateUI();
}

function loadProperties(cam) {
    document.getElementById('propName').value = cam.name || '';
    document.getElementById('propModel').value = cam.model || '2.8mm - 110°';
    document.getElementById('propPosX').textContent = pxToMeters(cam.x).toFixed(2);
    document.getElementById('propPosY').textContent = pxToMeters(cam.y).toFixed(2);
    document.getElementById('propRotation').textContent = `${Math.round(cam.rotation)}°`;
    document.getElementById('propDistance').value = cam.distance;
    document.getElementById('propDistanceVal').textContent = cam.distance.toFixed(1);
    document.getElementById('propFov').value = cam.fov;
    document.getElementById('propFovVal').textContent = Math.round(cam.fov);

    drawDial(cam.rotation);
}

function applyProperties() {
    const cam = appState.selectedCamera;
    if (!cam) return;

    const name = document.getElementById('propName').value.trim() || cam.id;
    const model = document.getElementById('propModel').value;
    const distance = parseFloat(document.getElementById('propDistance').value);
    const fov = parseFloat(document.getElementById('propFov').value);
    const rotation = parseFloat(document.getElementById('propRotation').textContent) || 0;

    cam.name = name;
    cam.model = model;
    cam.distance = distance;
    cam.fov = fov;
    cam.rotation = rotation;

    activeCameraDisplay.textContent = name;

    document.getElementById('propPosX').textContent = pxToMeters(cam.x).toFixed(2);
    document.getElementById('propPosY').textContent = pxToMeters(cam.y).toFixed(2);

    updateUI();
    saveState();
}

// ============================================================
// DIAL
// ============================================================
function drawDial(angle) {
    const w = dialCanvas.width;
    const h = dialCanvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const radius = 50;

    dialCtx.clearRect(0, 0, w, h);

    // Outer ring
    const grad = dialCtx.createRadialGradient(cx, cy, radius - 4, cx, cy, radius);
    grad.addColorStop(0, '#1a2538');
    grad.addColorStop(1, '#0a0e17');
    dialCtx.beginPath();
    dialCtx.arc(cx, cy, radius, 0, Math.PI * 2);
    dialCtx.fillStyle = grad;
    dialCtx.fill();
    dialCtx.strokeStyle = '#2a3a4f';
    dialCtx.lineWidth = 2;
    dialCtx.stroke();

    // Tick marks
    for (let i = 0; i < 36; i++) {
        const a = degToRad(i * 10 - 90);
        const isMain = i % 3 === 0;
        const len = isMain ? 8 : 4;
        const r1 = radius - 10;
        const r2 = radius - 10 - len;
        dialCtx.beginPath();
        dialCtx.moveTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
        dialCtx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2);
        dialCtx.strokeStyle = isMain ? '#8a9bb5' : '#3a4f6a';
        dialCtx.lineWidth = isMain ? 2 : 1;
        dialCtx.stroke();

        if (isMain) {
            dialCtx.fillStyle = '#5a6f8a';
            dialCtx.font = '8px Inter, sans-serif';
            dialCtx.textAlign = 'center';
            dialCtx.textBaseline = 'bottom';
            const labelR = radius - 16;
            dialCtx.fillText(i * 10, cx + Math.cos(a) * labelR, cy + Math.sin(a) * labelR + 8);
        }
    }

    // Main indicator
    const angleRad = degToRad(angle - 90);
    dialCtx.beginPath();
    dialCtx.moveTo(cx, cy);
    dialCtx.lineTo(cx + Math.cos(angleRad) * (radius - 6), cy + Math.sin(angleRad) * (radius - 6));
    dialCtx.strokeStyle = '#00a8ff';
    dialCtx.lineWidth = 3;
    dialCtx.stroke();

    // Center dot
    dialCtx.beginPath();
    dialCtx.arc(cx, cy, 4, 0, Math.PI * 2);
    dialCtx.fillStyle = '#00a8ff';
    dialCtx.fill();

    // Outer glow
    dialCtx.beginPath();
    dialCtx.arc(cx, cy, radius - 2, 0, Math.PI * 2);
    dialCtx.strokeStyle = 'rgba(0, 168, 255, 0.1)';
    dialCtx.lineWidth = 2;
    dialCtx.stroke();
}

// ============================================================
// CAMERA LIST UI
// ============================================================
function renderCameraList() {
    const search = document.getElementById('cameraSearch').value.toLowerCase();
    const filtered = appState.cameras.filter(c =>
        (c.name || c.id).toLowerCase().includes(search)
    );

    cameraList.innerHTML = '';
    filtered.forEach((cam, index) => {
        const card = document.createElement('div');
        card.className = `camera-card${cam.id === appState.selectedCameraId ? ' selected' : ''}`;

        // Thumbnail
        const thumb = document.createElement('div');
        thumb.className = 'thumb';
        const thumbCanvas = document.createElement('canvas');
        thumbCanvas.width = 40;
        thumbCanvas.height = 40;
        renderCameraThumb(thumbCanvas, cam);
        thumb.appendChild(thumbCanvas);
        card.appendChild(thumb);

        // Info
        const info = document.createElement('div');
        info.className = 'info';
        const nameSpan = document.createElement('div');
        nameSpan.className = 'name';
        nameSpan.textContent = cam.name || cam.id;
        const modelSpan = document.createElement('div');
        modelSpan.className = 'model';
        modelSpan.textContent = `${cam.model || 'Sin modelo'} • ${cam.distance.toFixed(1)}m`;
        info.appendChild(nameSpan);
        info.appendChild(modelSpan);
        card.appendChild(info);

        // Status
        const status = document.createElement('div');
        status.className = `status${cam.active !== false ? ' active' : ' inactive'}`;
        card.appendChild(status);

        // Delete button
        const del = document.createElement('button');
        del.className = 'delete-btn';
        del.textContent = '×';
        del.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteCamera(cam.id);
        });
        card.appendChild(del);

        card.addEventListener('click', () => {
            selectCamera(cam.id);
        });

        cameraList.appendChild(card);
    });

    cameraCount.textContent = appState.cameras.length;
    totalCameras.textContent = appState.cameras.length;
}

function renderCameraThumb(canvas, cam) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#0a0e17';
    ctx.fillRect(0, 0, w, h);

    const dist = Math.min(w, h) * 0.35;
    const fovRad = degToRad(cam.fov);
    const angleRad = degToRad(cam.rotation);

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angleRad);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, dist, -fovRad / 2, fovRad / 2);
    ctx.closePath();
    ctx.fillStyle = 'rgba(0, 210, 160, 0.2)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(0, 210, 160, 0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.restore();

    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fillStyle = cam.active !== false ? '#00d2a0' : '#ff4757';
    ctx.fill();
}

// ============================================================
// CALIBRATION
// ============================================================
function startCalibration() {
    if (!appState.image) {
        alert('Carga un plano primero.');
        return;
    }
    if (appState.cameras.length > 0) {
        if (!confirm('La calibración se aplicará a todas las cámaras. ¿Continuar?')) return;
    }
    appState.isCalibrating = true;
    appState.calibPoints = [];
    modeDisplay.textContent = 'Calibración';
    canvas.style.cursor = 'crosshair';
    updateStatus();
}

function finishCalibration(px1, py1, px2, py2) {
    const distPx = Math.sqrt(Math.pow(px2 - px1, 2) + Math.pow(py2 - py1, 2));
    if (distPx < 5) {
        alert('La línea es demasiado corta. Intenta de nuevo.');
        return;
    }

    calibPixels.textContent = distPx.toFixed(1);
    calibrationOverlay.classList.remove('hidden');
    calibInput.value = '';
    calibInput.focus();

    const confirmCalib = () => {
        const meters = parseFloat(calibInput.value);
        if (!meters || meters <= 0) {
            alert('Ingresa un valor válido en metros.');
            return;
        }
        appState.scale = meters / distPx;
        appState.scaleCalibrated = true;
        calibrationOverlay.classList.add('hidden');
        appState.isCalibrating = false;
        canvas.style.cursor = 'default';
        modeDisplay.textContent = 'Selección';
        updateStatus();
        updateUI();
        saveState();
        alert(`¡Calibración completada! Escala: ${appState.scale.toFixed(4)} m/px`);
    };

    calibInput.onkeydown = (e) => {
        if (e.key === 'Enter') confirmCalib();
        if (e.key === 'Escape') {
            calibrationOverlay.classList.add('hidden');
            appState.isCalibrating = false;
            canvas.style.cursor = 'default';
            modeDisplay.textContent = 'Selección';
        }
    };

    document.getElementById('calibConfirm').onclick = confirmCalib;
    document.getElementById('calibCancel').onclick = () => {
        calibrationOverlay.classList.add('hidden');
        appState.isCalibrating = false;
        canvas.style.cursor = 'default';
        modeDisplay.textContent = 'Selección';
    };
}

// ============================================================
// CANVAS EVENTS
// ============================================================
function setupCanvasEvents() {
    canvas.addEventListener('mousemove', onCanvasMouseMove);
    canvas.addEventListener('mousedown', onCanvasMouseDown);
    canvas.addEventListener('mouseup', onCanvasMouseUp);
    canvas.addEventListener('mouseleave', () => {
        tooltip.classList.add('hidden');
    });

    canvas.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropOverlay.classList.remove('hidden');
    });

    canvas.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropOverlay.classList.add('hidden');
    });

    canvas.addEventListener('drop', (e) => {
        e.preventDefault();
        dropOverlay.classList.add('hidden');
        const files = e.dataTransfer.files;
        if (files.length > 0 && files[0].type.startsWith('image/')) {
            loadImageFile(files[0]);
        }
    });

    window.addEventListener('resize', () => {
        resizeCanvas();
    });
}

function onCanvasMouseMove(e) {
    const pos = getCanvasCoords(e);
    appState.mouseX = pos.x;
    appState.mouseY = pos.y;

    if (isOnImage(pos.x, pos.y)) {
        const imgCoords = getImageCoords(pos.x, pos.y);
        coordX.textContent = pxToMeters(imgCoords.x).toFixed(2);
        coordY.textContent = pxToMeters(imgCoords.y).toFixed(2);
    } else {
        coordX.textContent = '0';
        coordY.textContent = '0';
    }

    if (isOnImage(pos.x, pos.y) && appState.scaleCalibrated) {
        const imgCoords = getImageCoords(pos.x, pos.y);
        tooltip.textContent = `(${pxToMeters(imgCoords.x).toFixed(2)}m, ${pxToMeters(imgCoords.y).toFixed(2)}m)`;
        tooltip.style.left = (e.clientX + 12) + 'px';
        tooltip.style.top = (e.clientY - 10) + 'px';
        tooltip.classList.remove('hidden');
    } else {
        tooltip.classList.add('hidden');
    }

    if (appState.dragTarget) {
        const imgCoords = getImageCoords(pos.x, pos.y);
        appState.dragTarget.x = imgCoords.x;
        appState.dragTarget.y = imgCoords.y;
        if (appState.selectedCameraId === appState.dragTarget.id) {
            document.getElementById('propPosX').textContent = pxToMeters(imgCoords.x).toFixed(2);
            document.getElementById('propPosY').textContent = pxToMeters(imgCoords.y).toFixed(2);
        }
        drawScene();
        return;
    }

    if (appState.isCalibrating && appState.calibPoints.length === 1) {
        drawScene();
        const p1 = appState.calibPoints[0];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.strokeStyle = '#ffa502';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#ffa502';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 5, 0, Math.PI * 2);
        ctx.fill();
        return;
    }

    if (!appState.isAddingCamera && !appState.isCalibrating && !appState.isMeasuring) {
        const hit = getCameraAt(pos.x, pos.y);
        canvas.style.cursor = hit ? 'grab' : 'default';
    }
}

function onCanvasMouseDown(e) {
    const pos = getCanvasCoords(e);

    if (appState.isCalibrating) {
        if (!isOnImage(pos.x, pos.y)) return;
        appState.calibPoints.push({ x: pos.x, y: pos.y });
        if (appState.calibPoints.length === 2) {
            finishCalibration(
                appState.calibPoints[0].x,
                appState.calibPoints[0].y,
                appState.calibPoints[1].x,
                appState.calibPoints[1].y
            );
        }
        drawScene();
        return;
    }

    if (appState.isMeasuring) {
        if (!isOnImage(pos.x, pos.y)) return;
        appState.measurePoints.push({ x: pos.x, y: pos.y });
        drawScene();
        if (appState.measurePoints.length === 2) {
            appState.isMeasuring = false;
            modeDisplay.textContent = 'Selección';
            canvas.style.cursor = 'default';
            document.getElementById('btnMeasure').classList.remove('active');
        }
        return;
    }

    if (appState.isAddingCamera) {
        if (isOnImage(pos.x, pos.y)) {
            addCamera(pos.x, pos.y);
            appState.isAddingCamera = false;
            modeDisplay.textContent = 'Selección';
            canvas.style.cursor = 'default';
            document.getElementById('btnAddCamera').classList.remove('primary');
        }
        return;
    }

    const hit = getCameraAt(pos.x, pos.y);
    if (hit) {
        selectCamera(hit.id);
        appState.dragTarget = hit;
        canvas.style.cursor = 'grabbing';
    } else {
        appState.selectedCameraId = null;
        appState.selectedCamera = null;
        propertiesPanel.classList.add('hidden');
        activeCameraDisplay.textContent = 'Ninguna';
        updateUI();
    }
}

function onCanvasMouseUp(e) {
    if (appState.dragTarget) {
        appState.dragTarget = null;
        canvas.style.cursor = 'default';
        saveState();
        drawScene();
    }
}

function getCameraAt(canvasX, canvasY) {
    for (let i = appState.cameras.length - 1; i >= 0; i--) {
        const cam = appState.cameras[i];
        const pos = getCanvasCoordsFromImage(cam.x, cam.y);
        const dx = canvasX - pos.x;
        const dy = canvasY - pos.y;
        if (dx * dx + dy * dy < 400) {
            return cam;
        }
    }
    return null;
}

// ============================================================
// IMAGE LOADING
// ============================================================
function loadImageFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            appState.image = img;
            appState.imageData = e.target.result;
            resizeCanvas();
            if (!appState.scaleCalibrated) {
                setTimeout(() => {
                    if (confirm('¿Deseas calibrar la escala ahora?')) {
                        startCalibration();
                    }
                }, 300);
            }
            updateUI();
            saveState();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function removeImage() {
    if (!appState.image) return;
    if (!confirm('¿Quitar la imagen de fondo?')) return;
    appState.image = null;
    appState.imageData = null;
    appState.scaleCalibrated = false;
    appState.scale = 0;
    resizeCanvas();
    updateUI();
    saveState();
}

function resizeCanvas() {
    const container = document.getElementById('map-container');
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    appState.canvasWidth = canvas.width;
    appState.canvasHeight = canvas.height;

    if (appState.image) {
        const imgAspect = appState.image.width / appState.image.height;
        let w = canvas.width * 0.9;
        let h = w / imgAspect;
        if (h > canvas.height * 0.9) {
            h = canvas.height * 0.9;
            w = h * imgAspect;
        }
        appState.imageWidth = w;
        appState.imageHeight = h;
        appState.imageX = (canvas.width - w) / 2;
        appState.imageY = (canvas.height - h) / 2;
        appState.imageScale = w / appState.image.width;
    }

    drawScene();
    updateUI();
}

// ============================================================
// UI UPDATE
// ============================================================
function updateUI() {
    renderCameraList();
    drawScene();
    updateStatus();
}

function updateStatus() {
    if (appState.scaleCalibrated && appState.scale > 0) {
        scaleDisplay.textContent = `${appState.scale.toFixed(4)} m/px`;
    } else {
        scaleDisplay.textContent = 'No calibrada';
    }

    const selected = appState.cameras.find(c => c.id === appState.selectedCameraId);
    if (selected) {
        activeCameraDisplay.textContent = selected.name || selected.id;
    } else {
        activeCameraDisplay.textContent = 'Ninguna';
    }
}

// ============================================================
// SAVE / LOAD
// ============================================================
function saveState() {
    try {
        const data = {
            image: appState.imageData,
            scale: appState.scale,
            scaleCalibrated: appState.scaleCalibrated,
            cameras: appState.cameras,
            areas: appState.areas,
            pointsOfInterest: appState.pointsOfInterest,
            nextCameraId: appState.nextCameraId,
        };
        localStorage.setItem('wijtech_simulator', JSON.stringify(data));
        return true;
    } catch (e) {
        console.warn('Could not save state:', e);
        return false;
    }
}

function loadState() {
    try {
        const raw = localStorage.getItem('wijtech_simulator');
        if (!raw) return false;
        const data = JSON.parse(raw);

        if (data.image) {
            const img = new Image();
            img.onload = () => {
                appState.image = img;
                appState.imageData = data.image;
                appState.scale = data.scale || 0;
                appState.scaleCalibrated = data.scaleCalibrated || false;
                appState.cameras = data.cameras || [];
                appState.areas = data.areas || [];
                appState.pointsOfInterest = data.pointsOfInterest || [];
                appState.nextCameraId = data.nextCameraId || 1;
                resizeCanvas();
                updateUI();
                if (appState.cameras.length > 0) {
                    selectCamera(appState.cameras[0].id);
                }
            };
            img.src = data.image;
            return true;
        }
        return false;
    } catch (e) {
        console.warn('Could not load state:', e);
        return false;
    }
}

function saveProject() {
    if (!appState.image) {
        alert('No hay proyecto para guardar.');
        return;
    }
    if (saveState()) {
        alert('Proyecto guardado en localStorage.');
    }
}

function exportProject() {
    if (!appState.image) {
        alert('No hay proyecto para exportar.');
        return;
    }
    const data = {
        image: appState.imageData,
        scale: appState.scale,
        scaleCalibrated: appState.scaleCalibrated,
        cameras: appState.cameras,
        areas: appState.areas,
        pointsOfInterest: appState.pointsOfInterest,
        nextCameraId: appState.nextCameraId,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wijtech_project.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importProject(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.image) {
                const img = new Image();
                img.onload = () => {
                    appState.image = img;
                    appState.imageData = data.image;
                    appState.scale = data.scale || 0;
                    appState.scaleCalibrated = data.scaleCalibrated || false;
                    appState.cameras = data.cameras || [];
                    appState.areas = data.areas || [];
                    appState.pointsOfInterest = data.pointsOfInterest || [];
                    appState.nextCameraId = data.nextCameraId || 1;
                    appState.selectedCameraId = null;
                    appState.selectedCamera = null;
                    propertiesPanel.classList.add('hidden');
                    resizeCanvas();
                    updateUI();
                    if (appState.cameras.length > 0) {
                        selectCamera(appState.cameras[0].id);
                    }
                    saveState();
                    alert('Proyecto cargado correctamente.');
                };
                img.src = data.image;
            } else {
                alert('Archivo inválido.');
            }
        } catch (err) {
            alert('Error al cargar el proyecto: ' + err.message);
        }
    };
    reader.readAsText(file);
}

function exportImage() {
    if (!appState.image) {
        alert('No hay imagen para exportar.');
        return;
    }
    const dataUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'wijtech_simulation.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function loadExample() {
    if (appState.cameras.length > 0 || appState.image) {
        if (!confirm('Esto reemplazará tu proyecto actual. ¿Continuar?')) return;
    }

    appState.image = null;
    appState.imageData = null;
    appState.scale = 0.023;
    appState.scaleCalibrated = true;

    const w = 800;
    const h = 600;

    appState.cameras = [
        { id: 'cam-001', name: 'Entrada', x: 150, y: 200, rotation: 45, distance: 6, fov: 81, model: '2.8mm - 110°', active: true },
        { id: 'cam-002', name: 'Recepción', x: 300, y: 150, rotation: 90, distance: 4, fov: 81, model: '2.8mm - 110°', active: true },
        { id: 'cam-003', name: 'Parking', x: 500, y: 350, rotation: 135, distance: 12, fov: 81, model: '2.8mm - 110°', active: true },
        { id: 'cam-004', name: 'Sala principal', x: 350, y: 400, rotation: 180, distance: 8, fov: 81, model: '3.6mm - 87°', active: true },
        { id: 'cam-005', name: 'Oficinas', x: 600, y: 200, rotation: 225, distance: 5, fov: 81, model: '3.6mm - 87°', active: true },
        { id: 'cam-006', name: 'Caja fuerte', x: 700, y: 450, rotation: 270, distance: 10, fov: 30, model: '12.0mm - 30°', active: true },
        { id: 'cam-007', name: 'Ascensor', x: 100, y: 450, rotation: 315, distance: 5, fov: 81, model: '3.6mm - 87°', active: true },
        { id: 'cam-008', name: 'Salida', x: 750, y: 100, rotation: 0, distance: 8, fov: 30, model: '12.0mm - 30°', active: true },
    ];
    appState.nextCameraId = 9;

    appState.areas = [
        { points: [{x: 120, y: 120}, {x: 280, y: 120}, {x: 280, y: 280}, {x: 120, y: 280}], label: 'Entrada' },
        { points: [{x: 300, y: 100}, {x: 480, y: 100}, {x: 480, y: 250}, {x: 300, y: 250}], label: 'Sala principal' },
        { points: [{x: 500, y: 280}, {x: 700, y: 280}, {x: 700, y: 500}, {x: 500, y: 500}], label: 'Parking' },
        { points: [{x: 50, y: 400}, {x: 180, y: 400}, {x: 180, y: 550}, {x: 50, y: 550}], label: 'Ascensor' },
        { points: [{x: 650, y: 50}, {x: 780, y: 50}, {x: 780, y: 180}, {x: 650, y: 180}], label: 'Salida' },
        { points: [{x: 580, y: 120}, {x: 680, y: 120}, {x: 680, y: 220}, {x: 580, y: 220}], label: 'Oficinas' },
        { points: [{x: 680, y: 420}, {x: 760, y: 420}, {x: 760, y: 500}, {x: 680, y: 500}], label: 'Caja fuerte' },
        { points: [{x: 200, y: 300}, {x: 340, y: 300}, {x: 340, y: 380}, {x: 200, y: 380}], label: 'Recepción' },
    ];

    appState.selectedCameraId = appState.cameras[0].id;
    appState.selectedCamera = appState.cameras[0];
    resizeCanvas();
    updateUI();
    selectCamera(appState.cameras[0].id);
    saveState();
}

// ============================================================
// FULLSCREEN
// ============================================================
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            alert('Error al entrar en pantalla completa: ' + err.message);
        });
    } else {
        document.exitFullscreen();
    }
}

// ============================================================
// HELP
// ============================================================
function showHelp() {
    alert(
        'WijTech CCTV Simulator\n' +
        '========================\n\n' +
        '🎯 FUNCIONALIDADES:\n' +
        '• Carga un plano (JPG, PNG)\n' +
        '• Calibra la escala dibujando una línea\n' +
        '• Agrega cámaras con el botón + Añadir\n' +
        '• Arrastra cámaras para reposicionarlas\n' +
        '• Ajusta rotación con el dial circular\n' +
        '• Ajusta alcance y FOV con sliders\n' +
        '• Mide distancias en metros\n\n' +
        '⌨️ ATAJOS:\n' +
        '• Delete/Backspace: Eliminar cámara\n' +
        '• Escape: Cancelar acción\n' +
        '• R: Enfocar dial de rotación\n' +
        '• M: Activar modo medir\n\n' +
        '💾 GUARDADO:\n' +
        '• Guardar: Guarda en localStorage\n' +
        '• Exportar: Guarda como JSON\n' +
        '• Cargar: Carga un proyecto JSON'
    );
}

// ============================================================
// DIAL EVENTS
// ============================================================
function setupDialEvents() {
    let isDragging = false;

    dialCanvas.addEventListener('mousedown', (e) => {
        if (!appState.selectedCamera) return;
        isDragging = true;
        dialCanvas.style.cursor = 'grabbing';
        updateDialAngle(e);
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging || !appState.selectedCamera) return;
        updateDialAngle(e);
        drawScene();
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            dialCanvas.style.cursor = 'grab';
            if (appState.selectedCamera) {
                applyProperties();
            }
        }
    });

    dialCanvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (!appState.selectedCamera) return;
        isDragging = true;
        const touch = e.touches[0];
        const rect = dialCanvas.getBoundingClientRect();
        updateDialAngleFromTouch(touch.clientX, touch.clientY, rect);
    });

    dialCanvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!isDragging || !appState.selectedCamera) return;
        const touch = e.touches[0];
        const rect = dialCanvas.getBoundingClientRect();
        updateDialAngleFromTouch(touch.clientX, touch.clientY, rect);
        drawScene();
    });

    dialCanvas.addEventListener('touchend', (e) => {
        e.preventDefault();
        if (isDragging) {
            isDragging = false;
            if (appState.selectedCamera) {
                applyProperties();
            }
        }
    });
}

function updateDialAngle(e) {
    const rect = dialCanvas.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
    let newAngle = normalizeAngle(angle + 90);
    newAngle = Math.round(newAngle);
    if (appState.selectedCamera) {
        appState.selectedCamera.rotation = newAngle;
        document.getElementById('propRotation').textContent = `${newAngle}°`;
        drawDial(newAngle);
        drawScene();
    }
}

function updateDialAngleFromTouch(clientX, clientY, rect) {
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const angle = Math.atan2(clientY - cy, clientX - cx) * (180 / Math.PI);
    let newAngle = normalizeAngle(angle + 90);
    newAngle = Math.round(newAngle);
    if (appState.selectedCamera) {
        appState.selectedCamera.rotation = newAngle;
        document.getElementById('propRotation').textContent = `${newAngle}°`;
        drawDial(newAngle);
        drawScene();
    }
}

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Delete' || e.key === 'Backspace') {
        if (appState.selectedCameraId) {
            deleteCamera(appState.selectedCameraId);
        }
    }
    if (e.key === 'r' || e.key === 'R') {
        if (appState.selectedCamera) {
            document.getElementById('propRotation').focus();
        }
    }
    if (e.key === 'm' || e.key === 'M') {
        if (!appState.isMeasuring) {
            appState.isMeasuring = true;
            modeDisplay.textContent = 'Medición';
            canvas.style.cursor = 'crosshair';
            appState.measurePoints = [];
        } else {
            appState.isMeasuring = false;
            modeDisplay.textContent = 'Selección';
            canvas.style.cursor = 'default';
            appState.measurePoints = [];
        }
        drawScene();
    }
    if (e.key === 'Escape') {
        if (appState.isCalibrating) {
            appState.isCalibrating = false;
            appState.calibPoints = [];
            canvas.style.cursor = 'default';
            modeDisplay.textContent = 'Selección';
            calibrationOverlay.classList.add('hidden');
            drawScene();
        }
        if (appState.isAddingCamera) {
            appState.isAddingCamera = false;
            canvas.style.cursor = 'default';
            modeDisplay.textContent = 'Selección';
            document.getElementById('btnAddCamera').classList.remove('primary');
        }
        if (appState.isMeasuring) {
            appState.isMeasuring = false;
            modeDisplay.textContent = 'Selección';
            canvas.style.cursor = 'default';
            appState.measurePoints = [];
            drawScene();
        }
    }
});

// ============================================================
// INITIALIZATION
// ============================================================
function init() {
    resizeCanvas();
    setupCanvasEvents();
    setupDialEvents();

    // --- TOOLBAR BUTTONS ---
    document.getElementById('btnAddCamera').addEventListener('click', () => {
        if (!appState.image) {
            alert('Carga un plano primero.');
            return;
        }
        appState.isAddingCamera = !appState.isAddingCamera;
        if (appState.isAddingCamera) {
            modeDisplay.textContent = 'Agregar Cámara';
            canvas.style.cursor = 'crosshair';
            document.getElementById('btnAddCamera').classList.add('primary');
        } else {
            modeDisplay.textContent = 'Selección';
            canvas.style.cursor = 'default';
            document.getElementById('btnAddCamera').classList.remove('primary');
        }
    });

    document.getElementById('btnDeleteCamera').addEventListener('click', deleteSelectedCamera);

    document.getElementById('btnClearAll').addEventListener('click', clearAllCameras);

    document.getElementById('btnLoadImage').addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            loadImageFile(e.target.files[0]);
        }
        e.target.value = '';
    });

    document.getElementById('btnRemoveImage').addEventListener('click', removeImage);

    document.getElementById('btnExportImage').addEventListener('click', exportImage);

    document.getElementById('btnSaveProject').addEventListener('click', saveProject);

    document.getElementById('btnLoadProject').addEventListener('click', () => {
        projectInput.click();
    });

    projectInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            importProject(e.target.files[0]);
        }
        e.target.value = '';
    });

    document.getElementById('btnExample').addEventListener('click', loadExample);

    document.getElementById('btnHelp').addEventListener('click', showHelp);

    document.getElementById('btnFullscreen').addEventListener('click', toggleFullscreen);

    // --- PROPERTIES PANEL ---
    document.getElementById('closeProperties').addEventListener('click', () => {
        propertiesPanel.classList.add('hidden');
        appState.selectedCameraId = null;
        appState.selectedCamera = null;
        activeCameraDisplay.textContent = 'Ninguna';
        updateUI();
    });

    document.getElementById('propApply').addEventListener('click', applyProperties);

    document.getElementById('propDelete').addEventListener('click', () => {
        if (appState.selectedCameraId) {
            deleteCamera(appState.selectedCameraId);
        }
    });

    // Slider live updates
    document.getElementById('propDistance').addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        document.getElementById('propDistanceVal').textContent = val.toFixed(1);
        if (appState.selectedCamera) {
            appState.selectedCamera.distance = val;
            drawScene();
        }
    });

    document.getElementById('propFov').addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        document.getElementById('propFovVal').textContent = Math.round(val);
        if (appState.selectedCamera) {
            appState.selectedCamera.fov = val;
            drawScene();
        }
    });

    // Search
    document.getElementById('cameraSearch').addEventListener('input', renderCameraList);

    // Name input updates
    document.getElementById('propName').addEventListener('change', () => {
        if (appState.selectedCamera) {
            const name = document.getElementById('propName').value.trim() || appState.selectedCamera.id;
            appState.selectedCamera.name = name;
            activeCameraDisplay.textContent = name;
            updateUI();
        }
    });

    document.getElementById('propModel').addEventListener('change', () => {
        if (appState.selectedCamera) {
            appState.selectedCamera.model = document.getElementById('propModel').value;
            updateUI();
        }
    });

    document.getElementById('propName').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') applyProperties();
    });

    // Load saved state
    const loaded = loadState();

    if (!loaded && !appState.image) {
        ctx.fillStyle = '#1a2538';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#8a9bb5';
        ctx.font = '18px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('📷 Carga un plano para comenzar', canvas.width / 2, canvas.height / 2 - 20);
        ctx.font = '14px Inter, sans-serif';
        ctx.fillStyle = '#5a6f8a';
        ctx.fillText('Arrastra una imagen o usa el botón "Fondo"', canvas.width / 2, canvas.height / 2 + 20);
    }

    console.log('WijTech CCTV Simulator initialized.');
}

document.addEventListener('DOMContentLoaded', init);
