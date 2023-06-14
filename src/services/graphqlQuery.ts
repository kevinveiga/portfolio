import { gql, GraphQLClient } from 'graphql-request';

import { apiHygraphUrl } from '@/configApi';

const client = new GraphQLClient(apiHygraphUrl);

export const getGraphql = ({
    query,
    requestHeaders = undefined,
    variables = undefined
}: {
    query: string;
    requestHeaders?: Record<string, any>;
    variables?: Record<string, any>;
}): Promise<any> => {
    return client.request(query, variables, requestHeaders);
};

export const queryProduct = gql`
    query Product($locale: [Locale!]! = [en], $where: ProductWhereUniqueInput!) {
        product(locales: $locale, where: $where) {
            id
            isProduct
            name
            questions(first: 100) {
                content {
                    html
                }
                id
                questionDidHelps(first: 100) {
                    didHelp
                    id
                    userId
                }
                title
                userId
                views
            }
            slug
        }
    }
`;

export const queryProductWithSubProducts = gql`
    query ProductWithSubProducts($locale: [Locale!]! = [en], $where: ProductWhereUniqueInput!) {
        product(locales: $locale, where: $where) {
            id
            isProduct
            name
            slug
            subProducts(first: 100) {
                ... on SubProduct {
                    content {
                        html
                    }
                    id
                    name
                    slug
                }
            }
        }
    }
`;

export const queryProducts = gql`
    query Products($first: Int = 100, $locale: [Locale!]! = [en], $where: ProductWhereInput) {
        products(first: $first, locales: $locale, where: $where) {
            id
            isProduct
            name
            order
            slug
        }
    }
`;

export const queryProductsWithSubProducts = gql`
    query ProductsWithSubProducts($first: Int = 100, $locale: [Locale!]! = [en], $where: ProductWhereInput) {
        products(first: $first, locales: $locale, where: $where) {
            id
            isProduct
            name
            order
            slug
            subProducts(first: $first) {
                ... on SubProduct {
                    id
                    name
                    slug
                }
            }
        }
    }
`;

export const queryQuestionsPopular = gql`
    query QuestionsPopular($first: Int = 5, $locale: [Locale!]! = [en], $where: QuestionWhereInput = { views_gt: 0 }) {
        questions(first: $first, locales: $locale, orderBy: views_DESC, where: $where) {
            id
            product {
                slug
            }
            subProduct {
                product {
                    slug
                }
                slug
            }
            title
            views
        }
    }
`;

export const querySubProduct = gql`
    query SubProduct($locale: [Locale!]! = [en], $where: SubProductWhereUniqueInput!) {
        subProduct(locales: $locale, where: $where) {
            id
            name
            questions(first: 100) {
                content {
                    html
                }
                id
                questionDidHelps(first: 100) {
                    didHelp
                    id
                    userId
                }
                title
                userId
                views
            }
            slug
        }
    }
`;

export const querySubProducts = gql`
    query SubProducts($first: Int = 100, $locale: [Locale!]! = [en], $where: SubProductWhereInput) {
        subProducts(first: $first, locales: $locale, where: $where) {
            id
            name
            product {
                slug
            }
            slug
        }
    }
`;
