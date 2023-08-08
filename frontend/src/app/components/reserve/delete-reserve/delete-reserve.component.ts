import { Component, OnInit } from '@angular/core';
import { Reserves } from '../models/reserve.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReserveService } from '../services/reserve.service';

@Component({
  selector: 'app-delete-reserve',
  templateUrl: './delete-reserve.component.html',
  styleUrls: ['./delete-reserve.component.scss']
})
export class DeleteReserveComponent implements OnInit{
  reserves: Reserves = {
      nomeHospede: '',
      dataInicio: '',
      dataFim: '',
      quantidadePessoas: 0,
      status: '',
    };

    constructor(
      private router: Router,
      private reserveService: ReserveService,
      private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if(id) {
        this.reserveService.findReserveById(id).subscribe((obj) => {
          if(obj) {
            this.reserves = {
              nomeHospede: obj.nomeHospede,
              dataInicio: obj.dataInicio,
              dataFim: obj.dataFim,
              quantidadePessoas: obj.quantidadePessoas,
              status: obj.status,
            };      
          }
        });
      }
    }

    deleteReserve(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if(id) {
        this.reserveService.deleteReserve(id).subscribe(() => {
          this.reserveService.showMessage('Reserva apagada com sucesso!');
          this.router.navigate(['/reservas']);
        });
      };
    }

    cancel(): void {
      this.router.navigate(['/reservas']);
    }
}
