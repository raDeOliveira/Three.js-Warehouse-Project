'use strict';

class MyPlane extends THREE.Object3D {

    // create the ground plane without texture image
    planeWithoutTexture  () {

        var planeGeometry = new THREE.PlaneGeometry(150, 150, 200, 200);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0x272525});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;

        // rotate and position the plane
        plane.rotation.x=-0.5*Math.PI;
        plane.position.x=0
        plane.position.y=0
        plane.position.z=0
        this.add(plane);
    }

    // create the ground plane with texture image
    planeWithTexture () {

        var texture = THREE.ImageUtils.loadTexture('img/texture.jpg');
        var geometry = new THREE.PlaneGeometry(150, 150);
        var material = new THREE.MeshBasicMaterial({map: texture});
        var plane = new THREE.Mesh(geometry, material);

        // rotate and position the plane
        plane.rotation.x=-0.5*Math.PI;
        plane.position.x=0
        plane.position.y=0
        plane.position.z=0
        plane.receiveShadow = false;
        this.add(plane);
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