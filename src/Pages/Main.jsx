import { useState} from "react";
import {Button, Container, Form, Row, Col} from "react-bootstrap"

import { useTranslation } from "react-i18next";

import TopBar from "../components/TopBar.jsx";
import CommitmentResult from "../components/CommitmentResult.jsx";
import CommitmentTable from "../components/CommitmentTable.jsx";
import Footer from "../components/Footer.jsx";




function Main(){
    
    const [t] = useTranslation();
    

    const [total, setTotal] = useState("")
    const [commitment, setCommitment] = useState("");
    const [commitments, setCommitments] = useState([]);

    function removeInput(index) {
    const updated = commitments.filter((_, i) => i !== index);
    setCommitments(updated);
    
  }
    
    function calculate(e){
    e.preventDefault();
    
    // check if input is clear
    if (!commitment || isNaN(commitment)) return alert(t("Enter a valid number"));
   
    // add the current value to commitments
   const updated =([...commitments, commitment]);
   setCommitments(updated);
   
   // clear current input
   setCommitment("");
}

    return(<>
    <TopBar />
     <h3 aria-label={t('Budget Calculator')}
      className="d-flex justify-content-center mt-3">
      {t('Budget Calculator')}
     </h3>

     <p aria-label={t("This app helps you control your weekly budget")}
      className="text-center">
      {t("This app helps you control your weekly budget")}
    </p>
    <Container>
           <Row className="d-flex justify-content-center ">
            <Col lg={5} md={4} xs={11} className="mt-3 mb-3 p-4 containerr">

            <Form.Control
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                type="number"
                placeholder={t("Total money you have")}
                        />
                        
            <Form.Control 
                className="mt-2"
                value={commitment}
                onChange={(e) => setCommitment(e.target.value)}
                type="number"
                placeholder={t("Commitment")}
                        />
            <div className="text-center mt-2">
                <Button
                 onClick={calculate}>{t("Add a commitment")}
                </Button>
            </div>
                <hr />
                <CommitmentTable 
                commitments={commitments}
                onRemove={removeInput}
                />
               
                <CommitmentResult 
                    commitments={commitments}
                    total={total}
                />
             </Col>
            </Row>
        </Container>
        <Footer />    
    </>)
}export default Main;