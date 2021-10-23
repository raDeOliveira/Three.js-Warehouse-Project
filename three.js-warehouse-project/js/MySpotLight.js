'use strict';

class MySpotLight extends THREE.Object3D {

        // add spotlight according to shelf position
        addSpotLight (moveZ) {

            var spotLight = new THREE.SpotLight(0xffffff);
            spotLight.position.set( 0, 55, 0 );
            spotLight.castShadow = true;
            this.add(new THREE.PointLightHelper(spotLight, 1));

            spotLight.target = new THREE.Object3D();
            spotLight.target.translateX(20);
            spotLight.target.translateZ(moveZ);
            spotLight.target.translateY(34);

            var move = new THREE.Object3D();
            move.add(spotLight);
            move.translateX(20);
            move.translateZ(moveZ+2);
            move.translateY(34);
            this.add(move);
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