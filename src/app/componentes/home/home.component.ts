import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  variable: string = "texto de prueba"
  num1
  num2
  usuarioselec
  letras = ["a", "b", "c", "d"]
  usuarios = [{nombre: "Manolo", apellido: "López"},
              {nombre: "David", apellido: "Rebato"},
              {nombre: "Rubén", apellido: "García"}]
  nombreUsuario(usuario):void{
    this.usuarioselec = usuario.nombre + " " + usuario.apellido
  }

  constructor() { }

  ngOnInit(): void {
  }

}
