import React, { useState, useEffect } from 'react';
import './Home.css'; // Import CSS file for styling
import Qa from './Qa';

const Home = () => {
const[questcomponent, setquestcomponent] = useState(false);
const [data, setData] = useState('');

    const questans=()=>{
        setquestcomponent(true)
    }

    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
          setData(storedData);
        }
      }, []);


    return (
        <div>
          {questcomponent ? <Qa /> : (
            <div className="centered-content">
              <div className="question-container">
                <div className="question">
                  <span>To start with the Questions and Answers, click </span>
                  <button className="button" onClick={questans}>Question/Answers</button>
                </div>
                <div className="question">
                  <span>Average rating for all runs - {data ? `${data}` : "NA"}</span>
                  {/* <button className="button">Average Rating</button> */}
                </div>
              </div>
            </div>
          )}
        </div>
      );
      
};

export default Home;
