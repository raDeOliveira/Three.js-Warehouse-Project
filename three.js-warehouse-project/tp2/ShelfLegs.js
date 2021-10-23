'use strict';

class MyShelfLegs extends THREE.Object3D {

    // set GREEN color to the shelf legs
    static color = 0x01FF27;

    // leg width, leg height, leg length
    constructor(lw,lh,ll) {
        super();

        // create shelf legs
        // right rear
        this.pfe = MyShelfLegs.createMesh(new THREE.BoxGeometry(lw,lh,ll));
        this.pfe.translateX(lw/2);
        this.pfe.translateY(lh/2);
        this.pfe.translateZ(ll/2);

        // left rear
        this.pte = MyShelfLegs.createMesh(new THREE.BoxGeometry(lw,lh,ll));
        this.pte.translateX(lw/2);
        this.pte.translateY(lh/2);
        this.pte.translateZ(5);

        // left middle
        this.pfm = MyShelfLegs.createMesh(new THREE.BoxGeometry(lw,lh,ll));
        this.pfm.translateX(17);
        this.pfm.translateY(lh/2);
        this.pfm.translateZ(5);

        // right middle
        this.ptm = MyShelfLegs.createMesh(new THREE.BoxGeometry(lw,lh,ll));
        this.ptm.translateX(17);
        this.ptm.translateY(lh/2);
        this.ptm.translateZ(ll/2);

        // left front
        this.pfd = MyShelfLegs.createMesh(new THREE.BoxGeometry(lw,lh,ll));
        this.pfd.translateX(31);
        this.pfd.translateY(lh/2);
        this.pfd.translateZ(ll/2);

        // right front
        this.ptd = MyShelfLegs.createMesh(new THREE.BoxGeometry(lw,lh,ll));
        this.ptd.translateX(31);
        this.ptd.translateY(lh/2);
        this.ptd.translateZ(5);

        this.add(this.pfe);
        this.add(this.pfd);
        this.add(this.pte);
        this.add(this.ptd);
        this.add(this.pfm);
        this.add(this.ptm);

    }

    static createMesh(geom) {

        var wireFrameMat = new THREE.MeshLambertMaterial({color: this.color});
        wireFrameMat.wireframe = false;

        // create a multimaterial
        var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [ wireFrameMat]);

        return mesh;
    }

}