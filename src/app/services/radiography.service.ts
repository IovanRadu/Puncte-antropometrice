import { HttpClient } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Radiography} from "../models/radiography.model";

@Injectable()
export class RadiographyService {
  constructor(private _http: HttpClient) {
  }

  public getRadiographyById(radiographyId: string) {
    let url = "https://localhost:44377/Radiography/getRadiologyById?radiologyId=" + radiographyId;
    return this._http.get(url);
  }

  public saveRadiography(radiography: Radiography) {
    let url = "https://localhost:44377/Radiography/saveRadiology";
    return this._http.post(url, radiography);
  }
}
