import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tarea2';


  public Buenas():void{
    alert('Buenas profe uwu');
  }

  public Choripan():void{
    alert('Epico')
  }

  public divi2(n1:number, n2: number): number{
    return n1 / n2;
  }
  public emoji():void{
    alert('😳')
  }











}
