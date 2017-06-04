import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public doAlert() {
    alert(this.title);
  }

  public onKey(event: any) { // without type info
    this.title = event.target.value;
  }
}
