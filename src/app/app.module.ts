import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversetextPipe } from './pipes/reversetext.pipe';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { PiglatinPipe } from './pipes/piglatin.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ObservableService } from './services/observable.service';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { ObservableUserService } from './services/observableUser.service';
import { PostsService } from './services/posts.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './components/userlist/userlist.component';
import { ObservableuserComponent } from './components/observableuser/observableuser.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ReversetextPipe,
    PipedemoComponent,
    PiglatinPipe,
    ParentComponent,
    ChildComponent,
    TestObservableComponent,
    UserlistComponent,
    ObservableuserComponent,
    PostsComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ObservableService,
    ObservableUserService,
    PostsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
