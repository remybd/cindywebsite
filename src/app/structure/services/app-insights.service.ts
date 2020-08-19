import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {ApplicationInsights} from '@microsoft/applicationinsights-web';

@Injectable({
  providedIn: 'root'
})
export class AppInsightsService {

  private appInsights = new ApplicationInsights({ config: {
      instrumentationKey: environment.appInsights.instrumentationKey,
      enableAutoRouteTracking: true
    } });

  constructor() {
    this.appInsights.loadAppInsights();
  }
}
