import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // needed for primeng

// Peticiones HTTP
import { HttpClientModule } from '@angular/common/http';

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

// componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';

// servicios
import { AuthService } from './core/services/auth.service';

// Rutas
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
    ToastModule
  ],
  providers: [
    AuthService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
