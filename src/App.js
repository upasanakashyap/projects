import React from 'react';
import{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactBootstrap from'react-bootstrap';
import CardList from './CardList';
import Records from './record.json';
import SubscriptionDetails from './SubscriptionDetails';
import BurnerDetails from './BurnerDetails'
/*function App() {
  const [allcardholder, setAllcardholder] = useState([]);
  const [cardholder, setcardholder] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch('./record.json');
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllcardholder(userData.results);
      setcardholder(userData.results);
    })();
  },[]);
    
  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredallcardholder = allcardholder.filter(allcardholder => (`${allcardholder.name} ${Records.budget_name}`.toLowerCase().includes(value)));
    setcardholder(filteredallcardholder);
  }*/
  const App = () => {
    const [cards, setCards] = useState([]);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCardType, setSelectedCardType] = useState('all');
  
    useEffect(() => {
      // Simulate API call
      // In a real application, you would replace this with an actual API call
      const fetchData = async () => {
        try {
          // Mock API call delay
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const response = './record.json'; // Replace with actual API call
          setCards((prevCards) => [...prevCards, ...response.data]);
          setPage(response.page);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [page]);
  
    const handleLoadMore = () => {
      setPage((prevPage) => prevPage + 1);
    };
  
    const handleCardTypeChange = (type) => {
      setSelectedCardType(type);
      setCards([]); // Clear existing cards
      setPage(1); // Reset page to 1
    };
  
    const filteredCards = cards
      .filter((card) =>
        card.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter(
        (card) =>
          selectedCardType === 'all' || card.card_type === selectedCardType
      );

  return (
    <div className="App">
      <h1>Card Holder</h1>
      <ReactBootstrap.Navbar expand="lg" className="bg-body-tertiary">
      <ReactBootstrap.Container fluid>
      <ReactBootstrap.Navbar.Brand href="#">Card</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="navbarScroll" />
        <ReactBootstrap.Navbar.Collapse id="navbarScroll">
          <ReactBootstrap.Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <ReactBootstrap.Nav.Link href="#action1">Your</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#action2">All</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#action2">Blocked</ReactBootstrap.Nav.Link>
            
          </ReactBootstrap.Nav>

           <ReactBootstrap.NavDropdown title="Filter" id="collapsible-nav-dropdown">
              <ReactBootstrap.NavDropdown.Item href="#action/3.1">Type
               <ReactBootstrap.Form.Check aria-label="option 1" label='Subcription'/>
               <ReactBootstrap.Form.Check aria-label="option 1" label='Burner'/>
               
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#action/3.2">
                CardHolder
                <ReactBootstrap.Form.Select aria-label="Default select example">
                   <option >Select cardholder</option>
                     <option href='./record.json'/>
              </ReactBootstrap.Form.Select>
              <ReactBootstrap.Button as="input" type="submit" value="Apply" />{' '}
               <ReactBootstrap.Button as="input" type="reset" value="Clear  `" />
              </ReactBootstrap.NavDropdown.Item>
              
            </ReactBootstrap.NavDropdown>
          
          <ReactBootstrap.Form className="d-flex">
            <ReactBootstrap.Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              //onput={filterCards}
            />
            <ReactBootstrap.Button variant="outline-success">Search</ReactBootstrap.Button>
          </ReactBootstrap.Form>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Container>
    </ReactBootstrap.Navbar>
      
    
  
      
    </div>
  );
}
    
  

export default App;
