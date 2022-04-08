
export enum FIGUREGEOMETRICHE {
    QUADRATO,
    RETTANGOLO,
    TRIANGOLO
  }

  
export class Square {
    geometry: FIGUREGEOMETRICHE;
    lato: number;
    
    constructor(lato: number) {
        this.geometry = FIGUREGEOMETRICHE.QUADRATO;
        this.lato = lato;
    }

    getGeometry(): FIGUREGEOMETRICHE {
        return this.geometry;
    }
     
    getLato(): number {
        return this.lato;
    }
}

export class Rectangle {
    geometry: FIGUREGEOMETRICHE;
    base: number;
    height: number;
    
    constructor(base: number, height: number) {
        this.geometry = FIGUREGEOMETRICHE.RETTANGOLO;
        this.base = base;
        this.height = height;
    }

    getGeometry(): FIGUREGEOMETRICHE {
        return this.geometry;
    }
     
    getBase(): number {
        return this.base;
    }
    getHeight(): number {
        return this.height;
    }
}

export class Triangle {
    geometry: FIGUREGEOMETRICHE;
    base: number;
    height: number;
    
    constructor(base: number, height: number) {
        this.geometry = FIGUREGEOMETRICHE.TRIANGOLO;
        this.base = base;
        this.height = height;
    }

    getGeometry(): FIGUREGEOMETRICHE {
        return this.geometry;
    }
     
    getBase(): number {
        return this.base;
    }
    getHeight(): number {
        return this.height;
    }
}

export class SimpleMath {

    public calcoloArea (o: Object, geometry: FIGUREGEOMETRICHE): number {
        let lato;
        let lato2;
        if(geometry == FIGUREGEOMETRICHE.QUADRATO) {
            let areaquadrato;
            lato = (<Square>o).getLato;
            areaquadrato = lato*lato;
            return areaquadrato;
        } else if(geometry == FIGUREGEOMETRICHE.RETTANGOLO) {
            let arearettangolo;
            lato = (<Rectangle>o).getBase;
            lato2 = (<Rectangle>o).getHeight;
            arearettangolo = lato*lato2;
            return arearettangolo;
        } else if(geometry == FIGUREGEOMETRICHE.TRIANGOLO) {
            let areareatriangolo;
            lato = (<Triangle>o).getBase;
            lato2 = (<Triangle>o).getHeight;
            areareatriangolo = lato*lato2/2;
            return areareatriangolo;
        }
    }

}
