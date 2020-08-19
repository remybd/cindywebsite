import { Component } from '@angular/core';
import {AppInsightsService} from './structure/services/app-insights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appInsights: AppInsightsService) {
  }

}
