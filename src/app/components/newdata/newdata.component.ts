import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-newdata',
  templateUrl: './newdata.component.html',
  styleUrls: ['./newdata.component.css']
})
export class NewdataComponent implements OnInit {


  rutaApi = environment.baseUrl;
  items:any;
  DataId: any;
  data:{}={};
  successMessage = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  getData(title:string,body:string){
    if (title.length <3 || body.length < 3){
      this.successMessage = true;
      setTimeout(()=>this.successMessage=false,2000)
    }
    else{
      this.data={title:title,body:body,id:1}
      this.http.post(`${this.rutaApi}/${this.DataId}`,this.data)
      this.router.navigate([`/menu`]);
    }
  }
}
