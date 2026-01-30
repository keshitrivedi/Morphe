import './globals.css'
import SchemeList from './pages/SchemeList'
import BeneficiaryList from './pages/BeneficiaryList'
import BeneficiaryDetails from './pages/BeneficiaryDetails'

function App() {

  return (
    <>
      {/* <div className='bg-amber-400'>Test</div> */}
      {/* <SchemeList /> */}
      {/* <BeneficiaryList schemeName="PMJAY"/> */}
      <BeneficiaryDetails id={1} risk="high" riskScore={207} />
    </>
  )
}

export default App
