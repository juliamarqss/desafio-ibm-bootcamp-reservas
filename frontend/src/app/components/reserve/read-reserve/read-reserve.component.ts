import { Component, OnInit } from '@angular/core';
import { Reserves } from '../models/reserve.model';
import { ReserveService } from '../services/reserve.service';

@Component({
  selector: 'app-read-reserve',
  templateUrl: './read-reserve.component.html',
  styleUrls: ['./read-reserve.component.scss']
})
export class ReadReserveComponent implements OnInit{
  reserves: Reserves[] = [
    {
      nomeHospede: '',
      dataInicio: '',
      dataFim: '',
      quantidadePessoas: 0,
      status: '',
    }
  ]

  destroyComponent: boolean = true;

  constructor(private reserveService: ReserveService) {}

  ngOnInit(): void {
    this.reserveService.findAllReserves().subscribe((reserves) => {
      this.reserves = reserves;
      
      reserves.length == 0
        ? (this.destroyComponent = true)
        : (this.destroyComponent = false);
    });
  }
}
