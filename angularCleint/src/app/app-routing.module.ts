import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './component/homepage/homepage.component'
import {AddOpperationComponent} from './component/add-opperation/add-opperation.component'

const routes: Routes = [
  {path:"addOpp" , component: AddOpperationComponent},
  {path:"**" , component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
