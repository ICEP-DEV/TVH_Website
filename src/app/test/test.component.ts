import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  template: ``,


})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ckeditorContent:any;
  registerForm:any;


  clickHandle()
  {
    console.log(this.ckeditorContent);

  }

}
