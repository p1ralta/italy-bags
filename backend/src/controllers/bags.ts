import { Request, Response } from 'express';

let bags = [
    { id: 1, title: 'Bag 1' },
    { id: 2, title: 'Bag 2' },
    { id: 3, title: 'Bag 3' },
];

export const getBags = (req: Request, res: Response) => {
    res.set('Cache-Control', 'no-store').status(200).json(bags);
};
