import React, { useState, useEffect, useContext, createContext } from "react"

type LocalStorageProviderProps = {
  children?: React.ReactNode
}

const LocalStorageContext = createContext(undefined)

export const LocalStorageProvider = ({ children }: LocalStorageProviderProps) => {
  const [storedValue, setStoredValue] = useState<string>("")

  useEffect(() => {
    const text = localStorage.getItem("text")
    if (text) {
      setStoredValue(text)
    } else {
      setStoredValue("")
    }
  }, [])

  const setText = (currentText: string) => {
    localStorage.setItem("text", currentText)
    setStoredValue(currentText)
  }

  const clearText = () => {
    localStorage.removeItem("text")
    setStoredValue("")
  }

  return (
    <LocalStorageContext.Provider value={{ storedValue, setText, clearText }}>
      {children}
    </LocalStorageContext.Provider>
  )
}

export const useLocalStorage = () => {
  const context = useContext(LocalStorageContext)

  return context
}
