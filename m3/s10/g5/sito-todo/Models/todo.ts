import {ITodo} from './i-todo';

export class Todo implements ITodo{
  constructor(
    public id:number,
    public title:string,
    public completed:boolean
  ){}
}
