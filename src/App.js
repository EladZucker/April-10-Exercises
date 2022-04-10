import './App.css';
import CapitalizeInput from './Components/CapitalizeInput';
import Counter from './Components/Counter';
import PrintNames from './Components/PrintNames';
import Parent from './Components/ParentAndChild';
 const persons = [{firstName:"Elad", lastName:"Zucker", phoneNumber :"054-2325066"},
                  {firstName:"John", lastName:"Doe"},
                  {firstName:"Maayan", lastName:"Kaplan"}]

function App() {
  return (
    <div className="App">
      <div className="box">
        <CapitalizeInput startText="kokok text"/>
       </div>
       <div className="box">
         <Counter startNumber={5} />
       </div>
       <div className="box">
         <PrintNames persons={persons}></PrintNames>
       </div>

       <div className="box">
         <Parent/>
       </div>

    </div>
  ); 
}

export default App;
