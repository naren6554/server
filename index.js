import express from 'express';
import { Connection } from './database/db.js';
import Routes from './routes/route.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use('/',Routes);
Connection();
app.listen(8000,()=> console.log("server is running"));
