import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isLogged!: boolean;

  constructor(private _userAuthService: UserAuthService) {}

  ngOnInit(): void {
    this._userAuthService.getauthSubject().subscribe({
      next: (status) => {
        this.isLogged = status;
      },
    });
  }
}
