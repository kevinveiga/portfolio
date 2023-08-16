import {
  getCepFormatted,
  getDateFormatted,
  getPhoneFormatted,
  setCepFormatted,
  setDateFormatted,
  setPhoneFormatted
} from './dataFormatter'

export const getFormDataFormatter = (formData: Record<string, any>): Record<string, any> => {
  const formDataFormatter: Record<string, any> = {}

  for (let i = 0, l = Object.keys(formData).length; i < l; i += 1) {
    const key = Object.keys(formData)[i]

    if ({}.hasOwnProperty.call(formData, key)) {
      switch (key) {
        case 'celular' || 'telefone':
          formDataFormatter[key] = getPhoneFormatted(formData[key])

          break
        case 'data' || 'data_nascimento':
          formDataFormatter[key] = getDateFormatted(formData[key])

          break
        case 'cep' || 'endereco_cep':
          formDataFormatter[key] = getCepFormatted(formData[key])

          break
        default:
          formDataFormatter[key] = formData[key] == null ? '' : formData[key]

          break
      }
    }
  }

  return formDataFormatter
}

export const setFormDataFormatter = (formData: Record<string, any>): Record<string, any> => {
  const formDataFormatter: Record<string, any> = {}

  for (let i = 0, l = Object.keys(formData).length; i < l; i += 1) {
    const key = Object.keys(formData)[i]

    if ({}.hasOwnProperty.call(formData, key)) {
      switch (key) {
        case 'celular' || 'telefone':
          formDataFormatter[key] = setPhoneFormatted(formData[key])

          break
        case 'data' || 'data_nascimento':
          formDataFormatter[key] = setDateFormatted(formData[key])

          break
        case 'cep' || 'endereco_cep':
          formDataFormatter[key] = setCepFormatted(formData[key])

          break
        default:
          formDataFormatter[key] = formData[key] == null ? '' : formData[key]

          break
      }
    }
  }

  return formDataFormatter
}
