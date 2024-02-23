import React from "react";

const Tenants = ({key, name, height, gender, mass}) => {

    return(
        <div className="row alert-danger rounded-3">
            <label className="col-3 text-danger shadow sm rounded">{name}</label>
            <label className="col-3 text-danger shadow sm rounded">{height}</label>
            <label className="col-3 text-danger shadow sm rounded">{gender}</label>
            <label className="col-3 text-danger shadow sm rounded">{mass}</label>
        </div>
    );
}

export default Tenants;