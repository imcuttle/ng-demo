import {Component, ElementRef, Injectable, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnChanges {

  @Input()
  list = []

  input = ''

  appService: AppService

  constructor(appService: AppService) {
    // @ts-ignore
    this.list = appService.todoList
    this.appService = appService
    // this.ngOnInit()
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }


  ngOnInit(): void {
  }

}
