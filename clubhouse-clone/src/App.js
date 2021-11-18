import './App.css';
import Welcome from './pages/Welcome';
import PlanLayout from './pages/Layouts/PlanLayout';
import {BrowserRouter} from "react-router-dom";

// <PlanLayout>
function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Welcome/>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
