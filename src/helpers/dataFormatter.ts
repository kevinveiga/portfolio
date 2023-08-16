import { customRegex } from '@/helpers/customRegex'
import { currencyType } from '@/helpers/currencyType'

export const getBooleanFormatted = (value: boolean | string): string => {
  switch (Boolean(value)) {
    case true:
      return '1'
    default:
      return '0'
  }
}

export const setBooleanFormatted = (value: boolean | string): number => {
  switch (Boolean(value)) {
    case true:
      return 1
    default:
      return 0
  }
}

export const getCepFormatted = (cep: string): string => {
  if (!cep) {
    return ''
  }

  const formattedCep = cep.replace(/\D/g, '')
  const match = customRegex.cep.exec(formattedCep)

  if (match) {
    return `${match[1]}-${match[2]}`
  }

  return ''
}

export const setCepFormatted = (cep: string): string => {
  if (!cep) {
    return ''
  }

  return cep.replace(/\D/g, '')
}

export const getCpfFormatted = (cpf: string): string => {
  if (!cpf) {
    return ''
  }

  const formattedCpf = cpf.replace(/\D/g, '')
  const match = customRegex.cpf.exec(formattedCpf)

  if (match) {
    return `${match[1]}-${match[2]}`
  }

  return ''
}

export const getDateFormatted = (date: string): string => {
  if (!date) {
    return ''
  }

  const newDate = new Date(date)

  const day = newDate.getDate().toString().padStart(2, '0')
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0')
  const year = newDate.getFullYear()

  return `${day}/${month}/${year}`
}

export const setDateFormatted = (date: string): Date | string => {
  if (!date) {
    return ''
  }

  const array = date.split('/')

  return new Date(`${array[2]}/${array[1]}/${array[0]}`)
}

export const getMoneyFormatted = (number: number, currency = 'real'): string => {
  const { [currency]: obj } = currencyType

  const formattedNumber = new Intl.NumberFormat(obj.initials || 'pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(number)

  return formattedNumber
}

export const setMoneyToIntFormatted = (number: number): number => {
  const numberToString = number.toString()

  return parseInt(numberToString.replace(/[,.]/g, ''), 10)
}

export const getMoneyWithSymbolFormatted = (number: number, currency = 'real', currencyDisplay = 'symbol'): string => {
  const { [currency]: obj } = currencyType

  const formattedNumber = new Intl.NumberFormat(obj.initials || 'pt-BR', {
    currency: obj.currency || 'BRL',
    currencyDisplay: currencyDisplay,
    style: 'currency'
  }).format(number)

  return formattedNumber
}

export const getPhoneFormatted = (phone: string): string => {
  if (!phone) {
    return ''
  }

  const formattedPhone = phone.replace(/\D/g, '')
  const match = customRegex.phone.exec(formattedPhone)

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}-${match[4]}`
  }

  return ''
}

export const setPhoneFormatted = (phone: string): string => {
  if (!phone) {
    return ''
  }

  return phone.replace(/\D/g, '')
}
