import { Component, ElementRef, ViewChild, EventEmitter, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';




@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})

export class BuilderComponent implements OnInit {


  public isSaved:boolean = false;
  public jsonString:String = "";

  constructor(private fs:FormService, private router: Router){}


  public form: Object = {
    components: []
 };



































  ngOnInit() {

  }

  save() {

  this.isSaved = true;
  console.log(this.form);

  this.jsonString=JSON.stringify(this.form, null, 4)
  console.log(this.jsonString)
  // localStorage.setItem('myform', JSON.stringify(this.form));
  // let myContainer = document.getElementById("newForm") as HTMLElement
  // console.log(JSON.stringify(this.form))

  // this.router.navigate(['/formPreview']);
  
  }
  editForm(){
    this.isSaved = false;
    console.log(this.isSaved)
  }
  sendForm(){
    this.fs.sendForm(this.form)



  }
}
