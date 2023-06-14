import { NextApiRequest, NextApiResponse } from 'next/types';

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export const apiMiddleware = (req: NextApiRequest, res: NextApiResponse, middleware: any): Promise<any> => {
    return new Promise((resolve, reject) => {
        middleware(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
};
