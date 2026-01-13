import logo from './logo.svg';
import './App.css';
import Input01Con from './containers/Input01Con';
import Input02Con from './containers/Input02Con';
import CheckBox03Con from './containers/CheckBox03Con';
import QuizRadioCon from './containers/QuizRadioCon';
import Ref03Con from './containers/Ref03Con'; 
import Ref04Con from './containers/Ref04Con';

function App() {
  return (<>
    <QuizRadioCon/>
    <hr></hr>
    <CheckBox03Con/>
    <hr></hr>
    <Input01Con/>
    <Input02Con/>
    <Ref03Con/>
    <Ref04Con/>
  </>
  );
}

export default App;
