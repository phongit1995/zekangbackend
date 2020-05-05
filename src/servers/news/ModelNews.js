import {newsDB,newsFiels} from './../../models/news';
import {genId} from './../../commons/TextHelper';
class NewsModel {
    addNews = async(data)=>{
        return await newsDB.create(Object.assign(data,{[newsFiels.id]:genId()}));
    }

}
export default new NewsModel();