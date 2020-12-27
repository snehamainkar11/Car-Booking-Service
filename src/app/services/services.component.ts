import { Component,  ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  
  constructor( private router:Router,private route:ActivatedRoute){
  }

  ngOnInit() {
   
  }
    
    data = {
    one:"One Way Route",
    rental:"Local Rental",
    two:"Two Way",
    long:"Long Route"
  }
  service:any
  onItemSelector(value :any) {
    console.log(value);
    this.service=value

    this.router.navigate(['./carsize'],{queryParams:{data:btoa(JSON.stringify(this.service))}

  });
  document.getElementById("team").scrollIntoView();

    }
   
}


