/* 
- Create a Parent and Child Components 
- The child compoent will recieve a callback function as prop 
- THe child component will have a button in its JSX that will call the 
  function retrived from the parent
- THe parent callback will print "clicked" in the console.log
*/

const Child = ({clickEvent, ...props}) => {
    return (
        <>
            <button onClick={clickEvent}>Click me !</button>
        </>
    )
}

const Parent = (props) => {

    const clickEventHandler = () => {
        console.log("Clicked");
    }

    return (
        <>
           <Child clickEvent={clickEventHandler}/>
        </>
    )
}

export default Parent;
