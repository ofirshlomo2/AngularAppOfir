import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OpperationService {

  constructor(private http:HttpClient) { }

  getAllOpperations(){
    return this.http.get('http://localhost:5000/opp').toPromise()
  }
  
  searchAccount(accountNumber:any){
    return this.http.get(`http://localhost:5000/searchAccount?accountNumber=${accountNumber}`).toPromise()
  }

  addOpperation(newFile:any){
    return this.http.post('http://localhost:5000/addOpperation' , newFile).toPromise()
  }
}
