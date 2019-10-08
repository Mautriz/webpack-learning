const x: number = 3;

const f: string = 'Ciao';

import express, { NextFunction, Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log('Stuff');
});
