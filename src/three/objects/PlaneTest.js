import {  Mesh, MeshBasicMaterial,  TextureLoader } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
export class PlaneTest extends Mesh{

    constructor(){
        super();

        let loader = new GLTFLoader(); 
        loader.load('models3D/test/scene.gltf',(gltf)=>{
            this.add(gltf.scene); 
            this.piso = gltf.scene.children[0].children[0].children[0].children[0].children[0].children[0]
            // console.log(gltf.scene)    
            console.log(gltf.scene.children[0].children[0].children[0].children[0].children[0].children[0])   
            let lightMap =   new TextureLoader();
            lightMap.load('models3D/test/Lightmap-0_comp_light_m.png',(texture)=>{
                const lamber = new MeshBasicMaterial({
                    color: 0x777777,
                    lightMap:texture,
                    map:this.piso.material.map,
                    lightMapIntensity:0.1
                })
                this.piso.material = lamber
            },undefined,( err )=> {
                console.error( err );
            })
            console.log(gltf.scene.children[0].children[0].children[0].children[0].children[0].children[0].material)   
            this.scale.x=20;
			this.scale.y=20;
			this.scale.z=20;
        },
        (xhr)=>{
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );   
        },
        function ( error ) {
            console.log( error );
        }
        )
    }
    update(){
        
    }

}