import { Component, OnInit, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {GameService } from '../game.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  
})


export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   // this.gameService.ballReset();
  
  }


  
}
