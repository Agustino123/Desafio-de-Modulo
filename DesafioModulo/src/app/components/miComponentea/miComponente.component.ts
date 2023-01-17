import { Component } from "@angular/core";

@Component({
    selector: 'miComponente',
    templateUrl: './miComponente.component.html'
})
export class miComponente{

    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){

        this.titulo = "Componente";
        this.comentario = "Probando angular";
        this.year = 2023;


        console.log('Componente miComponente cargado');
        console.log(this.titulo, this.comentario, this.year);
    }
}