import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

const Element = (props) => {
  const guide = useSelector(store=>store.reducer.guide);
    const [htmlResponse, setHtmlResponse] = useState('');
  console.log(htmlResponse);

  useEffect(() => {
    axios.get(`http://localhost:5000/template/${guide}`) // Replace with your server's URL
      .then(response => {
        setHtmlResponse(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div style={{marginTop:"100px"}} dangerouslySetInnerHTML={{ __html: htmlResponse }} />

  )
}

export default Element