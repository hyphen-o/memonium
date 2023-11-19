import { useState, useEffect } from "react"

export const useStorage = () => {
  const [localText, setLocalText] = useState<string>("")
  
  useEffect(() => {
    const text = localStorage.getItem("text")
    if(text) {
      setLocalText(text)
    } else {
      setLocalText("")
    }
  }, [])

  const setText = (currentText: string) => {
    localStorage.setItem("text", currentText)
    setLocalText(currentText)
  }
  
  const clearText = () => {
    localStorage.removeItem("text")
    setLocalText("")
  }

  return {localText, setText, clearText}
}
