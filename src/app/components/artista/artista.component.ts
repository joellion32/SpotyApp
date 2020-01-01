import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
 @Input() artista:any = {};
  constructor(private route: Router) { }

  ngOnInit() {
  }

  Artistadetalle(item:any){
    let artistaId;

    if(item.type == "artist"){
      artistaId = item.id;
    }else{
      artistaId = item.artists[0].id;
    }
    this.route.navigate(['/artist', artistaId]);
  }

}
