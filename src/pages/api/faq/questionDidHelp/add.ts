// import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next/types';

import { IQuestionDidHelp } from '@/interface';
// import { apiMiddleware } from '@/services/apiMiddleware';
import { createQuestionDidHelp, publishQuestionDidHelp, setGraphql } from '@/services/graphqlMutation';

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
            const params: IQuestionDidHelp = req.body;

            const createQuestionDidHelpData: { createQuestionDidHelp: { id: string } | null } = await setGraphql({
                query: createQuestionDidHelp,
                variables: params
            });

            await setGraphql({
                query: publishQuestionDidHelp,
                variables: { id: createQuestionDidHelpData.createQuestionDidHelp?.id }
            });

            res.status(200).json({ success: true });
        }
    } catch (err) {
        res.status(500).json({ error: `Failed to load data: ${err as string}`, success: false });
    }
}

export default handler;
