import React, { useState, useEffect }from 'react';

export default () => {
    const [data, updateData] = useState(''); 
    useEffect(() => {
            document.getElementById('output').innerText = "Default value of data state variable.";
    })
    function sendData() {
        // Typing in an absolute URL for now. Will need to use relative URL (webpack bundler technique will help - refer link below)
        /** After you checked that your reactapp works well after integration with your node server 
         * Just refer the link below to make your react code and nodejs app code to make it production level.
         * (refer: https://www.newline.co/fullstack-react/articles/using-create-react-app-with-a-server/)
        */
        fetch('http://localhost:5000', { 
                method: 'POST',
                body: JSON.stringify(data)
            })
        .then(resp => resp.text())
        .then( (resp) => {
            updateData(resp);
        })
        .catch( (e) => {
            console.log(`error at useEffect:\n ${e}`);
        })
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
