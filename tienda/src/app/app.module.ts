import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagoComponent } from './pago/pago.component';
import { ProductosComponent } from './productos/productos.component';
import { TotalService } from './total.service';
import { OrdenComponent } from './orden/orden.component';
import { FacturaComponent } from './factura/factura.component';


const routes: Routes = [{
    path:'',
    component: LoginComponent
},
{
    path:'productos',
    component: ProductosComponent
},
{
  path:'orden',
  component: OrdenComponent
},
{
  path:'factura',
  component: FacturaComponent
},
{
    path:'pago',
    component: PagoComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagoComponent,
    ProductosComponent,
    OrdenComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
    FormsModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Campo requerido',
          minlength: ({ requiredLength, actualLength }) =>
          `Se esperan ${requiredLength} caracteres, pero obtuve ${actualLength}`
        }
      }
    })
    
  ],
  providers: [
    TotalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
