import {Component, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {AppService} from "../app.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit, OnChanges {
  id: any

  constructor(private appService: AppService, private route: ActivatedRoute) {
    // console.log(appService, route.queryParams)
    // Object.obser
  }
  private todo: any

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.todo = this.appService.todoList.find(todo => todo.id == params['id'])
    });
    // this.c
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

}
