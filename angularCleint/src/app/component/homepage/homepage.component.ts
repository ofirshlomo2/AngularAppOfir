import { Component, OnInit } from '@angular/core';
import {OpperationService} from 'src/app/services/opperation.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
public accounts:any
 public accountNumber:Number

  constructor(private OpperationService:OpperationService) { 
    this.accounts =[]
    this.accountNumber =null
  }
 

  ngOnInit(): void {
    this.getAllAccountsDB()
  }

async getAllAccountsDB(){
  this.accounts = await this.OpperationService.getAllOpperations()
    console.log(this.accounts)
}

async search(){
  try {
    this.accounts = await this.OpperationService.searchAccount(this.accountNumber);
  console.log("accounts", this.accountNumber)
  if(!this.accounts.length)
  alert('There is no account [this.accountNumber] found')
}catch (error){
  console.log(error)
  alert("Something went wrong,search functions")
}
}
}
