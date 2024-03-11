import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input("person") person: string = "Bob";

  @Output("favourite") favourite = new EventEmitter<string>();

  handleFavouriteChange(person: string) {
    
    this.favourite.emit(person)
  }
}
