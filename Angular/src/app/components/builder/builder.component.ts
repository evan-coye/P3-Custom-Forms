import { Component, ElementRef, ViewChild, EventEmitter, OnInit } from '@angular/core';
import { Formio } from 'formiojs';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})

export class BuilderComponent implements OnInit {

  public form: Object = {
    components: []
  };

  // according to: https://github.com/formio/angular/issues/528
  //               https://github.com/formio/angular/issues/241
  // this should be able to be passed into the form-builder element
  // e.g. [options]="options"
  // but the options input expects a different type than what is shown in the examples
  options = {
    builder: {
      basic: false,
      advanced: false,
      data: false,
      premium: false,
      customBasic: {
        title: 'My Basics',
        default: true,
        weight: 0,
        components: {
          textfield: true,
          textarea: true
        },
      },
      custom: {
        title: 'Big Checks',
        default: true,
        weight: 10,
        components: {
          multicheckbuttons: true,
          checkboxbutton: true,
          radiobuttons: true,
          yesnobuttons: true
        }
      }
    }
  };

  ngOnInit() {

  }

  save() {
    console.log(this.form);
  }
}
