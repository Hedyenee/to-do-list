import logo from "./logo.svg";
import "./App.css";
import { Provider } from 'react-redux';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <AddTask />
        <ListTask />
      </Provider>
    </>
  );
}

export default App;
