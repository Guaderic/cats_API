import {Component, OnInit} from '@angular/core';
import {CatService} from "../../services";
import {ActivatedRoute,} from "@angular/router";
import { ICatDetailsInfo} from "../../interfaces";


@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {

  cat:ICatDetailsInfo

  constructor(private service: CatService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.service.getCatByID(id).subscribe(value => this.cat = value[0])
    })


  }



}
