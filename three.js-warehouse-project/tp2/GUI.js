'use strict';

class GUI {

  constructor(webgl) {
	this.webgl = webgl;

    var guiVars = {
      // clear scene
      "clearScene" : () => {
        for (var i = 0; i < this.webgl.scene.children.length; )
          this.webgl.scene.remove(this.webgl.scene.children[i]);
          this.webgl.robotExists = false;
          this.webgl.warehouse = false;
        },

      "drawBox" : () => {
        // draw plane
        var plane = new MyPlane();
        plane.planeWithoutTexture();
        this.webgl.scene.add(plane);

        // draw box
        var box = new MyPalette(10,5,0.5,10,5,1);
        this.webgl.scene.add(box);
        var spotLight = new MySpotLight();
        spotLight.addSpotLight(0)
        this.webgl.scene.add(spotLight);

      },

      "drawShelf" : () => {
        // draw plane
        var plane = new MyPlane();
        plane.planeWithoutTexture();
        this.webgl.scene.add(plane);

        // draw shelf
        var warehouse = new MyWarehouse();
        warehouse.wareHouse();
        this.webgl.scene.add(warehouse);
      },

      "drawWarehouse" : () => {
        if (this.webgl.warehouse === false) {
          // draw plane
          var plane = new MyPlane();
          plane.planeWithoutTexture();
          this.webgl.scene.add(plane);

          // draw walls for the warehouse
          var wall = new MyWalls(1, 40, 150);
          wall.rotateY(1.56)
          this.webgl.scene.add(wall);

          var spotLight = new MySpotLight();
          spotLight.addSpotLight(0)
          this.webgl.scene.add(spotLight);

          // draw warehouses
          var warehouse1 = new MyWarehouse();
          warehouse1.wareHouse();
          warehouse1.translateZ(6)
          // spotlight for shelf
          var spotLight1 = new MySpotLight();
          spotLight1.addSpotLight(6)
          this.webgl.scene.add(spotLight1);

          var warehouse2 = new MyWarehouse();
          warehouse2.wareHouse();
          warehouse2.translateZ(12);
          // spotlight for shelf2
          var spotLight2 = new MySpotLight();
          spotLight2.addSpotLight(12)
          this.webgl.scene.add(spotLight2);

          var warehouse3 = new MyWarehouse();
          warehouse3.wareHouse();
          warehouse3.translateZ(18);
          // spotlight for shelf3
          var spotLight3 = new MySpotLight();
          spotLight3.addSpotLight(18)
          this.webgl.scene.add(spotLight3);

          // add object to the scene
          this.webgl.scene.add(warehouse1);
          this.webgl.scene.add(warehouse2);
          this.webgl.scene.add(warehouse3);

          this.webgl.warehouse = true;
        }
    },

      "drawRobot" : () => {
        if (this.webgl.robotExists === false) {
          var plane = new MyPlane();
          plane.planeWithoutTexture();
          this.webgl.scene.add(plane);

          // draw robot
          var robot  = new MyRobot(5,6,5);
          robot.translateX(-8);
          robot.translateY(-1);
          robot.name = "robot";
          this.webgl.scene.add(robot);

        }
      },

      "activateRobot" : () => {
        // animate robot
        this.webgl.robotExists = true;
        this.webgl.moveRobot();
      },

      "perspectiveCam" : () => {
        this.webgl.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.webgl.camera.position.x = -180;
        this.webgl.camera.position.y = 160;
        this.webgl.camera.position.z = 150;
        this.webgl.camera.lookAt(this.webgl.scene.position);
        this.perspective = "Perspective";
      },

      "orthographicCam" : () => {
        this.webgl.camera = new THREE.OrthographicCamera( window.innerWidth / - 16, window.innerWidth / 16, window.innerHeight / 16, window.innerHeight / - 16, -200, 500 );
        this.webgl.camera.position.x = -6;
        this.webgl.camera.position.y = 1;
        this.webgl.camera.position.z = 3;
        this.webgl.camera.lookAt(this.webgl.scene.position);
        this.perspective = "Orthographic";
      },

      "trackBall" : () => {
        this.webgl.controls = new THREE.TrackballControls(this.webgl.camera, this.webgl.renderer.domElement);
        this.webgl.controls.rotateSpeed = 5.0;
        this.webgl.controls.zoomSpeed = 1.0;
        this.webgl.controls.panSpeed = 1.0;
        this.webgl.controls.staticMoving = true;
        this.webgl.controls.staticMoving = true;
      },

      "flyControl" : () => {
        this.webgl.controls = new THREE.FlyControls(this.webgl.camera, this.webgl.renderer.domElement);
        this.webgl.controls.movementSpeed = 100;
        this.webgl.controls.rollSpeed = Math.PI / 50;
        this.webgl.controls.autoForward = false;
        this.webgl.controls.dragToLook = false;
      },

      "orbitControl" : () => {
        this.webgl.controls = new THREE.OrbitControls(this.webgl.camera, this.webgl.renderer.domElement);
        this.webgl.controls.dampingFactor = 0.05;
        this.webgl.controls.screenSpacePanning = false;
        this.webgl.controls.minDistance = 100;
        this.webgl.controls.maxDistance = 500;
        this.webgl.controls.maxPolarAngle = Math.PI / 2;
      },

      "firstPersonControl" : () => {
        this.webgl.controls = new THREE.FirstPersonControls(this.webgl.camera, this.webgl.renderer.domElement);
        this.webgl.controls.lookSpeed = 0.1;
        this.webgl.controls.movementSpeed = 20;
        this.webgl.controls.noFly = true;
        this.webgl.controls.lookVertical = true;
        this.webgl.controls.constrainVertical = true;
        this.webgl.controls.verticalMin = 1.0;
        this.webgl.controls.verticalMax = 2.0;
        this.webgl.camera.lookAt(-20,25,65);
        this.webgl.camera.position.set(-20,25,65);
      },

      "drawPalettes" : () => {
        // draw plane
        var plane = new MyPlane();
        plane.planeWithTexture();
        this.webgl.scene.add(plane);

        // draw box
        var palette = new MyPalette(14,9,0.5,14,9,5);
        // palette.translateX(-200)
        // palette.rotateY(-3)
        this.webgl.scene.add(palette);
        var spotLight = new MySpotLight();
        spotLight.addSpotLight(0)
        this.webgl.scene.add(spotLight);
      }
    };

    // gui controls for the console
    var gui = new dat.GUI({ autoPlace: false });
    var cleanScene = gui.add(guiVars, 'clearScene');
    var drawBox = gui.add(guiVars, 'drawBox');
    // var drawShelf = gui.add(guiVars, 'drawShelf');
    // var drawWarehouse = gui.add(guiVars, 'drawWarehouse');
    var drawPalettes = gui.add(guiVars, 'drawPalettes');

    // folder for lights actions
    var controls = new function () {
      this.moreLightPlease = false;
    };
    // spot light
    var spotLight = new THREE.SpotLight(0xDBDBDB, 2);
    spotLight.position.set(-40, 100, -10);
    spotLight.castShadow = true;
    // lightsActions folder
    var lightsActions = gui.addFolder('lightsActions');
    lightsActions.add(controls, 'moreLightPlease').onChange(function (e) {
      webgl.scene.add(spotLight);
      spotLight.visible = e;
    });

    // folder for robot actions
    // var robotActions = gui.addFolder('robotActions');
    // robotActions.add(guiVars, 'drawRobot');
    // robotActions.add(guiVars, 'activateRobot');

    // folder for cameras
    var cameraActions = gui.addFolder('cameraActions');
    cameraActions.add(guiVars, 'perspectiveCam');
    cameraActions.add(guiVars, 'orthographicCam');

    // folder for view controls
    var viewControls = gui.addFolder('viewControls');
    viewControls.add(guiVars, 'trackBall');
    viewControls.add(guiVars, 'orbitControl');
    viewControls.add(guiVars, 'flyControl');
    viewControls.add(guiVars, 'firstPersonControl');

    var customContainer = document.getElementById('GUI-output');
    customContainer.appendChild(gui.domElement);
  }



}
