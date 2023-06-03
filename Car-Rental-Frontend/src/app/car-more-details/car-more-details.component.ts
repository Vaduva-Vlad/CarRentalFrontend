import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-car-more-details',
  templateUrl: './car-more-details.component.html',
  styleUrls: ['./car-more-details.component.scss']
})
export class CarMoreDetailsComponent implements OnInit {
  carForm!: FormGroup;
  imageControls!: FormArray;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.carForm = this.formBuilder.group({
      licensePlate: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      images: this.formBuilder.array([])
    });

    this.imageControls = this.carForm.get('images') as FormArray;
  }

  get images(): FormArray {
    return this.carForm.get('images') as FormArray;
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files && files.length) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageControls.push(
            new FormControl({ url: reader.result })
          );
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }

  deleteImage(index: number) {
    this.imageControls.removeAt(index);
  }

  onSubmit() {
    // Handle form submission
  }
}
