import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showMe:boolean = true
  showMe_:boolean = true
  showMenuOption: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  valueChanged(){
    console.log(this.showMe)
    this.showMe = !this.showMe
  }
  showMenuOptions() {
    this.showMenuOption = !this.showMenuOption
  }

}
