import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: FormGroup;

  constructor(private fb: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
  this.user = this.fb.group({
    name: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required] }),
  });

  }

  submit(){
    this.userService.register(this.user.value).subscribe(res=>console.log(res),()=>alert("error"),()=>alert('created successfully'))
    
  }
}
