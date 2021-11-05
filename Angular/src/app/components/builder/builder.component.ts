import { Component, ElementRef, ViewChild, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})

export class BuilderComponent implements OnInit {

  public form: Object = {
  components: [],
  };
  ngOnInit() {
  }
  save() {
  console.log(this.form);
  }
}
