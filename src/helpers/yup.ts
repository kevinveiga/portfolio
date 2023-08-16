import * as yup from 'yup'

yup.setLocale({
  array: {
    length: 'Deve ter exatamente ${length} itens',
    max: 'Deve ter no máximo ${max} itens',
    min: 'Deve ter no mínimo ${min} itens'
  },
  date: {
    max: 'Deve ser menor que a data ${max}',
    min: 'Deve ser maior que a data ${min}'
  },
  mixed: {
    default: 'Não é válido',
    required: 'Campo obrigatório',
    oneOf: 'Deve ser um dos seguintes valores: ${values}',
    notOneOf: 'Não pode ser os valores: ${values}',
    notType: 'Valor não é válido'
  },
  number: {
    integer: 'Deve ser um número inteiro',
    lessThan: 'Deve ser menor que ${less}',
    max: 'Máximo de ${max}',
    min: 'Mínimo de ${min}',
    moreThan: 'Deve ser maior que ${more}',
    negative: 'Deve ser um número negativo',
    positive: 'Deve ser um número posítivo'
  },
  string: {
    email: 'Formato de e-mail inválido',
    length: 'Deve ter exatamente ${length} caracteres',
    lowercase: 'Deve estar em maiúsculo',
    max: 'Deve ter no máximo ${max} caracteres',
    min: 'Deve ter pelo menos ${min} caracteres',
    trim: 'Não deve conter espaços no início ou no fim',
    uppercase: 'Deve estar em minúsculo',
    url: 'Deve ter um formato de URL válido',
    uuid: 'Deve ser um UUID válido'
  }
})

// yup.setLocale({
//     array: {
//         length: 'Must have ${length} items',
//         max: 'Must have less than or equal to ${max} items',
//         min: 'Must have at least ${min} items'
//     },
//     date: {
//         max: 'Must be at earlier than ${max}',
//         min: 'Must be later than ${min}'
//     },
//     mixed: {
//         default: 'It is invalid',
//         required: 'It is a required field',
//         oneOf: 'Must be one of the following values: ${values}',
//         notOneOf: 'Must not be one of the following values: ${values}',
//         notType: 'Value is invalid'
//     },
//     number: {
//         integer: 'Must be an intege',
//         lessThan: 'Must be less than ${less}',
//         max: 'Must be less than or equal to ${max}',
//         min: 'Must be greater than or equal to ${min}',
//         moreThan: 'Must be greater than ${more}',
//         negative: 'Must be a negative number',
//         positive: 'Must be a positive number'
//     },
//     string: {
//         email: 'Must be a valid email',
//         length: 'Must be exactly ${length} characters',
//         lowercase: 'Must be a lowercase string',
//         max: 'Must be at most ${max} characters',
//         min: 'Must be at least ${min} characters',
//         trim: 'Must be a trimmed string',
//         uppercase: 'Must be a upper case string',
//         url: 'Must be a valid URL',
//         uuid: 'Must be a valid UUID'
//     }
// });

export default yup
