import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhwwH8uRcQYJahZ1fcOHWHstnIzoxeWWJTA&usqp=CAU"
  contentTitle: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  contentDescription: string = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aspernatur quae dignissimos possimus modi, perspiciatis."

  constructor() { }
  ngOnInit(): void {

  }

}
