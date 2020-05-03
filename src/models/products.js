import db from './connectdb';
import  Sequelize  from 'sequelize';
export const productsFiels = {
    id:'id',
    name:'name',
    price:'price',
    start:'start',
    descriptions:'descriptions',
    images:'images',
    ingredients:'ingredients', // thành phần
    usage:'usage' , // cách sử dụng
    heed:'heed', // chú ý ,
    expirydate:'expirydate' , // hạn sử dụng 
    evaluation:'evaluation' // đánh giá
}
export const productsDb  = db.define('products',{
    [productsFiels.id]:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true,
    },
    [productsFiels.name]:{
        type:Sequelize.DataTypes.TEXT
    },
    [productsFiels.price]:{
        type:Sequelize.DataTypes.INTEGER
    },
    [productsFiels.start]:{
        type:Sequelize.DataTypes.INTEGER
    },
    [productsFiels.descriptions]:{
        type:Sequelize.DataTypes.TEXT
    },
    [productsFiels.images]:{
        type:Sequelize.DataTypes.TEXT,
        get(){
            if(this.getDataValue(productsFiels.images)){
                return JSON.parse(this.getDataValue(productsFiels.images));
            }
        },
        set(val){
            this.setDataValue(productsFiels.images,JSON.stringify(val))
        }
    },
    [productsFiels.ingredients]:{
        type:Sequelize.DataTypes.TEXT
    },
    [productsFiels.usage]:{
        type:Sequelize.DataTypes.TEXT
    },
    [productsFiels.heed]:{
        type:Sequelize.DataTypes.TEXT
    },
    [productsFiels.expirydate]:{
        type:Sequelize.DataTypes.TEXT
    },
    [productsFiels.evaluation]:{
        type:Sequelize.DataTypes.TEXT
    }},
    {
        sync:{force:false}
    }

)
productsDb.sync({force:false})