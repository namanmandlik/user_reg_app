import { Component, EventEmitter, Output } from '@angular/core';
import { usermodel } from '../user.model'; 


@Component({
  selector: 'introduction',
  templateUrl: './introduction-template.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {

    public userDetails: usermodel;
    @Output() userIntroSubmit = new EventEmitter();


    constructor(){
        this.userDetails = { 
            ethnicity:"0",
            race:"0",
            sex:"0"
        }
    }

    onSubmit(){
        if(this.userDetails.state && this.userDetails.age && this.userDetails.weight && this.userDetails.height ){
            this.userIntroSubmit.emit(this.userDetails); // Emitting the user details data to the parent component ( app.component.ts).
        }
    }
}
