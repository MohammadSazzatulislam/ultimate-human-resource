import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserInfoContext } from '../../Context/UserContext/UserContext';

const Attendance = () => {

      const {userEmail, setUserEmail}= useContext(UserInfoContext) 

    useEffect(() => {
        fetch(`https://test.nexisltd.com/test?${userEmail}`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("access_token")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => console.log(err.message));
    }, [userEmail]);


    return (
        <div>
            <h1>this is attendance form </h1>
        </div>
    );
};

export default Attendance;