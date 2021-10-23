'use strict';

class MyPalette extends THREE.Object3D {

  // set RED color for box
  static color = 0x400505;

  // box length, box height, box thickness, bottom length, bottom width, bottom height
  constructor(lb, hb, tb, bl, bw, bh) {
    super();

    // cube geometry fot the palette design
    // right side wall
    this.cfe = MyPalette.createMesh(new THREE.BoxGeometry(lb,hb,tb));
    this.cfe.translateX(lb/2);
    this.cfe.translateY(hb/2);
    this.cfe.translateZ(tb/2);

    // left side wall
    this.cfd = MyPalette.createMesh(new THREE.BoxGeometry(lb,hb,tb));
    this.cfd.translateX(lb/2);
    this.cfd.translateY(hb/2);
    this.cfd.translateZ(hb-tb/2);

    // rear wall
    this.cte = MyPalette.createMesh(new THREE.BoxGeometry(tb,hb,hb));
    this.cte.translateX(tb/2);
    this.cte.translateY(hb/2);
    this.cte.translateZ(hb/2);

    // front wall
    this.ctd = MyPalette.createMesh(new THREE.BoxGeometry(tb,hb,hb));
    this.ctd.translateX(lb-tb/2);
    this.ctd.translateY(hb/2);
    this.ctd.translateZ(hb/2);

    // bottom
    this.bottom = MyPalette.createMesh(new THREE.BoxGeometry(bl,bh,bw));
    this.bottom.translateX(bl/2);
    this.bottom.translateY(bh/2);
    this.bottom.translateZ(bw/2);

    this.add(this.cfe);
    this.add(this.cfd);
    this.add(this.cte);
    this.add(this.ctd);
    this.add(this.bottom);

  }


  static createMesh(geom) {

    let wireFrameMat = new THREE.MeshLambertMaterial({color: this.color});
    wireFrameMat.wireframe = false;

    // create a multimaterial
    let mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [ wireFrameMat]);

    return mesh;
  }
  
}
