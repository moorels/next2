import React,{useState,useEffect} from 'react'
import styles from '../styles/Con1.module.css'

function Con1() {

    const [count,setCount] = useState(0)

useEffect(()=>{

    setTimeout(()=>{

        setCount(count+1)
    },1000)
},[count])


    return (
        <div  className={styles.con1}>
            {count}
        </div>
    )
}

export default Con1
