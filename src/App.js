import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';


import Footer from './Pages/Shared/Footer/Footer';
import MyOrder from './Pages/MyOrder/MyOrder';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/addService" element={<PrivateRoute><AddService/></PrivateRoute>} />
            {/* <Route path="/addService" element={<MyOrder/>} /> */}
            
            
            <Route path="/manageServices" element={<PrivateRoute><ManageServices/> </PrivateRoute>} />
              
            <Route path="/login" element={<Login/>} />
            
            {/* <Route path="/booking/:serviceId" element={<PrivateRoute><Booking/></PrivateRoute>} /> */}
              
            <Route path="*" element={<NotFound/>} />
              
          </Routes>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
