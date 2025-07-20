import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      emailjs.send(
        'service_aotautv',   // e.g., 'service_abcd123'
        'template_e7lmr22',  // e.g., 'template_xyz789'
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'F4gq5OHhLL-2uFTzY'     // e.g., 'abcdefg123456' (EmailJS public API key)
      ).then(() => {
        this.submitted = true;
        this.contactForm.reset();
      }).catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Something went wrong. Please try again later.');
      });
    }
  }
  
}
