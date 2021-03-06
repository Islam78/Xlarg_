import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsModule } from './views/posts/posts.module';
import { AdminsModule } from './views/dashboard views/admins/admins.module';
import { UsersModule } from './views/dashboard views/users/users.module';
import { LayoutsModule } from './shared/components/layouts/layouts.module';
import { WebModule } from './views/dashboard views/categories/categories/web/web.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ImageCropperModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PostsModule,
    UsersModule,
    AdminsModule,
    LayoutsModule,
    WebModule
 
    
    // MatTableDataSource
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
