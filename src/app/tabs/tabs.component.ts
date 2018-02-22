import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"]
})

export class TabsComponent implements OnInit {
  navLinks: Array<ITest> = [
    {
      path: "about",
      label: "ABOUT ME"
    },
    {
      path: "collection",
      label: "MY COLLECTION"
    }
  ];

  
  constructor() {}

  ngOnInit() {}
}

interface ITest {
  path: string,
  label: string
}
