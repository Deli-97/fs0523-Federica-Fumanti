import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostattiviComponent } from './pages/postattivi/postattivi.component';
import { PostInattiviComponent } from './pages/post-inattivi/post-inattivi.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'postattivi',
    component: PostattiviComponent
  },
  {
    path: 'post-inattivi',
    component: PostInattiviComponent
  }
];
