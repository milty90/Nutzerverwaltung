import "./UserCard.css";

interface UserCardProps {
  imageUrl: string;
  userName: string;
  userDescription: string;
}

function UserCard({ imageUrl, userName, userDescription }: UserCardProps) {
  return (
    <div className="custom-card">
      <img src={imageUrl} alt="User portrait" />
      <div className="user-info">
        <p className="user-name">{userName}</p>
        <p>{userDescription}</p>
      </div>
    </div>
  );
}

export default UserCard;
