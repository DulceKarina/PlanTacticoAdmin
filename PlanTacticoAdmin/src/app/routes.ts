import { Routes } from '@angular/router';
// import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
// import { MenuComponent } from './menu/menu.component';


export const appRoutes: Routes = [
  { path: '', component: LoginComponent},
 { path: 'login', component: LoginComponent},
//   { path: 'menu', component: MenuComponent},
{ path: '**', component: Location}
];