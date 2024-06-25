import React, { useEffect } from 'react'

const Chatbot = () => {
  useEffect(() => {
    const script1 = document.createElement('script')
    script1.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "sNjFjcxTAIrNBn1h0RyDj",
        domain: "www.chatbase.co"
      }
    `
    document.body.appendChild(script1)

    const script2 = document.createElement('script')
    script2.src = 'https://www.chatbase.co/embed.min.js'
    script2.setAttribute('chatbotId', 'sNjFjcxTAIrNBn1h0RyDj')
    script2.setAttribute('domain', 'www.chatbase.co')
    script2.defer = true
    document.body.appendChild(script2)

    return () => {
      document.body.removeChild(script1)
      document.body.removeChild(script2)
    }
  }, [])

  return null
}

export default Chatbot
