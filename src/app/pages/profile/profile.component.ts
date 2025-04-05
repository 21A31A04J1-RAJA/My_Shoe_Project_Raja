import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: UserAuth | null = null;
  toggleSettingsContent: boolean = false;
  toggleFavoritesContent: boolean = true;
  toggleCommandeContent: boolean = true;
  error: string | null = null;
  loading: boolean = true;

  constructor(private authService: AuthService, private router: Router) {}

  tabs: { title: string; value: number; content: string }[] = [];
  ngOnInit(): void {
    console.log('Profile component initialized');
    const auth = this.authService.authenticateUser();
    console.log('Auth response:', auth);
    if (auth) {
      auth.subscribe({
        next: (user) => {
          console.log('User data received:', user);
          this.user = user;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading user:', error);
          this.error = 'Failed to load user data';
          this.loading = false;
        }
      });
    } else {
      console.log('No auth token found');
      this.error = 'Not authenticated';
      this.loading = false;
    }
  }
  
  ngOnDestroy(): void {
    // Clean up any subscriptions or resources here if needed
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
