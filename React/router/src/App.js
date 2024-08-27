import './App.css';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {Col, Container, Nav, NavItem, NavLink, Row} from 'reactstrap';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
          <Container>
            <Row>
                <Col md="3">
                  <Nav vertical className='bg-light p-3'>
                      <NavItem>
                        <NavLink tag={Link} to="/">Home</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={Link} to="/about">About</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink tag={Link} to="/contact">Contact</NavLink>
                      </NavItem>
                  </Nav>
                </Col>
                <Col md="9">
                  <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                  </Routes>
                </Col>
            </Row>
          </Container>
      </Router>
    </div>
  );
}

export default App;
