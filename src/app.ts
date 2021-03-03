import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';

import ExampleController from './Controller/ExampleController';

const app = express();
const port = 3000 || process.env.port;

/* Enable Cors */
app.use(cors({}));


app.use(bodyParser.json({
    limit: '2mb',
    verify(req: any, res: any, buf: any, encoding: any) {
        req.rawBody = buf;
    }
}));

/* Controllers */
app.use(ExampleController);

/* Start Server */
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});