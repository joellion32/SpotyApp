import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 @Input() artistas:any[] = [];
 @Input() termino:string;
 loading:boolean = false; 
  constructor(private data: DataService) { }

  ngOnInit() {
  }


  buscar(termino:string){
   this.data.getArtista(termino).subscribe(
   (resp:any)=> {
      this.artistas = resp.artists.items;
      console.log(this.artistas); 
      this.loading = true;
     }
   )   
   console.log(termino); 
  }

}
