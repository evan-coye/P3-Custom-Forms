
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  formUrl = "put vaild endpoint here"

  async sendForm(form:any){
    
    let response = await fetch(this.formUrl,{
      
      method: "POST",
      mode: 'cors',
      body: form,
    })

    if(response.status == 200){
      console.log("form added")
    }

  }
}
