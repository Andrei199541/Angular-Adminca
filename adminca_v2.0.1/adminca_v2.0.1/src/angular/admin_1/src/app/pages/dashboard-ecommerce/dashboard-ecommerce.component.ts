import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';

@Component({
  selector: 'app-dashboard-ecommerce',
  templateUrl: './dashboard-ecommerce.component.html',
})
export class DashboardEcommerceComponent implements OnInit, AfterViewInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/dashboard_ecommerce.js');
  }

}
