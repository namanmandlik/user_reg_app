import { Component, EventEmitter, Output, Input } from '@angular/core';
import { usermodel } from '../user.model';

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info-template.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {

    @Input() public userDetails: usermodel
    public imageName: string;
    public imageUploaded: boolean= false;
    public imgSrc: string = "../../assets/img/icon-phone.png";
    @Output() userInfoSubmit = new EventEmitter();
    

    ngOnInit(){
    }

    onSelectFile(event){
        if(event.target.files && event.target.files[0]){
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = (event) => {
                if(reader.result){
                    this.imgSrc= reader.result;
                    this.userDetails.imageFile=reader.result;
                }
            }
        }
    }

    onSubmit(){
        this.imgSrc="../../assets/img/icon-phone.png";
        if(this.userDetails.name && this.userDetails.desc){
            this.userInfoSubmit.emit(this.userDetails);
        }
    }
}
