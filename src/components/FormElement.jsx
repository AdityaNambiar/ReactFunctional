import React, { useState, useEffect }from 'react';

export default () => {
    const [data, updateData] = useState(''); 
    useEffect(() => {
        /* document.getElementById('output').innerText = data; */
        fetch('http://localhost:5000')

    })
    function sendData() {
        console.log("sending data");
    }
    return(
        <div>
            <form>
                <input type="text" name="txt1" onChange={(e)=>updateData(e.target.value)}/>
                <input type="button" name="btn1" value="Submit btn" onClick={sendData}/>
            </form>

            <div id="output"></div>
        </div>
    );
}
