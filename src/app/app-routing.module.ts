import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ArtistaDetalleComponent } from './pages/artista-detalle/artista-detalle.component';


const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'search', component: SearchComponent},
{path: 'artist/:id', component: ArtistaDetalleComponent},
{path: '', pathMatch: 'full', redirectTo: 'home'},
{path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
