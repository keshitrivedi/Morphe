import { RISK_COLOUR } from "../components/riskColours"

export default function BeneficiaryDetails ({id, risk, riskScore}) { //add risk messages and flags in parameters
    const riskColour = RISK_COLOUR[risk] ?? "bg-white";
    return (
        <div className="flex flex-col gap-4 p-3 justify-between">
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-2 bg-purple-300 p-4 rounded-lg">{id}</div>
                    <div className="flex flex-1 bg-purple-300 p-4 rounded-lg">30/01/2026</div>
                </div>

                <div className="flex flex-row gap-4">
                    <div className={`flex flex-1 ${riskColour} p-4 rounded-lg`}>{riskScore}</div>
                    <div className="flex flex-2 bg-purple-300 p-4 rounded-lg">Risk Score Reason Risk Score Reason Risk Score Reason Risk Score Reason Risk Score Reason Risk Score Reason Risk Score Reason</div>
                </div>
            </div>

            <div className="flex flex-row gap-4 justify-center fixed bottom-3 w-full">
                <button className="bg-purple-300 p-4 rounded-full cursor-pointer">Set Status</button>
                <button className="bg-purple-300 p-4 rounded-full cursor-pointer">Send Message</button>
                <button className="bg-purple-300 p-4 rounded-full cursor-pointer">Schedule Visit</button>
            </div>
        </div>
    )
}