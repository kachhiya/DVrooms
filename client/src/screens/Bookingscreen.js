/*import React, {useState, useEffect}from 'react'
import axios from "axios";
function Bookingscreen({match}) {
    const [loading, setloading]=useState();
    const [error, seterror]=useState();
    const [room, setroom]=useState();

    useEffect(async () =>{
        try{
            setloading(true);
            const data=(await axios.post("/api/rooms/getroombyid", {roomid :match.params.roomid})).data;

            setroom(data);
            setloading(false);
        }catch (error){
            setloading(false);
            seterror(true);
        }
    }, []);

  return (
    <div>
        {loading ?}
    </div>
  );
}

export default Bookingscreen;*/