import { ProductState } from './product.state';
import { CategoryState } from './category.state';


export interface AppState {

  products: ProductState;

  categories: CategoryState;

}