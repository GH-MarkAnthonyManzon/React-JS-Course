import dayjs from 'dayjs';
import { useState, type JSX } from 'react'
import { Chatbot} from 'supersimpledev';
import LoadingGIF from '../assets/loading-spinner.gif';
import './ChatInput.css';

type ChatMessage = {
    message: string | JSX.Element;
    sender: "user" | "robot";
    id: string;
    time?: number;
};

type ChatInputProps = {
    chatMessages: ChatMessage[];
    setChatMessages: (chatMessages: ChatMessage[]) => void;
};

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type InputKeyEvent = React.KeyboardEvent<HTMLInputElement>;

export function ChatInput({ chatMessages, setChatMessages }: ChatInputProps) {

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event: InputChangeEvent) {
      setInputText(event.target.value);
  }
  
  function handleKey(event: InputKeyEvent) {
      if (event.key === 'Enter') 
          return sendMessage();
      if (event.key === 'Escape')
          return setInputText('');
  }

  async function sendMessage () {

      if(isLoading || inputText === ''){
          return;
      }
      
      setIsLoading(true);
      setInputText('');
      
      const newChatMessages: ChatMessage[] = [
          ...chatMessages,
          {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID(),
              time: dayjs().valueOf()
          }
      ]

      setChatMessages([
          ...newChatMessages,    
          {
              message: <img src={LoadingGIF} className="loading-spinner" />,
              sender: 'robot',
              id: crypto.randomUUID()
          }
      ]);

      const response = await Chatbot.getResponseAsync(inputText);
      setChatMessages([
          ...newChatMessages,
          {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID(),
              time: dayjs().valueOf()
          }
      ]);
      setIsLoading(false);
      setInputText('');
  }

  return (
      <div className="chat-input-container">
          <input 
              placeholder="Send a message to Chatbot" 
              size={30} 
              onChange={saveInputText}
              value={inputText}
              onKeyDown={handleKey}
              className="chat-input"
          />
          <button      
              onClick={sendMessage}
              className="send-button"
          >Send</button>    
          <button
              onClick={() => setChatMessages([])}
              className="clear-button"
          >Clear</button>
      </div>
  );
}