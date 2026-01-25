import DropDownList from "../../components/DropDown/DropDownList";
import InputField from "../../components/InputField/InputField";
import { Button } from "@mui/material";
import useFromInput from "../../hooks/useFromInput";
import { userContext } from "../../context/userContext";
import { useContext } from "react";
import type { Gender } from "../../types/User";

function Create() {
  const userNameProps = useFromInput("", true);
  const birthDateProps = useFromInput("", true);
  const emailProps = useFromInput("", true);
  const addressProps = useFromInput("", true);
  const phoneProps = useFromInput("", true);
  const websiteProps = useFromInput("", true);
  const genderProps = useFromInput("", true);

  const { dispatchUsers } = useContext(userContext);

  function validateAll() {
    return (
      userNameProps.validate(userNameProps.inputValue) &&
      birthDateProps.validate(birthDateProps.inputValue) &&
      emailProps.validate(emailProps.inputValue) &&
      addressProps.validate(addressProps.inputValue) &&
      phoneProps.validate(phoneProps.inputValue) &&
      websiteProps.validate(websiteProps.inputValue) &&
      genderProps.validate(genderProps.inputValue)
    );
  }

  function handleCreate() {
    if (!validateAll()) {
      alert("Bitte füllen Sie alle erforderlichen Felder aus.");
      return;
    }
    dispatchUsers({
      type: "ADD_USER",
      user: {
        id: Date.now(),
        name: userNameProps.inputValue,
        birthDate: birthDateProps.inputValue,
        email: emailProps.inputValue,
        address: addressProps.inputValue,
        phone: phoneProps.inputValue,
        website: websiteProps.inputValue,

        gender: genderProps.inputValue as string as Gender,
        imageUrl:
          genderProps.inputValue === "Männlich"
            ? "https://randomuser.me/api/portraits/men/1.jpg"
            : genderProps.inputValue === "Weiblich"
              ? "https://randomuser.me/api/portraits/women/43.jpg"
              : "https://randomuser.me/api/portraits/lego/1.jpg",
      },
    });
    alert("Benutzer erfolgreich erstellt!");
  }

  return (
    <>
      <InputField
        title={"Benutzername"}
        type={"text"}
        placeholder={"Benutzername"}
        onChange={userNameProps.handleChange}
        value={userNameProps.inputValue}
        error={userNameProps.error}
      />
      <InputField
        title={"Geburtsdatum"}
        type={"date"}
        placeholder={"Geburtsdatum"}
        onChange={birthDateProps.handleChange}
        value={birthDateProps.inputValue}
        error={birthDateProps.error}
      />
      <DropDownList
        label={"Geschlecht"}
        onChange={genderProps.handleChange}
        options={[
          { value: "", label: "Bitte wählen" },
          { value: "Männlich", label: "Männlich" },
          { value: "Weiblich", label: "Weiblich" },
          { value: "Andere", label: "Divers" },
        ]}
        error={genderProps.error}
      />
      <InputField
        title={"E-Mail"}
        type={"email"}
        placeholder={"E-Mail"}
        onChange={emailProps.handleChange}
        value={emailProps.inputValue}
        error={emailProps.error}
      />
      <InputField
        title={"Post Adresse"}
        type={"text"}
        placeholder={"Post Adresse"}
        onChange={addressProps.handleChange}
        value={addressProps.inputValue}
        error={addressProps.error}
      />
      <InputField
        title={"Telefonnummer"}
        type={"tel"}
        placeholder={"Telefonnummer"}
        onChange={phoneProps.handleChange}
        value={phoneProps.inputValue}
        error={phoneProps.error}
      />
      <InputField
        title={"Website"}
        type={"url"}
        placeholder={"Website"}
        onChange={websiteProps.handleChange}
        value={websiteProps.inputValue}
        error={websiteProps.error}
      />
      <Button
        onClick={handleCreate}
        className="sidebar-button"
        disabled={
          (userNameProps.error && userNameProps.inputValue === "") ||
          (birthDateProps.error && birthDateProps.inputValue === "") ||
          (emailProps.error && emailProps.inputValue === "") ||
          (addressProps.error && addressProps.inputValue === "") ||
          (phoneProps.error && phoneProps.inputValue === "") ||
          (genderProps.error && genderProps.inputValue === "") ||
          (websiteProps.error && websiteProps.inputValue === "")
        }
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
