import {
  Mesh,
  MeshStandardMaterial,
  RepeatWrapping,
  TextureLoader,
  // MeshStandardMaterial,  RepeatWrapping,  TextureLoader
} from "three";
// import { GUI } from "three/examples/jsm/libs/dat.gui.module";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Observer, { EVENTS } from "../Observer";
// import Observer, { EVENTS } from "../Observer";
export class Hovers extends Mesh {
  constructor() {
    super();
    let loader = new GLTFLoader();
    loader.load(
      "models3D/hovers/scene.gltf",
      (gltf) => {
        let mapDB = new TextureLoader();
        mapDB.load("models3D/hovers/textures/Dots.png", (textureMap) => {
          mapDB.load("models3D/house-v1/light_maps/white.jpg", (white) => {
            textureMap.wrapS = RepeatWrapping;
            textureMap.wrapT = RepeatWrapping;
            textureMap.repeat.set(1, 1);
            gltf.scene.traverse(function(child) {
              if (child.isMesh) {
                const uploadMaterial = new MeshStandardMaterial({
                  map: textureMap,
                  envMapIntensity: 4,
                  lightMap: white,
                  lightMapIntensity: 20,
                  opacity: 0.003,
                  transparent: true,
                });
                child.material = uploadMaterial;
                child.renderOrder = -2;
              }
            });
          });
        });
        Observer.on(EVENTS.CLEARHOVER, (nameSelected) => {
          gltf.scene.traverse(function(child) {
            if (child.isMesh) {
              if (nameSelected !== child.name) {
                child.material.opacity = 0.003;
                child.material.color.setHex(0xffffff);
              } else {
                child.material.color.setHex(0xffffff);
                child.material.opacity = 1;
              }
            }
          });
        });
        this.add(gltf.scene);
        this.scale.x = 10;
        this.scale.y = 10;
        this.scale.z = 10;
        this.position.x = 72;
        this.position.y = -17;
        this.position.z = -74;
        this.rotation.y = 3.14;
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function(error) {
        console.log(error);
      }
    );
  }
  update() {}
}
