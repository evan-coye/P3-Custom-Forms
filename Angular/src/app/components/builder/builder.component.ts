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


  public form: any = {
    components: []
 };

  ngOnInit() {

  }

  save() {

  this.isSaved = true;
  console.log(this.form);

  this.jsonString=JSON.stringify(this.form, null, 4)
  console.log(this.jsonString)
  
  }
  editForm(){
    this.isSaved = false;
    console.log(this.isSaved)
  }
  sendForm(){

    let formConfig = JSON.stringify(this.form.components)
    this.fs.sendForm(formConfig)
  }

  download() {
    let element = document.createElement('a');
    let fileContent = this.jsonString as string
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContent));
    element.setAttribute('download', "Form JSON");
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  
}
