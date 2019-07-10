import { Component } from '@angular/core';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

@Component({
  selector: 'ngx-leaflet',
  styleUrls: ['./leaflet.component.scss'],
  templateUrl: './leaflet.component.html'
  // template: `
  //   <nb-card>
  //     <nb-card-header>Leaflet Maps</nb-card-header>
  //     <nb-card-body>
  //       <div leaflet [leafletOptions]="options"></div>
  //     </nb-card-body>
  //   </nb-card>
  // `,
})
export class LeafletComponent {

  auctionHouseData :{name:string, value:number}[]= [
    {
      "name": "Aguttes (S.V.V.)",
      "value": 0.15
    },
    {
      "name": "Auctionata",
      "value": 0.30
    },
    {
      "name": "Barridoff Galleries",
      "value": 0.76
    },
    {
      "name": "Bloomsbury Auctions",
      "value": 0.45
    },
    {
      "name": "Boetto",
      "value": 0.15
    },
    {
      "name": "Bonhams",
      "value": 1.36
    },
    {
      "name": "Bruun Rasmussen",
      "value": 0.15
    },
    {
      "name": "Bukowskis",
      "value": 0.76
    },
    {
      "name": "Butterfield & Butterfield",
      "value": 0.15
    },
    {
      "name": "Cabral Moncada Leiloes",
      "value": 0.15
    },
    {
      "name": "Cambi Casa d'Asta - Milano",
      "value": 0.30
    },
    {
      "name": "Christie's",
      "value": 34.09
    },
    {
      "name": "CORNETTE DE SAINT CYR Maison de Ventes S.A.S",
      "value": 0.15
    },
    {
      "name": "David Rago",
      "value": 0.15
    },
    {
      "name": "Deutsch & Keil Auktionen",
      "value": 0.15
    },
    {
      "name": "Dobiaschofsky Auktionen AG",
      "value": 0.30
    },
    {
      "name": "Dorotheum",
      "value": 2.27
    },
    {
      "name": "Falkkloo's",
      "value": 0.15
    },
    {
      "name": "Farsetti",
      "value": 0.15
    },
    {
      "name": "Freeman Fine Arts",
      "value": 0.76
    },
    {
      "name": "Fuller's",
      "value": 0.15
    },
    {
      "name": "Galerie Kornfeld Auktionen AG",
      "value": 0.30
    },
    {
      "name": "Galerie Moderne",
      "value":0.15
    },
    {
      "name": "Germann Auktionshaus",
      "value": 1.36
    },
    {
      "name": "Grisebach",
      "value": 0.76
    },
    {
      "name": "Grogan & Company",
      "value": 0.15
    },
    {
      "name": "Hampel Kunstauktionen",
      "value": 0.91
    },
    {
      "name": "Il Ponte Casa D'aste Srl",
      "value": 0.15
    },
    {
      "name": "Julien's Auctions",
      "value": 0.15
    },
    {
      "name": "K-Auction",
      "value": 0.45
    },
    {
      "name": "Karbstein Peter",
      "value": 0.15
    },
    {
      "name": "Karl & Faber",
      "value": 0.15
    },
    {
      "name": "Ketterer Kunst GmbH",
      "value": 0.76
    },
    {
      "name": "Koller",
      "value": 0.45
    },
    {
      "name": "Kornfeld Galerie & Cie",
      "value": 0.15
    },
    {
      "name": "Lama",
      "value": 0.30
    },
    {
      "name": "Leland Little",
      "value": 0.15
    },
    {
      "name": "Lempertz",
      "value": 0.45
    },
    {
      "name": "Leslie Hindman Inc.",
      "value": 0.30
    },
    {
      "name": "Nagel",
      "value": 0.15
    },
    {
      "name": "Neumeister",
      "value": 0.30
    },
    {
      "name": "Palacio Do Correio-Velho",
      "value": 0.15
    },
    {
      "name": "Phillips",
      "value": 3.03
    },
    {
      "name": "Phillips de Pury & Company",
      "value": 3.33
    },
    {
      "name": "Phillips, De Pury & Luxembourg",
      "value": 0.61
    },
    {
      "name": "Piasa",
      "value": 0.30
    },
    {
      "name": "Pierre Berg̩ & Associ̩s S.A.S",
      "value": 0.15
    },
    {
      "name": "Ravenel International Art Group",
      "value": 0.15
    },
    {
      "name": "Schuler Auktionen",
      "value": 0.15
    },
    {
      "name": "Seoul Auction",
      "value": 0.76
    },
    {
      "name": "Shannon's",
      "value": 0.30
    },
    {
      "name": "Skinner",
      "value": 0.61
    },
    {
      "name": "Sotheby's",
      "value": 35.91
    },
    {
      "name": "Stair Galleries",
      "value": 0.15
    },
    {
      "name": "Stockholms Auktionsverk",
      "value": 0.30
    },
    {
      "name": "Swann Galleries",
      "value": 0.15
    },
    {
      "name": "Tajan",
      "value": 0.30
    },
    {
      "name": "Tajan (S.V.V.)",
      "value": 0.76
    },
    {
      "name": "Thomaston Place Auction Gallery",
      "value": 0.15
    },
    {
      "name": "Van Ham Kunstauktionen",
      "value": 0.30
    },
    {
      "name": "William Doyle",
      "value": 1.21
    },
    {
      "name": "Wright Auction",
      "value": 0.45
    }
   ]

  sales_report: {title:String, value:String, description:String}[] =[
    {
      title:'Total Sale',
      value:'$3,522,785',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Sell-Through Rate',
      value:'95%',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Top Realized Price',
      value:'$580,000',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Price to Low Estimate Price',
      value:'1.48',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'1 Year Sales Volume',
      value:'5',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Average Price per cm²',
      value:'$17.85',
      description: 'Better than lastweek(60%)'
    },
    {
      title:'Most supplied price range on the secondary market',
      value:'$0 - 50,000k',
      description: 'Better than lastweek(60%)'
    }
  ]

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 5,
    center: L.latLng({ lat: 38.991709, lng: -76.886109 }),
  };
}
