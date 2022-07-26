import Meal from "./components/Meal";
import {Routes, Route} from 'react-router-dom';
import RecipeInfo from "./components/RecipeInfo";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Meal />} />
        <Route path='/:MealId' element={<RecipeInfo /> } />
      </Routes>
    </div>
  );
}

export default App;
