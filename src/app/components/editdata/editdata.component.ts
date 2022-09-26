import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {
  
  rutaApi = environment.baseUrl;
  items:any;
  DataId: any;
  data:{}={};
  successMessage = false;
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
     ) {};

  ngOnInit(): void {
    
    this.route.params.subscribe(e=>{this.DataId=e["id"];
    })
    this.http.get(`${this.rutaApi}/${this.DataId}`).subscribe(data => {
      this.items=data;     
   });
    
  }
  getData(title:string,body:string){
    if (title.length <3 || body.length < 3){
      this.successMessage = true;
      setTimeout(()=>this.successMessage=false,2000)
    }
    else{
      this.data={title:title,body:body}
      this.http.put(`${this.rutaApi}/${this.DataId}`,this.data)
      this.router.navigate([`/menu`]);
    }
  }
}
