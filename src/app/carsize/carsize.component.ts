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
   suv : {name: "Suv Mini Car",price :200},
    coupe:{name:"Coupe Mini Car",price:250},
    picup:{name:"Picup Mini Car",price:150},
    mini:{name :"Mini Car",price:150},
    convert:{name:"Convertible Mini Car",price:300},
    sedan:{name:"Sedan  Car",price:350}
  }
 

  getCar(val:any){
    console.warn(val)
    let value=val.split(',')
    this.carsize=value[0]
    this.price=(value[1])
    console.warn(this.carsize)
    console.warn(this.price)
   this.router.navigate(['./services/carsize/price'],{queryParams:{data:btoa(JSON.stringify([this.carsize,this.price,this.service]))}
 });
  }  
}
