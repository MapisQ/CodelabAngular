import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './Component/my-profile/my-profile.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'MyProfile', pathMatch: 'full'},
  {path:'MyProfile', component: MyProfileComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
