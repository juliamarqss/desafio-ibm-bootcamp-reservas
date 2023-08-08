import { Component } from '@angular/core';
import { Reserves } from '../models/reserve.model';
import { Router } from '@angular/router';
import { ReserveService } from '../services/reserve.service';

@Component({
  selector: 'app-create-reserve',
  templateUrl: './create-reserve.component.html',
  styleUrls: ['./create-reserve.component.scss']
})
export class CreateReserveComponent {
  reserves: Reserves = {
    nomeHospede: '',
    dataInicio: '',
    dataFim: '',
    quantidadePessoas: 0,
  };

  constructor(private router: Router, private reserveService: ReserveService) {}

  createReserve(): void {
    if(
      this.reserves.nomeHospede === '' ||
      this.reserves.quantidadePessoas === 0 ||
      this.reserves.dataInicio === '' ||
      this.reserves.dataFim === ''
    ) {
      this.reserveService.showMessage('Preencha todos os campos!', true);
    } else {
      console.log("THIS RESERVE", this.reserves);
      
      this.reserveService.createReserve(this.reserves).subscribe(() => {
        this.reserveService.showMessage('Reserva criada com sucesso!');
      });
      this.router.navigate(['/reservas']);
    }
  }

  cancel(): void {
    this.router.navigate(['/reservas']);
  }
}
