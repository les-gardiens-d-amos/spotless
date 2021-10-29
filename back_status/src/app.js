import express from 'express';
import cors from 'cors';
import requests from './requests/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(requests);

export default app;
