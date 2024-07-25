import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThyLayoutModule } from 'ngx-tethys/layout';
import { setPrintErrorWhenIconNotFound } from 'ngx-tethys/icon';
import { ThyNavModule } from 'ngx-tethys/nav';
import { ThyButtonModule } from 'ngx-tethys/button';
import { ThyCheckboxModule } from 'ngx-tethys/checkbox';
import { ThySwitchModule } from 'ngx-tethys/switch';
import { ThyNotifyModule } from 'ngx-tethys/notify';
import { ThyDatePickerModule } from 'ngx-tethys/date-picker';
import { RouterModule } from '@angular/router';
import { GANTT_GLOBAL_CONFIG, NgxGanttModule } from 'ngx-gantt';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { DocgeniTemplateModule } from '@docgeni/template';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppGanttExampleComponent } from './components/gantt/gantt.component';


@NgModule({
  declarations: [
    AppComponent,
    AppGanttExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    DocgeniTemplateModule,
    NgxGanttModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    ThyButtonModule,
    ThyNavModule,
    ThyLayoutModule,
    ThyCheckboxModule,
    ThyNotifyModule,
    ThySwitchModule,
    ThyDatePickerModule
  ],
  providers: [    
    { provide: LOCALE_ID, useValue: 'en-US' },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
