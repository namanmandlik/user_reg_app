import { Component } from '@angular/core';
import { usermodel } from './user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    public userDetails: usermodel;
    public tabIntroActive: boolean = true;
    public tabInfoActive: boolean = false;
    public showSuccess: boolean = false;

    constructor(private httpClient: HttpClient){
      this.userDetails={};
      this.httpClient.get("http://localhost:8000/api/users").subscribe((data)=>{
            console.log(data);
          });
    }

    restrictTabToggle(event){
      console.log(event);
      this.tabIntroActive=false;
    }

    onContinue(event){
      this.tabInfoActive=true;
      this.tabIntroActive=false;
      this.userDetails=event;
      console.log(this.userDetails);
    }
    
    onSubmit(event){
      console.log(event);
      this.httpClient.post("http://localhost:8000/api/users/add", event).subscribe(
        (data)=>{
          this.showSuccess=true;
          this.userDetails={};
          this.httpClient.get("http://localhost:8000/api/users").subscribe((data)=>{
            console.log(data);
          });
        },
        (err)=>{
          console.log(err);
        }
      );
    }

}
