import {productsDb,productsFiels} from './../../models/products';
import {genId} from './../../commons/TextHelper';
const NUMBER_LIMIT=10 ;
class ProductModel{
    addProduct= async (value)=>{
        return await productsDb.create(Object.assign(value,{id:genId()}));
    }
    getListProduct = async({page,numberitem})=>{
        let numberLimit = numberitem || NUMBER_LIMIT ;
        return await productsDb.findAll({
            offset:(page-1)*numberLimit,
            limit:numberLimit,
            order:[
                ["createdAt","DESC"]
            ]
        })
    }
    getDetialProduct = async(id)=>{
        return productsDb.findOne({
            where:{
                [productsFiels.id]:id
            }
        })
    }
    updateProduct = async(data,id)=>{
        return await productsDb.update({...data},{
            where:{
                [productsFiels.id]:id
            }
        })
    }
    deleteProduct = async (id)=>{
        return await productsDb.destroy({
            [productsFiels.id]:id
        })
    }
}
export default new ProductModel();