import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {CatsComponent, NotFoundComponent} from "./components";
import {CatDetailsComponent} from "./components";

const routes: Routes = [
  {path:'', component: MainLayoutComponent, children:[
      {path:'cats', component: CatsComponent},
      {path:'cats/:id', component:CatDetailsComponent},
      {path:'**', component:NotFoundComponent}

    ]}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
