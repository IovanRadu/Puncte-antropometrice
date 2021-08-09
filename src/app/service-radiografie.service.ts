import { Injectable } from '@angular/core';
import {PointModel} from './models/Point.model';
import {HelpLineModel} from './models/HelpLine.model';
import {CalcDistanceModel} from './models/CalcDistance.model';
import {AngleModel} from "./models/Angle.model";


@Injectable({
  providedIn: 'root'
})

export class ServiceRadiografie {

  constructor() {
  }

  getRadiografieSrc(){
    let radiografieSrc ='./assets/radiografie.jpeg';
    return radiografieSrc
  }

  getPoints() {
    let points : PointModel[] ;
    points = [
      { pointId: 1, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Trichion', pointShortName: 'Tr', pointAx: 0, pointAy: 0  },
      { pointId: 2, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Glabella', pointShortName: 'Gl', pointAx: 0, pointAy: 0 },
      { pointId: 3, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Ophryon', pointShortName: 'Oph', pointAx: 0, pointAy: 0 },
      { pointId: 4, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Nasion', pointShortName: 'N', pointAx: 0, pointAy: 0},
      { pointId: 5, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Selion', pointShortName: 'Se', pointAx: 0, pointAy: 0},
      { pointId: 6, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Subnasale', pointShortName: 'Su', pointAx: 0, pointAy: 0 },
      { pointId: 7, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Naso spinale anterior', pointShortName: 'Nsa', pointAx: 0, pointAy: 0 },
      { pointId: 8, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Punctul A al lui Down', pointShortName: 'A', pointAx: 0, pointAy: 0 },
      { pointId: 9, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Prosthion', pointShortName: 'Pr', pointAx: 0, pointAy: 0},
      { pointId: 10, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Labiale superior', pointShortName: 'Ls', pointAx: 0, pointAy: 0},
      { pointId: 11, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Incizale superior', pointShortName: 'Is', pointAx: 0, pointAy: 0},
      { pointId: 12, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Incizale inferior', pointShortName: 'Ii', pointAx: 0, pointAy: 0 },
      { pointId: 13, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Stomion', pointShortName: 'St', pointAx: 0, pointAy: 0 },
      { pointId: 14, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Labiale inferior', pointShortName: 'Li', pointAx: 0, pointAy: 0 },
      { pointId: 15, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Infradentale', pointShortName: 'Id', pointAx: 0, pointAy: 0 },
      { pointId: 16, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Punctul B al lui Down', pointShortName: 'B', pointAx: 0, pointAy: 0 },
      { pointId: 17, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Pogonion', pointShortName: 'Pg', pointAx: 0, pointAy: 0 },
      { pointId: 18, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Menton', pointShortName: 'Me', pointAx: 0, pointAy: 0},
      { pointId: 19, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Gnathion', pointShortName: 'Gn', pointAx: 0, pointAy: 0 },
      { pointId: 20, pointGroup: 'Puncte antropometrice anterioare', pointName: 'Basion', pointShortName: 'Ba', pointAx: 0, pointAy: 0 },

      { pointId: 21, pointGroup: 'Puncte antropometrice posterioare', pointName: 'Vertex', pointShortName: 'V', pointAx: 0, pointAy: 0 },
      { pointId: 22, pointGroup: 'Puncte antropometrice posterioare', pointName: 'Sellae', pointShortName: 'S', pointAx: 0, pointAy: 0 },
      { pointId: 23, pointGroup: 'Puncte antropometrice posterioare', pointName: 'Naso spinalis posterior', pointShortName: 'Nsp', pointAx: 0, pointAy: 0 },
      { pointId: 24, pointGroup: 'Puncte antropometrice posterioare', pointName: 'Opistokranion', pointShortName: 'Op', pointAx: 0, pointAy: 0 },

      { pointId: 25, pointGroup: 'Puncte antropometrice paramediene', pointName: 'Orbitale', pointShortName: 'O', pointAx: 0, pointAy: 0 },
      { pointId: 26, pointGroup: 'Puncte antropometrice paramediene', pointName: 'Alare', pointShortName: 'Al', pointAx: 0, pointAy: 0 },
      { pointId: 27, pointGroup: 'Puncte antropometrice paramediene', pointName: 'Cheilion', pointShortName: 'Ch', pointAx: 0, pointAy: 0 },

      { pointId: 28, pointGroup: 'Puncte antropometrice laterale', pointName: 'Zygion', pointShortName: 'Zy', pointAx: 0, pointAy: 0},
      { pointId: 29, pointGroup: 'Puncte antropometrice laterale', pointName: 'Tragion', pointShortName: 'T', pointAx: 0, pointAy: 0},
      { pointId: 30, pointGroup: 'Puncte antropometrice laterale', pointName: 'Auriculare', pointShortName: 'Au', pointAx: 0, pointAy: 0 },
      { pointId: 31, pointGroup: 'Puncte antropometrice laterale', pointName: 'Porion', pointShortName: 'Po', pointAx: 0, pointAy: 0 },
      { pointId: 32, pointGroup: 'Puncte antropometrice laterale', pointName: 'Condilion', pointShortName: 'KD', pointAx: 0, pointAy: 0},
      { pointId: 33, pointGroup: 'Puncte antropometrice laterale', pointName: 'Gonion', pointShortName: 'Go', pointAx: 0, pointAy: 0},
      { pointId: 34, pointGroup: 'Puncte antropometrice laterale', pointName: 'Alveolon Superior', pointShortName: 'Alv', pointAx: 0, pointAy: 0 },
      { pointId: 35, pointGroup: 'Puncte antropometrice laterale', pointName: 'Alveolon inferior', pointShortName: 'alv', pointAx: 0, pointAy: 0},
      { pointId: 36, pointGroup: 'Puncte antropometrice laterale', pointName: 'Ectomolare superior', pointShortName: 'EKM', pointAx: 0, pointAy: 0 },
      { pointId: 37, pointGroup: 'Puncte antropometrice laterale', pointName: 'Ectomolare inferior', pointShortName: 'ekm', pointAx: 0, pointAy: 0 },
      { pointId: 38, pointGroup: 'Puncte antropometrice laterale', pointName: 'Distomolare superior', pointShortName: 'DM', pointAx: 0, pointAy: 0 },
      { pointId: 39, pointGroup: 'Puncte antropometrice laterale', pointName: 'Distomolare inferior', pointShortName: 'dm', pointAx: 0, pointAy: 0 }
    ];
    return points;
  }

  getHelpLines() {
    let helpLines : HelpLineModel[] ;
    helpLines = [
      { helpLineId: 1, helpLineName: 'linie ajutătoare', helpLineAx:10,helpLineAy:10,helpLineBx:200,helpLineBy:200 },
      { helpLineId: 2, helpLineName: 'linie ajutătoare', helpLineAx:75,helpLineAy:90,helpLineBx:300,helpLineBy:800 },
      { helpLineId: 3, helpLineName: 'linie ajutătoare', helpLineAx:25,helpLineAy:200,helpLineBx:300,helpLineBy:400},
      { helpLineId: 4, helpLineName: 'linie ajutătoare', helpLineAx:10,helpLineAy:50,helpLineBx:90,helpLineBy:600 },
      { helpLineId: 5, helpLineName: 'linie ajutătoare', helpLineAx:10,helpLineAy:50,helpLineBx:550,helpLineBy:400 },
      { helpLineId: 6, helpLineName: 'linie ajutătoare', helpLineAx:10,helpLineAy:50,helpLineBx:560,helpLineBy:500 },
      { helpLineId: 7, helpLineName: 'linie ajutătoare', helpLineAx:10,helpLineAy:50,helpLineBx:560,helpLineBy:350 },
      { helpLineId: 8, helpLineName: 'linie ajutătoare', helpLineAx:10,helpLineAy:50,helpLineBx:560,helpLineBy:450 },
      { helpLineId: 9, helpLineName: 'linie ajutătoare', helpLineAx:10,helpLineAy:50,helpLineBx:450,helpLineBy:780 },
      { helpLineId: 10, helpLineName: 'linie ajutătoare', helpLineAx:10,helpLineAy:50,helpLineBx:300,helpLineBy:90 },
      { helpLineId: 11, helpLineName: 'linie ajutătoare', helpLineAx:10,helpLineAy:50,helpLineBx:300,helpLineBy:90 },
    ];
    return helpLines;
  }

  getCalcDistances() {
    let calcDistances : CalcDistanceModel[] ;
    calcDistances = [
      { calcDistanceId: 1, calcDistanceName: 'calcul distanţă 1', calcDistanceAx: 10, calcDistanceAy: 20, calcDistanceBx: 30, calcDistanceBy: 40, px:50, cm:6 },
      { calcDistanceId: 2, calcDistanceName: 'calcul distanţă 2', calcDistanceAx: 20, calcDistanceAy: 30, calcDistanceBx: 40, calcDistanceBy: 50, px:60, cm:7 },
      { calcDistanceId: 3, calcDistanceName: 'calcul distanţă 3', calcDistanceAx: 0, calcDistanceAy: 0, calcDistanceBx: 0, calcDistanceBy: 0, px:0, cm:0 },
      { calcDistanceId: 4, calcDistanceName: 'calcul distanţă 4', calcDistanceAx: 0, calcDistanceAy: 0, calcDistanceBx: 0, calcDistanceBy: 0, px:0, cm:0 },
      { calcDistanceId: 5, calcDistanceName: 'calcul distanţă 5', calcDistanceAx: 0, calcDistanceAy: 0, calcDistanceBx: 0, calcDistanceBy: 0, px:0, cm:0 },
      { calcDistanceId: 6, calcDistanceName: 'calcul distanţă 6', calcDistanceAx: 0, calcDistanceAy: 0, calcDistanceBx: 0, calcDistanceBy: 0, px:0, cm:0 },
      { calcDistanceId: 7, calcDistanceName: 'calcul distanţă 7', calcDistanceAx: 0, calcDistanceAy: 0, calcDistanceBx: 0, calcDistanceBy: 0, px:0, cm:0 },
      { calcDistanceId: 8, calcDistanceName: 'calcul distanţă 8', calcDistanceAx: 0, calcDistanceAy: 0, calcDistanceBx: 0, calcDistanceBy: 0, px:0, cm:0 },
      { calcDistanceId: 9, calcDistanceName: 'calcul distanţă 9', calcDistanceAx: 0, calcDistanceAy: 0, calcDistanceBx: 0, calcDistanceBy: 0, px:0, cm:0 },
      { calcDistanceId: 10, calcDistanceName: 'calcul distanţă 10', calcDistanceAx: 0, calcDistanceAy: 0, calcDistanceBx: 0, calcDistanceBy: 0, px:0, cm:0 },
    ];
    return calcDistances;
  }

  getAngles() {
    let angles : AngleModel[] ;
    angles = [
      { angleId: 1, angleName: 'unghiul 1', angleAx: 0, angleAy: 0, angleBx: 0, angleBy: 0, angleCx: 0, angleCy: 0, angleDegree:0 },
      { angleId: 2, angleName: 'unghiul 2', angleAx: 0, angleAy: 0, angleBx: 0, angleBy: 0, angleCx: 0, angleCy: 0, angleDegree:0 },
      { angleId: 3, angleName: 'unghiul 3', angleAx: 0, angleAy: 0, angleBx: 0, angleBy: 0, angleCx: 0, angleCy: 0, angleDegree:0 },
      { angleId: 4, angleName: 'unghiul 4', angleAx: 0, angleAy: 0, angleBx: 0, angleBy: 0, angleCx: 0, angleCy: 0, angleDegree:0 },
      { angleId: 5, angleName: 'unghiul 5', angleAx: 0, angleAy: 0, angleBx: 0, angleBy: 0, angleCx: 0, angleCy: 0, angleDegree:0 },
      { angleId: 6, angleName: 'unghiul 6', angleAx: 0, angleAy: 0, angleBx: 0, angleBy: 0, angleCx: 0, angleCy: 0, angleDegree:0 },
      { angleId: 7, angleName: 'unghiul 7', angleAx: 0, angleAy: 0, angleBx: 0, angleBy: 0, angleCx: 0, angleCy: 0, angleDegree:0 },
      { angleId: 8, angleName: 'unghiul 8', angleAx: 0, angleAy: 0, angleBx: 0, angleBy: 0, angleCx: 0, angleCy: 0, angleDegree:0 },
      { angleId: 9, angleName: 'unghiul 9', angleAx: 0, angleAy: 0, angleBx: 0, angleBy: 0, angleCx: 0, angleCy: 0, angleDegree:0 },
      { angleId: 10, angleName: 'unghiul 10', angleAx: 0, angleAy: 0, angleBx: 0, angleBy: 0, angleCx: 0, angleCy: 0, angleDegree:0 }
    ];
    return angles;
  }
}
