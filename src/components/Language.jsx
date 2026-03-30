import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";


function Language() {

        const [t, i18n] = useTranslation("ar");
        const [lang, setLang] = useState("ar")

        function changeLanguage(){

                if(lang === "ar"){
                        setLang("en");
                        i18n.changeLanguage(lang);
                }
                else{
                        setLang("ar")
                        i18n.changeLanguage(lang);
                }
                document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        }

    return(<>
        <Button 
           aria-label={t("Change language")}
           onClick={changeLanguage}>
           {lang === "ar"? "عربي" : "english" }
           </Button>
    </>)
}export default Language;