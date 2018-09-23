import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AceEditorModule } from 'ng2-ace-editor';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LeftMenuComponent } from './common/left-menu/left-menu.component';
import { OnlineEditorComponent } from './online-editor/online-editor.component';
import { OnlineCompilerService } from './online-editor/online-compiler.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    OnlineEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AceEditorModule
  ],
  providers: [OnlineCompilerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
