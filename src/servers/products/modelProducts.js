import {productsDb} from './../../models/products';
import {genId} from './../../commons/TextHelper';
class ProductModel{
    addProduct= async (value)=>{
        return await productsDb.create(Object.assign(value,{id:genId()}));
    }
}
export default new ProductModel();