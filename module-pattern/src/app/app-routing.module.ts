import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StoreComponent } from './pages/store/store.component';
import { CourseComponent } from './pages/store/course/course.component';
import { MentoringComponent } from './pages/store/mentoring/mentoring.component';
import { ProductComponent } from './pages/store/product/product.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },

  { path: 'home/:store/course', component: CourseComponent },
  { path: 'home/:store/mentoring', component: MentoringComponent },
  { path: 'home/:store/product', component: ProductComponent },

  { path: 'home/:store', component: StoreComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
