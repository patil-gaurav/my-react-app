import { useState, useEffect } from "react";

function ProfileCard({ name, image, description }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const bioLength = description.length;

  console.log("Profile Card rendered for : ", name);

  function handleFollow() {
    setIsFollowing(!isFollowing);
  }

  useEffect(() => {
    console.log(`${name} mounted`);

    return () => {
      console.log(`${name} unmounted`);
    };
  }, []);

  useEffect(() => {
    console.log(`${name} is now ${isFollowing ? "followed" : "unfollowed"}`);
  }, [isFollowing]);


  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px", margin: "10px"}}>
      <img src={image} alt={name} width="100%" />
      <h3>{name}</h3>
      <p>
        {description}
        <small> Bio Length : {bioLength}</small>
      </p>
      <button onClick={handleFollow}>{ isFollowing ? "Unfollow" : "Follow" }</button>
    </div>
  );
}

export default ProfileCard;