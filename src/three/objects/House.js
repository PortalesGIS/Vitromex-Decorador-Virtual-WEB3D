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
            // muros
            this.muroComedorA =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Comedor_Atras_UVa_MT_Muro_Base_General_UVa_0")
            this.muroComedorB =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Comedor_Front_UVa_MT_Losa_Base_Int_General_UVb_0")
            this.muroSalaA =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Sala_Front2_UVa_MT_Losa_Base_Int_General_UVb_0")
            this.muroSalaB =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Sala_Der_UVa_MT_Muro_C_Int_Sala_Der_UVa_0")
            this.muroSalaC =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Sala_Front_UVa_MT_Muro_C_Int_Sala_Front_UVa_0")
            this.muroFachadaA =  gltf.scene.children[0].getObjectByName("Muro_C_Ext_Patio_Arriba_UVa_MT_Muro_C_Ext_Patio_Arriba_UVa_0")
            this.muroFachadaB =  gltf.scene.children[0].getObjectByName("Muro_C_Ext_Patio_Front_UVa_MT_Muro_C_Ext_Patio_Front_UVa_0")
            this.muroFachadaC =  gltf.scene.children[0].getObjectByName("Muro_C_Ext_Patio_Izq_UVa_MT_Muro_C_Ext_Patio_Izq_UVa_0")
            this.muroFachadaD =  gltf.scene.children[0].getObjectByName("Muro_C_Ext_Patio_Atras_UVa_MT_Muro_C_Ext_Patio_Atras_UVa_0")
            this.muroFachadaE =  gltf.scene.children[0].getObjectByName("Muro_C_Ext_Patio_Der_UVa_MT_Muro_C_Ext_Patio_Der_UVa_0")
            this.muroCocinaA =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Cocina_Izq_UVa_MT_Muro_C_Int_Cocina_Izq_UVa_0")
            this.muroCocinaB =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Cocina_Front_UVa_MT_Muro_C_Int_Cocina_Front_UVa_0")
            this.muroCocinaC =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Cocina_Der_UVa_MT_Muro_C_Int_Cocina_Der_UVa_0")
            this.muroCocinaD =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Pasillo_Izq_UVa_MT_Muro_C_Int_Pasillo_Izq_UVa_0")
            this.muroBanioA =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Banio_Izq2_UVa_MT_Muro_C_Int_Banio_Izq2_UVa_0")
            this.muroBanioB =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Banio_Izq1_UVa_MT_Muro_C_Int_Banio_Izq1_UVa_0")
            this.muroBanioC =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Banio_Izq3_UVa_MT_Muro_C_Int_Banio_Izq3_UVa_0")
            this.muroBanioD =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Banio_Der2_UVa_MT_Muro_C_Int_Banio_Der2_UVa_0")
            this.muroBanioE =  gltf.scene.children[0].getObjectByName("Muro_C_Int_Banio_Der_UVa_MT_Muro_C_Int_Banio_Der_UVa_0")

            // 
            let loader =   new TextureLoader();
            const textures = Promise.all([
            loader.load('models3D/house-v1/light_maps/UV_a.jpg'),
            loader.load('models3D/house-v1/light_maps/UV_b.jpg'),
            loader.load('models3D/house-v1/light_maps/UV_c.jpg'),
            loader.load('models3D/house-v1/light_maps/UV_d.jpg'),
            loader.load('models3D/house-v1/light_maps/UV_e.jpg'),
        ],(resolve)=>{
                resolve(textures)
            }).then(texturesLoades=>{
                
                gltf.scene.traverse((child) =>{
                    if (child.isMesh) {
                        this.putLigthMap(child,texturesLoades)
                    }
                })
                Observer.on(EVENTS.SENDPRODUCT,(productSelected,areaSelected,typeOfAplication,nameMuroAplication)=>{
                    let mapDB =   new TextureLoader();
                    mapDB.load(productSelected.albedo,(textureMap)=>{
                        textureMap.wrapS = RepeatWrapping;
                        textureMap.wrapT = RepeatWrapping;
                        textureMap.repeat.set(0.63,0.63 );
                        mapDB.load(productSelected.normal,()=>{
                            const uploadMaterial = new MeshStandardMaterial({
                                color: 0x777777,
                                // TODO: light map dependiendo de que sea si no da error de sombras
                                lightMap:(nameMuroAplication==="")?texturesLoades[1]:texturesLoades[1],
                                map:textureMap,
                                // normalMap:textureNormal,
                                lightMapIntensity:4
                            })
                            if(typeOfAplication===0){
                                console.log("aplicado a piso")
                                this.updatePisoMaterial(uploadMaterial,areaSelected)
                            }
                            else{
                                console.log("aplicado a muro")
                                this.updateMuroMaterial(uploadMaterial,nameMuroAplication)
                            }
                        })
                    })
                    
                })
            })
            // 
            this.scale.x=10;
			this.scale.y=10;
			this.scale.z=10;
            this.rotation.y=3.14
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

    ligthMapToUpdateMaterial(){

    }

    putLigthMap(child,texturesLoades){
         let uva = texturesLoades[0]
        let uvb = texturesLoades[1]
        // let uvc = texturesLoades[2]
        let uvd = texturesLoades[3]
        let uve = texturesLoades[4]
        if(child.name.includes("UVa")){
            const materialWhitLigthmap = new MeshStandardMaterial({
                color: 0x777777,
                envMapIntensity:0,
                lightMap:uva,
                emissive:0x000000,                
                map:child.material.map,
                lightMapIntensity:4
            })
            child.material = materialWhitLigthmap
                return 
        }
        if(child.name.includes("UVb")){
                const materialWhitLigthmap = new MeshStandardMaterial({
                    color: 0x777777,
                    envMapIntensity:0,
                    lightMap:uvb,
                    map:child.material.map,
                    lightMapIntensity:4
                })
                child.material = materialWhitLigthmap
                return 
        }
        // if(child.name.includes("UVc")){
        //         const materialWhitLigthmap = new MeshStandardMaterial({
        //             color: 0x777777,
        // envMapIntensity:0,
        //             lightMap:uvc,
        //             map:child.material.map,
        //             lightMapIntensity:4
        //         })
        //         child.material = materialWhitLigthmap
        //         return 
        // }
        if(child.name.includes("UVd")){
                const materialWhitLigthmap = new MeshStandardMaterial({
                    color: 0x777777,
                    envMapIntensity:0,
                    lightMap:uvd,
                    map:child.material.map,
                    lightMapIntensity:4
                })
                child.material = materialWhitLigthmap
                return 
        }
        if(child.name.includes("UVe")){
                const materialWhitLigthmap = new MeshStandardMaterial({
                    color: 0x777777,
                    envMapIntensity:0,
                    lightMap:uve,
                    map:child.material.map,
                    lightMapIntensity:4
                })
                child.material = materialWhitLigthmap
                return 
        }
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

    updateMuroMaterial(materialUpdated,nameMuro){
        switch (nameMuro) {
            case "Hover_Muro_C_Int_Comedor_Atras_UVa_MT_Hover_Muro_C_Int_Comedor_Atras_UVa_0":
                this.muroComedorA.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Comedor_Front_UVa_MT_Hover_Muro_C_Int_Comedor_Front_UVa_0":
                this.muroComedorB.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Sala_Der_UVa_MT_Hover_Muro_C_Int_Sala_Der_UVa_0":
                this.muroSalaB.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Sala_Front_UVa_MT_Hover_Muro_C_Int_Sala_Front_UVa_0":
                this.muroSalaC.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Sala_Front2_UVa_MT_Hover_Muro_C_Int_Sala_Front2_UVa_0":
                this.muroSalaA.material = materialUpdated
                break;
            case "Hover_Muro_C_Ext_Patio_Arriba_MT_Hover_Muro_C_Ext_Patio_Arriba_0":
                this.muroFachadaA.material = materialUpdated
                break;
            case "Hover_Muro_C_Ext_Patio_Front_UVa_MT_Hover_Muro_C_Ext_Patio_Front_UVa_0":
                this.muroFachadaB.material = materialUpdated
                break;
            case "Hover_Muro_C_Ext_Patio_Izq_UVa_MT_Hover_Muro_C_Ext_Patio_Izq_UVa_0":
                this.muroFachadaC.material = materialUpdated
                break;
            case "Hover_Muro_C_Ext_Patio_Atras_UVa_MT_Hover_Muro_C_Ext_Patio_Atras_UVa_0":
                this.muroFachadaD.material = materialUpdated
                break;
            case "Hover_Muro_C_Ext_Patio_Der_UVa_MT_Hover_Muro_C_Ext_Patio_Der_UVa_0":
                this.muroFachadaE.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Cocina_Izq_UVa_MT_Hover_Muro_C_Int_Cocina_Izq_UVa_0":
                this.muroCocinaA.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Cocina_Front_UVa_MT_Hover_Muro_C_Int_Cocina_Front_UVa_0":
                this.muroCocinaB.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Cocina_Der_UVa_MT_Hover_Muro_C_Int_Cocina_Der_UVa_0":
                this.muroCocinaC.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Pasillo_Izq_UVa_MT_Hover_Muro_C_Int_Pasillo_Izq_UVa_0":
                this.muroCocinaD.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Banio_Izq2_UVa_MT_Hover_Muro_C_Int_Banio_Izq2_UVa_0":
                this.muroBanioA.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Banio_Izq1_UVa_MT_Hover_Muro_C_Int_Banio_Izq1_UVa_0":
                this.muroBanioB.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Banio_Izq3_UVa_MT_Hover_Muro_C_Int_Banio_Izq3_UVa_0":
                this.muroBanioC.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Banio_Der2_UVa_MT_Hover_Muro_C_Int_Banio_Der2_UVa_0":
                this.muroBanioD.material = materialUpdated
                break;
            case "Hover_Muro_C_Int_Banio_Der_UVa_MT_Hover_Muro_C_Int_Banio_Der_UVa_0":
                this.muroBanioE.material = materialUpdated
                break;
            default:
                break;
        }

    }

}