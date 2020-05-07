import db from './connectdb';
import  Sequelize  from 'sequelize';
export const userFiels = {
    id:'id',
    username:'username',
    password:'password'
}
export const usersDB = db.define("users",{
    [userFiels.id]:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true,
    },
    [userFiels.username]:{
        type:Sequelize.DataTypes.TEXT,
    },
    [userFiels.password]:{
        type:Sequelize.DataTypes.TEXT,
    }
})
usersDB.sync({force:false});