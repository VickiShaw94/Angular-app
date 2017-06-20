import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
  selector: 'my-app',

  template:
    `<h1>{{title}}</h1>
    <h2>My favorite hero is: {{hero.name}}</h2>
    <div>
        <label>id:</label>{{hero.id}} </div>

        <div>
            <label> name: </label>

            <input [(ngModel)]="hero.name" placeholder="name">

          //[(ngModel)] is Angular syntax to bind hero.name property to textbox
          //ngModel uses FormsModule, which must be imported
          //data flows in both directions, between textbox and property
        </div>
        `
})

export class AppComponent {
  //title for app name
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'WindStorm'
  };
}
