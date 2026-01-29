const RISK_COLOUR = {
    high: "bg-red-600",
    moderate: "bg-yellow-600",
    low: "bg-green-600",
};

export default function BeneficiaryRow({ id, risk }) {
    const riskColour = RISK_COLOUR[risk] ?? "bg-white";

    return (
        <div className="p-2 text-white flex flex-row bg-purple-500 items-center gap-2 rounded-xl">
            <div>{id}</div>
            <div className={`rounded-full w-5 h-5 ${riskColour}`} />
        </div>
    );
}
