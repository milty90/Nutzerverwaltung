import { Card } from "@mui/material";
function Create() {
  return (
    <>
      <h1>Create Page</h1>
      <div
        style={{
          backgroundColor: "#F4F4F5",
          border: "10px solid #10B981",
          color: "#27272A",
          padding: "1rem",
        }}
      >
        Zinc Gray + Emerald
      </div>
      <div
        style={{
          backgroundColor: "#18181B",
          border: "10px solid #059669",
          color: "#75ab9a",
          padding: "1rem",
        }}
      >
        Zinc Gray + Emerald
      </div>
      <Card style={{ marginTop: "1rem", padding: "1rem" }}>
        This is a MUI Card component to demonstrate usage of external UI
        libraries.
      </Card>
      <Card
        style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#18181B",
          color: "#75ab9a",
        }}
      >
        This is a MUI Card component with custom styles.
      </Card>
      <Card
        style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#D1FAE5",
          color: "#065F46",
        }}
      >
        This is another MUI Card component with different custom styles.
      </Card>
    </>
  );
}

export default Create;
