import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-artista-detalle',
  templateUrl: './artista-detalle.component.html',
  styleUrls: ['./artista-detalle.component.css']
})
export class ArtistaDetalleComponent implements OnInit {
  artista:any = {};
  loading:boolean = false;
  topTracks:any = {};

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(
    (resp:any) =>{
      this.GetArtista(resp['id']);
      this.TopTracks(resp['id']);
    });
  }
// para obtener la informacion del artista
  GetArtista(id:string){
  this.data.ArtistaDetalle(id).subscribe(
   resp =>{
    this.artista = resp;
    this.loading = true; 
  });  
  }

// para obtener los tracks del artista 
TopTracks(id:string){
this.data.Toptracks(id).subscribe(
resp=>{
this.topTracks = resp;
console.log(this.topTracks);
}
);  
}
  
}
