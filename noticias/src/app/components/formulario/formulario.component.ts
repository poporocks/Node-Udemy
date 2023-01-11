import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() parametrosSelect = new EventEmitter<any>();

  catSelect: string;
  paisSelect: string;

  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'entertainment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'science', nombre: 'Ciencia'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnología'},
  ];

  paises: any[] = [
    {value: 'mx', nombre: 'México'},
    {value: 'ar', nombre: 'Argentina'},
    {value: 'br', nombre: 'Brasil'},
    {value: 'fr', nombre: 'Francia'},
    {value: 'hu', nombre: 'Hungria'},
    {value: 'gb', nombre: 'Reino Unido'},
  ];

  constructor(){
    this.catSelect = 'general';
    this.paisSelect = 'mx'
  }

  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.catSelect,
      pais: this.paisSelect
    }

    this.parametrosSelect.emit(PARAMETROS);
  }
}