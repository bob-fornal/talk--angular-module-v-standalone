import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { Page } from '../../_core/interfaces/block';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  storedata: BehaviorSubject<Page> = new BehaviorSubject<Page>({ title: '', blocks: [] });

  constructor(private http: HttpClient) {}

  getStore = async (store: string): Promise<void> => {
    const url: string = `/assets/api/data/${ store }.json`;

    try {
      const get$ = this.http.get<Page>(url);
      const data = await lastValueFrom(get$);
      this.storedata.next(data);
    } catch (error) {
      console.log(error);
    }
  };
}
