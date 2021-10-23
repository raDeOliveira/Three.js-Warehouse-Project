'use strict';

class MyWarehouse extends THREE.Object3D {

    // nota do professor
    // MyWarehouse --> deveria ser Myshelf

    wareHouse() {

        // boxes group of bottom shelf
        var boxGroupOne = new MyPalette(10,5,0.5,10,5,1);
        boxGroupOne.translateY(5.5);
        boxGroupOne.rotateZ(0.2);
        var box2GroupOne = new MyPalette(10,5,0.5,10,5,1);
        box2GroupOne.translateX(10.5);
        box2GroupOne.translateY(7.5);
        box2GroupOne.rotateZ(0.2);

        // boxes group for middle shelf
        var boxGroupTwo = new MyPalette(10,5,0.5,10,5,1);
        boxGroupTwo.translateX(5);
        boxGroupTwo.translateY(17.5);
        boxGroupTwo.rotateZ(0.2);
        var box2GroupTwo = new MyPalette(10,5,0.5,10,5,1);
        box2GroupTwo.translateX(15.5);
        box2GroupTwo.translateY(19.5);
        box2GroupTwo.rotateZ(0.2);

        // boxes group for upper shelf
        var boxGroupThree = new MyPalette(10,5,0.5,10,5,1);
        boxGroupThree.translateX(11.5);
        boxGroupThree.translateY(31.5);
        boxGroupThree.rotateZ(-0.1);
        var box2GroupThree = new MyPalette(10,5,0.5,10,5,1);
        box2GroupThree.translateX(22);
        box2GroupThree.translateY(30.5);
        box2GroupThree.rotateZ(-0.1);

        // shelfs
        // bottom shelf
        var shelf  = new MyShelf(32,0.5,5);
        shelf.translateY(5.5);
        shelf.rotateZ(0.2);

        // middle shelf
        var shelf2  = new MyShelf(32,0.5,5);
        shelf2.translateX(0);
        shelf2.translateY(16.5);
        shelf2.translateZ(0);
        shelf2.rotateZ(0.2);

        // upper shelf
        var shelf3  = new MyShelf(32,0.5,5);
        shelf3.translateX(0);
        shelf3.translateY(32.5);
        shelf3.translateZ(0);
        shelf3.rotateZ(-0.1);

        // shelf legs
        var shelfLegs = new MyShelfLegs(1, 37, 0.3);


        // add the objects
        this.add(boxGroupOne);
        this.add(box2GroupOne);

        this.add(boxGroupTwo);
        this.add(box2GroupTwo);

        this.add(boxGroupThree);
        this.add(box2GroupThree);

        this.add(shelf);
        this.add(shelf2);
        this.add(shelf3);

        this.add(shelfLegs);
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
