import { useDispatch, useSelector } from "react-redux";
import { chatSelector } from "./redux/store/reducers/chatSelector/selector";
import './index.css';

function App() {
  const chats = useSelector(chatSelector)
  const dispatch = useDispatch();

  const add = (name) => {
    const obj = {
      name: name
    }
    dispatch({ type: 'add', payload: obj })
  }
  return (
    <div >
      {
        chats.map((chat) => (
          <li className="liapp">
            {chat.name}
            <button className="butdel" onClick={() => dispatch({ type: 'delete', payload: chat.id })}>Удалить</button>
          </li>
        ))
      }
      <button className="butadd" onClick={() => add(prompt())}>Добавить</button>
    </div>
  );
}

export default App;
