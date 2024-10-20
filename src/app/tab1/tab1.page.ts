import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isListVisible: boolean = false;
  
  toggleList(){
    this.isListVisible = !this.isListVisible;
  }

  constructor() {}

  /*downloadPDF(){
    const link = document.createElement('a');
    link.href = 'assets/pdfs/CV_SHAMYRQ_EC.pdf';
    link.click();
  }*/

    downloadPDF() {
      const pdfUrl = 'assets/pdfs/CV_SHAMYRQ_EC.pdf'; // Ruta a tu archivo PDF
      fetch(pdfUrl)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'CV_SHAMYRQ_EC.pdf'; // Nombre del archivo descargado
          link.click();
          window.URL.revokeObjectURL(url); // Liberar el objeto URL
        })
        .catch(err => console.error('Error al descargar el PDF', err));
    }

    showContact(contactInfo: string) {
      alert(contactInfo);
    }

}
