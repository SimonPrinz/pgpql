import {config as loadEnv} from 'dotenv';

loadEnv();
const port: number = parseInt(process.env.PORT || '3000');

import App from './App';

const app = new App(port);
app.listen()
