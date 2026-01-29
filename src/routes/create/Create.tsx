import InputForm from "../../components/InputForm/InputForm";
import { useContext, useEffect } from "react";
import type { User } from "../../types/User";
import { userContext } from "../../context/userContext";
import { headerContext } from "../../context/headerContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const { dispatchUsers } = useContext(userContext);
  const { setHeaderTitle } = useContext(headerContext);
  const navigate = useNavigate();

  useEffect(() => {
    setHeaderTitle("Benutzer erstellen");
  }, [setHeaderTitle]);

  function handleCreate(user: User) {
    dispatchUsers({
      type: "ADD_USER",
      user: user,
    });
    navigate("/overview");
    toast.info(`Benutzer: ${user.name} erfolgreich erstellt! 🎉`);
  }

  return <InputForm user={null} onSubmit={handleCreate} />;
}

export default Create;
