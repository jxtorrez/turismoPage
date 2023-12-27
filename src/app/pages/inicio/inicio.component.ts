import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BlogComponent } from '../../shared/blog/blog.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesComponent } from '../../shared/services/services.component';
import { FeaturesComponent } from '../../shared/features/features.component';
import { PricingComponent } from '../../shared/pricing/pricing.component';
import { TeamComponent } from '../../shared/team/team.component';
import { ContactComponent } from '../../shared/contact/contact.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BlogComponent,
    FooterComponent,
    ServicesComponent,
    FeaturesComponent,
    PricingComponent,
    TeamComponent,
    ContactComponent

  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  currentSection = 'home';

  constructor(
    private modalService: NgbModal,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) { }

  openModal(modal: any) {
    this.modalService.open(modal, { windowClass: 'dark-modal', size: 'lg' });
  }

  toggleMenu() {
    let navbarCollapse = document.getElementById('navbarCollapse');
    if (navbarCollapse != null) {
      navbarCollapse.classList.toggle('show');
    }
  }


  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar != null) {
      if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navbar.style.backgroundColor = '#272a33';
        navbar.style.padding = '10px';
      }
      else {
        navbar.style.backgroundColor = '';
        navbar.style.padding = '20px';
      }
    }
  }
  onClickScroll(elementId: any) {
    this.currentSection = elementId;
    this.viewportScroller.scrollToAnchor(elementId);
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }
}
