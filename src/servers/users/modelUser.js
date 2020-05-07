import {usersDB,userFiels} from './../../models/users';
import {getToken} from './../../commons/tokenHelper';
class UserModels {
    checkLogin=async({username,password})=>{
        console.log(username);
        let result = await usersDB.findAll({
            where:{
                [userFiels.username]:username,
                [userFiels.password]:password
            }
        })
        if(result.length<1){
            throw "LOGIN FAILD"
        };
        let token = getToken(result[0]);
        return {
            token
        }
    }
}
export default new UserModels();