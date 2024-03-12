import { Component, OnInit } from '@angular/core';
import { DolarService } from '../shared/dolar.service';
import { Dolar } from '../shared/dolar.model';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.scss'],
})
export class DolarComponent implements OnInit {
  dolar: Dolar = {} as Dolar;

  constructor(private dolarService: DolarService) {}

  ngOnInit(): void {
    this.dolarService.getActualDolar().subscribe((dolar) => {
      this.dolar = dolar;
    });
  }
}
