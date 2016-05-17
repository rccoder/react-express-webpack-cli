/**
 * Created by rccoder on 2016/5/17.
 */
import express from 'express';
import path from 'path';
import bodyParse from 'body-parser';
import session from 'express-session';
import sessionStore from 'express-mysql-session';
import serverConfig from '../../config/server.js';
import fs from 'fs';


const port = serverConfig.port;

const logDir = path.join(__dirname, '/../logs/');
const staticDir = path.join(__dirname, '/../../client');
const webpackDevDir = path.join(__dirname, '/../../webpack.dev.server');

const app = express();

const accessLog = fs.createWriteStream(logDir + 'access.log');
const errorLog = fs.createWriteStream(logDir + 'error.log');

if(process.env.NODE_ENV == 'dev') {
    console.log('running in dev')
    require(webpackDevDir)(app);
}

app.use(express.static(staticDir));

app.get('/', (req, res) => {
    res.redict('index.html')
});

const server = app.listen(port, () => {
    console.log(`listening ${port}`);
})