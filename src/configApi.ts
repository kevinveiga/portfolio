export const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';

export const apiHygraphUrl = process.env.NEXT_PUBLIC_HYGRAPH_URL || '';

export const apiNextUrl = `${process.env.NEXT_PUBLIC_APP_URL || ''}/api`;

export const apiAuth = `${apiUrl}/user/login`;

export const apiAuthPasswordRecovery = `${apiNextUrl}/auth/password-recovery`;

export const apiAuthPasswordReset = `${apiNextUrl}/auth/password-reset`;

export const apiAuthPasswordRecoveryReset = `${apiUrl}/user/reset_password`;

export const apiFaqQuestionUpdate = `${apiNextUrl}/faq/question/update`;

export const apiFaqQuestionDidHelpAdd = `${apiNextUrl}/faq/questionDidHelp/add`;

export const apiFaqQuestionDidHelpUpdate = `${apiNextUrl}/faq/questionDidHelp/update`;

export const apiInformeRendimentos = `${apiUrl}/informeRendimentos`;

export const apiUsuarios = `${apiUrl}/usuarios`;

export const apiVariaveisCalculosMensal = `${apiUrl}/variaveisMensais`;
