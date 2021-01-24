import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public location :any;
  public branch = [];
  public category = [];
  public event:any;
  //public nameData: {name: string}[] = catalog;
  constructor(private _serv:AppService,private router: Router) { }
 
  ngOnInit(): void {
  //console.log(catalog);
 this._serv.getJson().subscribe(dd=>{
  console.log('===>',dd.data.locations)
  this.location = dd.data.locations;
  
 
 });
  }
  onOptionsSelected(event){
    const value = event.target.value;
    console.log(value);
    for(var i=0;i<this.location.length;i++){
      if(this.location[i].name===value){
      this.branch = this.location[i].branches;
      console.log(this.branch);
      }
    }
   }
  
   onOptionsSelectedBranch(event){
    const value = event.target.value;
    console.log(value);
    console.log(this.branch[0].name);
    for(var i=0;i<this.branch.length;i++){
      if(this.branch[i].name===value){
        this.category = this.branch[i].categories;
      }
      
    
    }
    console.log(this.category);
    localStorage.setItem('category', JSON.stringify(this.category));
    this.router.navigate(['category']);
   }
   
  }


