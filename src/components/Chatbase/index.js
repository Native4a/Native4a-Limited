import React, { useEffect } from 'react'

const ChatbaseChatbot = () => {
  useEffect(() => {
    // 添加 Chatbase 腳本到文檔中
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.innerHTML = `
      (function(d, w, c) {
        w.Chatbase = w.Chatbase || function() {
          (w.Chatbase.q = w.Chatbase.q || []).push(arguments);
        };
        var s = d.createElement('script');
        s.async = true;
        s.src = 'https://app.chatbase.co/embed.js';  // 這裡是您的嵌入代碼 URL
        var x = d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      })(document, window);
      Chatbase('init', {
        botId: 'sNjFjcxTAIrNBn1h0RyDj',  // 替換為您的機器人 ID
        welcomeMessage: '您好！今天我能幫您什麼？',
      });
    `
    document.body.appendChild(script)

    return () => {
      // 在組件卸載時清理腳本
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div>
      {/* 在這裡嵌入您的 iframe 代碼，並添加 title 屬性 */}
      <iframe
        src="https://app.chatbase.co/chatbot-embed/YOUR_BOT_ID"
        width="100%"
        height="500px"
        frameBorder="0"
        allow="microphone; geolocation"
        title="Chatbase Chatbot" // 添加 title 屬性
      ></iframe>
    </div>
  )
}

export default ChatbaseChatbot
