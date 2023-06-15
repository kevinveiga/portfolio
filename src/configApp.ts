export const dev = process.env.NODE_ENV === 'development';

export const errorEmailNotFound = 'Email não cadastrado';

export const errorMsgDefault =
  'Erro desconhecido, provavelmente o serviço está indisponível, por favor tente novamente mais tarde.';

export const errorMsgResponse = 'Algo deu errado, tente novamente.';

export const hygraphMutationToken = process.env.HYGRAPH_MUTATION_TOKEN || '';

export const title = 'Site';

export const url = process.env.NEXT_PUBLIC_APP_URL || 'site';

export const urlInitial = '/';

export const urlPasswordRecovery = '/auth/password-recovery';

export const urlSignIn = '/auth/sign-in';

export const urlSignUp = '/auth/sign-up';

export const urlManager = '/manager';
