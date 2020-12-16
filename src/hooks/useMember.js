import { useState } from "react";
import WinniePic from "../profilePics/Winnie.png";
import JonnyPic from "../profilePics/Jonny.png";
import SiPic from "../profilePics/Si.png";

function useMembers() {
  const initialMembers = [
    {
      name: "Winston",
      userName: "Winnie",
      picture: WinniePic,
      passWord: "win",
    },
    { name: "Simon", userName: "Si", picture: SiPic, password: "si" },
    { name: "Jonothan", userName: "Jonny", picture: JonnyPic, password: "jo" },
  ];
  const [members, setMembers] = useState(initialMembers);

  return {
    members,
    removeMember(userName) {
      const filteredList = members.filter((v) => v.userName !== userName);
      setMembers(filteredList);
    },
    saveMember(newMember) {
      const copyList = [...members, newMember];
      setMembers(copyList);
    },
    setMemberList(memberList) {
      setMembers(memberList);
    },
  };
}

export default useMembers;
