import { useState, useEffect } from "react";
import { Chatbot } from "supersimpledev";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";
import RobotProfileImage from "./assets/robot.png";

function App() {
  useEffect(() => {
    Chatbot.addResponses({
      goodbye: "Goodbye! Have a great day!",
      "give me a unique id": function () {
        return `Sure, here's your unique id: ${crypto.randomUUID()}`;
      },
    });
  }, []);

  //de-structure #3
  // const [chatMessages, setChatMessages] = useState([{
  //     message: 'hello chatbot',
  //     sender: 'user',
  //     id: 'id1'
  // }, {
  //     message: 'Hello! How can I help you?',
  //     sender: 'robot',
  //     id: 'id2'
  // }, {
  //     message: 'can you get me todays date?',
  //     sender: 'user',
  //     id: 'id3'
  // }, {
  //     message: 'Today is February 22',
  //     sender: 'robot',
  //     id: 'id4'
  // }
  // ]);
  // const [chatMessages, setChatMessages] = array; //de-structure #2
  // const chatMessages = array[0]; // de-structure #1
  // const setChatMessages = array[1];

  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || [],
  );

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);
  
  const title = `${chatMessages.length} Messages`;

  return (
    <>
      <title>{title}</title>
      <link rel="icon" type="image/png" href={RobotProfileImage} />

      <div className="app-container">
        {chatMessages.length === 0 && (
          <p className="welcome-message">
            Welcome to the chatbot project! Send a message using the textbox
            below.
          </p>
        )}
        <ChatMessages chatMessages={chatMessages} />
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    </>
  );
}

export default App;
