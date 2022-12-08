import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss']
})
export class FormNewItemComponent {
  @Input() className = 'primary';
  @Input() label!:string;
  @Output() NewItemEvent = new EventEmitter<string>();

  onAddNewItem(item:string): void{
    this.NewItemEvent.emit(item);
  }
}
