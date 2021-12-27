import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Subject } from 'rxjs';
import { UsuarioDto } from 'src/app/model/usuariodto';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  usuarios:UsuarioDto []=[];
  mensagem : string ="";

  ngOnInit(): void {
    this.carregarUsuarios();
    this.dtOptions = {
     pagingType: 'full_numbers'
   };
  }
  constructor(private usuarioService: UsuarioService) { }





carregarUsuarios(){
  this.usuarioService.findAll().subscribe( usuarios =>{
    this. usuarios =  usuarios;
    this.dtTrigger.next();
  },
    (error: any) => {
    
       console.log(error.error);
      this.mensagem=error.error
      this.dtTrigger.next();
    });

}


}
