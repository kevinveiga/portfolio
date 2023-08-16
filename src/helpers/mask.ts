import { IMask } from '@/interface'

export const maskCep = (value: string): IMask => {
  const newValue = value.toString().replace(/\D/g, '')
  const cleanValue = newValue

  let formattedValue = newValue

  if (!newValue) {
    return { cleanValue, formattedValue }
  }

  formattedValue = formattedValue.replace(/^(\d{5})(\d)/, '$1-$2')

  return { cleanValue, formattedValue }
}

export const maskCpf = (value: string): IMask => {
  const newValue = value.toString().replace(/\D/g, '')
  const cleanValue = newValue

  let formattedValue = newValue

  if (!newValue) {
    return { cleanValue, formattedValue }
  }

  formattedValue = formattedValue
    .replace(/^(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')

  return { cleanValue, formattedValue }
}

export const maskCurrency = (value: string): IMask => {
  const newValue = value.toString().replace(/\D/g, '')
  const cleanValue = newValue

  let formattedValue = newValue

  if (!newValue) {
    return { cleanValue, formattedValue }
  }

  formattedValue = `R$ ${formattedValue.replace(/(\d)(\d{2})$/, '$1,$2').replace(/(?=(\d{3})+(\D))\B/g, '.')}`

  return { cleanValue, formattedValue }
}

export const maskDecimal = ({ decimalScale = 2, decimalSeparator = '', typeMeasure = '', value = '' }): IMask => {
  const newValue = value.toString().replace(/\D/g, '')
  const cleanValue = newValue

  let formattedValue = newValue

  if (!newValue) {
    return { cleanValue, formattedValue }
  }

  if (decimalSeparator) {
    const regexDecimalScale = `(\\d)(\\d{${decimalScale}})$`
    const regexDecimalSeparator = `$1${decimalSeparator}$2`
    const regex = new RegExp(regexDecimalScale)

    formattedValue = `${formattedValue.replace(regex, regexDecimalSeparator)}`
  }

  formattedValue = typeMeasure ? `${formattedValue} ${typeMeasure}` : formattedValue

  return { cleanValue, formattedValue }
}

export const maskPhone = (value: string): IMask => {
  const newValue = value.toString().replace(/\D/g, '')
  const cleanValue = newValue

  let formattedValue = newValue

  if (!newValue) {
    return { cleanValue, formattedValue }
  }

  formattedValue = formattedValue.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d)(\d{4})$/, '$1-$2')

  return { cleanValue, formattedValue }
}
