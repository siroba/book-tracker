import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
// Application configuration shared between client and server
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  ],
};