import { useEffect, useState  } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

// icons
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";


function Themee(){
    const [t] = useTranslation();
    const [lightMode, setLightMode] = useState(false);

    useEffect(() => {
  document.documentElement.setAttribute("data-theme", lightMode ? "light" : "dark");
}, [lightMode]);


    return(<>
      <Button 
      aria-label={t("Change theme")}
        onClick={() => {setLightMode(!lightMode)}}>
          
        {lightMode ? <MdOutlineDarkMode size={25}/> 
        :
          <CiLight size={25}/> }
        </Button>
    </>)
}export default Themee;