import { Container, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import Navbars from "./components/Navbars/Navbars";
import LazyComponent from "./components/Suspense/LazyComponent";

function App() {
  return (
    <div className="App">
      <Navbars />
       
       <Container className="mt-5"> 
       
        <LazyComponent />
       </Container>       
     
    </div>
  );
}

export default App;
