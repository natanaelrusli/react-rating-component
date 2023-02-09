import './App.css';
import Card from './components/Card';
import RatingForm from './components/RatingForm';

function App() {
  return (
    <div className="app">
      <Card>
        <RatingForm />  
      </Card> 
    </div>
  );
}

export default App;
