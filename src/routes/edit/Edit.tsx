import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Edit() {
  return (
    <>
      <h1>Edit Page</h1>
      <div
        style={{
          backgroundColor: "#F8FAFC",
          border: "10px solid #6366F1",
          color: "#1E293B",
          padding: "1rem",
        }}
      >
        Slate Gray + Indigo
      </div>
      <div
        style={{
          backgroundColor: "#0F172A",
          border: "10px solid #38BDF8",
          color: "#698fcd",
          padding: "1rem",
        }}
      >
        Slate Gray + Indigo
      </div>
      <Card style={{ marginTop: "1rem", padding: "1rem" }}>
        This is a MUI Card component to demonstrate usage of external UI
        libraries.
      </Card>
      <Card
        style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#0F172A",
          color: "#698fcd",
        }}
      >
        This is a MUI Card component with custom styles.
      </Card>
      <Card
        style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#E0E7FF",
          color: "#3730A3",
        }}
      >
        This is another MUI Card component with different custom styles.
      </Card>

      <Card
        style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#0F172A",
          color: "#A5B4FC",
        }}
      >
        <img
          className="sidebar-icon"
          src="./public/user-plus.svg"
          alt="User Plus Icon"
          style={{ verticalAlign: "middle", marginRight: "0.5rem" }}
        />
        This is the last MUI Card component with its own custom styles.
      </Card>
    </>
  );
}
export default Edit;
