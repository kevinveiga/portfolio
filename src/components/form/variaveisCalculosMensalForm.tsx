import React, { ReactElement } from 'react';

import { Button } from '@/components/button/button';
import { Input, Label } from '@/components/form/form';
import { InputNumber } from '@/components/form/formCustom';

import { Box, Flex } from '@/styles/flex';
import { Spacer } from '@/styles/layout';

export function VariaveisCalculosMensalForm({ validationSchema }: any): ReactElement {
    return (
        <>
            <Input idInput="id-vc-ano" name="ano" typeInput="hidden" />
            <Input idInput="id-vc-mes" name="mes" typeInput="hidden" />

            <Flex>
                <Box flex="1 0 10%">
                    <Label>Fator CDI:</Label>

                    <InputNumber idInput="id-vc-fator-cdi" name="fator_cdi" placeholder="0.0" separator={true} validationSchema={validationSchema} />
                </Box>
            </Flex>

            <Spacer />

            <Button small={true} text="Salvar" typeButton="submit" />
        </>
    );
}
