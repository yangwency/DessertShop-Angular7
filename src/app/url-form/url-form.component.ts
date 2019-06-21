// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-url-form',
//   templateUrl: './url-form.component.html',
//   styleUrls: ['./url-form.component.css']
// })
// export class UrlFormComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css']
})
export class UrlFormComponent implements OnInit {

  @Output()
  onURLChange = new EventEmitter<string>()

  expanded: boolean = false

  constructor() { }

  ngOnInit() {
  }

  onSend(url){
      this.expanded = false
      this.onURLChange.emit(url)
  }

}
