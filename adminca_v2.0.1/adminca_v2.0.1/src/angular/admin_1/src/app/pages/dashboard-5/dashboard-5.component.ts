import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';

@Component({
  selector: 'app-dashboard-5',
  templateUrl: './dashboard-5.component.html',
})
export class Dashboard5Component implements OnInit, AfterViewInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/dashboard_5.js', './assets/js/scripts/calendar-demo.js');
  }

}
