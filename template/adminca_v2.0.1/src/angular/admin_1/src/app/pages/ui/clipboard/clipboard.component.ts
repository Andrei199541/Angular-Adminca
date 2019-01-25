import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;
declare var Clipboard:any;

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.component.html',
})
export class ClipboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var clipboard = new Clipboard('[data-clipboard]');
  }

}
