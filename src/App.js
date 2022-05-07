import './App.css';
import Header from './Componantes/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Componantes/Home/Home';
import ManageInventories from './Componantes/ManageInventories/ManageInventories';
import AddItem from './Componantes/AddItem/AddItem';
import Signup from './Componantes/SignUp/Signup';
import NotFound from './Componantes/NotFound/NotFound';
import MyItems from './Componantes/MyItems/MyItems';
import Login from './Componantes/Login/Login';
import Inventory from './Componantes/Inventory/Inventory';
import Footer from './Componantes/Footer/Footer';
import InventoryDetail from './Componantes/Inventory/InventoryDetail';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Componantes/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='' element=''></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
