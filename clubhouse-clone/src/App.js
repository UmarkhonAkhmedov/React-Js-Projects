import './App.css';
import { Fragment } from 'react';
import Welcome from './pages/Welcome';
import PlanLayout from './pages/Layouts/PlanLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneConfirmation from './pages/PhoneConfirmation';

// <PlanLayout>
function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route path='/' element={<Welcome />}/>
            {/* <Welcome/> */}
          {/* </Route> */}
          <Route path='/invite' element={<PhoneConfirmation />} />
            {/* <PhoneConfirmation/> */}
        </Routes>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
