import { useContext, useEffect, useState } from "react";
import InputForm from "../../components/InputForm/InputForm";
import { userContext } from "../../context/userContext";
import type { User } from "../../types/User";
import { useNavigate, useParams } from "react-router-dom";
import { headerContext } from "../../context/headerContext";
import { toast } from "react-toastify";

function Edit() {
  const { users, dispatchUsers } = useContext(userContext);
  const { setHeaderTitle } = useContext(headerContext);
  const [editUser, setEditUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const user = users.find((u) => u.id.toString() === id) || null;
    setEditUser(user);
  }, [id, users]);

  useEffect(() => {
    setHeaderTitle("Benutzer bearbeiten");
  }, [setHeaderTitle]);

  function handleEdit(updatedUser: User) {
    dispatchUsers({
      type: "UPDATE_USER",
      user: updatedUser,
    });
    navigate("/overview");
    toast.info(`Benutzer: ${updatedUser.name} erfolgreich aktualisiert! ✏️`);
  }

  if (!editUser) {
    return <p>Benutzer nicht gefunden.</p>;
  }

  return <InputForm user={editUser} onSubmit={handleEdit} />;
}
export default Edit;
