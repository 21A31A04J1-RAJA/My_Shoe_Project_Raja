import { ToastService } from './../../services/toast/toast.service';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router';
import CartProduct from '../../model/CartProduct';
@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [ToastModule, ButtonModule, RippleModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  constructor(
    private messageService: MessageService,
    private router: Router,
    private toastService: ToastService
  ) {}
  visible: boolean = false;

  ngOnInit() {
    this.toastService.displaytoast$.subscribe((value) => {
      console.log(value);
      if (value) {
        this.showConfirm(value);
      }
    });
  }

  showConfirm(product: any) {
    if (!this.visible) {
      this.messageService.add({
        key: 'confirm',
        sticky: false,
        severity: 'success',
        summary: `${product.name}`,
        detail: product,
        life: 5000,
      });
      this.visible = true;
    }
  }

  onConfirm() {
    this.messageService.clear('confirm');
    this.visible = false;
  }

  onReject() {
    this.messageService.clear('confirm');
    this.visible = false;
  }

  navigateCartPage() {
    this.router.navigate(['cart']);
    this.onConfirm();
  }
}
