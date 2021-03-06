import './@fake-db';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './store'
import Layout from './containers/layout';
function App() {

  return (
    <div className='bg-black text-white min-h-screen'>
      <Provider store={store}>
          <Layout />
      </Provider>
    </div>
  );
}

export default App;