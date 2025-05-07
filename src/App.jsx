
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageGrid from './Other/ImageGrid';
import Navbar from './Other/Navbar';
import ProductForm from './Other/ProductForm';
// import EmployeeList from './components/ListEmployee';
// import CreateEmployee from './components/createEmployee';
// import HeaderComponent from './components/headerComponent';
// import FooterComponent from './components/footerComponent';
import CreateEmployee from './Component/CreateEmp';
import HeaderComponent from './Component/Header';
import FooterComponent from './Component/FooterComponent';
import EmployeeList from './Component/EmpList';





function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <div className='container'>
      <Routes>
          <Route  path='/' element={<EmployeeList/>}></Route>
          <Route path='/employees/addemp' element={<CreateEmployee/>}></Route>
          <Route path='/employees/:id1' element={<CreateEmployee/>}></Route>
         
        </Routes>
        
      </div>
      <FooterComponent/> 

{/*         
      <Navbar />
      <Routes>
        <Route path='/' element={<ImageGrid />} />
        <Route path='/addproduct' element={<ProductForm/>} />
      </Routes> */}
       {/* <ImageGrid/>
       <ProductForm/> */}
    </div>
  );
}

export default App;