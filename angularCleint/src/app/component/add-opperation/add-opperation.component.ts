import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {OpperationService} from 'src/app/services/opperation.service'

@Component({
  selector: 'app-add-opperation',
  templateUrl: './add-opperation.component.html',
  styleUrls: ['./add-opperation.component.css']
})
export class AddOpperationComponent implements OnInit {
public insertOpperations: any ={}
public accountNumber:Number | null
public selected: Number | null
public accounts:any



  constructor(private OpperationService:OpperationService) {
    this.accounts = ["loan" ,"payments", "interest","income","output"]
    this.accountNumber = null
    this.selected = null
   }

  ngOnInit(): void {
  }



  async addOpperation(event:any){
     this.insertOpperations =event;
     this.insertOpperations["accountNumber"] = this.accountNumber;
     this.insertOpperations["type"] = this.selected;
           console.log(this.insertOpperations)
     try {
         const response = await this.OpperationService.addOpperation(this.insertOpperations)
         console.log(response)
  } catch (error) {
         console.log(error)
         alert("Something went wrong...")
}
}
  }

