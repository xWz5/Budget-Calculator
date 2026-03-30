import { Container, Row, Col} from "react-bootstrap";
import Themee from "./Themee";
import Language from "./Language";


function TopBar(){
    
return(<>
<div className="">
  <Container>
    <Row className="justify-content-center">
      <Col xs="auto" className="d-flex gap-3 mt-3">
        <Themee />
        <Language />
      </Col> 
    </Row>
  </Container>
</div>
</>)
}export default TopBar;