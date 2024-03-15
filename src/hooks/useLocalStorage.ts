import { useState } from 'react'

import showAlert from '@utils/showAlert'

interface UseLocalStorageProps<T> {
  key: string
  initialValue: T
}

export function useLocalStorage<T>({
  key,
  initialValue,
}: UseLocalStorageProps<T>): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: T) => {
    try {
      const valueToStore = value
      setStoredValue(valueToStore)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (err) {
      if (err instanceof Error) {
        showAlert(err.message, { type: 'error' })
        return
      }
      showAlert(`Error accessing ${key} from localStorage`, { type: 'error'})
    }
  }

  return [storedValue, setValue]
}
