import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { EmployeeModule } from './app/employee/employee.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
