import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent implements OnInit {

  constructor() { }
  
  @Input() form="form";
  @Input() jsonString="jsonString";

  ngOnInit(): void {
  }

  

}
