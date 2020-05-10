import {newsDB,newsFiels} from './../../models/news';
import {genId} from './../../commons/TextHelper';
const NUMBER_ITEM=10 ;
class NewsModel {
    addNews = async(data)=>{
        return await newsDB.create(Object.assign(data,{[newsFiels.id]:genId()}));
    }
    getList = async({page,numberitem})=>{
        let numberLimit = numberitem || NUMBER_ITEM ;
        return await newsDB.findAll({
            offset:(page-1)*numberLimit,
            limit:numberLimit,
            order:[
                ["createdAt","DESC"]
            ]
        })
    }
    getDetialNews = async (id)=>{
        return await newsDB.findOne({
            id
        })
    }
    updateNews = async(data,id)=>{
        return await newsDB.update({...data},{
            where:{
                [newsFiels.id]:id
            }
        })
    }
    deleteNews = async(id)=>{
        return await newsDB.destroy({
            where:{
                [newsFiels.id]:id
            }
        })
    }
}
export default new NewsModel();