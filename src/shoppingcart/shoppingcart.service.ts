import { Injectable } from '@nestjs/common';

@Injectable()
export class ShoppingCartService {
  getItems(): string {
    return 'Hello Shopping Cart!';
  }

  addToCart(): string {
    return 'Item Added!';
  }
}