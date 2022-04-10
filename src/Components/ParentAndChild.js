/* 
   - Parent can now recieve childs as prop by an array
   - Each child should have a button.
   - Clicking on a button cause the parent to create a new child.
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
