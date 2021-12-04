import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentListComponent } from './student-list/student-list.component';


const routes: Routes = [
  {path:'students',component: StudentListComponent},
  {path:'create-student',component:CreateStudentComponent},
  {path:'edit/:id',component:EditStudentComponent},
  {path:'delete/:id',component:StudentListComponent},
  {path:'',redirectTo:'students',pathMatch:'full'},
  {path:"**",component:PageNotFoundComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
