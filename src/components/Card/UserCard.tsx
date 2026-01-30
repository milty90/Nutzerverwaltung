import "./UserCard.scss";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CakeIcon from "@mui/icons-material/Cake";
import WcIcon from "@mui/icons-material/Wc";
import EmailIcon from "@mui/icons-material/Email";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import type { User } from "../../types/User";

type UserCardProps = {
  user: User;
  removeUser: (
    userId: number,
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => void;
  editUser?: (userId: number) => void;
};

function UserCard({ user, removeUser, editUser }: UserCardProps) {
  return (
    <div className="user-card" onClick={() => editUser && editUser(user.id)}>
      <div className="user-card__image-container">
        <img src={user.img} alt="User portrait" />
      </div>
      <div className="user-card__info">
        <div className="user-card__name-container">
          <p className="user-card__user-name">{user.name}</p>
          <HighlightOffIcon
            onClick={(event) => removeUser(user.id, event)}
            className="user-card__close-icon"
          />
        </div>
        <div className="user-card__description-container">
          <p className="user-card__user-description">
            <CakeIcon className="user-card__user-description__icon" />
            {user.birthDate}
          </p>

          <p className="user-card__user-description">
            <LocationCityIcon className="user-card__user-description__icon" />
            {user.address}
          </p>
          <p className="user-card__user-description">
            <WcIcon className="user-card__user-description__icon" />
            {user.gender}
          </p>
          <p className="user-card__user-description">
            <LocalPhoneIcon className="user-card__user-description__icon" />
            {user.phone}
          </p>
          <p className="user-card__user-description">
            <EmailIcon className="user-card__user-description__icon" />
            {user.email}
          </p>
          <p className="user-card__user-description">
            <LanguageIcon className="user-card__user-description__icon" />
            {user.website}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
