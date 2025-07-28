import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Searchbox() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch =()=>{
        navigate("/results", { state: { query } });
    };
    return ( 
        <div className="-center">
            <div className="-search">
                <div className="-search-box">
                    <input type="text" className="-search-input" value={query} onChange={(e) =>
                        setQuery(e.target.value)
                    }/>
                </div>
                <button className="-btn" onClick={handleSearch}>Q</button>
            </div>
            <div className="-voice"></div>
        </div>
    )
}

export default Searchbox