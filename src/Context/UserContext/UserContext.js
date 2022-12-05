import React, { createContext, useState } from "react";

export const UserInfoContext = createContext();

const UserContext = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");

    const userInfo = { userEmail, setUserEmail };

  return (
    <UserInfoContext.Provider value={userInfo}>
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserContext;
