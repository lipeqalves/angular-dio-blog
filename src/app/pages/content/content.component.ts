import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from "../../data/dataFake"
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhwwH8uRcQYJahZ1fcOHWHstnIzoxeWWJTA&usqp=CAU"
  contentTitle: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  contentDescription: string = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aspernatur quae dignissimos possimus modi, perspiciatis."
  private id:string | null = "0"
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
     this.id = value.get("id")
    )
   this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
   this.contentTitle = result.title
   this.contentDescription = result.description
   this.photoCover = result.photoCover
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

