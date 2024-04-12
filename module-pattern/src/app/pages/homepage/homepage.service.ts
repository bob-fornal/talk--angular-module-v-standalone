import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { Page } from '../../_core/interfaces/block';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  pagedata: BehaviorSubject<Page> = new BehaviorSubject<Page>({ title: '', blocks: [] });

  constructor(private http: HttpClient) {}

  getPageData = async (): Promise<void> => {
    const url: string = '/assets/api/data/homepage.json';

    try {
      const get$ = this.http.get<Page>(url);
      const data = await lastValueFrom(get$);
      this.pagedata.next(data);
    } catch (error) {
      console.log(error);
    }
  };
}
