import {  Mesh, 
 } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
export class FalseLights extends Mesh{

    constructor(){
        super();
        let loader = new GLTFLoader(); 
        loader.load('models3D/lights/scene.gltf',(gltf)=>{
            
            this.add(gltf.scene); 
            this.scale.x=10;
			this.scale.y=10;
			this.scale.z=10;
            this.position.x=72;
			this.position.y=-17;
			this.position.z=-74;
            this.rotation.y=3.14
        },
        ()=>{
            // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );   
        },
        function ( error ) {
            console.log( error );
        }
        )
    }
    update(){
        
    }

}