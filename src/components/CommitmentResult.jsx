import { useTranslation } from "react-i18next";

function CommitmentResult({commitments, total}){

    const [t] = useTranslation();

    let sumCommitments = arrSum(commitments)
    let weeklyMoney = ((total - sumCommitments) / 4).toFixed(2);
    let dailyMoney = ((total - sumCommitments) / 30).toFixed(2);
    let remainingMoney = total - sumCommitments;
    
    function arrSum(arr){
    return arr.reduce((sum, value) => sum + Number(value),0);
        
}

return (<>
        <hr />
        <div className="m-0 p-2 result rounded">
            <p className="m-0">{t("Money you had")}: {total} {t("$")}</p>
            <p className="m-0">{t("Commitments")}: {sumCommitments} {t("$")}</p>
            <p className={remainingMoney < 0 ? "text-danger m-0" : "text-success m-0"}>
                {t("Remaining money you have")}: {remainingMoney} {t("$")}</p>
            <strong>{t("You can spend weekly")}: {weeklyMoney} {t("$")}</strong>
            <br />
            <strong>{t("You can spend daily")}: {dailyMoney} {t("$")}</strong>
        </div>
</>)
}export default CommitmentResult;