import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  user!: UserAuth;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.authenticateUser()?.subscribe((value) => {
      this.user = value;
    });
  }
}
interface UserAuth {
  id: string;
  email: string;
  username: string;
  role: string;
}
