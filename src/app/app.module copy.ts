import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomePrincipalComponent } from './Components/home-principal/home-principal.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';
import { PerfilEmpresaComponent } from './Components/perfil-empresa/perfil-empresa.component';
import { NotificacionesEmpresaComponent } from './Components/notificaciones-empresa/notificaciones-empresa.component';
import { ModificarDatosEmpresaComponent } from './Components/modificar-datos-empresa/modificar-datos-empresa.component';
import { InicioSesionComponent } from './Components/inicio-sesion/inicio-sesion.component';
import { CategoriasComponent } from './Components/categorias/categorias.component';
import { ExamenOfertaComponent } from './Components/examen-oferta/examen-oferta.component';
import { HomeEmpresaComponent } from './Components/home-empresa/home-empresa.component';
import { HomeUserComponent } from './Components/home-user/home-user.component';
import { ModificarDatosUserComponent } from './Components/modificar-datos-user/modificar-datos-user.component';
import { NotificacionesUserComponent } from './Components/notificaciones-user/notificaciones-user.component';
import { OfertasComponent } from './Components/ofertas/ofertas.component';
import { MorseComponent } from './Components/morse/morse.component';
import { PerfilUserComponent } from './Components/perfil-user/perfil-user.component';
import { ReclutadorComponent } from './Components/reclutador/reclutador.component';
import { RegistroEmpresaComponent } from './Components/registro-empresa/registro-empresa.component';
import { OlvidarpasswordComponent } from './Components/olvidarpassword/olvidarpassword.component';
import { RegistroUserComponent } from './Components/registro-user/registro-user.component';
import { TarjetasUserComponent } from './Components/tarjetas-user/tarjetas-user.component';
import { TarjetasCompanyComponent } from './Components/tarjetas-company/tarjetas-company.component';
import { PagosComponent } from './Components/pagos/pagos.component';
import { PagosEmpresaComponent } from './Components/pagos-empresa/pagos-empresa.component';

const routesApp: Routes = [
  {path: '', component: HomePrincipalComponent},
  {path: 'perfil/Empresa', component: PerfilEmpresaComponent},
  {path: 'login', component: InicioSesionComponent},
  {path: 'nosotros', component: MorseComponent},
  {path: 'recuperarpassword', component: OlvidarpasswordComponent},
  {path: 'crearOferta', component: OfertasComponent},
  {path: 'examOferta', component: ExamenOfertaComponent},
  {path: 'notificacion/company', component: NotificacionesEmpresaComponent},
  {path: 'modificarDatos/company', component: ModificarDatosEmpresaComponent},
  {path: 'categorias/ofertasLaborales', component: CategoriasComponent},
  {path: 'homeEmpresa', component: HomeEmpresaComponent},
  {path: 'homeUser', component: HomeUserComponent},
  {path: 'ModificarDatos/User', component: ModificarDatosUserComponent},
  {path: 'notificacion/User', component: NotificacionesUserComponent},
  {path: 'perfil/User', component: PerfilUserComponent},
  {path: 'losMejoresProgramadores/reclutar', component: ReclutadorComponent},
  {path: 'registroCompany', component: RegistroEmpresaComponent},
  {path: 'registroUser', component: RegistroUserComponent},
  {path: 'pagos', component: PagosComponent},
  {path: 'pagos-Empresa', component: PagosEmpresaComponent},
  {path: 'tarjetas-user', component: TarjetasUserComponent},
  {path: 'tarjetas-empresa', component:TarjetasCompanyComponent},
  // {path: 'pasarelaUser', component:TarjetasCompanyComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomePrincipalComponent,
    BuscadorComponent,
    PerfilEmpresaComponent,
    NotificacionesEmpresaComponent,
    ModificarDatosEmpresaComponent,
    InicioSesionComponent,
    CategoriasComponent,
    ExamenOfertaComponent,
    HomeEmpresaComponent,
    HomeUserComponent,
    ModificarDatosUserComponent,
    NotificacionesUserComponent,
    OfertasComponent,
    MorseComponent,
    PerfilUserComponent,
    ReclutadorComponent,
    RegistroEmpresaComponent,
    OlvidarpasswordComponent,
    RegistroUserComponent,
    TarjetasUserComponent,
    TarjetasCompanyComponent,
    PagosComponent,
    PagosEmpresaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
