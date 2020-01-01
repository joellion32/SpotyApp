import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  token: string = "Bearer BQAXFFOqIrnJOUay6tMfPoHOh7TF_I_fNDgHac4jEwR9IlR0RbuPaJUP1L6vrsh_otR1efMin9vmwsRaW_E";
  url: string = "https://api.spotify.com/v1/";

  //generar Token
  Token(){
    
  }



  // para obtener las canciones mas nuevas
  obtenerData() {
    const headers = new HttpHeaders({
      "Authorization": this.token
    });
    return this.http.get(`${this.url}browse/new-releases`, { headers });
  }

  //para buscar canciones
  getArtista(termino: string) {
    const headers = new HttpHeaders({
      "Authorization": this.token
    });
    return this.http.get(`${this.url}search?q=${termino}&type=artist&limit=15`, { headers });
  }

  // para obtener el detalle del artista 
  ArtistaDetalle(id:string){
    console.log("id:" + id);
    const headers = new HttpHeaders({
      "Authorization": this.token
    });
    return this.http.get(`${this.url}artists/${ id }`, { headers });
  }


  // para obtener las canciones de los artistas
  Toptracks(id:string){
    console.log("id:" + id);
    const headers = new HttpHeaders({
      "Authorization": this.token
    });
    return this.http.get(`${this.url}artists/${ id }/top-tracks?country=us`, { headers });
  }

} // cierre de la clase
