import { gql, GraphQLClient } from 'graphql-request';

import { apiHygraphUrl } from '@/configApi';
import { hygraphMutationToken } from '@/configApp';

const clientMutation = new GraphQLClient(apiHygraphUrl, { headers: { Authorization: `Bearer ${hygraphMutationToken}` } });

export const setGraphql = ({
    query,
    requestHeaders = undefined,
    variables = undefined
}: {
    query: string;
    requestHeaders?: Record<string, any>;
    variables?: Record<string, any>;
}): Promise<any> => {
    return clientMutation.request(query, variables, requestHeaders);
};

// QUESTION
export const publishQuestion = gql`
    mutation PublishQuestion($id: ID!) {
        publishQuestion(where: { id: $id }, to: PUBLISHED) {
            id
        }
    }
`;

export const updateQuestion = gql`
    mutation UpdateQuestion($views: Int!, $id: ID!) {
        updateQuestion(data: { views: $views }, where: { id: $id }) {
            id
        }
    }
`;

// QUESTIONDIDHELP
export const createQuestionDidHelp = gql`
    mutation CreateQuestionDidHelp($didHelp: Boolean!, $questionId: ID!, $userId: String) {
        createQuestionDidHelp(data: { didHelp: $didHelp, question: { connect: { id: $questionId } }, userId: $userId }) {
            id
        }
    }
`;

export const publishQuestionDidHelp = gql`
    mutation PublishQuestionDidHelp($id: ID!) {
        publishQuestionDidHelp(where: { id: $id }, to: PUBLISHED) {
            id
        }
    }
`;

export const updateQuestionDidHelp = gql`
    mutation UpdateQuestionDidHelp($didHelp: Boolean!, $id: ID!) {
        updateQuestionDidHelp(data: { didHelp: $didHelp }, where: { id: $id }) {
            id
        }
    }
`;
