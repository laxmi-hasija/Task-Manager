import Todo from './components/Todo'
import './Cssfiles/App.css'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
 

  return (
    <div className='container'>
    <div className='maincard'>
     <Provider store={store}>
      <Todo/>
      </Provider>
      </div>
    </div>
  )
}

export default App
