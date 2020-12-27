import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carsize',
  templateUrl: './carsize.component.html',
  styleUrls: ['./carsize.component.css']
})
export class CarsizeComponent implements OnInit {
 
  constructor( private router:Router,private route:ActivatedRoute){
   // constructor(){
  }
  carsize:any;
  price:any
  service:any

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.service=JSON.parse(atob(params.data))
  })
  }
  
   car ={
   suv : {name: "Suv Mini Car",price :"200 Rs"},
    coupe:{name:"Coupe Mini Car",price:"250 Rs"},
    picup:{name:"Picup Mini Car",price:"150 Rs"},
    mini:{name :"Mini Car",price:"150 Rs"},
    convert:{name:"Convertible Mini Car",price:"300 Rs"},
    sedan:{name:"Sedan  Car",price:"350 Rs"}
  }
 

  getCar(val:any){
    console.warn(val)
    let value=val.split(',')
    this.carsize=value[0]
    this.price=(value[1])
    console.warn(this.carsize)
    console.warn(this.price)
   this.router.navigate(['./price'],{queryParams:{data:btoa(JSON.stringify([this.carsize,this.price,this.service]))}
 });
  document.getElementById("pricing").scrollIntoView();

  }  
}
