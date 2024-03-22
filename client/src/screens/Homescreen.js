import React, { useState, useEffect } from 'react'
import axios from "axios";
import Room from '../components/Room';

function Homescreen() {

  const [rooms, setrooms] = useState([])
  const [loading, setloading] = useState()
  const [error, seterror] = useState()

 
  useEffect(() => {
    const fetchrooms = async () => {
      try {
        setloading(true);
        const response = await axios.get('http://localhost:5000/api/rooms/getallrooms');
        setrooms(response.data);
        console.log(response.data);
        setloading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        seterror(true);
        setloading(false);
      }
    };
  
    fetchrooms();
  }, []);

 
  

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h1>Home Screen</h1>
        {loading ? (
          <h1>loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          rooms.map((room)=> {
         <div className="col-md-9 mt-2" key={room._id}>
          <h3>{room._id}</h3>
            {<Room room={room}/> }
          </div>
        })
        )}
      </div>
    </div>
  );

  
}

export default Homescreen;
