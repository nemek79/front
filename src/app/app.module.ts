import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // needed for primeng

// Peticiones HTTP
import { HttpClientModule } from '@angular/common/http';

// Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './core/interceptors/LoaderInterceptor.service';

// import fortawesome
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// imports primeng
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AccordionModule } from 'primeng/accordion';

// componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './core/pages/login/login.component';
import { HomeComponent } from './core/pages/home/home.component';
import { HeaderComponent } from './core/components/comunes/header/header.component';
import { TestComponent } from './core/components/comunes/test/test.component';
import { LoaderComponent } from './core/components/comunes/loader/loader.component';
import { ButtonComponent } from './core/components/comunes/button/button.component';
import { InputtextComponent } from './core/components/comunes/inputtext/inputtext.component';
import { InputpasswordComponent } from './core/components/comunes/inputpassword/inputpassword.component';
import { CombouserComponent } from './core/components/comunes/header/combouser/combouser.component';

// servicios
import { AuthService } from './core/services/auth.service';
import { HeaderService } from './core/services/header.service';
import { LoaderService } from './core/services/loader.service';
import { SidebarService } from './core/services/sidebar.service';

// Rutas
import {RouterModule, Routes} from '@angular/router';

// Guards
import { AuthGuard } from './core/security/auth.guard';
import { RoleGuard } from './core/security/role.guard';
import { CrudComponent } from './core/pages/crud/crud.component';
import { MenulateralComponent } from './core/components/comunes/menulateral/menulateral.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent, canActivate: [AuthGuard, RoleGuard], data: {role: ['ROLE_USER', 'ROLE_ADMIN']}
  },
  {
    path: 'democrud',
    component: CrudComponent, canActivate: [AuthGuard, RoleGuard], data: {role: ['ROLE_ADMIN']}
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    TestComponent,
    LoaderComponent,
    ButtonComponent,
    InputtextComponent,
    InputpasswordComponent,
    CombouserComponent,
    CrudComponent,
    MenulateralComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    PasswordModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    ToastModule,
    MenuModule,
    KeyFilterModule,
    DropdownModule,
    SplitButtonModule,
    AccordionModule
  ],
  providers: [
    AuthService,
    MessageService,
    LoaderService,
    HeaderService,
    SidebarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
