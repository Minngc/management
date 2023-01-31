import avatar from "../../assets/avatar.jpg";

function ProfileCard(props) {
  return (
    <div className="container-profileCard">
      <div className="avatar">
        <img width={40} height={40} src={avatar} alt="avatar"></img>
      </div>
      <div className="info">
        <span>{props.username}</span>
        <span>{props.email ?? "未填写"}</span>
      </div>
    </div>
  );
}

export default ProfileCard;
