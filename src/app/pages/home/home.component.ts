import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artistas:any = [];
  loading:boolean = false;
  error:boolean = false;
  mensajeerror:string;

  constructor(private data: DataService) { }

  ngOnInit() {
   this.data.obtenerData().subscribe(
     (resp:any) => {
       this.loading = true;
       console.log(resp.albums.items);
       this.artistas = resp.albums.items;
     },(err)=>{
      this.error = true;
      this.loading = true;
      this.mensajeerror = err.error.error.message;
      console.log(this.mensajeerror);
    }
   );
  }

}
