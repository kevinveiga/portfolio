import { isServer } from '@/helpers/isServer'

export const clearLocalStorage = (): void => {
  try {
    if (!isServer()) {
      window.localStorage.clear()
    }
  } catch (error) {
    console.error(error)
  }
}

export const clearSessionStorage = (): void => {
  try {
    if (!isServer()) {
      window.sessionStorage.clear()
    }
  } catch (error) {
    console.error(error)
  }
}

export const getLocalStorage = (storageName: string): any => {
  try {
    if (isServer()) {
      return null
    }

    const storage = window.localStorage.getItem(storageName)

    return storage !== null ? JSON.parse(storage) : null
  } catch (error) {
    console.error(error)

    return undefined
  }
}

export const getSessionStorage = (storageName: string): any => {
  try {
    if (isServer()) {
      return null
    }

    const storage = window.sessionStorage.getItem(storageName)

    return storage !== null ? JSON.parse(storage) : null
  } catch (error) {
    console.error(error)

    return undefined
  }
}

export const hasLocalStorage = (storageName: string): any => {
  try {
    const storage = getLocalStorage(storageName)

    return Boolean(storage)
  } catch (error) {
    console.error(error)

    return undefined
  }
}

export const hasSessionStorage = (storageName: string): any => {
  try {
    const storage = getSessionStorage(storageName)

    return Boolean(storage)
  } catch (error) {
    console.error(error)

    return undefined
  }
}

export const removeLocalStorage = (storageName: string): void => {
  try {
    if (!isServer()) {
      window.localStorage.removeItem(storageName)
    }
  } catch (error) {
    console.error(error)
  }
}

export const removeSessionStorage = (storageName: string): void => {
  try {
    if (!isServer()) {
      window.sessionStorage.removeItem(storageName)
    }
  } catch (error) {
    console.error(error)
  }
}

export const setLocalStorage = (storageName: string, storageValue: unknown): void => {
  try {
    const storage = JSON.stringify(storageValue)

    if (!isServer()) {
      window.localStorage.setItem(storageName, storage)
    }
  } catch (error) {
    console.error(error)
  }
}

export const setSessionStorage = (storageName: string, storageValue: unknown): void => {
  try {
    const storage = JSON.stringify(storageValue)

    if (!isServer()) {
      window.sessionStorage.setItem(storageName, storage)
    }
  } catch (error) {
    console.error(error)
  }
}
