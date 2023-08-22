import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  carId: string | null = null;
  carDetails: any;

  carslist = [
    { id: '0', brand: 'Toyota', model: 'Camry', year: 2019 },
    { id: '1', brand: 'Honda', model: 'Accord', year: 2020 },
    { id: '2', brand: 'Ford', model: 'Mustang', year: 2018 },
    { id: '3', brand: 'Chevrolet', model: 'Cruze', year: 2021 },
    { id: '4', brand: 'BMW', model: 'X5', year: 2017 },
    { id: '5', brand: 'Audi', model: 'A4', year: 2022 },
    { id: '6', brand: 'Mercedes-Benz', model: 'C-Class', year: 2020 },
    { id: '7', brand: 'Volkswagen', model: 'Golf', year: 2019 },
    { id: '8', brand: 'Tesla', model: 'Model 3', year: 2023 },
    { id: '9', brand: 'Nissan', model: 'Altima', year: 2021 },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.carId = this.route.snapshot.paramMap.get('id');
    this.carDetails = this.getCarDetailsById(this.carId);
  }

  getCarDetailsById(id: string | null): any {
    if (id !== null) {
      return this.carslist.find((car) => car.id === id);
    }
    return null;
  }
}
