
import "./App.css";
import { Provider } from 'react-redux';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import store from './store';

function App() {
  return (
    <div style={{width: "100%", margin: "0 auto", backgroundColor: "lightgray", padding: "20px"}}>
      <Provider store={store}>
        <AddTask />
        <ListTask />
      </Provider>
    </div>
  );
}

export default App;
