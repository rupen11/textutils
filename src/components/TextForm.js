import React, { useState } from 'react'

const TextForm = (props) => {
    const [text, setText] = useState("");
    const [urls, setUrls] = useState([]);
    const [emails, setEmails] = useState([]);

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleUpper = () => {
        if (text.length === 0) {
            props.showAlert("write something to converted to uppercase", "warning");
        }
        else {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to uppercase", "success");
        }
    }
    const handleLower = () => {
        if (text.length === 0) {
            props.showAlert("write something to converted to lowercase", "warning");
        }
        else {
            let newText1 = text.toLowerCase();
            setText(newText1);
            props.showAlert("Converted to lowercase", "success");
        }
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to clipboard", "success");
    }

    const handleUrl = () => {
        let urlMatching = text.match(/\bwww\.\S+/gi);
        if (urlMatching === null) {
            setUrls(["No url in the string"]);
            props.showAlert("No URLs found", "warning");
        }
        else {
            setUrls([...urlMatching]);
            props.showAlert(`${urlMatching.length} URLs found`, "success");
        }
    }

    const handleEmail = () => {
        let emailMatching = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        if (emailMatching === null) {
            setEmails(["No email id in the string"]);
            props.showAlert("No Email ids found", "warning");
        }
        else {
            setEmails([...emailMatching]);
            props.showAlert(`${emailMatching.length} Email ids found`, "success");
        }
    }

    const handleClear = () => {
        setText("");
        setUrls([]);
        setEmails([]);
        props.showAlert("Cleared", "success");
    }

    const handleSpace = () => {
        let formatText = text.split(' ').filter(element => element).join(' ');
        setText(formatText);
        console.log("ok");
    }


    return (
        <>
            <div className="container" style={{ color: props.mode === "light" ? "black" : "#cccccc" }}>
                <div className="py-3">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" value={text} onChange={handleChange} style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "light" ? "black" : "#cccccc" }} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary btn-sm mx-1 my-1' onClick={handleUpper}>Converto to uppercase</button>
                <button className='btn btn-primary btn-sm mx-1 my-1' onClick={handleLower}>Converto to lowercase</button>
                <button className='btn btn-primary btn-sm mx-1 my-1' onClick={handleCopy}>Copy</button>
                <button className='btn btn-primary btn-sm mx-1 my-1' onClick={handleUrl}>Detect Urls</button>
                <button className='btn btn-primary btn-sm mx-1 my-1' onClick={handleEmail}>Detect Email id</button>
                <button className='btn btn-primary btn-sm mx-1 my-1' onClick={handleClear}>Clear</button>
                <button className='btn btn-primary btn-sm mx-1 my-1' onClick={handleSpace}>Remove extra space</button>


                <div className="container my-3">
                    <h3>Your Summary</h3>
                    {
                        console.log()
                    }
                    <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                </div>

                <div className="container my-3">
                    <h3 className='my-3'>preview</h3>
                    <p>{text}</p>
                </div>

                <div className="container my-3">
                    <h3 className='my-3'>Fetch url from text</h3>
                    {
                        urls.map((element, index) => {
                            return (
                                <>
                                    <p>{index + 1}. {element}</p>
                                </>
                            )
                        })
                    }
                </div>

                <div className="container my-3">
                    <h3 className='my-3'>Fetch email is from text</h3>
                    {
                        emails.map((element, index) => {
                            return (
                                <>
                                    <p>{index + 1}. {element}</p>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TextForm
