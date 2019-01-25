import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';

@Component({
  selector: 'app-dashboard-6',
  templateUrl: './dashboard-6.component.html',
})
export class Dashboard6Component implements OnInit, AfterViewInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/dashboard_6.js', './assets/js/scripts/calendar-demo.js');
  }

}
