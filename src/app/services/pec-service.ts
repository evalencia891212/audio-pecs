import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PecService {

    public basicPecs = [
          {
              "name":"yogurt",
              "path":"Pecs/Alimentos/Comida/yogurt_beber.jpg",
              "text":"yogurt"
          },
          {
              "name":"comer",
              "path":"Pecs/Actividades/comer.jpg",
              "text":"Comer"
          },
           {
              "name":"dormir",
              "path":"Pecs/Actividades/dormir.jpg",
              "text":"Dormir"
          },
          {
              "name":"bicicleta",
              "path":"Pecs/Actividades/salir en bicicleta.jpg",
              "text":"Bicicleta"
          },
          {
              "name":"agua",
              "path":"Pecs/Alimentos/Comida/agua.jpg",
              "text":"agua"
          },
          {
              "name":"comer",
              "path":"Pecs/Acciones/comer.png",
              "text":"comer"
          },
           {
              "name":"baño",
              "path":"Pecs/Lugares/baño.jpg",
              "text":"baño"
          },
           {
              "name":"Teleton",
              "path":"Pecs/Lugares/Teleton.jpg",
              "text":"Teleton"
          }

    ]

    public menuTree = [
    {
        "key":"0",
        "label":"Acciones",
        "icon":"Menu/Acciones.png",
        "childrens":[
          
        ],
        "files":[
          {
              "name":"corte pelo",
              "path":"Pecs/Acciones/corte pelo.jpg",
              "text":"Corte de pelo"
          },
          {
              "name":"no escaleras",
              "path":"Pecs/Acciones/no escaleras.jpg",
              "text":"No Escaleras"
          },
          {
              "name":"no escapo",
              "path":"Pecs/Acciones/no escapo.jpg",
              "text":"No Escapo"
          }
        ]
    },
    {
        "key":"1",
        "label":"Actividades",
        "icon":"Menu/Actividades.png",
        "childrens":[
          
        ],
        "files":[
          {
              "name":"alberca",
              "path":"Pecs/Actividades/cheyo alberca.jpg",
              "text":"Alberca"
          },
          {
              "name":"comer",
              "path":"Pecs/Actividades/comer.jpg",
              "text":"Comer"
          }
        ]
    },
    {
        "key":"2",
        "label":"Alimentos",
        "icon":"Menu/Comida.jpg",
        "childrens":[
          {
              "key":"2-1",
              "label":"Alimentos",
              "icon":"Menu/Comida.jpg",
              "childrens":[
                
              ],
              "files":[
                {
                    "name":"agua",
                    "path":"Pecs/Comida/Comida/agua.jpg",
                    "text":"Agua"
                },
                {
                    "name":"gelatina",
                    "path":"Pecs/Comida/Comida/gelatina.jpg",
                    "text":"Gelatina"
                }
              ]
          },
          {
              "key":"2-2",
              "label":"Golosinas",
              "icon":"Menu/Comida.jpg",
              "childrens":[
                
              ],
              "files":[
                {
                    "name":"agua",
                    "path":"Pecs/Comida/Comida/agua.jpg",
                    "text":"Agua"
                },
                {
                    "name":"gelatina",
                    "path":"Pecs/Comida/Comida/gelatina.jpg",
                    "text":"Gelatina"
                }
              ]
          }
        ],
        "files":[
          
        ]
    },
    {
        "key":"3",
        "label":"Familia",
        "icon":"Menu/Familia.jpg",
        "childrens":[
          
        ],
        "files":[
          {
              "name":"abuela",
              "path":"Pecs/Familia/Abuela.jpg",
              "text":"Abuela"
          },
          {
              "name":"abuelo",
              "path":"Pecs/Familia/Abuelo.jpg",
              "text":"Abuelo"
          }
        ]
    }
 ]

}
