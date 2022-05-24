import  React from "react"
import styles from "./counter.module.css"

const Counter = ({prop})=>{

    const [count,setCount] = React.useState(prop)

    const incrementCount = ()=>{
        setCount(count+1)
    }
    const decrementCount = ()=>{
        if(count>0)
        {setCount(count-1)}
    }
    const doubleCount =()=>{
        setCount(count*2)
    }

    return (
        <div>
            { count%2==0 ? <h1 className={styles.colorGreen}> Counter
            : {count}</h1> : <h1 className={styles.colorRed}> Counter: {count}</h1> }  
            <button onClick ={incrementCount}>Increment</button>
            <button onClick ={decrementCount}>Decrement</button>
            <button onClick ={doubleCount}>Double</button>
        </div>
    )
}

export default Counter