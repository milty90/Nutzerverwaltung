import UserCard from "../../components/Card/UserCard";
import { storage } from "../../utils/localStorageService";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import type { User } from "../../types/User";

function getUsers(): User[] | null {
  return storage.get("users");
}

function removeUser(userId: number) {
  const { dispatchUsers } = useContext(userContext);
  const users = getUsers();
  if (!users) return;
  const userToRemove = users.find((user) => user.id === userId);
  if (!userToRemove) return;
  dispatchUsers({ type: "REMOVE_USER", user: userToRemove });
}

function Overview() {
  const users: User[] = getUsers() || [];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1rem",
      }}
    >
      {users.map((user) => (
        <UserCard
          key={user.id}
          imageUrl={user.imageUrl}
          userName={user.name}
          userBirthday={user.birthDate}
          userCity={user.address}
          userGender={user.gender}
          userPhone={user.phone}
          userEmail={user.email}
          userWebsite={user.website}
          removeUser={() => removeUser(user.id)}
        />
      ))}
    </div>
  );
}
export default Overview;
