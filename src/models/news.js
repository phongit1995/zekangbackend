import db from './connectdb';
import  Sequelize  from 'sequelize';
export const newsFiels = {
    id:'id',
    title:'name',
    image:'image',
    description:'description',
    html:'html'
}
export const newsDB  = db.define('news',{
    [newsFiels.id]:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true,
    },
    [newsFiels.title]:{
        type:Sequelize.DataTypes.TEXT
    },
    [newsFiels.image]:{
        type:Sequelize.DataTypes.TEXT
    },
    [newsFiels.description]:{
        type:Sequelize.DataTypes.TEXT
    },
    [newsFiels.description]:{
        type:Sequelize.DataTypes.TEXT
    },
})
newsDB.sync({force:false})