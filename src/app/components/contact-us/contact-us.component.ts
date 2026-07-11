import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../../shared/components/contact-dialog/contact-dialog.component';
import { A11yModule } from '@angular/cdk/a11y';
import { ContactService } from '../../service/contact/contact.service';
import { ToastService, ScAngularToastify } from 'sc-angular-toastify';

@Component({
    selector: 'app-contact-us',
    imports: [A11yModule],
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  constructor(
    private dialog: MatDialog,
    private contactService: ContactService,
    private toast: ToastService,
  ) {}

  openContactDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '800px',
      maxWidth: '95vw',
      height: '80%',
      disableClose: true,
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Form Data:', result);
        this.contactService.saveInquiry(result).subscribe({
          next: (response) => {
            this.toast.show(
              'Thank you for contacting me. I have received your inquiry and will get back to you within 24 hours.',
              'success',
              7000,
              'top-right',
            );
          },
          error: (error) => {
            console.error('Save Inquiry Failed', error);
            this.toast.show(
              'Unable to submit your inquiry at the moment. Please try again later or contact me directly via email.',
              'error',
              7000,
              'top-right',
            );
          },
        });
      }
    });
  }
}
