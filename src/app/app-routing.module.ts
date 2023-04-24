import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LeadsComponent } from './leads/leads.component';


const routes: Routes = [
  {
    path:'dashboard', component:DashboardComponent
  },
   {
     path:'',redirectTo:'dashboard',pathMatch:'full'
  }
  ,
  {
    path:'employees', component:EmployeesComponent
  },
  {
    path:'gallery', component:GalleryComponent
  },
  {
    path:'contacts', component:ContactsComponent
  },
  {
    path:'leads', component:LeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
