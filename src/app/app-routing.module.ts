import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PageComponent} from './page/page.component';

const routes = [
  {
    path: 'page',
    component: PageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
