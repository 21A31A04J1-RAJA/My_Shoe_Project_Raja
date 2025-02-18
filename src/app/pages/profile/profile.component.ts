import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user!: UserAuth;
  toggleSettingsContent: boolean = false;
  toggleFavoritesContent: boolean = true;
  toggleCommandeContent: boolean = true;

  constructor(private authService: AuthService) {}

  tabs: { title: string; value: number; content: string }[] = [];
  ngOnInit(): void {
    this.authService.authenticateUser()?.subscribe((value) => {
      this.user = value;
    });
  }
  openCloseContentTab(tab: string) {
    if (tab === 'toggleFavoritesContent')
      this.toggleFavoritesContent = !this.toggleFavoritesContent;
    if (tab === 'toggleSettingsContent')
      this.toggleSettingsContent = !this.toggleSettingsContent;
    if (tab === 'toggleCommandeContent')
      this.toggleCommandeContent = !this.toggleCommandeContent;
  }
  deleteAccount() {
    console.log('here');
    this.authService.deleteAccount()?.subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.authService.logout();
  }
}
interface UserAuth {
  id: string;
  email: string;
  username: string;
  role: string;
}
