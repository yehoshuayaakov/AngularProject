import { Directive, HostListener, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDragdrop]'
})
export class DragdropDirective {
@Output() fileDropped = new EventEmitter();
  constructor() { }
@HostListener('dragover', ['$event']) onDragOver(evt){
 evt.preventDefault();
 evt.stopPropagation();
 console.log("you are over the box");
 
}
@HostListener('dragleave', ['$event']) onDragLeave(evt){
  evt.preventDefault();
  evt.stopPropagation();
  console.log("you left the box");
  
 }
 @HostListener('drop', ['$event']) ondrop(evt){
  evt.preventDefault();
  evt.stopPropagation();
  console.log("you dropped");
  const files = evt.dataTransfer.files;
  if(files.length >0){
    this.fileDropped.emit(files);
  }
 }
}
