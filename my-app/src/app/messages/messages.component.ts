import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../messages.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // make service public so can be bound to the template directly
  constructor(public messageService: MessagesService) { }

  ngOnInit(): void {
  }

}
