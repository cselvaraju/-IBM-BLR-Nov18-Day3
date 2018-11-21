import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserlistComponent } from './components/userlist/userlist.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'parentchild', component: ParentComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: UserlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
