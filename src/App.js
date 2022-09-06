
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Join from './components/Join';
import Chat from './components/Chat';



function App() {

  return (
    <>
    <div className='app'>
    <Router>
<Routes>
  <Route path='/' element={<Join/>}/>
  <Route path='/chat' element={<Chat/>}></Route>
</Routes>
</Router>
    </div>
    </>
  );
}

export default App;
