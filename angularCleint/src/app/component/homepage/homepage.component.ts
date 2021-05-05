import { Component, OnInit } from '@angular/core';
import {OpperationService} from 'src/app/services/opperation.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public accounts:any

  constructor(private OpperationService:OpperationService) { }

  ngOnInit(): void {
    this.getAllAccountsDB()
  }

async getAllAccountsDB(){
  this.accounts = await this.OpperationService.getAllOpperations()
    console.log(this.accounts)
}

}
