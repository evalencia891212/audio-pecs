import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface LanguageOption {
  code: string;
  name: string;
}

@Component({
  selector: 'app-speech-component',
  imports: [FormsModule],
  templateUrl: './speech-component.html',
  styleUrl: './speech-component.scss'
})
export class SpeechComponent {

  public textToSpeak: string = 'Angular es ideal para construir Aplicaciones Web Progresivas (PWA).';
  public selectedLang: string = 'es-ES';
  public rate: number = 1.0;
  public languages: LanguageOption[] = [
    { code: 'es-ES', name: 'Español' },
    { code: 'en-US', name: 'Inglés (EE. UU.)' },
    { code: 'fr-FR', name: 'Francés' },
    // Añade más según tus necesidades o cárgalas dinámicamente desde el servicio.
  ];

  constructor() {}

  ngOnInit(): void {
   
  }

  speakText() {
        const textToSpeak = (document.getElementById('textToSpeak') as HTMLTextAreaElement).value;
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(textToSpeak);
          // Puedes configurar el idioma, velocidad, etc. aquí
          // utterance.lang = 'es-ES'; // Ejemplo para español
          window.speechSynthesis.speak(utterance);
        } else {
          alert('Tu navegador no soporta la síntesis de voz.');
        }
      }

 

}
