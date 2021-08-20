import React, { useState } from "react";
import './Stoplight.css';


const Traffic = () => {
    let [focus, setFocus] = useState("");
    const setSelected = () => {
        setFocus(focus === "" ? "active-light" : "")
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card traffic bg-dark">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <button className={`border border-danger rounded-circle bg-danger dot ${focus}`}
                                onClick={setSelected}>

                            </button>
                        </div>
                        <div className="col-md-12">
                            <button className={`border border-warning rounded-circle bg-warning dot`}
                                onClick={setSelected}></button>
                        </div>
                        <div className="col-md-12">
                            <button className={`border border-success rounded-circle bg-success dot`}
                                onClick={setSelected}>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Traffic;