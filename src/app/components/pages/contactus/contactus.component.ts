import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('smtp_server', 'template_8uQnFG6N_clone', e.target as HTMLFormElement, 'user_XWPdjpTv0DgrQb9FN3tWr')
      .then((result: EmailJSResponseStatus) => {
        alert("This form has been submitted.");
        location.href = '#';
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  ngOnInit(): void {
  }

}
