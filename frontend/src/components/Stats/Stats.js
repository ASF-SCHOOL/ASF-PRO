import React from 'react'
import './Stats.css'
import { FaConnectdevelop } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'
import { GiFruitTree } from 'react-icons/gi'

const Stats = () => {
    const develop = {
        color: "green",
        fontSize: "80px",
        backgroundColor: "black",
        borderRadius: "50px",
        padding: ".2rem",
    }
    return (
        <>
            <div className="stats">
                <div className="slots">
                    <FaConnectdevelop style={develop} />
                    <div className="info">
                        <h4>
                            Founded In 2003
                        </h4>
                    </div>
                </div>
                <div className="slots">
                    <FaUsers style={develop} />
                    <div className="info">
                        <h4>
                            1000's of students across east Africa
                        </h4>
                    </div>
                </div>
                <div className="slots">
                    <MdSchool style={develop} />
                    <div className="info">
                        <h4>
                            Accredited
                        </h4>
                    </div>
                </div>
                <div className="slots">
                    <GiFruitTree style={develop} />
                    <div className="info">
                        <h4>
                            100% Vegan Formulations
                        </h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats
