import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private router:Router) { }

  board!:Array<string>
  player_turn="X"
  win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]]
  ngOnInit(): void {
    this.board=new Array(9).fill("")
  }
handle(index:number)
{
 this.board[index]=this.player_turn;

 this.player_turn=(this.player_turn=='X')?'O':'X'

 if (this.player_turn=='X') {
    
 }

 for(let i=0;i<this.win.length;i++)
 {
  let win_check= this.win[i]

  let p1=win_check[0];
  let p2=win_check[1];
  let p3=win_check[2];

  if (this.board[p1]!=""  && this.board[p1]==this.board[p2] &&  this.board[p2]==this.board[p3] && this.board[p1]==this.board[p3]) {
    alert(`Player ${this.board[p1]} has won the game`)
    this.router.navigateByUrl("home");
  }
  
 }
  
}

}
