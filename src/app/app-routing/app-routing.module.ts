import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "../main/main.component";

const appRoutes: Routes = [
    {path: 'home', component: MainComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
