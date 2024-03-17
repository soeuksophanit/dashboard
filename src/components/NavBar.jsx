import React from "react";
import BigTitle from "./BigTitle";
import bell from "@/assets/bell.svg";
import Profile from "./Profile";
import profile from "../assets/Images/pf.jpg";
import SmallTitle from "./SmallTitle";

const myProfile = {
  img: profile,
  name: "Sophanit",
};

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center">
      <BigTitle className={" text-[32px]"}>Portfolio</BigTitle>
      <main className="flex gap-2 items-center">
        <img src={bell} alt="bell" className="w-[24px] h-24px]" />
        <Profile className={" "} client={myProfile} />
        <SmallTitle className={" font-semibold"}>{myProfile.name}</SmallTitle>
      </main>
    </nav>
  );
}