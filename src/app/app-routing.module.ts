import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { WorkComponentComponent } from "./work/work-component.component";
import { ResumeComponent } from "./resume/resume.component";
import {CriticalDesignComponent} from "./case-study/critical-design/critical-design.component";



const routes: Routes = [
  { path: 'work', component: WorkComponentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'critical-design', component: CriticalDesignComponent},
  { path: '', redirectTo: '/work', pathMatch: 'full' },
  { path: '**', redirectTo: '/work', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
