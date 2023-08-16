import React, { ReactElement } from 'react'

import { errorMsgDefault } from '@/configApp'

import { P } from '@/styles/text'

export function ErrorMessage(data: Record<string, unknown> | string): ReactElement {
  const errors = []
  const errorsObj = data

  if (errorsObj) {
    if (typeof errorsObj === 'string') {
      errors.push(`- ${errorsObj}`)
    } else {
      for (let i = 0, l = Object.keys(errorsObj).length; i < l; i += 1) {
        errors.push(`- ${errorsObj[Object.keys(errorsObj)[i]] as string}`)
      }
    }
  } else {
    errors.push(errorMsgDefault)
  }

  return (
    <div>
      {errors?.map((item: string) => {
        return <P key={item}>{item}</P>
      })}
    </div>
  )
}
