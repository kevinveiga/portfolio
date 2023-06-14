// import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next/types';

import { apiAuthPasswordRecoveryReset } from '@/configApi';
import { IPasswordReset } from '@/interface';
// import { apiMiddleware } from '@/services/apiMiddleware';
import { putFetchNoInterceptor } from '@/services/fetch';

// const cors = Cors({
//     methods: ['HEAD', 'OPTION', 'PUT'],
//     optionsSuccessStatus: 204,
//     preflightContinue: false,
//     origin: '*'
// });

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
    // await apiMiddleware(req, res, cors);

    try {
        if (req.method !== 'PUT') {
            res.status(405).json({ message: 'Only PUT requests allowed' });
        } else {
            const params: IPasswordReset = req.body;

            const response = await putFetchNoInterceptor({ fetchData: params, url: apiAuthPasswordRecoveryReset });

            const { data: { statusCode = 0 } = {} } = response;

            if (statusCode === 200) {
                res.status(200).json({ statusCode: statusCode, success: true });
            } else {
                res.status(statusCode).json({ statusCode: statusCode, success: false });
            }
        }
    } catch (err) {
        res.status(500).json({ error: `Failed to load data: ${err as string}`, success: false });
    }
}

export default handler;
