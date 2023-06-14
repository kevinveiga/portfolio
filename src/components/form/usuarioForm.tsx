import React, { ReactElement } from 'react';

import { Button } from '@/components/button/button';
import { InputCheckbox, Label } from '@/components/form/form';
import { InputCpf, InputEmail, InputName } from '@/components/form/formCustom';

import { Box, Flex } from '@/styles/flex';
import { Spacer } from '@/styles/layout';
import { variable } from '@/styles/variable';

export function UsuarioForm({ validationSchema }: any): ReactElement {
    return (
        <>
            <Flex flex="1 1 auto">
                <Box flex="1 0 auto">
                    <Label>Nome:</Label>

                    <InputName idInput="id-cadastro-nome" name="name" placeholder="Nome completo" validationSchema={validationSchema} />
                </Box>

                <Spacer width={{ d: '100%', sm: variable.space.spacingMD }} />

                <Box flex="1 0 auto">
                    <Label>Email:</Label>

                    <InputEmail idInput="id-cadastro-email" name="email" placeholder="Email" validationSchema={validationSchema} />
                </Box>

                <Spacer width="100%" />

                <Box flex="1 0 auto">
                    <Label>Cpf:</Label>

                    <InputCpf idInput="id-cadastro-cpf" name="cpf" placeholder="000.000.000-00" validationSchema={validationSchema} />
                </Box>

                <Spacer width={{ d: '100%', sm: variable.space.spacingMD }} />

                <Box flex="0 0 auto" flexDirection="column">
                    <Label>É admin?:</Label>

                    <Box mt={3}>
                        <InputCheckbox idInput="id-cadastro-admin" name="admin" label="Administrador" value="true" />
                    </Box>
                </Box>
            </Flex>

            <Spacer height={variable.space.spacingMD} />

            <Button small={true} text="Salvar" typeButton="submit" />
        </>
    );
}
