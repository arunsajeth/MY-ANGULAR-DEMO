import { Component, Input,EventEmitter, Output, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {
  temp = "HAVE A GOOD DAY";
  @Output() eve = new EventEmitter();
  @Input("first") fname:any
  @Input("last") lname:any

  myName:string=""

  printname(iname:string)
  {
    this.eve.emit(iname)
  }

  constructor()
  {
    console.log("Constructor of footer")
  }

  ngOnInit(): void{
    console.log("Init method of footer")
  }

  ngOnChanges(): void {
    console.log("CHange method of footer")
  }
}
