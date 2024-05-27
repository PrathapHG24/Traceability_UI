import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LogDataService {
  constructor(private http: HttpClient) {}

  public getLogData() {
    return this.http.get(environment.app_url + '/data/getLogData');
  }

  public getMachine1UpdatedData() {
    return this.http.get(environment.app_url + '/data/getMachine1UpdatedData');
  }

  public getMachine1UpdatedResults() {
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine1UpdatedResults'
    );
  }

  public getMachine1FilteredData(fromDate: string, toDate: string) {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine1FilteredData',
      { params }
    );
  }

  public getMachine1DataUsingProductId(productId: string) {
    const params = new HttpParams().set('prodId', productId);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine1DataUsingProductId',
      { params }
    );
  }

  public getMachine2UpdatedData() {
    return this.http.get(environment.app_url + '/data/getMachine2UpdatedData');
  }

  public getMachine2UpdatedResults() {
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine2UpdatedResults'
    );
  }

  public getMachine2FilteredData(fromDate: string, toDate: string) {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine2FilteredData',
      { params }
    );
  }

  public getMachine2DataUsingProductId(productId: string) {
    const params = new HttpParams().set('prodId', productId);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine2DataUsingProductId',
      { params }
    );
  }

  public getMachine3UpdatedData() {
    return this.http.get(environment.app_url + '/data/getMachine3UpdatedData');
  }

  public getMachine3UpdatedResults() {
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine3UpdatedResults'
    );
  }

  public getMachine3FilteredData(fromDate: string, toDate: string) {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine3FilteredData',
      { params }
    );
  }

  public getMachine3DataUsingProductId(productId: string) {
    const params = new HttpParams().set('prodId', productId);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine3DataUsingProductId',
      { params }
    );
  }

  public getMachine4UpdatedData() {
    return this.http.get(environment.app_url + '/data/getMachine4UpdatedData');
  }

  public getMachine4UpdatedResults() {
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine4UpdatedResults'
    );
  }

  public getMachine4FilteredData(fromDate: string, toDate: string) {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine4FilteredData',
      { params }
    );
  }

  public getMachine4DataUsingProductId(productId: string) {
    const params = new HttpParams().set('prodId', productId);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine4DataUsingProductId',
      { params }
    );
  }

  public getMachine5UpdatedData() {
    return this.http.get(environment.app_url + '/data/getMachine5UpdatedData');
  }

  public getMachine5UpdatedResults() {
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine5UpdatedResults'
    );
  }

  public getMachine5FilteredData(fromDate: string, toDate: string) {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine5FilteredData',
      { params }
    );
  }

  public getMachine5DataUsingProductId(productId: string) {
    const params = new HttpParams().set('prodId', productId);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine5DataUsingProductId',
      { params }
    );
  }

  public getMachine6UpdatedData() {
    return this.http.get(environment.app_url + '/data/getMachine6UpdatedData');
  }

  public getMachine6UpdatedResults() {
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine6UpdatedResults'
    );
  }

  public getMachine6FilteredData(fromDate: string, toDate: string) {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine6FilteredData',
      { params }
    );
  }

  public getMachine6DataUsingProductId(productId: string) {
    const params = new HttpParams().set('prodId', productId);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine6DataUsingProductId',
      { params }
    );
  }

  public getMachine7UpdatedData() {
    return this.http.get(environment.app_url + '/data/getMachine7UpdatedData');
  }

  public getMachine7UpdatedResults() {
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine7UpdatedResults'
    );
  }

  public getMachine7FilteredData(fromDate: string, toDate: string) {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine7FilteredData',
      { params }
    );
  }

  public getMachine7DataUsingProductId(productId: string) {
    const params = new HttpParams().set('prodId', productId);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine7DataUsingProductId',
      { params }
    );
  }

  public getMachine8UpdatedData() {
    return this.http.get(environment.app_url + '/data/getMachine8UpdatedData');
  }

  public getMachine8UpdatedResults() {
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine8UpdatedResults'
    );
  }

  public getMachine8FilteredData(fromDate: string, toDate: string) {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine8FilteredData',
      { params }
    );
  }

  public getMachine8DataUsingProductId(productId: string) {
    const params = new HttpParams().set('prodId', productId);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine8DataUsingProductId',
      { params }
    );
  }

  public getMachine9UpdatedData() {
    return this.http.get(environment.app_url + '/data/getMachine9UpdatedData');
  }

  public getMachine9UpdatedResults() {
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine9UpdatedResults'
    );
  }

  public getMachine9FilteredData(fromDate: string, toDate: string) {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine9FilteredData',
      { params }
    );
  }

  public getMachine9DataUsingProductId(productId: string) {
    const params = new HttpParams().set('prodId', productId);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine9DataUsingProductId',
      { params }
    );
  }

  public getMachine13UpdatedData() {
    return this.http.get(environment.app_url + '/data/getMachine13UpdatedData');
  }

  public getMachine13UpdatedResults() {
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine13UpdatedResults'
    );
  }

  public getMachine13FilteredData(fromDate: string, toDate: string) {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine13FilteredData',
      { params }
    );
  }

  public getMachine13DataUsingProductId(productId: string) {
    const params = new HttpParams().set('prodId', productId);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine13DataUsingProductId',
      { params }
    );
  }
  public getMachine10UpdatedData() {
    return this.http.get(environment.app_url + '/data/getMachine10UpdatedData');
  }

  public getMachine10UpdatedResults() {
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine10UpdatedResults'
    );
  }

  public getMachine10FilteredData(fromDate: string, toDate: string) {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine10FilteredData',
      { params }
    );
  }

  public getMachine10DataUsingProductId(productId: string) {
    const params = new HttpParams().set('prodId', productId);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine10DataUsingProductId',
      { params }
    );
  }

  public getMachine14UpdatedData() {
    return this.http.get(environment.app_url + '/data/getMachine14UpdatedData');
  }

  public getMachine14UpdatedResults() {
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine14UpdatedResults'
    );
  }

  public getMachine14FilteredData(fromDate: string, toDate: string) {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine14FilteredData',
      { params }
    );
  }

  public getMachine14DataUsingProductId(productId: string) {
    const params = new HttpParams().set('prodId', productId);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine14DataUsingProductId',
      { params }
    );
  }

  public getMachine11UpdatedData() {
    return this.http.get(environment.app_url + '/data/getMachine11UpdatedData');
  }

  public getMachine11UpdatedResults() {
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine11UpdatedResults'
    );
  }

  public getMachine11FilteredData(fromDate: string, toDate: string) {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine11FilteredData',
      { params }
    );
  }

  public getMachine11DataUsingProductId(productId: string) {
    const params = new HttpParams().set('prodId', productId);
    return this.http.get<any[]>(
      environment.app_url + '/data/getMachine11DataUsingProductId',
      { params }
    );
  }
  //code for machine 12 (70A) ..//
  public getmachine19UpdatedData() {
    return this.http.get(environment.app_url + '/data/getmachine19UpdatedData');
  }

  public getmachine19UpdatedResults() {
    return this.http.get<any[]>(
      environment.app_url + '/data/getmachine19UpdatedResults'
    );
  }

  public getmachine19FilteredData(fromDate: string, toDate: string) {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<any[]>(
      environment.app_url + '/data/getmachine19FilteredData',
      { params }
    );
  }

  public getmachine19DataUsingProductId(productId: string) {
    const params = new HttpParams().set('prodId', productId);
    return this.http.get<any[]>(
      environment.app_url + '/data/getmachine19DataUsingProductId',
      { params }
    );
  }

  public getTotalProductionCount() {
    return this.http.get(environment.app_url + '/data/getTotalProductionCount');
  }

  public getLine1UpdatedResults() {
    return this.http.get<any[]>(
      environment.app_url + '/data/getLine1UpdatedResults'
    );
  }

  public getLine1FilteredData(fromDate: string, toDate: string) {
    const params = new HttpParams()
      .set('fromDate', fromDate)
      .set('toDate', toDate);
    return this.http.get<any[]>(
      environment.app_url + '/data/getLine1FilteredData',
      { params }
    );
  }

  public getLine1DataUsingProductId(productId: string) {
    const params = new HttpParams().set('prodId', productId);
    return this.http.get<any[]>(
      environment.app_url + '/data/getLine1DataUsingProductId',
      { params }
    );
  }

  public getDailyReport() {
    return this.http.get(environment.app_url + '/data/getDailyReport');
  }

  public deleteLine1(endDate: string) {
    const params = new HttpParams().set('endDate', endDate);
    return this.http.get(environment.app_url + '/data/deleteLine1', { params });
  }
}
