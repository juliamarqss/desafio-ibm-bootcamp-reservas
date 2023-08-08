import { Component } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent {
  displayElement: boolean = true;
  visible: boolean = false;

  onClick() {
    this.displayElement = !this.displayElement;
    this.visible = !this.visible;
  }
}
