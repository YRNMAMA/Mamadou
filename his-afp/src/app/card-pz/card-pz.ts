import { Component, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Button } from 'primeng/button';
import { JsonPipe } from '@angular/common';

interface Paziente {
  id: string;
  nome: string;
  cognome: string;
  braccialetto: string;
  eta: number;
  codiceColore: string;
  note: string;
  patologia: string;
}

@Component({
  selector: 'his-card-pz',
  imports: [CardModule, Button, JsonPipe],
  templateUrl: './card-pz.html',
  styleUrl: './card-pz.scss',
})
export class CardPz {
  nome: string = 'Pietro';
  paziente = signal<Paziente>({
    braccialetto: '123',
    codiceColore: 'ROSSO',
    cognome: 'Rocchio',
    eta: 25,
    id: '23',
    nome: 'Pietro',
    note: 'TRauma',
    patologia: 'C19',
  });

  cambiaNome() {
    this.nome = 'Gian';

    // this.paziente = "Lucio";
    //this.paziente.set('Lucio');
  }
}
