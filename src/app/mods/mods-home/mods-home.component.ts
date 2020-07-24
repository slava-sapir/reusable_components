import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Why sky is blue?', content: 'Because its sky.' },
    { title: 'Why orange is orange?' , content: 'Because its not an apple.'},
    { title: 'Why color is orange?', content: 'Mix of yellow and red.'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
     this.modalOpen = !this.modalOpen;
  }

 
}
