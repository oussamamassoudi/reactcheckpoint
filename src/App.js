
import './App.css';
import Navbarr from './components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Carousell from './components/Carousell';
import Cardd from './components/Cardd';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbarr/>
      <div className='card-container'>
      <Cardd/>
      <Card2/>
      <Card3/> 
</div>
<div className='car-container'>
    <Carousell/>
    </div>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
