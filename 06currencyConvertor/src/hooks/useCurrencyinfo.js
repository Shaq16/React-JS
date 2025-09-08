import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-08-14/v1/currencies/${currency}.json`).then((res)=>res.json()).then((res)=>setData(res)).then((res)=>res[currency])
    },[currency])
    console.log(data)
    return data
}

export default useCurrencyInfo;