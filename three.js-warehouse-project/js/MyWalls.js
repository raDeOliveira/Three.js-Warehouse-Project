'use strict';

class MyWalls extends THREE.Object3D {

    // width, height, length
    constructor(w, h, len) {
        super();

        // texture for the walls
        var loader = new THREE.TextureLoader();
        var texture = loader.load('img/concrete.jpg');
        var material = new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide});

        // right wall
        var geometryLateral = new THREE.BoxGeometry(w,h,len);
        var wall1 = new THREE.Mesh(geometryLateral, material);
        wall1.position.x = -75;
        wall1.position.y = 20;
        wall1.rotateY(0.01);
        this.add(wall1);

        // left wall
        var wall2 = new THREE.Mesh(geometryLateral, material);
        wall2.position.x = 75;
        wall2.position.y = 20;
        wall2.rotateY(0.01);
        this.add(wall2);

        // rear wall
        var wall3 = new THREE.Mesh(geometryLateral, material);
        wall3.position.x = 0;
        wall3.position.y = 20;
        wall3.position.z = 75;
        wall3.rotateY(1.58);
        this.add(wall3);

        // front wall
        var wall4 = new THREE.Mesh(geometryLateral, material);
        wall4.position.x = 0;
        wall4.position.y = 20;
        wall4.position.z = -60;
        wall4.rotateY(1.56);
        // this.add(wall4);


    }

    static createMesh(geom) {

        // assign two materials
        let meshMaterial = new THREE.MeshNormalMaterial();
        meshMaterial.side = THREE.DoubleSide;
        let wireFrameMat = new THREE.MeshBasicMaterial();
        wireFrameMat.wireframe = false;

        // create a multimaterial
        let mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);

        return mesh;
    }

}