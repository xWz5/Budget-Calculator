import { useTranslation } from "react-i18next";
import {Table , Button} from 'react-bootstrap'


function CommitmentTable({commitments, onRemove}){

    const [t] = useTranslation();

return (<>

<Table className="align-middle text-center mt-3">
    <colgroup >
        <col style={{ width: "20%" }} />
        <col style={{ width: "60%" }} />
        <col style={{ width: "20%" }} />
    </colgroup>
    <thead>
        <tr>
            <th>#</th>
            <th>{t("Commitment")}</th>
            <th>{t("Action")}</th>
        </tr>
    </thead>
    <tbody>
        {(!commitments || commitments.length === 0) ? (
            <tr>
                <td colSpan={3} className="text-muted text-center">
                    {t("commitments will display here")}
                </td>
            </tr>
        ) : (
            commitments.map((value, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value}</td>
                    <td>
                        <Button variant="danger" onClick={() => onRemove(index)}>x</Button>
                    </td>
                </tr>
            ))
        )}
    </tbody>
</Table>
</>)


}export default CommitmentTable;