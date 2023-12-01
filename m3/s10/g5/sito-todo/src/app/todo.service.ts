import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url:string = 'http://localhost:4200/todos'

  constructor() { }
}
