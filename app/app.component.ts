import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> <reviews></reviews>`,
})
export class AppComponent  { name = 'Angular'; }
