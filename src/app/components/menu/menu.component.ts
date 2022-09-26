import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  rutaApi = environment.baseUrl;
  closeResult = '';
  dataID ="";
  items: any;
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal ) {};
  

  posTabala(pos:any) {
    this.router.navigate([`/edit/${pos}`]);
    
  }
  newDato(){
    this.router.navigate([`/add`]);
  }
  deleteData(data:any){
    this.http.delete(`${this.rutaApi}/${data}`).subscribe(data=>{
      location.reload();
    })
    this.modalService.dismissAll('Cross click')
  }
  ngOnInit(): void {
    this.http.get(this.rutaApi).subscribe(data => {
      this.items=data;
   }); 
  }
  open(content:any, id:any){
    this.dataID=id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
}
