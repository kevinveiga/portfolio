// import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next/types';

import { apiAuthPasswordRecoveryReset } from '@/configApi';
import { IPasswordRecovery } from '@/interface';
// import { apiMiddleware } from '@/services/apiMiddleware';
import { postFetchNoInterceptor } from '@/services/fetch';

// const cors = Cors({
//     methods: ['HEAD', 'OPTION', 'POST'],
//     optionsSuccessStatus: 204,
//     preflightContinue: false,
//     origin: '*'
// });

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<any> {
    // await apiMiddleware(req, res, cors);

    try {
        if (req.method !== 'POST') {
            res.status(405).json({ message: 'Only POST requests allowed' });
        } else {
            const params: IPasswordRecovery = req.body;

            const response = await postFetchNoInterceptor({ fetchData: params, url: apiAuthPasswordRecoveryReset });

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
