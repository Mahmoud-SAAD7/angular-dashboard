import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
