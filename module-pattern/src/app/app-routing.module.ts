import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },

  { path: 'home/:store', component: StoreComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
