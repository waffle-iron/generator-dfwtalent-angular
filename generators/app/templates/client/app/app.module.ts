import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }   from './app.component';
import { routing } from './app.routes';
import { HomeService } from './home';
import { HeaderComponent } from './shared';
import { HomeComponent } from './home';
import { FontsComponent, IconsComponent, ColorsComponent } from './styleguide';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FontsComponent,
        IconsComponent,
        ColorsComponent
    ],
    providers: [
        HomeService
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}