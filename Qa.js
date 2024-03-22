import React, { useEffect, useState } from "react";
import './Qa.css';

const Qa = () => {
    const [yesNumbers, setyesNumbers] = useState(0)
    const [noNumbers, setnoNumbers] = useState(0)
    const [answeredQuest, setansweredQuest] = useState(0)
    const [result, setResult] = useState(0)
    const [val, setval] = useState(0)
    const clickYes = () => {
        setyesNumbers(yesNumbers + 1)
        setansweredQuest(answeredQuest + 1)
    }

    const clickNo = () => {
        setnoNumbers(noNumbers + 1)
        setansweredQuest(answeredQuest + 1)
    }
    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
          const parsedData = parseFloat(storedData);
          setval(parsedData + result);
        }
      }, [result]);
      

    useEffect(() => {
        if (answeredQuest > 4) {
            setResult((100 * yesNumbers) / answeredQuest)
            localStorage.setItem('data', val);
        }
    })
    return (
        <>
            <div className="centered-content">
                <div className="question-container">
                    {(answeredQuest === 0) && <p>Can you code in Ruby?</p>}
                    {(answeredQuest === 1) && <p>Can you code in JavaScript?</p>}
                    {(answeredQuest === 2) && <p>Can you code in Swift?</p>}
                    {(answeredQuest === 3) && <p>Can you code in Java?</p>}
                    {(answeredQuest === 4) && <p>Can you code in C#?</p>}
                    
                    {(answeredQuest > 4) ? `Result: ${result}` : (
                        <div className="button-container">
                        <button className="yes-button" onClick={clickYes}>Yes</button>
                        <div className="button-spacing" ></div>
                        <button className="no-button" onClick={clickNo}>No</button>
                    </div>
                    )}
                </div>
                
            </div>
        </>
    )
}

export default Qa;