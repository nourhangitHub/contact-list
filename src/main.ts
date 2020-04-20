import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableDebugTools} from '@angular/platform-browser';
import { ApplicationRef } from '@angular/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(module=>{
  let application = module.injector.get(ApplicationRef);
  let appComponent = application.components[0];
  enableDebugTools(appComponent);
})
  .catch(err => console.error(err));
