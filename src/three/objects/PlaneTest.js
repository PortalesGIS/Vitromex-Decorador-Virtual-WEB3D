import {
  Mesh,
  MeshStandardMaterial,
  RepeatWrapping,
  TextureLoader,
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Observer, { EVENTS } from "../Observer";
export class PlaneTest extends Mesh {
  constructor() {
    super();

    let loader = new GLTFLoader();
    loader.load(
      "models3D/test/scene.gltf",
      (gltf) => {
        this.add(gltf.scene);
        this.piso =
          gltf.scene.children[0].children[0].children[0].children[0].children[0].children[0];
        // console.log(gltf.scene)
        // console.log(gltf.scene.children[0].children[0].children[0].children[0].children[0].children[0])
        let lightMap = new TextureLoader();
        lightMap.load(
          "models3D/test/Lightmap-0_comp_light_m.png",
          (texture) => {
            const lamber = new MeshStandardMaterial({
              // color: 0x777777,
              lightMap: texture,
              map: this.piso.material.map,
              lightMapIntensity: 4,
            });
            this.piso.material = lamber;
            Observer.on(EVENTS.SENDPRODUCT, (payload) => {
              console.log(payload.albedo);
              let mapDB = new TextureLoader();
              mapDB.load(payload.albedo, (textureMap) => {
                textureMap.wrapS = RepeatWrapping;
                textureMap.wrapT = RepeatWrapping;
                textureMap.repeat.set(
                  payload.textureWidth,
                  payload.textureHeight
                );
                mapDB.load(payload.normal, (textureNormal) => {
                  const uploadMaterial = new MeshStandardMaterial({
                    color: 0x777777,
                    lightMap: texture,
                    map: textureMap,
                    normalMap: textureNormal,
                    lightMapIntensity: 5,
                  });
                  this.piso.material = uploadMaterial;
                });
              });
            });
          },
          undefined,
          (err) => {
            console.error(err);
          }
        );
        this.scale.x = 20;
        this.scale.y = 20;
        this.scale.z = 20;
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
