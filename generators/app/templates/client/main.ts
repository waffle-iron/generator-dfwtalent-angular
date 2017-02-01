import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode }         from '@angular/core';
import { AppModule }              from './app/app.module';


declare var app: any;

if (app.environment !== 'development') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(function(){
	console.log('Application has bootstrapped in' +  app.environment + ' mode');
	console.log('Page load Time: ' + ((new Date).getTime() - window.performance.timing.connectEnd) + 'ms');
	
}).catch(function(error: any){
	console.log(error);
})