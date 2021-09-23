import {  Mesh, MeshStandardMaterial,  TextureLoader, 
} from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
export class WindowFachada extends Mesh{

   constructor(loaderManager){
       super();
       this.loaderManager= loaderManager
       let loader = new GLTFLoader(); 
       loader.load('models3D/windowFachada/scene.gltf',(gltf)=>{
        let mapDB =   new TextureLoader();
        mapDB.load("models3D/house-v1/light_maps/white.jpg",(white)=>{
            gltf.scene.traverse(function(child) {
                if (child.isMesh) {
                        const uploadMaterial = new MeshStandardMaterial({
                            color: 0xffffff,
                            // lightMap:texture,
                            lightMap:white,
                            transparent:true,
                            lightMapIntensity:2,
                            envMapIntensity:50
                        })
                        child.material  = uploadMaterial 
                }
              });
               
        })
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
        //    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );   
       },
       function ( error ) {
           console.log( error );
       }
       )
   }
   update(){
       
   }

}