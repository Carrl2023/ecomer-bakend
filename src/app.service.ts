import { Injectable } from '@nestjs/common';
import { Product } from './utils/types';

@Injectable()
export class AppService {
  saludar(): string {
    return 'Hello Diego!';
  }

  getProducts(): Product[] {
    const productos: Product[] = [
      {
        id: 1,
        name: 'Ramo de Rosas',
        price: 150,
        imgUrl:
          'https://www.rosatel.pe/lima/15976-home_default/ramo-con-25-rosas-rojas-y-rosadas.jpg',
        description: 'Ramos de 25 rosas de color rosado y color rojo, con papel chino color blanco, lleva cinta satinada',
        isOferta: true,
        porcentajeOferta: 20,
        finalPrice: 80,
      },
      {
        id: 2,
        name: 'Box corazon de rosas',
        price: 400,
        imgUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpJCsyhE6HpDS026bKfWUfp6_XeZv67qW6Q&s',
        description: 'Box de corazón de 200 rosas rojas con peluche parche',
        isOferta: false,
        porcentajeOferta: 0,
        finalPrice: 150,
      },
      {
        id: 3,
        name: 'Box con rosas violeta, rosadas y fucsia',
        price: 200,
        imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgGW_8L96A2kD6h6psuNaguMv5e3sq4sOEQ&s`,
        description:
          '40 Rosas con una conbinación de color Violeta, cremas , rosadas y fucsia, para una ocación especial.',
        isOferta: true,
        porcentajeOferta: 0.25,
        finalPrice: 0,
      },
      {
        id: 4,
        name: 'Gerberas',
        price: 300,
        imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBnxp7sFzWHHdhlmVDu4yZbPz9K65zB0mRJg&s`,
        description:   '30 Gerberas de colores con papel chino color crema y lazo de cinta satinada',
        isOferta: true,
        porcentajeOferta: 0.01,
        finalPrice: 0,
      },
    ];
    return productos;
  }
}
