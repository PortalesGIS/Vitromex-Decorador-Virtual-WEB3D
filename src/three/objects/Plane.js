import { BoxBufferGeometry, Color, MathUtils, Mesh,  MeshStandardMaterial } from "three";

export class Plane extends Mesh{
    constructor(height,width){
        super();
        this.geometry = new BoxBufferGeometry(width, height,0.1);
        this.material = new MeshStandardMaterial({
            color: new Color("black").convertGammaToLinear(),
            flatShading:true,
            roughness:0.5
        })
        this.name =`plane-${height}x${width}`
        this.rotation.x = 90 *  MathUtils.DEG2RAD;
        this.renderOrder =-1;
    }
} 