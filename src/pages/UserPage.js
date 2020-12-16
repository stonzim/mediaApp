import React from "react";
import { useSelector } from "react-redux";

function UserPage() {
  const member = useSelector((state) => state.memberReducer[0]);

  return (
    <div>
      <h1>You're Home</h1>
      <h3>Welcome to you</h3>
      {console.log(member.username)}
    </div>
  );
}

export default UserPage;
