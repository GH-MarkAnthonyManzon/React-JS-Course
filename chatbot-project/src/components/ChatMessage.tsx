import dayjs from 'dayjs';
import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/lebron_james.jpg';
import './ChatMessage.css';

type ChatMessageProps = {
    message: string;
    sender: string;
    time: string;
};

export function ChatMessage({ message, sender, time }: ChatMessageProps) {
          // DE-STRUCTURE #2 ^             
  // const message = props.message;
  // const sender = props.sender;
  // const { message, sender } = props; DE-STRUCTURE #1

  /*
  if(sender === 'robot'){
      return (
          <div>
              <img src="assets/robot.png" width="50" />
              {message}
          </div>
      );
  } THIS IS JS FEATURE IF STATEMENT but shortened using the GUARD OPERATOR
  */

  return (
      <div className={
          sender === 'user' 
          ? 'chat-message-user' 
          : 'chat-message-robot'
      }>
          {sender === 'robot' && (
              <img src={RobotProfileImage}   
              className="chat-message-profile" />
          )}
          <div className="chat-message-text">
              {message}
              {time && (
                <div className="chat-message-time">
                    {dayjs(time).format('h:mma')}
                </div>
              )}                    
          </div>
          {sender === 'user' && (
              <img src={UserProfileImage} 
              className="chat-message-profile" />
          )}
      </div>
  );
}