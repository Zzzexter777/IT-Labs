import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./components/Button/Button.jsx"
import ButtonTask from "./components/Button/ButtonTask.jsx"
import Radio from './components/Radio/Radio.jsx'
import DefaultButton from './components/Button/DefaultButton.jsx'
import InputText from './components/InputText/InputText.jsx'

const INCREMENT_KEY = "increment"

const App = () => {
  // 1 lab
  const [mode, setMode] = useState('increment');


  // 2 lab
  const [items, setItems] = useState([]); 
  const [inputValue, setInputValue] = useState(""); 
  const handleAddItem = () => {
    if (inputValue.trim() === "") return;

    const newItem = {
      id: Date.now(), 
      text: inputValue.trim(),
    };

    setItems([...items, newItem]); 
    setInputValue(""); 
  };

  return (
    <div>
      {/* 1 lab */}
      <Button>Наша кнопка</Button>
      <Button>Это уже другая кнопка</Button>
      <Button title="Вы должны увидеть данный текст при наведении на кнопку">
        Кнопка
      </Button>
      <br></br>
      <ButtonTask mode={mode} title="Вы должны увидеть данный текст при наведении на кнопку">
        Клик
      </ButtonTask>
      <br></br>
      <Radio checked={mode === INCREMENT_KEY}
             onChange={(e) => setMode(e.target.value)}
             value={INCREMENT_KEY}>+1</Radio>
      <Radio checked={mode === 'decrement'}
             onChange={() => setMode('decrement')}
             value="decrement">-1</Radio>

      {/* 2 lab */}
      <InputText value={inputValue} onChange={setInputValue} />
      <DefaultButton onClick={handleAddItem} disabled={!inputValue.trim()}>
        Добавить
      </DefaultButton>

      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul> 
    </div>
  );
};

export default App;
