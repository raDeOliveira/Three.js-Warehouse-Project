'use strict';

class MyShelf extends THREE.Object3D {

    // set YELLOW color to the shelfs
    static color = 0xFCFC01;

    // length shelf, height shelf, width shelf
  constructor(ls,hs,ws) {
    super();

    // cube geometry for shelf design
    // create shelf
	this.pfe = MyShelf.createMesh(new THREE.BoxGeometry(ls,hs,ws));
	this.pfe.translateX(ls/2);
	this.pfe.translateY(0);
	this.pfe.translateZ(ws/2);

	this.add(this.pfe);

  }
  
  static createMesh(geom) {

    let wireFrameMat = new THREE.MeshLambertMaterial({color: this.color});
    wireFrameMat.wireframe = false;

    // create a multimaterial
    let mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [ wireFrameMat]);

    return mesh;
  }
  
}