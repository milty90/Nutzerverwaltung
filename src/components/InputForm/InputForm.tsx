import DropDownList from "../../components/DropDown/DropDownList";
import InputField from "../../components/InputField/InputField";
import useFromInput from "../../hooks/useFormInput";
import { Button } from "@mui/material";
import type { Gender, User } from "../../types/User";
import { toast } from "react-toastify";

type UserFormProps = {
  user?: User | null;
  onSubmit?: (user: User) => void;
};

function InputForm({ user, onSubmit }: UserFormProps) {
  const userNameProps = useFromInput(user?.name ?? "", true);
  const birthDateProps = useFromInput(user?.birthDate ?? "", true);
  const emailProps = useFromInput(user?.email ?? "", true);
  const addressProps = useFromInput(user?.address ?? "", true);
  const phoneProps = useFromInput(user?.phone ?? "", true);
  const websiteProps = useFromInput(user?.website ?? "", true);
  const genderProps = useFromInput(user?.gender ?? "", true);

  function validateAll() {
    const isUserNameValid = userNameProps.validate(userNameProps.inputValue);
    const isBirthDateValid = birthDateProps.validate(birthDateProps.inputValue);
    const isEmailValid = emailProps.validate(emailProps.inputValue);
    const isAddressValid = addressProps.validate(addressProps.inputValue);
    const isPhoneValid = phoneProps.validate(phoneProps.inputValue);
    const isWebsiteValid = websiteProps.validate(websiteProps.inputValue);
    const isGenderValid = genderProps.validate(genderProps.inputValue);

    return (
      isUserNameValid &&
      isBirthDateValid &&
      isEmailValid &&
      isAddressValid &&
      isPhoneValid &&
      isWebsiteValid &&
      isGenderValid
    );
  }

  function handleSubmit() {
    if (!validateAll()) {
      toast.error("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }
    if (onSubmit) {
      onSubmit({
        id: user?.id ?? Date.now(),
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
      });
    }
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
        value={genderProps.inputValue}
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
        onClick={handleSubmit}
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
          <img className="sidebar-icon" src="/user-plus.svg" alt="Create" />
        }
      >
        Speichern
      </Button>
    </>
  );
}

export default InputForm;
