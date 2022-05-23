import  React from "react"

const Counter = ({prop})=>{

    const [count,setCount] = React.useState(prop)

    const incrementCount = ()=>{
        setCount(count+1)
    }
    const decrementCount = ()=>{
        setCount(count-1)
    }
    const doubleCount =()=>{
        setCount(count*2)
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick ={incrementCount}>Increment</button>
            <button onClick ={decrementCount}>Decrement</button>
            <button onClick ={doubleCount}>Double</button>
        </div>
    )
}

export default Counter