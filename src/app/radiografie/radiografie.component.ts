import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ServiceRadiografie } from '../service-radiografie.service';
import { HelpLineModel } from '../models/HelpLine.model';
import { CalcDistanceModel } from '../models/CalcDistance.model';
import { PointModel } from '../models/Point.model';
import { AngleModel } from "../models/Angle.model";
import {RadiographyService} from "../services/radiography.service";
import {Radiography} from "../models/radiography.model";

declare var $: any;

@Component({
  selector: 'app-radiografie',
  templateUrl: './radiografie.component.html',
  styleUrls: ['./radiografie.component.css'],
})



export class RadiografieComponent implements AfterViewInit {

  public nextClick: string = 'A';
  public radiografieSrc: string;
  categoryId = ['helpLine', 'calcDistance', 'angle', 'point'];
  public modEditable: boolean = true;

  // https://www.unitconverters.net/typography/pixel-x-to-centimeter.htm
  public readonly PX_TO_MM = 0.264583333;
  public readonly PX_TO_CM = 0.0264583333;

  public coordAx: number = -1;
  public coordAy: number = -1;
  public coordBx: number = -1;
  public coordBy: number = -1;
  public coordCx: number = -1;
  public coordCy: number = -1;
  public calculatedAngle: number = -1;


  public helpLines: HelpLineModel[];
  public calcDistances: CalcDistanceModel[];
  public points: PointModel[];
  public angles: AngleModel[];


  public showTablePoints: boolean = false;
  public showTableHelpLines: boolean = false;
  public showTableCalcDistances: boolean = false;
  public showTableAngles: boolean = false;

  public showPoints: boolean = false;
  public showHelpLines: boolean = false;
  public showCalcDistances: boolean = false;
  public showAngles: boolean = false;
  public showLinieAB: boolean = false;
  public showLinieBC: boolean = false;
  public searchPoint: string = '';



  constructor(service: ServiceRadiografie, private radiographyService: RadiographyService) {

    this.radiografieSrc = service.getRadiografieSrc();
    this.helpLines = service.getHelpLines();
    this.calcDistances = service.getCalcDistances();
    this.points = service.getPoints();
    this.angles = service.getAngles();
  }

  ngOnInit() {
    $(document).ready(function() {
      console.log('jquery-OK!')
    });
    //this.radiographyService.getRadiographyById("D8360C5D-1532-461E-A46B-F7866A70AAFD")
    //  .subscribe(data => {
    //    debugger;
    //  });


/*    let radiology = new Radiography();
    radiology.radiographyName = "test from angular";
    this.radiographyService.saveRadiography(radiology)
      .subscribe(data => {
        debugger;
      });*/
  }

  ngAfterViewInit() {}

  public setPoint(e: any) {
    // console.log(this.variable);
    let X = e.offsetX;
    let Y = e.offsetY;

    switch (this.nextClick) {
      case 'A':
        this.nextClickCaseA(X,Y);
        break;
      case 'B':
        this.nextClickCaseB(X,Y);
        break;
      case 'C':
        this.nextClickCaseC(X,Y);
        break;
      case 'O':
        this.nextClickCaseO();
        break;
    }
  }

  public clearSelectedCoordonates() {
    this.coordAx = -1;
    this.coordAy = -1;
    this.coordBx = -1;
    this.coordBy = -1;
    this.coordCx = -1;
    this.coordCy = -1;
    this.calculatedAngle = -1;

    
    // <div *ngIf="linieAB"></div>
    $('#linie-ab').css('display', 'none');
    $('#linie-bc').css('display', 'none');
    $('#point-A').css('display', 'none');
    $('#point-B').css('display', 'none');
    $('#point-C').css('display', 'none');
    return;
  }

  public calculateAngle(
    A1x: number,
    A1y: number,
    A2x: number,
    A2y: number,
    B1x: number,
    B1y: number,
    B2x: number,
    B2y: number
  ) {
    let dAx = A2x - A1x;
    let dAy = A2y - A1y;
    let dBx = B2x - B1x;
    let dBy = B2y - B1y;
    let angle = Math.atan2(dAx * dBy - dAy * dBx, dAx * dBx + dAy * dBy);
    if (angle < 0) {
      angle = angle * -1;
    }
    let degree_angle = angle * (180 / Math.PI);
    return degree_angle;
  }

  public calculatePxDistance(
    pct1x: number,
    pct1y: number,
    pct2x: number,
    pct2y: number
  ) {
    //calculate distance in pixels
    return Math.sqrt(
      (pct1x - pct2x) * (pct1x - pct2x) + (pct1y - pct2y) * (pct1y - pct2y)
    );
  }
  public transformPxToMmDistance(px: number) {
    // transform distance from pixels to mm
    let mm = (px * this.PX_TO_MM);
    return mm;
  }

  public transformPxToCmDistance(px: number) {
    // transform distance from pixels to mm
    let cm = (px * this.PX_TO_CM);
    return cm;
  }

  public drawLine(
    pct1x: number,
    pct1y: number,
    pct2x: number,
    pct2y: number,
    lineId: string,
    ajustPx: number = 0
  ) {
    let distance: number = Math.sqrt(
      (pct1x - pct2x) * (pct1x - pct2x) + (pct1y - pct2y) * (pct1y - pct2y)
    );
    let xMid: number = (pct1x + pct2x) / 2;
    let yMid: number = (pct1y + pct2y) / 2;
    let salopeInRadian: number = Math.atan2(pct1y - pct2y, pct1x - pct2x);
    let salopeInDegrees: number = (salopeInRadian * 180) / Math.PI;
    let left: number = xMid - distance / 2;


    yMid = yMid - ajustPx;
    left = left + ajustPx;
    let line = $('#' + lineId);
    line.css('width', distance + 'px');
    line.css('top', yMid + 'px');
    line.css('left', left + 'px');
    line.css('transform', 'rotate(' + salopeInDegrees + 'deg)');
    line.css('display', 'block');
  }

  public showHelpLinesMethod() {
    for (let helpline of this.helpLines) {
      this.drawLine(
        helpline.helpLineAx,
        helpline.helpLineAy,
        helpline.helpLineBx,
        helpline.helpLineBy,
        'helpLine-' + helpline.helpLineId,
        1
      );
    }
    this.showHelpLines = true;
  }

  public hideHelpLinesMethod() {
    for (let helpline of this.helpLines) {
      $('#helpLine-' + helpline.helpLineId).css('display', 'none');
    }
    this.showHelpLines = false;
  }

  public refreshHelpLines() {
    if (this.showHelpLines) {
      this.showHelpLinesMethod();
    }
  }

  public showCalcDistancesMethod() {
    for (let calcdistance of this.calcDistances) {
      this.drawLine(
        calcdistance.calcDistanceAx,
        calcdistance.calcDistanceAy,
        calcdistance.calcDistanceBx,
        calcdistance.calcDistanceBy,
        'calcDistance-' + calcdistance.calcDistanceId,
        1
      );
    }
    this.showHelpLines = true;
  }

  public hideCalcDistancesMethod() {
    for (let calcdistance of this.calcDistances) {
      $('#calcDistance-' + calcdistance.calcDistanceId).css('display', 'none');
    }
    this.showCalcDistances = false;
  }

  public refreshCalcDistances() {
    if (this.showCalcDistances) {
      this.showCalcDistancesMethod();
    }
  }

  public restartPointA() {
    this.nextClick = 'A';
    this.clearSelectedCoordonates();
  }

  public showPointsMethod() {
    for (let point of this.points) {
      this.drawLine(
        point.pointAx - 3,
        point.pointAy - 3,
        point.pointAx + 3,
        point.pointAy + 3,
        'point-' + point.pointId,
        1
      );
    }
    this.showPoints = true;
  }

  public hidePointsMethod() {
    for (let point of this.points) {
      $('#point-' + point.pointId).css('display', 'none');
    }
    this.showPoints = false;
  }

  public showAnglesMethod() {
    for (let angle of this.angles) {
      this.drawLine(
        angle.angleAx,
        angle.angleAy,
        angle.angleBx,
        angle.angleBy,
        'angleABC-' + angle.angleId,
        1
      );
      this.drawLine(
        angle.angleCx,
        angle.angleCy,
        angle.angleBx,
        angle.angleBy,
        'angleCBA-' + angle.angleId,
        1
      );
    }
    this.showAngles = true;
  }

  public hideAnglesMethod() {
    for (let angle of this.angles) {
      $('#angleABC-' + angle.angleId).css('display', 'none');
      $('#angleCBA-' + angle.angleId).css('display', 'none');
    }
    this.showAngles = false;
  }

  public refreshAngles() {
    if (this.showAngles) {
      this.showAnglesMethod();
    }
  }

  public refreshPoints() {
    if (this.showPoints) {
      this.showPointsMethod();
    }
  }

  public nextClickCaseA(X:number,Y:number){
    this.clearSelectedCoordonates();
    this.coordAx = X;
    this.coordAy = Y;
    this.nextClick = 'B';
    this.drawLine(
      this.coordAx - 3,
      this.coordAy - 3,
      this.coordAx + 3,
      this.coordAy + 3,
      'point-A',
      1
    );
  }

  public nextClickCaseB(X:number,Y:number){
    this.coordBx = X;
    this.coordBy = Y;
    this.nextClick = 'C';
    this.drawLine(
      this.coordAx,
      this.coordAy,
      this.coordBx,
      this.coordBy,
      'linie-ab'
    );
    this.drawLine(
      this.coordBx - 3,
      this.coordBy - 3,
      this.coordBx + 3,
      this.coordBy + 3,
      'point-B',
      1
    );
  }

  public nextClickCaseC(X:number,Y:number){
    this.coordCx = X;
    this.coordCy = Y;
    this.nextClick = 'O';
    this.drawLine(
      this.coordBx,
      this.coordBy,
      this.coordCx,
      this.coordCy,
      'linie-bc'
    );
    this.drawLine(
      this.coordCx - 3,
      this.coordCy - 3,
      this.coordCx + 3,
      this.coordCy + 3,
      'point-C',
      1
    );
    this.calculatedAngle = this.calculateAngle(
      this.coordAx,
      this.coordAy,
      this.coordBx,
      this.coordBy,
      this.coordCx,
      this.coordCy,
      this.coordBx,
      this.coordBy
    );
  }

  public nextClickCaseO(){
    this.nextClick = 'A';
    this.clearSelectedCoordonates();
  }

  public setTableBodyTrPointClass(point: PointModel) {
    if (point.pointAx > 0 || point.pointAy > 0){
      return 'table-success'
    } else {
      return 'table-default'
    }
  }

  public setTitlePointClass(point: PointModel) {
    if ((point.pointAx > 0 || point.pointAy > 0) && this.showPoints) {
      let titlePoint = $('#title-point-' + point.pointId);
      titlePoint.css('left', point.pointAx+9+ 'px');
      titlePoint.css('top', point.pointAy -6 + 'px');
      return 'title-point show'
    } else {
      return 'title-point hide'
    }
  }

  public setTableBodyTrHelpLineClass( helpLine: HelpLineModel){
    if ( helpLine.helpLineAx > 0 || helpLine.helpLineAy > 0 || helpLine.helpLineBx > 0 || helpLine.helpLineBy > 0){
      return 'table-success'
    } else {
      return 'table-default'
    }
  }

  public setTableBodyTrCalcDistanceClass( calcDistance: CalcDistanceModel){
    if ( calcDistance.calcDistanceAx > 0 ||calcDistance.calcDistanceAy > 0 || calcDistance.calcDistanceBx > 0 || calcDistance.calcDistanceBy > 0){
      return 'table-success'
    } else {
      return 'table-default'
    }
  }

  public setTableBodyTrAngleClass( angle: AngleModel){
    if (   angle.angleAx > 0 || angle.angleAy > 0
        || angle.angleBx > 0 || angle.angleBy > 0
        || angle.angleCx > 0 || angle.angleCy > 0 ){
      return 'table-success'
    } else {
      return 'table-default'
    }
  }

  public round( num: number ){
    return Math.round(num * 100)/100 ;
  }

  public searchInText( text: string , stringSearch: string = '' ){
    if (stringSearch === ''){ return true}
    text = text.toLowerCase();
    stringSearch = stringSearch.toLowerCase();
    if (text.search(stringSearch) === -1 ) { return false; }
    return true;
  }

}
