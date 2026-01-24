import "./UserCard.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CakeIcon from "@mui/icons-material/Cake";
import WcIcon from "@mui/icons-material/Wc";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";

interface UserCardProps {
  imageUrl: string;
  userName: string;
  userBirthday: string;
  userCity: string;
  userGender: string;
  userPhone: string;
  userEmail: string;
  userWebsite: string;
}

function UserCard({
  imageUrl,
  userName,
  userBirthday,
  userCity,
  userGender,
  userPhone,
  userEmail,
  userWebsite,
}: UserCardProps) {
  return (
    <div className="custom-card">
      <div className="image-container">
        <img src={imageUrl} alt="User portrait" />
      </div>
      <div className="user-info">
        <div className="name-container">
          <p className="user-name">{userName}</p>
          <HighlightOffIcon className="close-icon" />
        </div>
        <div className="description-container">
          <p className="user-description">
            <CakeIcon className="user-description_icon" />
            {userBirthday}
          </p>

          <p className="user-description">
            <LocationCityIcon className="user-description_icon" />
            {userCity}
          </p>
          <p className="user-description">
            <WcIcon className="user-description_icon" />
            {userGender}
          </p>
          <p className="user-description">
            <LocalPhoneIcon className="user-description_icon" />
            {userPhone}
          </p>
          <p className="user-description">
            <AlternateEmailIcon className="user-description_icon" />
            {userEmail}
          </p>
          <p className="user-description">
            <LanguageIcon className="user-description_icon" />
            {userWebsite}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
