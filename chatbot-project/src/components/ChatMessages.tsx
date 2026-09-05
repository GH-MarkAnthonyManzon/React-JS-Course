import { useRef, useEffect, type JSX } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

type ChatMessagesProps = {
    chatMessages: {
        message: string | JSX.Element;
        sender: "user" | "robot";
        id: string;
        time?: number;
    }[];
}

function ChatMessages({ chatMessages }: ChatMessagesProps) {

  const chatMessagesRef = useRef <HTMLDivElement | null> (null);

  useEffect(() => {
      const containerElem = chatMessagesRef.current;
      if (containerElem) {
          containerElem.scrollTop = containerElem.scrollHeight;
      }            
  }, [chatMessages]);

  return (
      <div 
          className="chat-messages-container"
          ref={chatMessagesRef}
          >    
          {chatMessages.map((chatMessage) => {
              return (
                  <ChatMessage 
                      message={chatMessage.message}
                      sender={chatMessage.sender}
                      time={chatMessage.time}
                      key={chatMessage.id}
                  />
              );
          })}
      </div>
  );
}

export default ChatMessages;