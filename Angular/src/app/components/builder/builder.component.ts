import { Component, ElementRef, ViewChild, EventEmitter, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})

export class BuilderComponent implements OnInit {

  constructor(private fs:FormService){}

  public form: Object = {
  components: [],
  };
  ngOnInit() {
  }
  save() {
  console.log(this.form);
  
  this.fs.sendForm(this.form)
  }
}
