import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notification: string[];

  constructor() {
    this.notification = [
      'you have un reaed messages',
      'people eact to your photo',
      'aya love you',
      '',
      'post saved successfully',
    ];
  }
  getNotifications(): Observable<string> {
    return new Observable<string>((observer) => {
      let counter = 0;
      let notificationInterval = setInterval(() => {
        console.log("test");
        
        if (counter == this.notification.length) {
          observer.complete();
        }
        if (this.notification[counter] == '') {
          observer.error('This message is empty');
        }
        observer.next(this.notification[counter]);
        counter++;
      }, 2000);
      return {
        unsubscribe: () => {
          clearInterval(notificationInterval);
        },
      };
    });
  }
}
