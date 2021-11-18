import './App.css';
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
          <Route exat path='/' component={Welcome}/>
          <Route exat path='/invite' component={PhoneConfirmation}/>
        </Routes>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
