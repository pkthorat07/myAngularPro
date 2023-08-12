import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
  
})

export class DialogComponent {
  constructor(
    public DialogRef:MatDialogRef<DialogComponent>
  ){}

  onNclick(){
    this.DialogRef.close('YES');
  }
  

}
