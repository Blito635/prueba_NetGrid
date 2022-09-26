import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  successMessage = false;

  data:{}={};

  constructor(
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
  }
  getData(email:string,clave:string){
    if (email.length <3 || clave.length < 3){
      this.successMessage = true;
      setTimeout(()=>this.successMessage=false,2000)
    }
    else{
      this.router.navigate([`/menu`]);
    }
  }

}
