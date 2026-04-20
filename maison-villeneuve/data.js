var APP_DATA = {
  "scenes": [
    {
      "id": "0-cuisine-evier",
      "name": "cuisine evier",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-cuisine-ilot",
      "name": "cuisine-ilot",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7728772383208415,
          "pitch": 0.11344262175683717,
          "rotation": 0,
          "target": "0-cuisine-evier"
        },
        {
          "yaw": -1.253716849063327,
          "pitch": 0.20778461589210018,
          "rotation": 0,
          "target": "2-table-salle-manger"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-table-salle-manger",
      "name": "table-salle-manger",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4941424295478463,
          "pitch": 0.23827434105984047,
          "rotation": 0,
          "target": "3-salon-tv"
        },
        {
          "yaw": 1.0753632952948742,
          "pitch": 0.1667655892407467,
          "rotation": 0,
          "target": "1-cuisine-ilot"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-salon-tv",
      "name": "salon-tv",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.31375254947244713,
        "pitch": 0.030225468694268898,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.169024858808406,
          "pitch": 0.21817287705103006,
          "rotation": 0,
          "target": "2-table-salle-manger"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.061053474947455,
          "pitch": 0.10258714756329468,
          "title": "terrasse plein sud",
          "text": "accord immo"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
