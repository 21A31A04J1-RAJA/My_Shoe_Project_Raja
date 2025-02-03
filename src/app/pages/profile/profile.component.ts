import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  user: { name: string; membership: string } = {
    name: 'John Doe',
    membership: 'f34dcc9ea0a2',
  };
}
