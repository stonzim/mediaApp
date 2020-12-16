import React, { useState, useEffect } from "react";
import NameTag from "../components/NameTag";
import useMembers from "../hooks/useMember";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../actions/memberActions";

function FriendsPage() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("");
  const members = useMembers();
  const users = useSelector((state) => state.members.members);
  const loading = useSelector((state) => state.members.loading);
  const error = useSelector((state) => state.members.error);
  const dispatch = useDispatch();

  function changeMessage(e) {
    if (name !== e.target.name) {
      setMessage("You liked " + e.target.name);
      setName(e.target.name);
      setCount(1);
      return;
    }
    if (e.target.name === name) {
      setMessage(
        "You liked " + e.target.name + " " + (count + 1) + " times in a row"
      );
      setCount(count + 1);
    }
  }

  function changeName(e, i) {
    const copyMembers = [...members.members];
    copyMembers[i].userName = e.target.value;
    if (e.key === "Enter") {
      members.setMemberList(copyMembers);
    }
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h3>
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : error !== "" ? (
          error
        ) : (
          "Members"
        )}
      </h3>
      <label>{message}</label>
      {users.map((v, i) => {
        return (
          <NameTag
            key={`${i}${v.firstname}${v.lastname}`}
            pic={v.piclocation}
            onClick={changeMessage}
            onKeyPress={changeName}
            index={i}
          >
            {v.username}
          </NameTag>
        );
      })}
    </div>
  );
}

export default FriendsPage;
