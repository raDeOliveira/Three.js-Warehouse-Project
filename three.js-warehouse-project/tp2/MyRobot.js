'use strict';

class MyRobot extends THREE.Object3D {

	// set BLUE color to the robot
	static color = 0x0146FF;

	//width, height, length
	constructor(wr,hr,lr) {
		super();

		// cube geometry for robot body
		this.r = MyRobot.createMesh(new THREE.BoxGeometry(wr,hr,lr));
		this.r.translateX(wr/2);
		this.r.translateY(hr/2);
		this.r.translateZ(lr/2);

		this.robot = new THREE.Object3D();
		this.robot.add(this.r);
		this.robot.translateY(2);

		// sphere geometry fot the wheels
		// left rear wheel
		this.w1 = MyRobot.createMesh(new THREE.SphereGeometry( 1, 32, 200));
		this.w1.rotateX(1.6);

		// left front wheel
		this.w2 = MyRobot.createMesh(new THREE.SphereGeometry( 1, 32, 200));
		this.w2.rotateX(1.6);
		this.w2.translateX(5);

		// right rear wheel
		this.w3 = MyRobot.createMesh(new THREE.SphereGeometry( 1, 32, 200));
		this.w3.rotateX(1.6);
		this.w3.translateY(5);

		// right front wheel
		this.w4 = MyRobot.createMesh(new THREE.SphereGeometry( 1, 32, 200));
		this.w4.rotateX(1.6);
		this.w4.translateX(5);
		this.w4.translateY(5);

		// wheels group
		this.wheels = new THREE.Object3D();
		this.wheels.add(this.w1);
		this.wheels.add(this.w2);
		this.wheels.add(this.w3);
		this.wheels.add(this.w4);
		this.wheels.translateY(2);

		// cylinder geometry for the arms
		// arms design
		this.arms = new THREE.Object3D();
		// 1st tube
		this.arm1 = MyRobot.createMesh(new THREE.CylinderGeometry( 0.5, 0.8, 3, 200));
		this.arm1.translateY(9);
		this.arm1.translateX(4.2);
		this.arm1.translateZ(2.5);

		// 2nd tube
		this.arm2 = MyRobot.createMesh(new THREE.CylinderGeometry( 0.3, 0.46, 4, 200));
		this.arm2.translateY(12);
		this.arm2.translateX(4.7);
		this.arm2.translateZ(2.5);
		this.arm2.rotateZ(-0.3);

		// arms group
		this.arms.add(this.arm1);
		this.arms.add(this.arm2);

		// cube geometry for the clamp
		// clamp design
		this.clamp = new THREE.Object3D();

		// rear of the clamp
		this.arm3 = MyRobot.createMesh(new THREE.BoxGeometry( 1, 1, 1, 200));
		this.arm3.translateY(13.5);
		this.arm3.translateX(5.1);
		this.arm3.translateZ(2.5);

		// left side of clamp
		this.arm4 = MyRobot.createMesh(new THREE.BoxGeometry( 0.5, 0.2, 3, 200));
		this.arm4.translateY(13.5);
		this.arm4.translateX(5.6);
		this.arm4.translateZ(2.1);
		this.arm4.rotateZ(.5);
		this.arm4.rotateX(1.5);
		this.arm4.rotateY(1);

		// right side of clamp
		this.arm5 = MyRobot.createMesh(new THREE.BoxGeometry( 0.5, 0.2, 3, 200));
		this.arm5.translateY(13.5);
		this.arm5.translateX(5.6);
		this.arm5.translateZ(2.9);
		this.arm5.rotateZ(.5);
		this.arm5.rotateX(1.5);
		this.arm5.rotateY(1);

		this.clamp.add(this.arm3);
		this.clamp.add(this.arm4);
		this.clamp.add(this.arm5);

		// add all objects
		this.fullrobot = new THREE.Object3D();
		this.fullrobot.add(this.wheels);
		this.fullrobot.add(this.robot);
		this.fullrobot.add(this.arms);
		this.fullrobot.add(this.clamp);

		this.add(this.fullrobot);


	}

	static createMesh(geom) {

		let wireFrameMat = new THREE.MeshLambertMaterial({color: this.color});
		wireFrameMat.wireframe = false;

		// create a multimaterial
		let mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [ wireFrameMat]);

		return mesh;
	}

}