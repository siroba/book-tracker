import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// The server bootstrap must accept a `BootstrapContext` and pass it to `bootstrapApplication`.
// The Angular tooling (route extractor / SSR) will call this exported function with the
// server `BootstrapContext` so a server platform is created and used.
const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context);

export default bootstrap;