import { Component, OnInit } from '@angular/core';
import {ICat} from "../../interfaces";
import {CatService} from "../../services";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats:ICat[];
  page:number = 0;
  limit: string = '10'

  constructor(private service:CatService) { }

  ngOnInit(): void {
    this.service.getCats(this.page, this.limit).subscribe(value => this.cats = value)
  }


  Change(page:number) {
    this.page = page
    this.service.getCats(page, this.limit).subscribe(value => this.cats = value)
  }

  SelectLimitPerPage(value: string) {
    this.limit = value
    this.service.getCats(this.page, value).subscribe(response => this.cats = response)
  }
}
