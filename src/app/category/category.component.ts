import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public category:any;
  public location:any;
  constructor(private _serv:AppService) { }

  ngOnInit(): void {
    this.getBranch();
  }
  getBranch(){
    
   console.log(localStorage.getItem('category'));
     
    }
  }


