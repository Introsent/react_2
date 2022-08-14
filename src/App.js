import {useState, useRef, useEffect} from "react";


function App() {
  const [messageList, setMessageList] = useState([]);
  const inputValue = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
      setMessageList(prevMessage => [...prevMessage, {id: prevMessage.length, text: `Thanks for contacting us`, author: "Robot"}]);
  }, [value]);
  const handleFocus = () => {
      setValue(value+1)
      setMessageList(prevMessage => [...prevMessage, {id: messageList.length, text: inputValue.current.value, author: "User"}]);
  }
  return (
      <div>
          <div>
              <input type="text" ref={inputValue} placeholder="Input text"/>
              <button onClick={handleFocus}>Отправить</button>
         </div>
        {messageList.map((item) => {
              return (
                  <div key={item.id}>
                    <p>{item.text}</p>
                    <p>{item.author}</p>
                  </div>
              )
        }
        )
        }
      </div>
  );
}

export default App;
