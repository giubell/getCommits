import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from '../pages/search-page/search-page.component';
import { AppComponent } from '../app.component';
import { CommitsPageComponent } from '../pages/commits-page/commits-page.component';

const routes: Routes = [
  {
      path: '',
      component: SearchPageComponent,
  },
  {
      path: ':username/:reponame/commits',
      component: CommitsPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
