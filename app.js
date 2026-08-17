// ============================================================
// CATÁLOGO DE CÁMARAS - ESPECIFICACIONES TÉCNICAS
// ============================================================
const cameraCatalog = {
    // Hikvision
    'Hikvision DS-2CD1321-I': {
        brand: 'Hikvision',
        resolution: '2MP (1920x1080)',
        sensor: '1/2.8" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 75,
        lens: '2.8mm',
        type: 'Bala',
        features: ['WDR', '3D-DNR', 'ROI']
    },
    'Hikvision DS-2CD2343G2-I': {
        brand: 'Hikvision',
        resolution: '4MP (2688x1520)',
        sensor: '1/3" CMOS',
        nightVision: '30m (IR)',
        wdr: '130dB',
        ip: '67',
        fov: 87,
        lens: '4mm',
        type: 'Domo',
        features: ['AcuSense', 'WDR', 'H.265+']
    },
    'Hikvision DS-2CD2087G2-L': {
        brand: 'Hikvision',
        resolution: '8MP (3840x2160)',
        sensor: '1/1.8" CMOS',
        nightVision: '30m (IR) / ColorVu',
        wdr: '140dB',
        ip: '67',
        fov: 110,
        lens: '2.8mm',
        type: 'Bala',
        features: ['ColorVu', 'AcuSense', 'H.265+']
    },
    'Hikvision DS-2CD2686G2-IZS': {
        brand: 'Hikvision',
        resolution: '8MP (3840x2160)',
        sensor: '1/1.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '140dB',
        ip: '67',
        fov: 105,
        lens: '2.7-13.5mm (varifocal)',
        type: 'Bala',
        features: ['Varifocal', 'AcuSense', 'H.265+', 'Motorized']
    },
    'Hikvision DS-2CD2047G2-L': {
        brand: 'Hikvision',
        resolution: '4MP (2688x1520)',
        sensor: '1/1.8" CMOS',
        nightVision: '30m (IR) / ColorVu',
        wdr: '130dB',
        ip: '67',
        fov: 87,
        lens: '4mm',
        type: 'Bala',
        features: ['ColorVu', 'AcuSense', 'H.265+']
    },
    
    // Dahua
    'Dahua IPC-HFW1230S': {
        brand: 'Dahua',
        resolution: '2MP (1920x1080)',
        sensor: '1/2.9" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 95,
        lens: '2.8mm',
        type: 'Bala',
        features: ['Starlight', 'WDR', 'H.265']
    },
    'Dahua IPC-HDW1230S': {
        brand: 'Dahua',
        resolution: '2MP (1920x1080)',
        sensor: '1/2.9" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 87,
        lens: '3.6mm',
        type: 'Domo',
        features: ['Starlight', 'WDR', 'H.265']
    },
    'Dahua IPC-HFW1831E': {
        brand: 'Dahua',
        resolution: '8MP (3840x2160)',
        sensor: '1/1.8" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 110,
        lens: '2.8mm',
        type: 'Bala',
        features: ['Starlight', 'WDR', 'H.265', 'ePoE']
    },
    'Dahua IPC-HDW3849H-AS-PV': {
        brand: 'Dahua',
        resolution: '8MP (3840x2160)',
        sensor: '1/1.8" CMOS',
        nightVision: '30m (IR) / Smart Dual Light',
        wdr: '140dB',
        ip: '67',
        fov: 108,
        lens: '2.8mm',
        type: 'Domo',
        features: ['AI', 'Dual Light', 'H.265', 'Active Deterrence']
    },
    'Dahua IPC-HFW5842-ZE': {
        brand: 'Dahua',
        resolution: '8MP (3840x2160)',
        sensor: '1/1.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '140dB',
        ip: '67',
        fov: 112,
        lens: '2.7-12mm (varifocal)',
        type: 'Bala',
        features: ['Varifocal', 'Starlight+', 'WDR', 'H.265']
    },
    
    // Axis
    'Axis M1065-L': {
        brand: 'Axis',
        resolution: '5MP (2592x1944)',
        sensor: '1/2.8" CMOS',
        nightVision: '20m (IR/Light)',
        wdr: '120dB',
        ip: '66',
        fov: 100,
        lens: '2.8mm',
        type: 'Domo',
        features: ['Lightfinder 2.0', 'Forensic WDR', 'Zipstream']
    },
    'Axis P1455-LE': {
        brand: 'Axis',
        resolution: '5MP (2592x1944)',
        sensor: '1/2.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 92,
        lens: '3.3mm',
        type: 'Bala',
        features: ['Lightfinder 2.0', 'Forensic WDR', 'Zipstream']
    },
    'Axis Q3515-LV': {
        brand: 'Axis',
        resolution: '5MP (2592x1944)',
        sensor: '1/2.8" CMOS',
        nightVision: '20m (Light)',
        wdr: '120dB',
        ip: '66',
        fov: 95,
        lens: '3.3mm',
        type: 'Domo',
        features: ['Lightfinder 2.0', 'Forensic WDR', 'Zipstream']
    },
    'Axis Q6075-E': {
        brand: 'Axis',
        resolution: '4MP (2688x1512)',
        sensor: '1/2.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 78,
        lens: '4.3-9.8mm (varifocal)',
        type: 'PTZ',
        features: ['Lightfinder 2.0', 'Forensic WDR', 'Zipstream', 'PTZ']
    },
    
    // Bosch
    'Bosch FLEXIDOME IP 3000i': {
        brand: 'Bosch',
        resolution: '5MP (3072x1728)',
        sensor: '1/2.8" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 82,
        lens: '2.8mm',
        type: 'Domo',
        features: ['Starlight', 'H.265', 'IVA', 'WDR']
    },
    'Bosch DINION IP 5000i': {
        brand: 'Bosch',
        resolution: '5MP (3072x1728)',
        sensor: '1/2.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 93,
        lens: '3.6mm',
        type: 'Bala',
        features: ['Starlight', 'H.265', 'IVA', 'WDR']
    },
    'Bosch FLEXIDOME IP panoramic 5000': {
        brand: 'Bosch',
        resolution: '5MP (3072x1728)',
        sensor: '1/1.8" CMOS',
        nightVision: '10m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 180,
        lens: 'Panoramic',
        type: 'Panorámica',
        features: ['360°', 'Stitching', 'H.265', 'IVA']
    },
    'Bosch MIC IP starlight 7100i': {
        brand: 'Bosch',
        resolution: '4MP (2560x1440)',
        sensor: '1/2.8" CMOS',
        nightVision: '100m (IR)',
        wdr: '140dB',
        ip: '68',
        fov: 63,
        lens: '4.8-76mm (varifocal)',
        type: 'PTZ',
        features: ['PTZ', 'Starlight', 'WDR', 'H.265', 'IVA']
    },
    
    // Sony
    'Sony SNC-VB770': {
        brand: 'Sony',
        resolution: '4K (3840x2160)',
        sensor: '1/1.2" CMOS',
        nightVision: 'Starlight',
        wdr: '130dB',
        ip: '66',
        fov: 85,
        lens: '4.3mm',
        type: 'Bala',
        features: ['Starlight', 'WDR', 'H.265']
    },
    'Sony SNC-WR632': {
        brand: 'Sony',
        resolution: '2MP (1920x1080)',
        sensor: '1/2.8" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 75,
        lens: '3.1-8.9mm (varifocal)',
        type: 'Domo',
        features: ['Varifocal', 'WDR', 'H.265']
    },
    'Sony SNC-VM772R': {
        brand: 'Sony',
        resolution: '4K (3840x2160)',
        sensor: '1/1.7" CMOS',
        nightVision: '40m (IR)',
        wdr: '130dB',
        ip: '66',
        fov: 92,
        lens: '3.9mm',
        type: 'Bala',
        features: ['Starlight', 'WDR', 'H.265']
    },
    'Sony SNC-EB630': {
        brand: 'Sony',
        resolution: '2MP (1920x1080)',
        sensor: '1/2.8" CMOS',
        nightVision: '20m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 88,
        lens: '3.4mm',
        type: 'Domo',
        features: ['WDR', 'H.265']
    },
    
    // Hanwha (Samsung)
    'Hanwha XNV-9080R': {
        brand: 'Hanwha',
        resolution: '4K (3840x2160)',
        sensor: '1/1.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 79,
        lens: '4.1mm',
        type: 'Domo',
        features: ['WiseStream II', 'WDR', 'H.265']
    },
    'Hanwha XNO-9082R': {
        brand: 'Hanwha',
        resolution: '4K (3840x2160)',
        sensor: '1/1.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 110,
        lens: '2.8mm',
        type: 'Bala',
        features: ['WiseStream II', 'WDR', 'H.265']
    },
    'Hanwha QNV-7030R': {
        brand: 'Hanwha',
        resolution: '4MP (2688x1520)',
        sensor: '1/3" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 87,
        lens: '3.6mm',
        type: 'Domo',
        features: ['WDR', 'H.265']
    },
    'Hanwha PNO-9080R': {
        brand: 'Hanwha',
        resolution: '4MP (2560x1440)',
        sensor: '1/2.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 62,
        lens: '7-21mm (varifocal)',
        type: 'Bala',
        features: ['Varifocal', 'WDR', 'H.265']
    },
    
    // Vivotek
    'Vivotek IP9181-H': {
        brand: 'Vivotek',
        resolution: '4K (3840x2160)',
        sensor: '1/2.5" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 98,
        lens: '2.8mm',
        type: 'Bala',
        features: ['WDR', 'H.265', 'Smart Stream']
    },
    'Vivotek IP8165-H': {
        brand: 'Vivotek',
        resolution: '2MP (1920x1080)',
        sensor: '1/2.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 85,
        lens: '3.6mm',
        type: 'Bala',
        features: ['WDR', 'H.265']
    },
    'Vivotek IP8172': {
        brand: 'Vivotek',
        resolution: '4MP (2688x1520)',
        sensor: '1/1.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '140dB',
        ip: '67',
        fov: 106,
        lens: '2.8-12mm (varifocal)',
        type: 'Bala',
        features: ['Varifocal', 'WDR', 'H.265']
    },
    'Vivotek FD9181-H': {
        brand: 'Vivotek',
        resolution: '4K (3840x2160)',
        sensor: '1/2.5" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 102,
        lens: '2.8mm',
        type: 'Domo',
        features: ['WDR', 'H.265', 'Smart Stream']
    },
    
    // Avigilon
    'Avigilon H5A-BO-IR': {
        brand: 'Avigilon',
        resolution: '6MP (3072x2048)',
        sensor: '1/1.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 92,
        lens: '2.8mm',
        type: 'Bala',
        features: ['H.265', 'WDR', 'Self-Learning']
    },
    'Avigilon H5A-DO-IR': {
        brand: 'Avigilon',
        resolution: '6MP (3072x2048)',
        sensor: '1/1.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 88,
        lens: '2.8mm',
        type: 'Domo',
        features: ['H.265', 'WDR', 'Self-Learning']
    },
    'Avigilon H5M-D1': {
        brand: 'Avigilon',
        resolution: '4MP (2688x1520)',
        sensor: '1/2.8" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 85,
        lens: '4mm',
        type: 'Domo',
        features: ['H.265', 'WDR', 'Self-Learning']
    },
    'Avigilon H5A-PTZ': {
        brand: 'Avigilon',
        resolution: '4K (3840x2160)',
        sensor: '1/1.8" CMOS',
        nightVision: '100m (IR)',
        wdr: '140dB',
        ip: '67',
        fov: 68,
        lens: '4.3-86mm (varifocal)',
        type: 'PTZ',
        features: ['PTZ', 'WDR', 'H.265', 'Self-Learning']
    },
    
    // Mobotix
    'Mobotix M16': {
        brand: 'Mobotix',
        resolution: '6MP (3072x2048)',
        sensor: '1/1.8" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 95,
        lens: '2.8mm',
        type: 'Domo',
        features: ['H.265', 'WDR', 'Edge Storage']
    },
    'Mobotix Q24': {
        brand: 'Mobotix',
        resolution: '4MP (2688x1520)',
        sensor: '1/2.8" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 85,
        lens: '4mm',
        type: 'Domo',
        features: ['H.265', 'WDR', 'Edge Storage']
    },
    'Mobotix S16': {
        brand: 'Mobotix',
        resolution: '6MP (3072x2048)',
        sensor: '1/1.8" CMOS',
        nightVision: '40m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 90,
        lens: '3.6mm',
        type: 'Bala',
        features: ['H.265', 'WDR', 'Edge Storage']
    },
    'Mobotix M26': {
        brand: 'Mobotix',
        resolution: '8MP (3840x2160)',
        sensor: '1/1.8" CMOS',
        nightVision: '30m (IR)',
        wdr: '130dB',
        ip: '66',
        fov: 100,
        lens: '2.8mm',
        type: 'Domo',
        features: ['H.265', 'WDR', 'Edge Storage']
    },
    
    // Arecont Vision
    'Arecont AV12116DN': {
        brand: 'Arecont Vision',
        resolution: '12MP (4000x3000)',
        sensor: '1/2.3" CMOS',
        nightVision: '30m (IR)',
        wdr: '100dB',
        ip: '66',
        fov: 82,
        lens: '3.6mm',
        type: 'Bala',
        features: ['H.264', 'WDR']
    },
    'Arecont AV3416DN': {
        brand: 'Arecont Vision',
        resolution: '4MP (2688x1520)',
        sensor: '1/2.8" CMOS',
        nightVision: '30m (IR)',
        wdr: '100dB',
        ip: '66',
        fov: 95,
        lens: '2.8mm',
        type: 'Domo',
        features: ['H.264', 'WDR']
    },
    'Arecont AV4955DN': {
        brand: 'Arecont Vision',
        resolution: '5MP (2560x1920)',
        sensor: '1/2.8" CMOS',
        nightVision: '30m (IR)',
        wdr: '100dB',
        ip: '66',
        fov: 110,
        lens: '2.8mm',
        type: 'Bala',
        features: ['H.264', 'WDR']
    },
    
    // Panasonic
    'Panasonic WV-S2131L': {
        brand: 'Panasonic',
        resolution: '2MP (1920x1080)',
        sensor: '1/2.8" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 92,
        lens: '2.8mm',
        type: 'Domo',
        features: ['H.265', 'WDR', 'AI']
    },
    'Panasonic WV-S2231L': {
        brand: 'Panasonic',
        resolution: '2MP (1920x1080)',
        sensor: '1/2.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 87,
        lens: '3.6mm',
        type: 'Bala',
        features: ['H.265', 'WDR', 'AI']
    },
    'Panasonic WV-SW395': {
        brand: 'Panasonic',
        resolution: '4MP (2688x1520)',
        sensor: '1/1.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '140dB',
        ip: '66',
        fov: 95,
        lens: '2.8-10mm (varifocal)',
        type: 'Bala',
        features: ['Varifocal', 'WDR', 'H.265', 'AI']
    },
    'Panasonic WV-SFV631L': {
        brand: 'Panasonic',
        resolution: '4MP (2688x1520)',
        sensor: '1/1.8" CMOS',
        nightVision: '30m (IR)',
        wdr: '140dB',
        ip: '66',
        fov: 100,
        lens: '2.8mm',
        type: 'Domo',
        features: ['WDR', 'H.265', 'AI', 'Fisheye']
    },
};

// ============================================================
// FUNCIÓN PARA ACTUALIZAR ESPECIFICACIONES
// ============================================================
function updateCameraSpecs(modelKey) {
    const specs = cameraCatalog[modelKey];
    if (!specs) return;
    
    document.getElementById('specResolution').textContent = specs.resolution;
    document.getElementById('specSensor').textContent = specs.sensor;
    document.getElementById('specNight').textContent = specs.nightVision;
    document.getElementById('specWDR').textContent = specs.wdr;
    document.getElementById('specIP').textContent = specs.ip;
    
    // Actualizar FOV según el modelo
    if (specs.fov) {
        document.getElementById('propFov').value = specs.fov;
        document.getElementById('propFovVal').textContent = specs.fov + '°';
        if (appState.selectedCamera) {
            appState.selectedCamera.fov = specs.fov;
        }
    }
}

// ============================================================
// MODIFICAR LA FUNCIÓN loadProperties
// ============================================================
// Reemplazar la función loadProperties existente con esta:
function loadProperties(cam) {
    document.getElementById('propName').value = cam.name || '';
    document.getElementById('propModel').value = cam.model || 'Hikvision DS-2CD1321-I';
    document.getElementById('propPosX').textContent = pxToMeters(cam.x).toFixed(2);
    document.getElementById('propPosY').textContent = pxToMeters(cam.y).toFixed(2);
    document.getElementById('propRotation').textContent = `${Math.round(cam.rotation)}°`;
    document.getElementById('propDistance').value = cam.distance;
    document.getElementById('propDistanceVal').textContent = cam.distance.toFixed(1);
    document.getElementById('propFov').value = cam.fov;
    document.getElementById('propFovVal').textContent = Math.round(cam.fov) + '°';
    drawDial(cam.rotation);
    
    // Actualizar especificaciones
    updateCameraSpecs(cam.model);
}

// ============================================================
// MODIFICAR LA FUNCIÓN applyProperties
// ============================================================
// Reemplazar la función applyProperties existente con esta:
function applyProperties() {
    const cam = appState.selectedCamera;
    if (!cam) return;
    
    const oldModel = cam.model;
    cam.name = document.getElementById('propName').value.trim() || cam.id;
    cam.model = document.getElementById('propModel').value;
    cam.distance = parseFloat(document.getElementById('propDistance').value);
    cam.fov = parseFloat(document.getElementById('propFov').value);
    cam.rotation = parseFloat(document.getElementById('propRotation').textContent) || 0;
    
    // Si el modelo cambió, actualizar FOV y especificaciones
    if (oldModel !== cam.model) {
        const specs = cameraCatalog[cam.model];
        if (specs && specs.fov) {
            cam.fov = specs.fov;
            document.getElementById('propFov').value = specs.fov;
            document.getElementById('propFovVal').textContent = specs.fov + '°';
        }
        updateCameraSpecs(cam.model);
    }
    
    activeCameraDisplay.textContent = cam.name;
    updateUI();
    saveState();
}

// ============================================================
// MODIFICAR EL EVENTO DEL SELECT DE MODELO
// ============================================================
// Reemplazar el evento existente de propModel:
document.getElementById('propModel').addEventListener('change', function() {
    const model = this.value;
    const specs = cameraCatalog[model];
    if (specs && specs.fov) {
        document.getElementById('propFov').value = specs.fov;
        document.getElementById('propFovVal').textContent = specs.fov + '°';
        if (appState.selectedCamera) {
            appState.selectedCamera.fov = specs.fov;
            appState.selectedCamera.model = model;
            drawScene();
        }
    }
    updateCameraSpecs(model);
});

// ============================================================
// MODIFICAR renderCameraList PARA MOSTRAR MARCA
// ============================================================
// Reemplazar la función renderCameraList existente:
function renderCameraList() {
    const search = document.getElementById('cameraSearch').value.toLowerCase();
    const filtered = appState.cameras.filter(c => 
        (c.name || c.id).toLowerCase().includes(search) ||
        (c.model || '').toLowerCase().includes(search)
    );

    cameraList.innerHTML = '';
    filtered.forEach(cam => {
        const card = document.createElement('div');
        card.className = `camera-card${cam.id === appState.selectedCameraId ? ' selected' : ''}`;

        const thumb = document.createElement('div');
        thumb.className = 'thumb';
        const tc = document.createElement('canvas');
        tc.width = 42; tc.height = 42;
        renderThumb(tc, cam);
        thumb.appendChild(tc);
        card.appendChild(thumb);

        const info = document.createElement('div');
        info.className = 'info';
        
        const nameSpan = document.createElement('div');
        nameSpan.className = 'name';
        const specs = cameraCatalog[cam.model];
        const brand = specs ? specs.brand : '';
        nameSpan.textContent = cam.name || cam.id;
        if (brand) {
            const brandSpan = document.createElement('span');
            brandSpan.className = 'resolution-badge';
            brandSpan.textContent = brand;
            nameSpan.appendChild(brandSpan);
        }
        info.appendChild(nameSpan);
        
        const modelSpan = document.createElement('div');
        modelSpan.className = 'model';
        const modelName = cam.model || 'Sin modelo';
        const res = specs ? specs.resolution.split(' ')[0] : '';
        modelSpan.innerHTML = `${modelName} ${res ? '• ' + res : ''}`;
        info.appendChild(modelSpan);
        
        card.appendChild(info);

        const status = document.createElement('div');
        status.className = `status${cam.active !== false ? ' active' : ' inactive'}`;
        card.appendChild(status);

        const del = document.createElement('button');
        del.className = 'delete-btn';
        del.textContent = '×';
        del.addEventListener('click', e => { e.stopPropagation(); deleteCamera(cam.id); });
        card.appendChild(del);

        card.addEventListener('click', () => selectCamera(cam.id));
        cameraList.appendChild(card);
    });

    cameraCount.textContent = appState.cameras.length;
    totalCameras.textContent = appState.cameras.length;
}

// ============================================================
// FUNCIÓN PARA OBTENER ESPECIFICACIONES DE UNA CÁMARA
// ============================================================
function getCameraSpecs(modelKey) {
    return cameraCatalog[modelKey] || null;
}

// ============================================================
// MODIFICAR LA FUNCIÓN loadExample PARA INCLUIR MARCAS
// ============================================================
// Reemplazar la función loadExample existente:
function loadExample() {
    if ((appState.cameras.length > 0 || appState.image) && !confirm('¿Reemplazar el proyecto actual?')) return;

    appState.image = null;
    appState.imageData = null;
    appState.scale = 0.023;
    appState.scaleCalibrated = true;
    appState.projectName = 'Ejemplo de oficina';

    appState.cameras = [
        { id: 'cam-001', name: 'Entrada Principal', x: 150, y: 200, rotation: 45, distance: 6, fov: 110, model: 'Hikvision DS-2CD2087G2-L', active: true },
        { id: 'cam-002', name: 'Recepción', x: 300, y: 150, rotation: 90, distance: 4, fov: 87, model: 'Dahua IPC-HDW1230S', active: true },
        { id: 'cam-003', name: 'Parking Exterior', x: 500, y: 350, rotation: 135, distance: 12, fov: 92, model: 'Axis P1455-LE', active: true },
        { id: 'cam-004', name: 'Sala Principal', x: 350, y: 400, rotation: 180, distance: 8, fov: 87, model: 'Hanwha QNV-7030R', active: true },
        { id: 'cam-005', name: 'Oficinas', x: 600, y: 200, rotation: 225, distance: 5, fov: 85, model: 'Sony SNC-VB770', active: true },
        { id: 'cam-006', name: 'Caja Fuerte', x: 700, y: 450, rotation: 270, distance: 10, fov: 30, model: 'Bosch MIC IP starlight 7100i', active: true },
        { id: 'cam-007', name: 'Ascensor', x: 100, y: 450, rotation: 315, distance: 5, fov: 100, model: 'Mobotix M26', active: true },
        { id: 'cam-008', name: 'Salida Emergencia', x: 750, y: 100, rotation: 0, distance: 8, fov: 30, model: 'Avigilon H5A-PTZ', active: true },
    ];
    appState.nextCameraId = 9;

    appState.areas = [
        { points: [{x:120,y:120},{x:280,y:120},{x:280,y:280},{x:120,y:280}], label: 'Entrada' },
        { points: [{x:300,y:100},{x:480,y:100},{x:480,y:250},{x:300,y:250}], label: 'Sala principal' },
        { points: [{x:500,y:280},{x:700,y:280},{x:700,y:500},{x:500,y:500}], label: 'Parking' },
        { points: [{x:50,y:400},{x:180,y:400},{x:180,y:550},{x:50,y:550}], label: 'Ascensor' },
        { points: [{x:650,y:50},{x:780,y:50},{x:780,y:180},{x:650,y:180}], label: 'Salida' },
        { points: [{x:580,y:120},{x:680,y:120},{x:680,y:220},{x:580,y:220}], label: 'Oficinas' },
        { points: [{x:680,y:420},{x:760,y:420},{x:760,y:500},{x:680,y:500}], label: 'Caja fuerte' },
        { points: [{x:200,y:300},{x:340,y:300},{x:340,y:380},{x:200,y:380}], label: 'Recepción' },
    ];

    appState.selectedCameraId = appState.cameras[0].id;
    appState.selectedCamera = appState.cameras[0];
    resizeCanvas();
    updateUI();
    selectCamera(appState.cameras[0].id);
    saveState();
    alert('Ejemplo cargado con cámaras de diferentes marcas y modelos.');
}
