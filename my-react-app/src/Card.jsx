import profilePic from "./assets/h3_product01.png";

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={profilePic} alt="Profile"></img>
      <h2 className="card-title">Max</h2>
      <p className="card-text">i am a student i am studying BSCS</p>
    </div>
  );
}

export default Card;
