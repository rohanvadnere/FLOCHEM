import { Component, OnInit } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
el:HTMLElement;
faBars:any;

  constructor() { }

  ngOnInit(): void {
    this.faBars = faBars;
  }
  scroll(id){
    this.el = document.getElementById(id);
    this.el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

  }
  openNav(){
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}
