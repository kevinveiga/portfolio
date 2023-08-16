export const formDataFile = (formData: Record<string, any>): FormData => {
  const newFormData = new FormData()

  for (let i = 0, l = Object.keys(formData).length; i < l; i += 1) {
    const key = Object.keys(formData)[i]

    if ({}.hasOwnProperty.call(formData, key)) {
      newFormData.append(key, formData[key])
    }
  }

  return newFormData
}
