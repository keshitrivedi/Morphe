import { RISK_COLOUR } from "./riskColours";

export default function BeneficiaryRow({ id, risk }) {
    const riskColour = RISK_COLOUR[risk] ?? "bg-white";

    return (
        <div className="p-2 text-black font-bold flex flex-row bg-purple-300 items-center gap-2 rounded-xl">
            <div>{id}</div>
            <div className={`rounded-full w-5 h-5 ${riskColour}`} />
        </div>
    );
}
