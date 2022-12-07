import React, { useContext, useEffect, useState } from "react";
import logo from "../../images/logo.jpg";
import { UserInfoContext } from "../../Context/UserContext/UserContext";

const Attendance = () => {
  const { userEmail } = useContext(UserInfoContext);

  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    fetch(`https://test.nexisltd.com/test?${userEmail}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const users = Object.values(data);
        setUserDetails(users);
      })
      .catch((err) => console.log(err.message));
  }, [userEmail]);

  return (
    <div>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="lg:w-[480px] lg:h-16 md:w-80 md:h-12 w-60 h-12 flex lg:text-3xl text-lg md:text-xl font-bold text-white justify-center items-center rounded-md bg-gradient-to-r from-blue-600 to-blue-600">
          Attendance Information
        </h1>
      </div>
      <div className="flex flex-col mt-20">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="text-center">
                    <th
                      scope="col"
                      className="text-md font-bold text-gray-800 px-6 py-4 "
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="text-md font-bold text-gray-800 px-6 py-4"
                    >
                      Employee Name
                    </th>
                    <th
                      scope="col"
                      className="text-md font-bold text-gray-800 px-6 py-4-4 "
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userDetails?.map((users) => {
                    const date = Object.keys(users.attendance);
                    const stutas = Object.values(users.attendance);
                    const usersStutas = stutas[0];
                    const userStutas = Object.values(usersStutas);
                    return (
                      <>
                        <tr
                          key={users.id}
                          className="bg-white text-center transition duration-300 ease-in-out hover:bg-gray-100"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-600">
                            {date[0]}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-600">
                            {users.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-600">
                            {userStutas[1]}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
