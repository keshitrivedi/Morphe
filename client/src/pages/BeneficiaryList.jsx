import BeneficiaryRow from "../components/BeneficiaryRow";

export default function BeneficiaryList ({schemeName}) {
    return (
        <div className="flex flex-col gap-3 p-3">
            <div className="font-bold text-2xl">{schemeName}</div>
            <BeneficiaryRow id={1} risk="high"/>
            <BeneficiaryRow id={2} risk="moderate"/>
            <BeneficiaryRow id={3} risk="low"/>
        </div>
    )
}