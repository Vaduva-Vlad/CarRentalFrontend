import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  constructor() { }
  file:File|undefined

  ngOnInit(): void {
  }

  getFile(event:any){
    this.file=event.target.files[0]
    console.log(this.file)
  }
}
