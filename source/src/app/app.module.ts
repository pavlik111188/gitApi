import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommitComponent } from './commit/commit.component';

import { GitService } from './services/git.service';

@NgModule({
  declarations: [
    AppComponent,
    CommitComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
