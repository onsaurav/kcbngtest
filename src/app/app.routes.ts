import { Routes } from '@angular/router';
import { NewspannelComponent } from './newspannel/newspannel.component';
import { TestapiComponent } from './testapi/testapi.component';

export const routes: Routes = [
  { path: 'news', component: NewspannelComponent },
  { path: 'test', component: TestapiComponent }
];
