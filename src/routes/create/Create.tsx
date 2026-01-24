import DropDownList from "../../components/DropDown/DropDownList";
import InputField from "../../components/InputField/InputField";
import { Button } from "@mui/material";
import useFromInput from "../../hooks/useFromInput";

function Create() {
  const userNameProps = useFromInput("");
  const birthDateProps = useFromInput("");
  const emailProps = useFromInput("");
  const addressProps = useFromInput("");
  const phoneProps = useFromInput("");
  const websiteProps = useFromInput("");
  const genderProps = useFromInput("");

  return (
    <>
      <InputField
        title={"Benutzername"}
        type={"text"}
        placeholder={"Benutzername"}
        onChange={userNameProps.handleChange}
        value={userNameProps.inputValue}
      />
      <InputField
        title={"Geburtsdatum"}
        type={"date"}
        placeholder={"Geburtsdatum"}
        onChange={birthDateProps.handleChange}
        value={birthDateProps.inputValue}
      />
      <DropDownList
        label={"Geschlecht"}
        onChange={genderProps.handleChange}
        options={[
          { value: "male", label: "Männlich" },
          { value: "female", label: "Weiblich" },
        ]}
      />
      <InputField
        title={"E-Mail"}
        type={"email"}
        placeholder={"E-Mail"}
        onChange={emailProps.handleChange}
        value={emailProps.inputValue}
      />
      <InputField
        title={"Post Adresse"}
        type={"text"}
        placeholder={"Post Adresse"}
        onChange={addressProps.handleChange}
        value={addressProps.inputValue}
      />
      <InputField
        title={"Telefonnummer"}
        type={"tel"}
        placeholder={"Telefonnummer"}
        onChange={phoneProps.handleChange}
        value={phoneProps.inputValue}
      />
      <InputField
        title={"Website"}
        type={"url"}
        placeholder={"Website"}
        onChange={websiteProps.handleChange}
        value={websiteProps.inputValue}
      />
      <Button
        className="sidebar-button"
        style={{
          backgroundColor: "#333",
          color: "#fff",
          marginTop: "0.5rem",
          marginLeft: "0.5rem",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
        }}
        startIcon={
          <img
            className="sidebar-icon"
            src="./public/user-plus.svg"
            alt="Create"
          />
        }
      >
        Erstellen
      </Button>
    </>
  );
}

export default Create;
