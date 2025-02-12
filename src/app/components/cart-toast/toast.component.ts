import { ToastService } from '../../services/toast/toast.service';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Router } from '@angular/router';
import CartProduct from '../../model/CartProduct';
@Component({
  selector: 'app-cart-toast',
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

  ngOnInit() {
    this.toastService.displaytoast$.subscribe((value: CartProduct) => {
      this.showConfirm(value);
    });
  }

  showConfirm(product: CartProduct) {
    this.messageService.add({
      key: 'confirm',
      sticky: false,
      severity: 'success',
      data: product,
      life: 3000,
    });
  }

  onReject() {
    this.messageService.clear('confirm');
  }

  navigateCartPage() {
    this.router.navigate(['cart']);
    this.messageService.clear('confirm');
  }
}
