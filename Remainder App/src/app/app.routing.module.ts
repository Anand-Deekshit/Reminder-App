import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-page/login-page-component';
import { HomeScreenComponent } from 'src/app/homescreen/home.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'homescreen', component: HomeScreenComponent}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    //providers: [AuthGuard],
    exports: [RouterModule]
})
export class AppRoutingModule { }