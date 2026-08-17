// ============================================================
// WijTech CCTV Simulator - Aplicación Completa
// ============================================================

// ============================================================
// CATÁLOGO DE CÁMARAS - ESPECIFICACIONES TÉCNICAS
// ============================================================
const cameraCatalog = {
    // ===== HIKVISION =====
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
        lens: '2.7-13.5mm',
        type: 'Bala',
        features: ['Varifocal', 'AcuSense', 'H.265+']
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
    'Hikvision DS-2CD2T85G1-I': {
        brand: 'Hikvision',
        resolution: '8MP (3840x2160)',
        sensor: '1/2.5" CMOS',
        nightVision: '60m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 92,
        lens: '2.8mm',
        type: 'Bala',
        features: ['WDR', 'H.265+', 'DarkFighter']
    },
    'Hikvision DS-2DE4A425IW-DE': {
        brand: 'Hikvision',
        resolution: '4MP (2688x1520)',
        sensor: '1/2.8" CMOS',
        nightVision: '100m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 75,
        lens: '4.8-120mm',
        type: 'PTZ',
        features: ['PTZ', 'WDR', 'H.265+', '25x Zoom']
    },

    // ===== DAHUA =====
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
        lens: '2.7-12mm',
        type: 'Bala',
        features: ['Varifocal', 'Starlight+', 'WDR', 'H.265']
    },
    'Dahua N84CL62-Z': {
        brand: 'Dahua',
        resolution: '8MP (3840x2160)',
        sensor: '1/1.8" CMOS',
        nightVision: '100m (IR)',
        wdr: '140dB',
        ip: '67',
        fov: 80,
        lens: '4.8-120mm',
        type: 'PTZ',
        features: ['PTZ', 'Starlight', 'WDR', '25x Zoom']
    },

    // ===== AXIS =====
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
        lens: '4.3-9.8mm',
        type: 'PTZ',
        features: ['Lightfinder 2.0', 'Forensic WDR', 'Zipstream', 'PTZ']
    },
    'Axis P3265-LV': {
        brand: 'Axis',
        resolution: '6MP (3072x2048)',
        sensor: '1/2.8" CMOS',
        nightVision: '20m (Light)',
        wdr: '120dB',
        ip: '66',
        fov: 105,
        lens: '2.8mm',
        type: 'Domo',
        features: ['Lightfinder 2.0', 'Forensic WDR', 'Zipstream']
    },

    // ===== BOSCH =====
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
        lens: '4.8-76mm',
        type: 'PTZ',
        features: ['PTZ', 'Starlight', 'WDR', 'H.265', 'IVA']
    },

    // ===== SONY =====
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
        lens: '3.1-8.9mm',
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

    // ===== HANWHA (Samsung) =====
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
        lens: '7-21mm',
        type: 'Bala',
        features: ['Varifocal', 'WDR', 'H.265']
    },

    // ===== VIVOTEK =====
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
        lens: '2.8-12mm',
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

    // ===== AVIGILON =====
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
        lens: '4.3-86mm',
        type: 'PTZ',
        features: ['PTZ', 'WDR', 'H.265', 'Self-Learning']
    },

    // ===== MOBOTIX =====
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

    // ===== ARECONT VISION =====
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

    // ===== PANASONIC =====
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
        lens: '2.8-10mm',
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

    // ===== MILESTONE =====
    'Milestone M501': {
        brand: 'Milestone',
        resolution: '5MP (2592x1944)',
        sensor: '1/2.8" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '66',
        fov: 88,
        lens: '3.6mm',
        type: 'Domo',
        features: ['H.265', 'WDR', 'Edge Storage']
    },
    'Milestone M702': {
        brand: 'Milestone',
        resolution: '8MP (3840x2160)',
        sensor: '1/1.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '140dB',
        ip: '67',
        fov: 105,
        lens: '2.8mm',
        type: 'Bala',
        features: ['H.265', 'WDR', 'Edge Storage']
    },

    // ===== UNIVIEW =====
    'Uniview IPC3232LR3': {
        brand: 'Uniview',
        resolution: '2MP (1920x1080)',
        sensor: '1/2.8" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 85,
        lens: '3.6mm',
        type: 'Bala',
        features: ['WDR', 'H.265', 'Smart IR']
    },
    'Uniview IPC3614SR3': {
        brand: 'Uniview',
        resolution: '4MP (2688x1520)',
        sensor: '1/2.7" CMOS',
        nightVision: '50m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 92,
        lens: '2.8mm',
        type: 'Bala',
        features: ['WDR', 'H.265', 'Smart IR']
    },
    'Uniview IPC6833SR-X': {
        brand: 'Uniview',
        resolution: '8MP (3840x2160)',
        sensor: '1/1.8" CMOS',
        nightVision: '50m (IR)',
        wdr: '140dB',
        ip: '67',
        fov: 100,
        lens: '2.8mm',
        type: 'Bala',
        features: ['WDR', 'H.265', 'Smart IR']
    },

    // ===== GENETEC =====
    'Genetec GSC-200': {
        brand: 'Genetec',
        resolution: '2MP (1920x1080)',
        sensor: '1/2.8" CMOS',
        nightVision: '30m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 82,
        lens: '3.6mm',
        type: 'Domo',
        features: ['H.265', 'WDR', 'Security Center']
    },
    'Genetec GSC-500': {
        brand: 'Genetec',
        resolution: '5MP (2592x1944)',
        sensor: '1/2.8" CMOS',
        nightVision: '40m (IR)',
        wdr: '120dB',
        ip: '67',
        fov: 95,
        lens: '2.8mm',
        type: 'Bala',
        features: ['H.265', 'WDR', 'Security Center']
    }
};

// ============================================================
// ESTADO
// ============================================================
const appState = {
    image: null,
    imageData: null,
    scale: 0,
    scaleCalibrated: false,
    cameras: [],
    selectedCameraId: null,
    areas: [],
    isMeasuring: false,
    measurePoints: [],
    isSimulating: false,
    isAddingCamera: false,
    isCalibrating: false,
    calibPoints: [],
    dragTarget: null,
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
    simulationInterval: null,
    projectName: 'Proyecto sin nombre',
    defaultModel: 'Hikvision DS-2CD1321-I'
};

// ============================================================
// DOM REFERENCIAS
// ============================================================
const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');
const cameraList = document.getElementById('cameraList');
const propertiesPanel = document.getElementById('properties-panel');
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
const dialCanvas = document.getElementById('dialCanvas');
const dialCtx = dialCanvas.getContext('2d');

// ============================================================
// UTILIDADES
// ============================================================
function pxToMeters(px) { return px * appState.scale; }
function metersToPx(m) { return appState.scale > 0 ? m / appState.scale : 0; }

function calculateDistance(px1, py1, px2, py2) {
    const dx = px2 - px1, dy = py2 - py1;
    return pxToMeters(Math.sqrt(dx * dx + dy * dy));
}

function generateId() { return 'cam-' + String(appState.nextCameraId++).padStart(3, '0'); }
function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
function degToRad(deg) { return deg * Math.PI / 180; }
function radToDeg(rad) { return rad * 180 / Math.PI; }
function normalizeAngle(deg) { deg = deg % 360; if (deg < 0) deg += 360; return deg; }

function getCanvasCoords(e) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: (e.clientX - rect.left) * (canvas.width / rect.width),
        y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
}

function getImageCoords(cx, cy) {
    return {
        x: (cx - appState.imageX) / appState.imageScale,
        y: (cy - appState.imageY) / appState.imageScale,
    };
}

function getCanvasCoordsFromImage(ix, iy) {
    return {
        x: ix * appState.imageScale + appState.imageX,
        y: iy * appState.imageScale + appState.imageY,
    };
}

function isOnImage(cx, cy) {
    return cx >= appState.imageX && cx <= appState.imageX + appState.imageWidth &&
           cy >= appState.imageY && cy <= appState.imageY + appState.imageHeight;
}

function getCameraSpecs(modelKey) {
    return cameraCatalog[modelKey] || null;
}

// ============================================================
// ACTUALIZAR ESPECIFICACIONES
// ============================================================
function updateCameraSpecs(modelKey) {
    const specs = cameraCatalog[modelKey];
    if (!specs) return;
    
    document.getElementById('specResolution').textContent = specs.resolution;
    document.getElementById('specSensor').textContent = specs.sensor;
    document.getElementById('specNight').textContent = specs.nightVision;
    document.getElementById('specWDR').textContent = specs.wdr;
    document.getElementById('specIP').textContent = specs.ip;
    
    if (specs.fov) {
        document.getElementById('propFov').value = specs.fov;
        document.getElementById('propFovVal').textContent = specs.fov + '°';
        if (appState.selectedCamera) {
            appState.selectedCamera.fov = specs.fov;
        }
    }
}

// ============================================================
// DIBUJO
// ============================================================
function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0a0e17';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (appState.image) {
        ctx.drawImage(appState.image, appState.imageX, appState.imageY, appState.imageWidth, appState.imageHeight);
    }

    drawAreas();
    drawMeasurements();

    const baseSize = Math.min(appState.imageWidth || canvas.width, appState.imageHeight || canvas.height);
    const camScale = Math.max(0.5, Math.min(2.0, baseSize / 500));
    drawCameras(camScale);
    drawCalibration();
}

function drawAreas() {
    appState.areas.forEach(area => {
        const pts = area.points;
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
        ctx.closePath();
        ctx.fillStyle = 'rgba(0, 153, 255, 0.07)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(0, 153, 255, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (area.label) {
            const cx = pts.reduce((s, p) => s + p.x, 0) / pts.length;
            const cy = pts.reduce((s, p) => s + p.y, 0) / pts.length;
            ctx.fillStyle = 'rgba(0, 153, 255, 0.7)';
            ctx.font = '13px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(area.label, cx, cy);
            if (appState.scaleCalibrated && pts.length >= 4) {
                const w = calculateDistance(pts[0].x, pts[0].y, pts[1].x, pts[1].y);
                const h = calculateDistance(pts[1].x, pts[1].y, pts[2].x, pts[2].y);
                ctx.fillStyle = 'rgba(0, 153, 255, 0.4)';
                ctx.font = '11px Inter, sans-serif';
                ctx.fillText(`${w.toFixed(2)}m × ${h.toFixed(2)}m`, cx, cy + 20);
            }
        }
    });
}

function drawMeasurements() {
    if (appState.measurePoints.length < 2) return;
    const pts = appState.measurePoints;
    ctx.fillStyle = '#00d4a0';
    pts.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();
        if (i > 0) {
            ctx.beginPath();
            ctx.moveTo(pts[i-1].x, pts[i-1].y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = '#00d4a0';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([4, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
            const dist = calculateDistance(pts[i-1].x, pts[i-1].y, p.x, p.y);
            const mx = (pts[i-1].x + p.x) / 2, my = (pts[i-1].y + p.y) / 2;
            ctx.fillStyle = '#00d4a0';
            ctx.font = '13px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText(`${dist.toFixed(2)}m`, mx, my - 6);
        }
    });
}

function drawCameras(scale) {
    appState.cameras.forEach(cam => {
        const pos = getCanvasCoordsFromImage(cam.x, cam.y);
        drawCamera(cam, pos, cam.id === appState.selectedCameraId, scale);
    });
}

function drawCamera(cam, pos, selected, scale) {
    const radius = Math.max(12, Math.min(28, 18 * scale));
    const distPx = metersToPx(cam.distance) * scale;
    const fovRad = degToRad(cam.fov);
    const angleRad = degToRad(cam.rotation);

    // Cono FOV
    ctx.save();
    ctx.translate(pos.x, pos.y);
    ctx.rotate(angleRad);
    ctx.scale(scale, scale);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, distPx / scale, -fovRad/2, fovRad/2);
    ctx.closePath();
    ctx.fillStyle = cam.active !== false ? 'rgba(0, 212, 160, 0.12)' : 'rgba(255, 71, 87, 0.08)';
    ctx.fill();
    ctx.strokeStyle = cam.active !== false ? 'rgba(0, 212, 160, 0.4)' : 'rgba(255, 71, 87, 0.3)';
    ctx.lineWidth = 1.5 / scale;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(distPx / scale, 0);
    ctx.strokeStyle = cam.active !== false ? 'rgba(0, 212, 160, 0.25)' : 'rgba(255, 71, 87, 0.2)';
    ctx.lineWidth = 1 / scale;
    ctx.stroke();
    ctx.restore();

    // Cuerpo de la cámara
    ctx.save();
    ctx.translate(pos.x, pos.y);
    if (selected) { ctx.shadowColor = '#0099ff'; ctx.shadowBlur = 25; }

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fillStyle = selected ? 'rgba(0, 153, 255, 0.18)' : 'rgba(0, 153, 255, 0.06)';
    ctx.fill();
    
    const specs = getCameraSpecs(cam.model);
    const brandColor = specs ? getBrandColor(specs.brand) : '#00d4a0';
    ctx.strokeStyle = selected ? '#0099ff' : (cam.active !== false ? brandColor : '#ff4757');
    ctx.lineWidth = selected ? 2.5 : 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.35, 0, Math.PI * 2);
    ctx.fillStyle = cam.active !== false ? brandColor : '#ff4757';
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.beginPath();
    ctx.moveTo(0, -radius + 4);
    ctx.lineTo(-5, -radius + 12);
    ctx.lineTo(5, -radius + 12);
    ctx.closePath();
    ctx.fillStyle = cam.active !== false ? brandColor : '#ff4757';
    ctx.fill();
    ctx.restore();

    // Etiqueta
    ctx.fillStyle = selected ? '#0099ff' : 'rgba(232, 237, 245, 0.7)';
    ctx.font = selected ? 'bold 13px Inter, sans-serif' : '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    const label = cam.name || cam.id;
    ctx.fillText(label, pos.x, pos.y - radius - 6);

    if (selected && appState.scaleCalibrated) {
        ctx.fillStyle = '#8899bb';
        ctx.font = '11px Inter, sans-serif';
        ctx.textBaseline = 'top';
        ctx.fillText(`${cam.distance.toFixed(1)}m`, pos.x + radius + 14, pos.y - 6);
    }
}

function getBrandColor(brand) {
    const colors = {
        'Hikvision': '#00a8ff',
        'Dahua': '#ff6b6b',
        'Axis': '#ffd93d',
        'Bosch': '#6bcb77',
        'Sony': '#ff6b6b',
        'Hanwha': '#4d96ff',
        'Vivotek': '#a66cff',
        'Avigilon': '#ff9f43',
        'Mobotix': '#00d2d3',
        'Arecont Vision': '#ff6b6b',
        'Panasonic': '#54a0ff',
        'Milestone': '#5f27cd',
        'Uniview': '#1dd1a1',
        'Genetec': '#00a8ff'
    };
    return colors[brand] || '#00d4a0';
}

function drawCalibration() {
    if (appState.isCalibrating && appState.calibPoints.length === 2) {
        const p1 = appState.calibPoints[0], p2 = appState.calibPoints[1];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = '#ff9f43';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#ff9f43';
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p2.x, p2.y, 5, 0, Math.PI * 2);
        ctx.fill();

        const distPx = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
        ctx.fillStyle = '#ff9f43';
        ctx.font = '14px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${distPx.toFixed(1)} px`, (p1.x + p2.x)/2, (p1.y + p2.y)/2 - 12);
    }
}

// ============================================================
// OPERACIONES CON CÁMARAS
// ============================================================
function addCamera(x, y) {
    if (!appState.image) { alert('Carga un plano primero.'); return null; }
    const imgCoords = getImageCoords(x, y);
    const cam = {
        id: generateId(),
        name: `Cámara ${appState.nextCameraId - 1}`,
        x: imgCoords.x, y: imgCoords.y,
        rotation: 0, distance: 4.0, fov: 81,
        model: appState.defaultModel,
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
    if (appState.selectedCameraId) deleteCamera(appState.selectedCameraId);
    else alert('Selecciona una cámara para eliminar.');
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
        camEditNumber.textContent = '#' + (appState.cameras.indexOf(cam) + 1);
        activeCameraDisplay.textContent = cam.name || cam.id;
    } else {
        propertiesPanel.classList.add('hidden');
        activeCameraDisplay.textContent = 'Ninguna';
    }
    updateUI();
}

function loadProperties(cam) {
    document.getElementById('propName').value = cam.name || '';
    document.getElementById('propModel').value = cam.model || appState.defaultModel;
    document.getElementById('propPosX').textContent = pxToMeters(cam.x).toFixed(2);
    document.getElementById('propPosY').textContent = pxToMeters(cam.y).toFixed(2);
    document.getElementById('propRotation').textContent = `${Math.round(cam.rotation)}°`;
    document.getElementById('propDistance').value = cam.distance;
    document.getElementById('propDistanceVal').textContent = cam.distance.toFixed(1);
    document.getElementById('propFov').value = cam.fov;
    document.getElementById('propFovVal').textContent = Math.round(cam.fov) + '°';
    drawDial(cam.rotation);
    updateCameraSpecs(cam.model);
}

function applyProperties() {
    const cam = appState.selectedCamera;
    if (!cam) return;
    
    const oldModel = cam.model;
    cam.name = document.getElementById('propName').value.trim() || cam.id;
    cam.model = document.getElementById('propModel').value;
    cam.distance = parseFloat(document.getElementById('propDistance').value);
    cam.fov = parseFloat(document.getElementById('propFov').value);
    cam.rotation = parseFloat(document.getElementById('propRotation').textContent) || 0;
    
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
// DIAL
// ============================================================
function drawDial(angle) {
    const w = dialCanvas.width, h = dialCanvas.height;
    const cx = w/2, cy = h/2, radius = 50;

    dialCtx.clearRect(0, 0, w, h);
    dialCtx.beginPath();
    dialCtx.arc(cx, cy, radius, 0, Math.PI * 2);
    const grad = dialCtx.createRadialGradient(cx, cy, radius-4, cx, cy, radius);
    grad.addColorStop(0, '#1a2538'); grad.addColorStop(1, '#0a0e17');
    dialCtx.fillStyle = grad;
    dialCtx.fill();
    dialCtx.strokeStyle = '#1e2d44';
    dialCtx.lineWidth = 2;
    dialCtx.stroke();

    for (let i = 0; i < 36; i++) {
        const a = degToRad(i * 10 - 90);
        const isMain = i % 3 === 0;
        const len = isMain ? 8 : 4;
        const r1 = radius - 10, r2 = radius - 10 - len;
        dialCtx.beginPath();
        dialCtx.moveTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
        dialCtx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2);
        dialCtx.strokeStyle = isMain ? '#8899bb' : '#2a3d5a';
        dialCtx.lineWidth = isMain ? 2 : 1;
        dialCtx.stroke();
        if (isMain) {
            dialCtx.fillStyle = '#556688';
            dialCtx.font = '8px Inter, sans-serif';
            dialCtx.textAlign = 'center';
            dialCtx.textBaseline = 'bottom';
            dialCtx.fillText(i * 10, cx + Math.cos(a) * (radius - 16), cy + Math.sin(a) * (radius - 16) + 8);
        }
    }

    const angleRad = degToRad(angle - 90);
    dialCtx.beginPath();
    dialCtx.moveTo(cx, cy);
    dialCtx.lineTo(cx + Math.cos(angleRad) * (radius - 6), cy + Math.sin(angleRad) * (radius - 6));
    dialCtx.strokeStyle = '#0099ff';
    dialCtx.lineWidth = 3;
    dialCtx.stroke();

    dialCtx.beginPath();
    dialCtx.arc(cx, cy, 4, 0, Math.PI * 2);
    dialCtx.fillStyle = '#0099ff';
    dialCtx.fill();
}

// ============================================================
// LISTA DE CÁMARAS
// ============================================================
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

function renderThumb(canvas, cam) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height, cx = w/2, cy = h/2;
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
    ctx.arc(0, 0, dist, -fovRad/2, fovRad/2);
    ctx.closePath();
    
    const specs = getCameraSpecs(cam.model);
    const brandColor = specs ? getBrandColor(specs.brand) : '#00d4a0';
    ctx.fillStyle = brandColor + '33';
    ctx.fill();
    ctx.strokeStyle = brandColor + '66';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();

    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fillStyle = cam.active !== false ? brandColor : '#ff4757';
    ctx.fill();
}

// ============================================================
// CALIBRACIÓN
// ============================================================
function startCalibration() {
    if (!appState.image) { alert('Carga un plano primero.'); return; }
    if (appState.cameras.length > 0 && !confirm('La calibración se aplicará a todas las cámaras. ¿Continuar?')) return;
    appState.isCalibrating = true;
    appState.calibPoints = [];
    modeDisplay.textContent = 'Calibración';
    canvas.style.cursor = 'crosshair';
    updateStatus();
}

function finishCalibration(px1, py1, px2, py2) {
    const distPx = Math.sqrt(Math.pow(px2 - px1, 2) + Math.pow(py2 - py1, 2));
    if (distPx < 5) { alert('La línea es demasiado corta.'); return; }

    calibPixels.textContent = distPx.toFixed(1);
    calibrationOverlay.classList.remove('hidden');
    calibInput.value = '';
    calibInput.focus();

    const confirmCalib = () => {
        const meters = parseFloat(calibInput.value);
        if (!meters || meters <= 0) { alert('Ingresa un valor válido.'); return; }
        appState.scale = meters / distPx;
        appState.scaleCalibrated = true;
        calibrationOverlay.classList.add('hidden');
        appState.isCalibrating = false;
        canvas.style.cursor = 'default';
        modeDisplay.textContent = 'Selección';
        updateStatus();
        updateUI();
        saveState();
        alert(`Calibración completada! Escala: ${appState.scale.toFixed(4)} m/px`);
    };

    calibInput.onkeydown = e => {
        if (e.key === 'Enter') confirmCalib();
        if (e.key === 'Escape') cancelCalib();
    };
    document.getElementById('calibConfirm').onclick = confirmCalib;
    document.getElementById('calibCancel').onclick = cancelCalib;

    function cancelCalib() {
        calibrationOverlay.classList.add('hidden');
        appState.isCalibrating = false;
        canvas.style.cursor = 'default';
        modeDisplay.textContent = 'Selección';
    }
}

// ============================================================
// EVENTOS DEL CANVAS
// ============================================================
function setupCanvasEvents() {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('mouseleave', () => tooltip.classList.add('hidden'));

    canvas.addEventListener('dragover', e => { e.preventDefault(); dropOverlay.classList.remove('hidden'); });
    canvas.addEventListener('dragleave', e => { e.preventDefault(); dropOverlay.classList.add('hidden'); });
    canvas.addEventListener('drop', e => {
        e.preventDefault();
        dropOverlay.classList.add('hidden');
        if (e.dataTransfer.files.length > 0 && e.dataTransfer.files[0].type.startsWith('image/')) {
            loadImageFile(e.dataTransfer.files[0]);
        }
    });

    window.addEventListener('resize', resizeCanvas);
}

function onMouseMove(e) {
    const pos = getCanvasCoords(e);
    appState.mouseX = pos.x;
    appState.mouseY = pos.y;

    if (isOnImage(pos.x, pos.y) && appState.scaleCalibrated) {
        const img = getImageCoords(pos.x, pos.y);
        coordX.textContent = pxToMeters(img.x).toFixed(2);
        coordY.textContent = pxToMeters(img.y).toFixed(2);
    } else {
        coordX.textContent = '0.00';
        coordY.textContent = '0.00';
    }

    if (isOnImage(pos.x, pos.y) && appState.scaleCalibrated) {
        const img = getImageCoords(pos.x, pos.y);
        tooltip.textContent = `(${pxToMeters(img.x).toFixed(2)}m, ${pxToMeters(img.y).toFixed(2)}m)`;
        tooltip.style.left = (e.clientX + 14) + 'px';
        tooltip.style.top = (e.clientY - 10) + 'px';
        tooltip.classList.remove('hidden');
    } else {
        tooltip.classList.add('hidden');
    }

    if (appState.dragTarget) {
        const img = getImageCoords(pos.x, pos.y);
        appState.dragTarget.x = img.x;
        appState.dragTarget.y = img.y;
        if (appState.selectedCameraId === appState.dragTarget.id) {
            document.getElementById('propPosX').textContent = pxToMeters(img.x).toFixed(2);
            document.getElementById('propPosY').textContent = pxToMeters(img.y).toFixed(2);
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
        ctx.strokeStyle = '#ff9f43';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#ff9f43';
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 5, 0, Math.PI * 2);
        ctx.fill();
        return;
    }

    if (!appState.isAddingCamera && !appState.isCalibrating && !appState.isMeasuring) {
        canvas.style.cursor = getCameraAt(pos.x, pos.y) ? 'grab' : 'default';
    }
}

function onMouseDown(e) {
    const pos = getCanvasCoords(e);

    if (appState.isCalibrating) {
        if (!isOnImage(pos.x, pos.y)) return;
        appState.calibPoints.push({ x: pos.x, y: pos.y });
        if (appState.calibPoints.length === 2) {
            finishCalibration(appState.calibPoints[0].x, appState.calibPoints[0].y,
                             appState.calibPoints[1].x, appState.calibPoints[1].y);
        }
        drawScene();
        return;
    }

    if (appState.isMeasuring) {
        if (!isOnImage(pos.x, pos.y)) return;
        appState.measurePoints.push({ x: pos.x, y: pos.y });
        drawScene();
        modeDisplay.textContent = appState.measurePoints.length >= 2 ? 'Medición (clic para continuar)' : 'Medición';
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

function onMouseUp(e) {
    if (appState.dragTarget) {
        appState.dragTarget = null;
        canvas.style.cursor = 'default';
        saveState();
        drawScene();
    }
}

function getCameraAt(cx, cy) {
    const baseSize = Math.min(appState.imageWidth || canvas.width, appState.imageHeight || canvas.height);
    const scale = Math.max(0.5, Math.min(2.0, baseSize / 500));
    const hitRadius = Math.max(14, 22 * scale);

    for (let i = appState.cameras.length - 1; i >= 0; i--) {
        const cam = appState.cameras[i];
        const pos = getCanvasCoordsFromImage(cam.x, cam.y);
        const dx = cx - pos.x, dy = cy - pos.y;
        if (dx*dx + dy*dy < hitRadius * hitRadius) return cam;
    }
    return null;
}

// ============================================================
// CARGA DE IMÁGENES
// ============================================================
function loadImageFile(file) {
    const reader = new FileReader();
    reader.onload = e => {
        const img = new Image();
        img.onload = () => {
            appState.image = img;
            appState.imageData = e.target.result;
            resizeCanvas();
            if (!appState.scaleCalibrated) {
                setTimeout(() => {
                    if (confirm('¿Deseas calibrar la escala ahora?')) startCalibration();
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

    if (appState.image) {
        const aspect = appState.image.width / appState.image.height;
        let w = canvas.width * 0.9;
        let h = w / aspect;
        if (h > canvas.height * 0.9) { h = canvas.height * 0.9; w = h * aspect; }
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
// GUARDADO / CARGA
// ============================================================
function saveState() {
    try {
        localStorage.setItem('wijtech_simulator', JSON.stringify({
            image: appState.imageData,
            scale: appState.scale,
            scaleCalibrated: appState.scaleCalibrated,
            cameras: appState.cameras,
            areas: appState.areas,
            nextCameraId: appState.nextCameraId,
            projectName: appState.projectName,
        }));
        return true;
    } catch(e) { console.warn('Save error:', e); return false; }
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
                appState.nextCameraId = data.nextCameraId || 1;
                appState.projectName = data.projectName || 'Proyecto sin nombre';
                resizeCanvas();
                updateUI();
                if (appState.cameras.length > 0) selectCamera(appState.cameras[0].id);
            };
            img.src = data.image;
            return true;
        }
        return false;
    } catch(e) { console.warn('Load error:', e); return false; }
}

function saveProject() {
    if (!appState.image) { alert('No hay proyecto para guardar.'); return; }
    if (saveState()) alert('Proyecto guardado en localStorage.');
}

function exportProject() {
    if (!appState.image) { alert('No hay proyecto para exportar.'); return; }
    const data = {
        version: '1.0',
        projectName: appState.projectName || 'Proyecto sin nombre',
        exportedAt: new Date().toISOString(),
        image: appState.imageData,
        scale: appState.scale,
        scaleCalibrated: appState.scaleCalibrated,
        cameras: appState.cameras,
        areas: appState.areas,
        nextCameraId: appState.nextCameraId,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(appState.projectName || 'proyecto').replace(/\s+/g, '_')}.wijtech.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('Proyecto exportado correctamente.');
}

function importProject(file) {
    const reader = new FileReader();
    reader.onload = e => {
        try {
            const data = JSON.parse(e.target.result);
            if (!data.image) { alert('Archivo inválido.'); return; }
            const img = new Image();
            img.onload = () => {
                appState.image = img;
                appState.imageData = data.image;
                appState.scale = data.scale || 0;
                appState.scaleCalibrated = data.scaleCalibrated || false;
                appState.cameras = data.cameras || [];
                appState.areas = data.areas || [];
                appState.nextCameraId = data.nextCameraId || 1;
                appState.projectName = data.projectName || 'Proyecto importado';
                appState.selectedCameraId = null;
                appState.selectedCamera = null;
                propertiesPanel.classList.add('hidden');
                resizeCanvas();
                updateUI();
                if (appState.cameras.length > 0) selectCamera(appState.cameras[0].id);
                saveState();
                alert(`Proyecto "${appState.projectName}" cargado.`);
            };
            img.src = data.image;
        } catch(err) { alert('Error: ' + err.message); }
    };
    reader.readAsText(file);
}

function exportImage() {
    if (!appState.image) { alert('No hay imagen para exportar.'); return; }
    const link = document.createElement('a');
    link.download = `${(appState.projectName || 'simulacion').replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

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

// ============================================================
// SIMULACIÓN
// ============================================================
function toggleSimulation() {
    appState.isSimulating = !appState.isSimulating;
    const btn = document.getElementById('btnSimulate');

    if (appState.isSimulating) {
        if (appState.cameras.length === 0) {
            alert('No hay cámaras para simular.');
            appState.isSimulating = false;
            return;
        }
        btn.classList.add('active');
        btn.innerHTML = '⏹ Detener';
        document.body.classList.add('simulating');
        modeDisplay.textContent = 'Simulación';

        let flash = false;
        appState.simulationInterval = setInterval(() => {
            flash = !flash;
            appState.cameras.forEach((cam, i) => {
                if (i % 2 === 0) cam.active = flash;
                else cam.active = !flash;
                if (i % 3 === 0) cam.active = true;
            });
            drawScene();
            renderCameraList();
        }, 1000);
    } else {
        btn.classList.remove('active');
        btn.innerHTML = '▶ Simular';
        document.body.classList.remove('simulating');
        modeDisplay.textContent = 'Selección';
        if (appState.simulationInterval) {
            clearInterval(appState.simulationInterval);
            appState.simulationInterval = null;
        }
        appState.cameras.forEach(cam => cam.active = true);
        drawScene();
        renderCameraList();
    }
}

// ============================================================
// MEDICIÓN
// ============================================================
function toggleMeasureMode() {
    if (appState.isMeasuring) {
        appState.measurePoints = [];
        appState.isMeasuring = false;
        modeDisplay.textContent = 'Selección';
        canvas.style.cursor = 'default';
        document.getElementById('btnMeasure').classList.remove('active');
        drawScene();
    } else {
        appState.isMeasuring = true;
        modeDisplay.textContent = 'Medición';
        canvas.style.cursor = 'crosshair';
        document.getElementById('btnMeasure').classList.add('active');
        appState.measurePoints = [];
    }
}

// ============================================================
// ATAJOS DE TECLADO
// ============================================================
document.addEventListener('keydown', e => {
    if (e.key === 'Delete' || e.key === 'Backspace') {
        if (appState.selectedCameraId) deleteCamera(appState.selectedCameraId);
        e.preventDefault();
    }
    if (e.key === 'r' || e.key === 'R') {
        if (appState.selectedCamera) document.getElementById('propRotation').focus();
        e.preventDefault();
    }
    if (e.key === 'm' || e.key === 'M') {
        toggleMeasureMode();
        e.preventDefault();
    }
    if (e.key === 's' || e.key === 'S') {
        toggleSimulation();
        e.preventDefault();
    }
    if (e.key === 'c' || e.key === 'C') {
        clearAllCameras();
        e.preventDefault();
    }
    if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
        e.preventDefault();
    }
    if (e.key === 'h' || e.key === 'H') {
        showHelp();
        e.preventDefault();
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
            toggleMeasureMode();
        }
        e.preventDefault();
    }
});

// ============================================================
// PANTALLA COMPLETA
// ============================================================
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => alert('Error: ' + err.message));
    } else {
        document.exitFullscreen();
    }
}

// ============================================================
// AYUDA
// ============================================================
function showHelp() {
    alert(
        'WijTech CCTV Simulator\n' +
        '======================\n\n' +
        '📌 FUNCIONALIDADES:\n' +
        '• Carga un plano (JPG, PNG)\n' +
        '• Calibra la escala dibujando una línea\n' +
        '• Agrega cámaras con el botón Añadir\n' +
        '• Arrastra cámaras para reposicionarlas\n' +
        '• Ajusta rotación con el dial circular\n' +
        '• Ajusta alcance y FOV con sliders\n' +
        '• Mide distancias en metros (botón Medir)\n' +
        '• Simulación con parpadeo de cámaras\n' +
        '• Catálogo de +50 modelos de 14 marcas\n\n' +
        '⌨️ ATAJOS:\n' +
        '• Delete/Backspace: Eliminar cámara\n' +
        '• Escape: Cancelar acción\n' +
        '• R: Enfocar dial de rotación\n' +
        '• M: Activar/desactivar modo medir\n' +
        '• S: Iniciar/detener simulación\n' +
        '• C: Limpiar todas las cámaras\n' +
        '• F: Pantalla completa\n' +
        '• H: Mostrar ayuda\n\n' +
        '💾 GUARDADO:\n' +
        '• Guardar: Guarda en localStorage\n' +
        '• Exportar: Guarda como .wijtech.json\n' +
        '• Cargar: Carga un proyecto JSON'
    );
}

// ============================================================
// EVENTOS DEL DIAL
// ============================================================
function setupDialEvents() {
    let dragging = false;

    dialCanvas.addEventListener('mousedown', e => {
        if (!appState.selectedCamera) return;
        dragging = true;
        dialCanvas.style.cursor = 'grabbing';
        updateDial(e);
    });

    window.addEventListener('mousemove', e => {
        if (!dragging || !appState.selectedCamera) return;
        updateDial(e);
        drawScene();
    });

    window.addEventListener('mouseup', () => {
        if (dragging) {
            dragging = false;
            dialCanvas.style.cursor = 'grab';
            if (appState.selectedCamera) applyProperties();
        }
    });

    dialCanvas.addEventListener('touchstart', e => {
        e.preventDefault();
        if (!appState.selectedCamera) return;
        dragging = true;
        const t = e.touches[0];
        const rect = dialCanvas.getBoundingClientRect();
        updateDialTouch(t.clientX, t.clientY, rect);
    });

    dialCanvas.addEventListener('touchmove', e => {
        e.preventDefault();
        if (!dragging || !appState.selectedCamera) return;
        const t = e.touches[0];
        const rect = dialCanvas.getBoundingClientRect();
        updateDialTouch(t.clientX, t.clientY, rect);
        drawScene();
    });

    dialCanvas.addEventListener('touchend', e => {
        e.preventDefault();
        if (dragging) {
            dragging = false;
            if (appState.selectedCamera) applyProperties();
        }
    });
}

function updateDial(e) {
    const rect = dialCanvas.getBoundingClientRect();
    const cx = rect.left + rect.width/2, cy = rect.top + rect.height/2;
    let angle = normalizeAngle(Math.atan2(e.clientY - cy, e.clientX - cx) * (180/Math.PI) + 90);
    angle = Math.round(angle);
    if (appState.selectedCamera) {
        appState.selectedCamera.rotation = angle;
        document.getElementById('propRotation').textContent = angle + '°';
        drawDial(angle);
        drawScene();
    }
}

function updateDialTouch(cx, cy, rect) {
    const hx = rect.left + rect.width/2, hy = rect.top + rect.height/2;
    let angle = normalizeAngle(Math.atan2(cy - hy, cx - hx) * (180/Math.PI) + 90);
    angle = Math.round(angle);
    if (appState.selectedCamera) {
        appState.selectedCamera.rotation = angle;
        document.getElementById('propRotation').textContent = angle + '°';
        drawDial(angle);
        drawScene();
    }
}

// ============================================================
// INICIALIZACIÓN
// ============================================================
function init() {
    resizeCanvas();
    setupCanvasEvents();
    setupDialEvents();

    // Botones de la barra de herramientas
    document.getElementById('btnAddCamera').addEventListener('click', () => {
        if (!appState.image) { alert('Carga un plano primero.'); return; }
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
    document.getElementById('btnLoadImage').addEventListener('click', () => fileInput.click());
    document.getElementById('btnRemoveImage').addEventListener('click', removeImage);
    document.getElementById('btnExportImage').addEventListener('click', exportImage);
    document.getElementById('btnSaveProject').addEventListener('click', saveProject);
    document.getElementById('btnLoadProject').addEventListener('click', () => projectInput.click());
    document.getElementById('btnExample').addEventListener('click', loadExample);
    document.getElementById('btnHelp').addEventListener('click', showHelp);
    document.getElementById('btnFullscreen').addEventListener('click', toggleFullscreen);
    document.getElementById('btnMeasure').addEventListener('click', toggleMeasureMode);
    document.getElementById('btnSimulate').addEventListener('click', toggleSimulation);

    fileInput.addEventListener('change', e => {
        if (e.target.files.length > 0) loadImageFile(e.target.files[0]);
        e.target.value = '';
    });

    projectInput.addEventListener('change', e => {
        if (e.target.files.length > 0) importProject(e.target.files[0]);
        e.target.value = '';
    });

    // Panel de propiedades
    document.getElementById('closeProperties').addEventListener('click', () => {
        propertiesPanel.classList.add('hidden');
        appState.selectedCameraId = null;
        appState.selectedCamera = null;
        activeCameraDisplay.textContent = 'Ninguna';
        updateUI();
    });

    document.getElementById('propApply').addEventListener('click', applyProperties);
    document.getElementById('propDelete').addEventListener('click', () => {
        if (appState.selectedCameraId) deleteCamera(appState.selectedCameraId);
    });

    // Sliders
    document.getElementById('propDistance').addEventListener('input', e => {
        const val = parseFloat(e.target.value);
        document.getElementById('propDistanceVal').textContent = val.toFixed(1);
        if (appState.selectedCamera) {
            appState.selectedCamera.distance = val;
            drawScene();
        }
    });

    document.getElementById('propFov').addEventListener('input', e => {
        const val = parseFloat(e.target.value);
        document.getElementById('propFovVal').textContent = Math.round(val) + '°';
        if (appState.selectedCamera) {
            appState.selectedCamera.fov = val;
            drawScene();
        }
    });

    // Modelo
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

    // Búsqueda
    document.getElementById('cameraSearch').addEventListener('input', renderCameraList);

    // Nombre
    document.getElementById('propName').addEventListener('change', () => {
        if (appState.selectedCamera) {
            appState.selectedCamera.name = document.getElementById('propName').value.trim() || appState.selectedCamera.id;
            activeCameraDisplay.textContent = appState.selectedCamera.name;
            updateUI();
        }
    });

    document.getElementById('propName').addEventListener('keydown', e => {
        if (e.key === 'Enter') applyProperties();
    });

    // Cargar estado guardado
    const loaded = loadState();

    if (!loaded && !appState.image) {
        ctx.fillStyle = '#162032';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#8899bb';
        ctx.font = '20px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('📷 Carga un plano para comenzar', canvas.width / 2, canvas.height / 2 - 16);
        ctx.font = '14px Inter, sans-serif';
        ctx.fillStyle = '#556688';
        ctx.fillText('Arrastra una imagen o usa el botón "Fondo"', canvas.width / 2, canvas.height / 2 + 28);
    }

    console.log('WijTech CCTV Simulator initialized.');
    console.log(`📷 Catálogo: ${Object.keys(cameraCatalog).length} modelos de ${new Set(Object.values(cameraCatalog).map(s => s.brand)).size} marcas`);
    console.log('Atajos: Delete(eliminar), R(rotación), M(medir), S(simular), C(limpiar), F(pantalla), H(ayuda)');
}

// ============================================================
// ACTUALIZAR UI
// ============================================================
function updateUI() {
    renderCameraList();
    drawScene();
    updateStatus();
}

function updateStatus() {
    scaleDisplay.textContent = appState.scaleCalibrated && appState.scale > 0 ?
        `${appState.scale.toFixed(4)} m/px` : 'No calibrada';

    const selected = appState.cameras.find(c => c.id === appState.selectedCameraId);
    activeCameraDisplay.textContent = selected ? (selected.name || selected.id) : 'Ninguna';
}

// Iniciar
document.addEventListener('DOMContentLoaded', init);
