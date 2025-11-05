import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit , OnDestroy {
  subscription !:Subscription;
  constructor(private _notificationService: NotificationService) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  ngOnInit(): void {


   this.subscription= this._notificationService.getNotifications().subscribe({
      next:(notification)=>{console.log(notification);
      },
      error:(eroor)=>{console.log(eroor);
      },
      complete:()=>{console.log("completed ");
      },
    })

  }
}
