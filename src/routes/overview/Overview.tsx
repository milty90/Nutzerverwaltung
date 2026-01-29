import UserCard from "../../components/Card/UserCard";
import { useContext, useEffect } from "react";
import { userContext } from "../../context/userContext";
import type { User } from "../../types/User";
import { useNavigate } from "react-router-dom";
import { headerContext } from "../../context/headerContext";
import "./Overview.scss";
import { toast } from "react-toastify";

function Overview() {
  const navigate = useNavigate();
  const { dispatchUsers, users } = useContext(userContext);
  const { setHeaderTitle } = useContext(headerContext);

  useEffect(() => {
    setHeaderTitle("Benutzerübersicht");
  }, [setHeaderTitle]);

  function handleRemove(userId: number, name: string) {
    dispatchUsers({
      type: "REMOVE_USER",
      user: { id: userId, name: name } as User,
    });
    toast.info(`Benutzer: ${name} erfolgreich entfernt! 🗑️`);
  }

  function handleEdit(userId: number) {
    navigate(`/edit/${userId}`);
  }

  return (
    <div className="overview">
      {users.length === 0 && (
        <p className="no-users-message">
          Keine Benutzer vorhanden. Bitte erstellen Sie einen neuen Benutzer.
        </p>
      )}
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          removeUser={() => handleRemove(user.id, user.name)}
          editUser={handleEdit}
        />
      ))}
    </div>
  );
}
export default Overview;
