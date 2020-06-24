import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  class: string =  'search-bar';
  el: any;

  constructor() { }

  ngOnInit() {
    this.el = document.querySelector('.img');
  }

  animation(event){
    this.class = '';
    this.el.style.setProperty('display', 'none');
    
  }

  blurEvent(event){
    this.class = 'search-bar';
    this.el.style.removeProperty('display');
  }

}
