require("dotenv").config();
import  Sequelize  from 'sequelize';
const configDB={
    host:process.env.DB_HOST ,
    port:process.env.DB_PORT,
    username:process.env.DB_USERNAME ,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE ,
    dialect:process.env.DB_DIALECT,
    dialectOptions: {connectTimeout: 1000},
    timezone: '+07:00',
    define:{
        freezeTableName: true
    },
    sync:{force: false}
}
  if(process.env.DEV =="dev"){
      configDB.logging=true ;
}
const sequelize = new Sequelize(configDB);
sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
export default sequelize ;