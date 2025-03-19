import { Component } from '@angular/core';
import { faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faDove } from "@fortawesome/free-solid-svg-icons"
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  email = faEnvelope
  phone = faPhone
  whatsapp = faWhatsapp
  github = faGithub
  linkedin = faLinkedin
  dove = faDove

  sendEmail(){
    window.location.href = `mailto:lucreciaguisasola@hotmail.com`;
  }

  openTab(option: string){
    if (option === `whatsapp`) {
      window.open(`https://wa.me/+61422753154`, `_blank`);
    } else if (option === `linkedin`) {
      window.open(`https://www.linkedin.com/in/lucreciaguisasola/`, `_blank`);
    } else if (option === `github`) {
      window.open(`https://github.com/guisasolalucre`, `_blank`);
    }
  }

  showAlert(option: string) {
    if (option === `call`) {
      Swal.fire({
        title: `TOP SECRET`,
        text: `+54 9 358 4347 037`,
        confirmButtonText: `Got it`,
        confirmButtonColor: '#000000',
      });
    } else if (option === `pidgeon`) {
      Swal.fire({
        title: `That would be pretty awesome, wouldn't it?`,
        confirmButtonText: `For sure`,
        confirmButtonColor: '#000000',
      });
    }
  }

}
