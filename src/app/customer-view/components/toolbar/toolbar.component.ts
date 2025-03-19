import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  toggle = false

  @Output()
  openDrawer: EventEmitter<boolean> = new EventEmitter();

  constructor(){}

  onToggle(){
    this.toggle = !this.toggle;
    this.openDrawer.emit();
  }
}
