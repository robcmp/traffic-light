import React, { useState } from "react";
import './Stoplight.css';


const Traffic = () => {
    let [redHigh, setRed] = useState(false);
    let [yellowHigh, setYellow] = useState(false);
    let [greenHigh, setGreen] = useState(false);
    const setSelected = (e) => {
        if (e.target.id === "red") {
            setRed(true);
            setYellow(false);
            setGreen(false);
        } else if (e.target.id === "yellow") {
            setRed(false);
            setYellow(true);
            setGreen(false);
        } else if (e.target.id === "green") {
            setRed(false);
            setYellow(false);
            setGreen(true);
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card traffic bg-dark">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <button id="red" className={`border border-danger rounded-circle bg-danger dot ${redHigh === true ? "active-light" : ""}`}
                                onClick={setSelected}>
                            </button>
                        </div>
                        <div className="col-md-12">
                            <button id="yellow" className={`border border-warning rounded-circle bg-warning dot ${yellowHigh === true ? "active-light" : ""}`}
                                onClick={setSelected}></button>
                        </div>
                        <div className="col-md-12">
                            <button id="green" className={`border border-success rounded-circle bg-success dot ${greenHigh === true ? "active-light" : ""}`}
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