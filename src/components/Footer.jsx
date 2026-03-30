import {Container, Row, Col} from "react-bootstrap"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer(){

    const [t] = useTranslation();

    return (<>
    
    



<footer>
    <Container>
        <Row>
            <Col className="text-center mt-4 mb-3 text-muted">
                <small>
                    {t("Made by")}{" "}
                    <Link to={"https://github.com/xWz5/"}>{t("Abdulkraim")}</Link>
                    {" • "}
                     {new Date().getFullYear()}
                </small>
            </Col>
        </Row>
    </Container>
</footer>
    
    </>)
}export default Footer;