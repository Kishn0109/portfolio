// import { Card } from 'react-bootstrap';
import './App.css';
import Card from './Card';
import Navebar from './Naverbar'
import Section1 from './Section1';
import About from './About'
import Work from './Work';
import Contactus from './Contactus';
import Skill from './Skill';
import Footer from './Footer';
function App() {
  return (
    <div>
      <Navebar/>
      <Section1/> 
      {/* <Card/>     */}
      <About/>
      <Work/>
      <Contactus/>
      <Skill/>
      <Footer/>
    </div>
  );
}

export default App;
