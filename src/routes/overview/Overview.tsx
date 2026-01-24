import { Card } from "@mui/material";
import UserCard from "../../components/Card/UserCard";

function Overview() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1rem",
      }}
    >
      {/* <Card
        style={{
          marginTop: "1rem",
          padding: "1rem",
          textAlign: "center",
          color: "#554434",
        }}
      >
        Kein Nutzer gefunden.
      </Card> */}

      <UserCard
        imageUrl=" https://randomuser.me/api/portraits/men/1.jpg"
        userName="Max Mustermann"
        userBirthday="01.01.1990"
        userCity="Musterstadt"
        userGender="Männlich"
        userPhone="+49 123 4567890"
        userEmail="max.mustermann@example.com"
        userWebsite="www.maxmustermann.de"
      />
      <UserCard
        imageUrl=" https://randomuser.me/api/portraits/women/43.jpg"
        userName="Erika Musterfrau"
        userBirthday="01.01.1990"
        userCity="Musterstadt"
        userGender="Weiblich"
        userPhone="+49 123 4567890"
        userEmail="erika.musterfrau@example.com"
        userWebsite="www.erikamusterfrau.de"
      />

      <UserCard
        imageUrl=" https://randomuser.me/api/portraits/men/1.jpg"
        userName="Max Mustermann"
        userBirthday="01.01.1990"
        userCity="Musterstadt"
        userGender="Männlich"
        userPhone="+49 123 4567890"
        userEmail="max.mustermann@example.com"
        userWebsite="www.maxmustermann.de"
      />
      <UserCard
        imageUrl=" https://randomuser.me/api/portraits/women/43.jpg"
        userName="Erika Musterfrau"
        userBirthday="01.01.1990"
        userCity="Musterstadt"
        userGender="Weiblich"
        userPhone="+49 123 4567890"
        userEmail="erika.musterfrau@example.com"
        userWebsite="www.erikamusterfrau.de"
      />

      <UserCard
        imageUrl=" https://randomuser.me/api/portraits/men/1.jpg"
        userName="Max Mustermann"
        userBirthday="01.01.1990"
        userCity="Musterstadt"
        userGender="Männlich"
        userPhone="+49 123 4567890"
        userEmail="max.mustermann@example.com"
        userWebsite="www.maxmustermann.de"
      />
      <UserCard
        imageUrl=" https://randomuser.me/api/portraits/women/43.jpg"
        userName="Erika Musterfrau"
        userBirthday="01.01.1990"
        userCity="Musterstadt"
        userGender="Weiblich"
        userPhone="+49 123 4567890"
        userEmail="erika.musterfrau@example.com"
        userWebsite="www.erikamusterfrau.de"
      />

      <UserCard
        imageUrl=" https://randomuser.me/api/portraits/men/1.jpg"
        userName="Max Mustermann"
        userBirthday="01.01.1990"
        userCity="Musterstadt"
        userGender="Männlich"
        userPhone="+49 123 4567890"
        userEmail="max.mustermann@example.com"
        userWebsite="www.maxmustermann.de"
      />
      <UserCard
        imageUrl=" https://randomuser.me/api/portraits/women/43.jpg"
        userName="Erika Musterfrau"
        userBirthday="01.01.1990"
        userCity="Musterstadt"
        userGender="Weiblich"
        userPhone="+49 123 4567890"
        userEmail="erika.musterfrau@example.com"
        userWebsite="www.erikamusterfrau.de"
      />
    </div>
  );
}
export default Overview;
