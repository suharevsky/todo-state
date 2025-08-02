import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './app/store/todo-reducer';

bootstrapApplication(AppComponent, {
  ...appConfig, 
   providers: [
    provideStore({ todoState: todoReducer }),
    provideStoreDevtools()
  ],
})
  .catch((err) => console.error(err));
