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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/inventory/:inventoryId' element={<InventoryDetail></InventoryDetail>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='' element=''></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
