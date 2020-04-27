require('dotenv').config();
import  express from 'express';
import morgan from 'morgan' ;
import bodyParser from 'body-parser';
import cors from 'cors';
import responseTime from 'response-time';
import router from './servers';
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(responseTime());
app.use(morgan('dev'));
app.use(cors());
app.set('trust proxy', true);
app.use("/",router);


app.listen(process.env.PORT || 3000 ,()=>{
    console.log('App are running...')
})