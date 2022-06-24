import {Component, Input, OnInit} from '@angular/core';
import {ICat} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {CatService} from "../../services";

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  @Input()
  cat:ICat



  constructor(private router:Router, private route:ActivatedRoute,private service:CatService) { }

  ngOnInit(): void {

  }

  getDetails() {
    this.router.navigate([this.cat.id], {relativeTo: this.route})
  }


}
