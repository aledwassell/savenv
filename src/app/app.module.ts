import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing/app-routing.module";
import {MatMenuModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { MessageBannerComponent } from './message-banner/message-banner.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        MainComponent,
        FooterComponent,
        MessageBannerComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatMenuModule,
        HttpClientModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
