import React, { useState,useEffect } from 'react'
import "./TabbedContent.css"
import axios from 'axios';

const TabbedContent = () => {
  const [htmlResponse, setHtmlResponse] = useState('');
  const [template,setTemplate] = useState('static')
  console.log(htmlResponse);

  useEffect(() => {
    axios.get(`http://localhost:5000/template/${template}`) // Replace with your server's URL
      .then(response => {
        setHtmlResponse(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [template]);
  return (
    <div>
      <div className="tabmain">
        <div className="side">
            <button onClick={e=>{
              setTemplate('static')
            }}>Static Web Guide</button>

            <button onClick={e=>{
              setTemplate('dynamic')
            }}>dynamic Web Guide</button>

            <button onClick={e=>{
              setTemplate('react')
            }}>React Web Guide</button>

            <button onClick={e=>{
              setTemplate('angular')
            }}>Angular Web Guide</button>

            <button onClick={e=>{
              setTemplate('vue')
            }}>Vue Web Guide</button>

            <button onClick={e=>{
              setTemplate('ecomm')
            }}>Ecommerce WebApp Guide</button>
        </div>
        <div className='content' dangerouslySetInnerHTML={{ __html: htmlResponse }} />
      </div>
    </div>
  )
}

export default TabbedContent