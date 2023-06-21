import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  constructor(private carService:CarService) { }
  license_plate:string|undefined
  price:number|undefined
  model:string|undefined
  description:string|undefined
  file:File|undefined

  ngOnInit(): void {
  }

  getFile(event:any){
    this.file=event.target.files[0]
  }

  addCar(){
    console.log("herer")
    this.carService.addCar(this.license_plate!,this.price!,this.model!,this.description!,this.file!).subscribe(result=>{console.log(result);console.log("here")})
  }
}
