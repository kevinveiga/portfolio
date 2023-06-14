import React, { ReactElement } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { title } from '@/configApp';
import { ISubProduct } from '@/interface';
import { querySubProduct } from '@/services/graphqlQuery';
import { useSWRGetGraphql } from '@/stores/fetch/useSWRGetGraphql';

import { FaqQuestion } from '@/components/faq/faqQuestion';

import { Main } from '@/styles/layout';
import { P } from '@/styles/text';

function SubProductQuestion(): ReactElement {
    // CONTEXT
    const router = useRouter();
    const { t, i18n } = useTranslation();

    const { subProductSlug } = router.query;

    // CUSTOM HOOK
    const { data, isLoading } = useSWRGetGraphql({
        graphqlQuery: subProductSlug ? querySubProduct : '',
        graphqlVariables: { locale: [i18n.language], where: { slug: subProductSlug } }
    });

    const subProductData: ISubProduct = data?.subProduct;

    return (
        <>
            <Head>
                <title>{title}</title>

                <meta name="description" content="SubProduct" />
            </Head>

            <Main>{isLoading ? <P>{t('loading', { ns: 'glossary' })}...</P> : <FaqQuestion obj={subProductData} />}</Main>
        </>
    );
}

export default SubProductQuestion;
