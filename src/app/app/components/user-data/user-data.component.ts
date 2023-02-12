import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  ngOnInit(): void {
    console.log("");

  }

  @Input() alldatausers: any = [];
  @Output() onRemoveUser = new EventEmitter<number>();

  removeUser(index: number) {
    this.onRemoveUser.emit(index);
  }
}
