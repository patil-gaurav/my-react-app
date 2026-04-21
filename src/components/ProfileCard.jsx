function ProfileCard({ name, image, description }) {
  function handleFollow() {
    alert(`You follwed name : ${name}`);

  }
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px", margin: "10px"}}>
      <img src={image} alt={name} width="100%" />
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={handleFollow}>Follow</button>
    </div>
  );
}

export default ProfileCard;