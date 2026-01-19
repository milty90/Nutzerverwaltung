import { Card } from "@mui/material";
import UserCard from "../../components/Card/UserCard";

function Overview() {
  return (
    <>
      <h1>Overview Page</h1>
      <div
        style={{
          backgroundColor: "#F5F5F4",
          border: "10px solid #F59E0B",
          color: "#44403C",
          padding: "1rem",
        }}
      >
        Gray + Orange
      </div>
      <div
        style={{
          backgroundColor: "#1C1917",
          border: "10px solid #EA580C",
          color: "#dbc8b5",
          padding: "1rem",
        }}
      >
        Gray + Orange
      </div>
      <Card style={{ marginTop: "1rem", padding: "1rem" }}>
        This is a MUI Card component to demonstrate usage of external UI
        libraries.
      </Card>
      <Card
        style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#1C1917",
          color: "#dbc8b5",
        }}
      >
        This is a MUI Card component with custom styles.
      </Card>
      <UserCard
        imageUrl=" https://randomuser.me/api/portraits/men/1.jpg"
        userName="Max Mustermann"
        userDescription="Ipsum dolor sit amet."
      />
    </>
  );
}
export default Overview;
