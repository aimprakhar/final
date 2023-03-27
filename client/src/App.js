
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { Home } from './Pages/home/Home';
import { List } from './Pages/list/List';
import { Hotels } from './Pages/hotels/Hotels';
import { PaymentPage } from './components/paymentPage/PaymentPage';
import Login from './Pages/login/Login';
import Reg from './Pages/login/Reg';
import Error from './Pages/login/Error';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/hotel" element={<List/>}/>
      {/* <Route path="/hotels/" element={<Hotels/>}/>  */}
     <Route path="/hotels/find/:id" element={<Hotels/>}/>
   
     <Route path="/pay" element={<PaymentPage/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Reg/>}/>
     <Route path="/error" element={<Error/>}/>
 
 
    </Routes>
    
    </BrowserRouter>
   
    
  );
}

export default App;
