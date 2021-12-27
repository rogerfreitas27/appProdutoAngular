import { Privilegio } from "./privilegio";
import { Roles } from "./roles";

export class UsuarioDto{
    id : number;
    nome:string;
    email:string;
    senha:string;
    token:string;
    privilegios:  Privilegio[]=[];
    role : Roles;
    quantidade_categoria:number;
    quantidade_marca: number;
    quantidade_produto: number;
    quantidade_usuario: number;
    


    constructor(id:number,nome:string,email:string , senha:string,token:string,
        privilegios:Privilegio[],role : Roles, quantidade_categoria:number,
        quantidade_marca: number, quantidade_produto: number,quantidade_usuario: number){
            this.id=id;
            this.nome=nome;
            this.email=email;
            this.senha=senha;
            this.token=token;
            this.privilegios=privilegios;
            this.role=role;
            this.quantidade_categoria =quantidade_categoria;
            this.quantidade_marca =quantidade_marca;
            this.quantidade_produto=quantidade_produto;
            this.quantidade_usuario =quantidade_usuario;


    }
}