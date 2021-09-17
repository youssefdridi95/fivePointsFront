import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import {UserService} from '../user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model ={
    email :'',
    password:''
  };
  serverErrorMessages: string;
  constructor(private userService:UserService,private router : Router) { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => { if (res['error'])
      {
        this.serverErrorMessages = res['errorMessage'];
      } else{
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/subjects');
      }
      },
      err => {
        
      }
    );
  }


}
