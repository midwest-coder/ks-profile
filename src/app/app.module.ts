import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MastheadComponent } from './masthead/masthead.component';
import { OverviewComponent } from './overview/overview.component';
import { DatabasicsComponent } from './databasics/databasics.component';
import { ExperienceComponent } from './experience/experience.component';
import { StageZeroComponent } from './stage-zero/stage-zero.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MastheadComponent,
    DatabasicsComponent,
    ExperienceComponent,
    OverviewComponent,
    StageZeroComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: "", component: DatabasicsComponent},
      {path: "stage-zero", component: StageZeroComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
