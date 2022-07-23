import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // bluetooth:{enabled:true,
  //   status:Connected/NotConnected/Error,
  //   devices:[],
  //   }
  // el:any = document.getElementById('status');
  // const btn:any = document.getElementById('wifi-status');
  // var formElement = <HTMLFormElement>document.getElementById('123');
  // var inputValue = (<HTMLInputElement>document.getElementsByClassName("status")).value;

  // wifi_click() {
  //   document.getElementsByClassName("status").addEventListener('click', function handleClick() {
  //     if (el.style.visibility === 'hidden') {
  //       // ✅ Shows element if hidden
  //       el.style.visibility = 'visible';
  
  //       btn.textContent = 'Hide div';
  //     } else {
  //       // ✅ Hides element if shown
  //       el.style.visibility = 'hidden';
  
  //       btn.textContent = 'Show div';
  //     }
  //   });
  
  // }

}
