import { Component } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { pizza } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isAlertOpen = false;
  alertHeader: string = '';  
  alertSubHeader: string = ''; 
  alertMessage: string = '';  

  constructor() {

    addIcons({ pizza });
  }

  irAGithub() {
    window.open('https://github.com/Miguel2314carvajal', '_blank'); 
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete()
  }


  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  abrirPopup(tipo: string) {
    switch (tipo) {
      case 'document':
        this.alertHeader = 'Documento';
        this.alertSubHeader = 'Información sobre documentos';
        this.alertMessage = 'Aquí puedes gestionar tus documentos.';
        break;
      case 'color-palette':
        this.alertHeader = 'Paleta de Colores';
        this.alertSubHeader = 'Selección de colores';
        this.alertMessage = 'Elige tu paleta de colores preferida.';
        break;
      case 'globe':
        this.alertHeader = 'Información Global';
        this.alertSubHeader = 'Detalles sobre el mundo';
        this.alertMessage = 'Accede a información global aquí.';
        break;
    }
    this.setOpen(true);
  }
}
