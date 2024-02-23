import React from "react";
import { useState, useEffect } from "react";
import Tenants from "./Tenants";

const Residents = ({url})=>{
    const [data, setData] = useState([]);

    const dataFetch = async () => {
        const d= await fetch(url);
        const response = await d.json();
        setData(response);
    }
    // window.addEventListener("load", dataFetch);

    useEffect(()=>{
        dataFetch();
    },[]);

    return(
        <div>
            <Tenants name={data.name} height={data.height} gender={data.gender} mass={data.mass}/>
        </div>

    )
}

export default Residents;