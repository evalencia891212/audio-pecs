import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { MenuItem, TreeNode } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';
import { PrimeIcons } from 'primeng/api';
import { PecService } from '../services/pec-service';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-image-viewer',
  imports: [TableModule,TagModule, RatingModule, ButtonModule, CommonModule, TabsModule],
  templateUrl: './image-viewer.html',
  styleUrl: './image-viewer.scss'
})
export class ImageViewer implements OnInit{
 
   items: any[] = [];
   files:any[] = [];

   public showPecs:boolean = false

  @ViewChild('cm') cm!: ContextMenu;

  selectedId!: string;  

   basicPecGrouped: any = [];

  constructor(public pec_service:PecService){

  }

 

 


  ngOnInit(): void {
    this.pec_service.menuTree.forEach(item => {
        this.items.push(
            {
             key:item.key,
             label:item.label,
             icon: item.icon
            }
        )
    })

    this.groupBasicPecs();

  }

  groupBasicPecs() {
    debugger
    var groupSize = 2
   

    for (let i = 0; i < this.pec_service.basicPecs.length; i += groupSize) {
      this.basicPecGrouped.push(this.pec_service.basicPecs.slice(i, i + groupSize));
    }

   
  }

  selectGroup(key:string) {
    debugger
    console.log("event")

    //GetChilds
    let menu = this.getImageMenu(key)
    if(menu.childrens.length > 0){
      //Mostrar menu
      this.items = menu.childrens; 
      this.showPecs = false
    }else {
      this.files = menu.files
      this.showPecs = true
    }
      //si mayor a cero
      
      //Si no
      //Obtener Archivos
      //MAyor a cerp mostrar imagens

  } 
 

  onContextMenu(event:any) {
        this.cm.target = event.currentTarget;
        this.cm.show(event);
    }

    onHide() {
        this.selectedId = "";
    }

    getImageMenu(key:string){
      debugger
      let menuItem:any;
      menuItem = this.pec_service.menuTree.find(item => item.key == key);
      return menuItem
    }

     speakText(text:string) {
        let textToSpeak = text;
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
