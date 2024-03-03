import { Routes } from '@angular/router';
import { NewspannelComponent } from './newspannel/newspannel.component';
import { TestapiComponent } from './testapi/testapi.component';
import { RaffComponent } from './raff/raff.component';
import { OthersComponent } from './others/others.component';
import { ItemComponent } from './item/item.component';

export const routes: Routes = [
  { path: 'news', component: NewspannelComponent },
  { path: 'test', component: TestapiComponent },
  { path: 'raff', component: RaffComponent },
  { path: 'others', component: OthersComponent },
  { path: 'items/:id', component: ItemComponent }
];
