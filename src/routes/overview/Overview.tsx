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

  function handleRemove(
    userId: number,
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) {
    event.stopPropagation();
    dispatchUsers({
      type: "REMOVE_USER",
      user: { id: userId } as User,
    });
    const userName = users.find((u) => u.id === userId)?.name || "Benutzer";
    toast.info(`Benutzer: ${userName} erfolgreich entfernt! 🗑️`);
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
          removeUser={handleRemove}
          editUser={() => handleEdit(user.id)}
        />
      ))}
    </div>
  );
}
export default Overview;
