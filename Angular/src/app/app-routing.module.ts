import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuilderComponent } from './components/builder/builder.component';


const routes: Routes = [

  // {
  //   path:"",
  //   component:LoginComponent
  // },

  {
    path:"",
    component:BuilderComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
