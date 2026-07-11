import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
    selector: 'app-contact-dialog',
    imports: [ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule],
    templateUrl: './contact-dialog.component.html',
    styleUrl: './contact-dialog.component.scss'
})
export class ContactDialogComponent {
 contactForm: FormGroup;
  submitted = false;
  loading = false;

  inquiryTypes = [
    'Recruiter',
    'Freelance Client',
    'General Inquiry'
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ContactDialogComponent>
  ) {

    this.contactForm = this.fb.group({
      inquiryType: ['', Validators.required],
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10}$/)
        ]
      ],
      position: ['', Validators.required],
      budget: [''],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(20)
        ]
      ]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  submitForm(): void {

    this.submitted = true;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    console.log(this.contactForm.value);

    setTimeout(() => {
      this.loading = false;
      this.dialogRef.close(this.contactForm.value);
    }, 1000);
  }

  close(): void {
    this.dialogRef.close();
  }
}
