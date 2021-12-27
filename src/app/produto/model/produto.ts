import { Marca } from "../../marca/model/marca";
import { Categoria } from "../../categoria/model/categoria";

export class Produto{
    id:number;
    nome:string;
    descricao:string;
    valor:number;
    quantidade:number;
    url_imagem:string;
    idCategoria : Categoria  ;
    idMarca:Marca;

    constructor(id:number, nome:string, descricao:string, valor:number,
        quantidade:number, url_imagem:string, idCategoria:Categoria, idMarca:Marca){
            this.id=id;
            this.nome=nome;
            this.descricao=descricao;
            this.valor=valor;
            this. quantidade= quantidade;
            this.url_imagem=url_imagem;
            this.idCategoria=idCategoria;
            this.idMarca=idMarca;

    }
}