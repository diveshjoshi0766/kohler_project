import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  show_stg:boolean = false
  show_ntw:boolean = false
  window_width = window.innerWidth
  imgSrc = window.innerWidth > 1024 ? ('assets/Desktop/Kohler Hub.svg') : window.innerWidth < 428 ? ('assets/Mobile/KohlerIconMobile.svg') : ('assets/Tablet/Kohler Hub.svg')
  constructor() { }

  ngOnInit(): void {
  }
  show_settings(){
    this.show_stg = !this.show_stg
  }
  show_networkSetting(){
    this.show_ntw = !this.show_ntw
  }
  temp_fun() {
    var menu = document.getElementsByClassName('nav-btn') as HTMLCollectionOf<HTMLElement>;
    var nav_bar = document.getElementsByClassName('navbar') as HTMLCollectionOf<HTMLElement>;
    var close = document.getElementsByClassName('nav-btn-cross') as HTMLCollectionOf<HTMLElement>;
    if(window.getComputedStyle(menu[0])['display'] == 'block'){
      nav_bar[0].style.display = 'block'
      menu[0].style.display = 'none';
      close[0].style.display = 'block';
    } else{
      nav_bar[0].style.display = 'none'
      menu[0].style.display = 'block';
      close[0].style.display = 'none';
    }
  }

}
