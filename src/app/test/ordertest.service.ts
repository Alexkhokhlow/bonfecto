import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdertestService {
  private readonly url =
    'https://api.telegram.org/bot6764724081:AAHnDcHTzaDoLhyvchaEKjZ00OC1k0soUW8/sendPhoto';

  constructor(private readonly http: HttpClient) {}

  checkDate(date1: Date, date2?: Date): boolean {
    if (!date2) {
      date2 = new Date();
    }

    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth()
    );
  }

  public sendPhoto(photoFile: File): void {
    const formData = new FormData();
    formData.append('chat_id', '@bonfectotm');
    formData.append('photo', photoFile, photoFile.name);
    this.http.post(this.url, formData).subscribe();
  }
}
