import { Component, OnInit } from '@angular/core';
import { Reserves } from '../models/reserve.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReserveService } from '../services/reserve.service';

@Component({
  selector: 'app-update-reserve',
  templateUrl: './update-reserve.component.html',
  styleUrls: ['./update-reserve.component.scss']
})
export class UpdateReserveComponent implements OnInit{
  reserves: Reserves = {
      nomeHospede: '',
      dataInicio: '',
      dataFim: '',
      quantidadePessoas: 0,
      status: '',
    }

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

    updateReserve(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if(id){
        if(
          this.reserves.nomeHospede === '' ||
          this.reserves.quantidadePessoas === 0 ||
          this.reserves.dataInicio === '' ||
          this.reserves.dataFim === '' ||
          this.reserves.status === ''
        ) {
          this.reserveService.showMessage('Preencha todos os campos!', true);
        }
          this.reserveService.updateReserve(id, this.reserves).subscribe(() => {
            this.reserveService.showMessage('Reserva atualizada com sucesso!');
            this.router.navigate(['reservas']);
          })
      }
    }

    cancel(): void {
      this.router.navigate(['reservas']);
    }
}
