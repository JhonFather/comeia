/* eslint-disable no-console */
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import swaggerFile from './swagger.json';
import { router } from './Routes';

const app = express();

app.use(express.json());
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);
app.use(cors());

app.listen(3333, () => {
    console.log('🚨️ server on');
});
