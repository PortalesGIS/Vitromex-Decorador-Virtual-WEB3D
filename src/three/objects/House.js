import {  Mesh, MeshStandardMaterial, RepeatWrapping, TextureLoader,  
    // MeshStandardMaterial,  RepeatWrapping,  TextureLoader
 } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Observer, { EVENTS } from "../Observer";
// import Observer, { EVENTS } from "../Observer";
export class House extends Mesh{

    constructor(){
        super();

        let loader = new GLTFLoader(); 
        loader.load('models3D/house-v1/scene.gltf',(gltf)=>{
            // this.liquid = gltf.scene.children[0].getObjectByName('Liquid_Beer_Liquid_0');
            this.add(gltf.scene); 
            // console.log(console.log( gltf.scene.children[0].getObjectByName('Piso_C_Int_Sala_UVb')))
            this.pisoSala = gltf.scene.children[0].getObjectByName('Piso_C_Int_Sala_UVb_MT_Piso_C_Int_Sala_UVb_0')
            this.pisoCosina = gltf.scene.children[0].getObjectByName("Piso_C_Int_Cocina_UVb_MT_Piso_C_Int_Cocina_UVb_0")
            this.pisoComedor = gltf.scene.children[0].getObjectByName("Piso_C_Int_Comedor_UVb_MT_Piso_C_Int_Comedor_UVb_0")
            this.pisoFachada =  gltf.scene.children[0].getObjectByName("Piso_C_Ext_Cochera_UVb_MT_Piso_C_Ext_Cochera_UVb_0")
            this.pisoPasillo = gltf.scene.children[0].getObjectByName("Piso_C_Ext_Pasillo_UVb_MT_Piso_C_Ext_Pasillo_UVb_0")
            this.pisoBanio = gltf.scene.children[0].getObjectByName("Piso_C_Int_Banio_UVb_MT_Piso_C_Int_Banio_UVb_0")
            // 
            let lightMap =   new TextureLoader();
            lightMap.load('models3D/house-v1/light_maps/Lightmap_b.jpg',(texture)=>{
                const lamber = new MeshStandardMaterial({
                    color: 0x777777,
                    lightMap:texture,
                    map:this.pisoSala.material.map,
                    // lightMapIntensity:10
                })
                this.pisoSala.material = lamber

                const laberCocina = new MeshStandardMaterial({
                    color: 0x777777,
                    lightMap:texture,
                    map:this.pisoCosina.material.map,
                    // lightMapIntensity:10
                })
                this.pisoCosina.material = laberCocina

                const laberComedor = new MeshStandardMaterial({
                    color: 0x777777,
                    lightMap:texture,
                    map:this.pisoComedor.material.map,
                    // lightMapIntensity:10
                })
                this.pisoComedor.material = laberComedor

                Observer.on(EVENTS.SENDPRODUCT,(productSelected,areaSelected,typeOfAplication)=>{
                    let mapDB =   new TextureLoader();
                    mapDB.load(productSelected.albedo,(textureMap)=>{
                        textureMap.wrapS = RepeatWrapping;
                        textureMap.wrapT = RepeatWrapping;
                        textureMap.repeat.set(0.69444 ,0.69444 );
                        mapDB.load(productSelected.normal,(textureNormal)=>{
                            const uploadMaterial = new MeshStandardMaterial({
                                color: 0x777777,
                                lightMap:texture,
                                map:textureMap,
                                normalMap:textureNormal,
                                lightMapIntensity:5
                            })
                            if(typeOfAplication===0){
                                console.log("aplicado a muro")
                                this.updatePisoMaterial(uploadMaterial,areaSelected)
                            }
                            else{
                                console.log("aplicado a pared")
                            }
                        })
                    })
                    
                })
            },undefined,( err )=> {
                console.error( err );
            })
            // 
            
            

            this.scale.x=10;
			this.scale.y=10;
			this.scale.z=10;
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
    updatePisoMaterial(materialUpdated,pisoSelected){
        switch (pisoSelected) {
            case "sala":
                this.pisoSala.material = materialUpdated
                break;
            case "fachada":
                this.pisoFachada.material = materialUpdated
                // this.pisoPasillo.material = materialUpdated
                break;
            case "comedor":
                this.pisoComedor.material = materialUpdated
                break;
            case "cocina":
                this.pisoCosina.material = materialUpdated
                break;
            case "banio":
                this.pisoBanio.material = materialUpdated
                break;
        
            default:
                break;
        }
    }

}