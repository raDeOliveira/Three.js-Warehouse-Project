'use strict';

class Webgl {

  constructor() {
        
    this.clock = new THREE.Clock();

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(new THREE.Color(0x434343));
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // position and point the camera to the center of the scene
    this.camera.position.x = -75;
    this.camera.position.y = 100;
    this.camera.position.z = 150;
    this.camera.lookAt(this.scene.position);

    // add ambient light
    const light = new THREE.AmbientLight(0x404040);
    this.scene.add(light);

    // trackBallControls
    this.controls = new THREE.TrackballControls(this.camera, this.renderer.domElement);

    // add the output of the renderer to the html element
    $("#WebGL-output").append(this.renderer.domElement);

    this.gui = new GUI(this);

    // for the moveRobot function
    this.n = 0.1;
    this.robotExists = false;
    this.warehouse = false;
    this.spotLight = false;
  }

  // move robot function
  moveRobot(){

    if (this.robotExists){
      this.robot = this.scene.getObjectByName("robot");
      this.robot.position.z += this.n;

      if (this.robot.position.z > 18) {
        this.robot.position.z -= 0.1;
        this.n = -0.1;
      }

      if (this.robot.position.z < -1) {
        this.robot.position.z = 0;
        this.n = 0.1;
      }

    }
  }

  render () {

    // call move robot function
    this.moveRobot();

    // to update view controls
    this.controls.update(this.clock.getDelta());

    //render the scene
    this.renderer.render(this.scene, this.camera);
  }

}
