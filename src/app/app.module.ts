import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatIconModule, MatNavList, MatListModule, MatListItem, MatCheckboxModule } from '@angular/material';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CommitsPageComponent } from './pages/commits-page/commits-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommitsListComponent } from './components/commits-list/commits-list.component';
import { CommitDetailsComponent } from './components/commit-details/commit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    CommitsPageComponent,
    CommitsListComponent,
    CommitDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
