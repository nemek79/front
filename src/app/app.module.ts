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
import {  } from 'primeng/menu/menu';
// componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';

// servicios
import { AuthService } from './core/services/auth.service';
import { HeaderService } from './core/services/header.service';
import { LoaderService } from './core/services/loader.service';

// Rutas
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './core/components/comunes/header/header.component';
import { TestComponent } from './core/components/comunes/test/test.component';
import { LoaderComponent } from './core/components/loader/loader.component';


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
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    TestComponent,
    LoaderComponent
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
    SplitButtonModule
  ],
  providers: [
    AuthService,
    MessageService,
    LoaderService,
    HeaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
