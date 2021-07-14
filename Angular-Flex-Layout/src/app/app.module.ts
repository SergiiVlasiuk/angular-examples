import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StackBlitzComponent } from './stack-blitz/stack-blitz.component';
import { MozillaHolyGrailLayoutComponent } from './mozilla-holy-grail-layout/mozilla-holy-grail-layout.component';
import { SoComplexColumnOrderingComponent } from './so-complex-column-ordering/so-complex-column-ordering.component';
import { StackOverflowGridAreaComponent } from './stack-overflow-grid-area/stack-overflow-grid-area.component';
import { JsFiddleGridWithColumnSpansComponent } from './js-fiddle-grid-with-column-spans/js-fiddle-grid-with-column-spans.component';
import { FAlignContentComponent } from './f-align-content/f-align-content.component';
import { MenuComponent } from './menu/menu.component';
import { MenuPanelComponent } from './navigation/menu-panel/menu-panel.component';
import { FxHideComponent } from './fx-hide/fx-hide.component';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { SidenavMenuComponent } from './navigation/sidenav-menu/sidenav-menu.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    StackBlitzComponent,
    MozillaHolyGrailLayoutComponent,
    SoComplexColumnOrderingComponent,
    StackOverflowGridAreaComponent,
    JsFiddleGridWithColumnSpansComponent,
    FAlignContentComponent,
    MenuComponent,
    MenuPanelComponent,
    FxHideComponent,
    SidenavMenuComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedMaterialModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
