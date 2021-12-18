import React from "react";
import Header from "./Header";
import ProfileCard from "./ProfileCard";
import ShareButton from "./ShareButton";

const Home = () => {
  return (
    <>
      <Header />
      <div className="profile-card">
        <ProfileCard />
        <ShareButton />
      </div>
    </>
  );
};

export default Home;
