import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoComplexColumnOrderingComponent } from './so-complex-column-ordering/so-complex-column-ordering.component';
import { StackBlitzComponent } from './stack-blitz/stack-blitz.component';
import { MozillaHolyGrailLayoutComponent } from './mozilla-holy-grail-layout/mozilla-holy-grail-layout.component';
import { StackOverflowGridAreaComponent } from './stack-overflow-grid-area/stack-overflow-grid-area.component';
import { JsFiddleGridWithColumnSpansComponent } from './js-fiddle-grid-with-column-spans/js-fiddle-grid-with-column-spans.component';
import { FAlignContentComponent } from './f-align-content/f-align-content.component';
import { MenuComponent } from './menu/menu.component';
import { FxHideComponent } from './fx-hide/fx-hide.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: "stack-blitz", component: StackBlitzComponent },
  { path: "mozilla-holy-grail-layout", component: MozillaHolyGrailLayoutComponent },
  { path: "complex-column-ordering", component: SoComplexColumnOrderingComponent },
  { path: "stack-overflow-grid-area", component: StackOverflowGridAreaComponent },
  { path: "js-fiddle-grid-with-column-spans", component: JsFiddleGridWithColumnSpansComponent },
  { path: "f-align-content", component: FAlignContentComponent },
  { path: "app-menu", component: MenuComponent, canActivate: [AuthGuard] },
  { path: "fx-hide-component", component: FxHideComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
