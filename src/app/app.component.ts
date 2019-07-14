import { Component } from '@angular/core';
import { UserState, getUserName } from './store/reducers/user.reducer';
import { Store } from '@ngrx/store';
import { AddUserName } from './store/actions/user.action';
import { Observable, from } from 'rxjs';
import { DataService } from './service/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dogNetWithAngular';
  userName$: Observable<string> =  this.store.select(getUserName);

  constructor(public store: Store<UserState>,
              public dataService: DataService
    ){
    // this.store.dispatch( new AddUserName(""))
  }

  ngOnInit(){
    this.dataService.getName().subscribe((t)=>{
      console.log("data:"+ t);
    });
  }
}
