import { Component } from '@angular/core';
import { Todo } from '../../../../Models/todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrl: './completati.component.scss'
})
export class CompletatiComponent {

  todoArr:Todo[]= [];

  constructor(private todoSvc:TodoService){}

  caricamento:boolean = false;
  eliminazione:boolean = false;

}
