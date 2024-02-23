import React from "react";
import Residents from "./Residents";

const Data = ({name,rotation,diameter,climate,gravity,water,terrain,residents})=>{
    // const [urldata, setUrldata] = useState([]);
    // const fetchUrl = async (url)=>{
    //     const data = await fetch(url);
    //     const response = data.json();
    //     setUrldata(response);
    // }

    return(
        <div className="container m-5 rounded-3 shadow-lg w-75" style={{"backgroundImage": "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)"}}>
            <h2 className="text-primary m-2">{name}</h2>
            <h3 className="text-success m-3">Rotation : {rotation}</h3>
            <h3 className="text-success m-3">Diameter : {diameter}</h3>
            <h3 className="text-success m-3">Climate : {climate}</h3>
            <h3 className="text-success m-3">Gravity : {gravity}</h3>
            <h3 className="text-success m-3">Water : {water}</h3>
            <h3 className="text-success m-3">Terrain : {terrain}</h3>
            <div>
                <h2>Tenants</h2>
                <div className="row">
                    <label className="col-3 text-alert shadow sm rounded"><b>Name</b></label>
                    <label className="col-3 text-alert shadow sm rounded"><b>Height</b></label>
                    <label className="col-3 text-alert shadow sm rounded"><b>Gender</b></label>
                    <label className="col-3 text-alert shadow sm rounded"><b>Mass</b></label>
                </div>
                {
                    residents.map((e)=>(
                        <Residents url={e} />
                    )
                    )

                }
            </div>
        </div>
    );
}

export default Data;