import { Component, OnInit,Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  datas:any;
  constructor( private router:Router,private route:ActivatedRoute){
    //constructor(){
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.datas=JSON.parse(atob(params.data))
  })
  }

}
