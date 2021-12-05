import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],

    })
  }

  login() {
    const formValue = this.loginForm.value;
    this.authService.login(formValue.userName, formValue.password).subscribe(o => {
      this.router.navigate(['/onlyUsers']);
    }, e =>{
      alert('בדוק פרטי משתמש');
    });
  }

}
