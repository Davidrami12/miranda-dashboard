// React
import React from "react";

// Styled Components
import {
  LoginContainer,
  LoginCard,
  InputContainer,
  Input,
  FormTitle,
  RadioInput,
  RadioLabel,
  RadioDescription,
  InputSubmit,
  InputCancel,
} from "../../pages/login/LoginStyled";
import { DropdownMenu } from "../styled/DropdownMenu";

// This form gets used from editBooking and newBooking. If used for editing a booking it will be preloaded with the data from the currentUser to edit
const UserForm = ({
  currentUser,
  handleInput,
  handleSubmit,
  formTitle,
  handleCancel,
}) => {
  return (
    <>
      <LoginContainer style={{ minHeight: "80%" }}>
        <LoginCard
          style={{ height: "fit-content", margin: "2rem 0", width: "90%" }}
        >
          <FormTitle>{formTitle}</FormTitle>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <InputContainer>
              <RadioDescription>User name</RadioDescription>
              <Input
                required
                type="text"
                className="input-user"
                value={currentUser.name}
                placeholder="User Name"
                name="name"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>User picture</RadioDescription>
              <Input
                type="text"
                className="input-user"
                value={currentUser.photo}
                placeholder="Copy your photo URL"
                name="photo"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>User Email</RadioDescription>
              <Input
                required
                type="text"
                className="input-user"
                value={currentUser.email}
                placeholder="User Email"
                name="email"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Phone Number</RadioDescription>
              <Input
                required
                type="text"
                className="input-user"
                value={currentUser.phone}
                placeholder="Phone Number"
                name="phone"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer
              style={{ width: "fit-content", marginBottom: "2rem" }}
            >
              <RadioDescription>Position</RadioDescription>
              <DropdownMenu
                type="white"
                name="position"
                options={["Manager", "Reception", "Room Service"]}
                selected={currentUser.position}
                handleInput={handleInput}
              ></DropdownMenu>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Start Date</RadioDescription>
              <Input
                required
                style={{ color: "#777777" }}
                type="date"
                className="input-user"
                placeholder="dd-mm-yyyy"
                name="date"
                value={currentUser.date}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Position Description</RadioDescription>
              <Input
                type="text"
                className="input-user"
                placeholder="Position Description"
                name="description"
                value={currentUser.description}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Select the User Status</RadioDescription>
              <RadioInput
                required
                type="radio"
                id="ACTIVE"
                value="ACTIVE"
                name="state"
                onClick={handleInput}
                defaultChecked={currentUser.state === "ACTIVE"}
              />
              <RadioLabel htmlFor="ACTIVE">Active</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="INACTIVE"
                value="INACTIVE"
                name="state"
                onClick={handleInput}
                defaultChecked={currentUser.state === "INACTIVE"}
              />
              <RadioLabel htmlFor="INACTIVE">Inactive</RadioLabel>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Password</RadioDescription>
              <Input
                type="text"
                className="input-user"
                value={currentUser.pass}
                placeholder="Enter the Password"
                name="pass"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "30%",
                margin: "auto",
                gap: "2rem",
              }}
            >
              <InputSubmit type="submit" value={"Save"} />
              <InputCancel
                onClick={(e) => {
                  handleCancel(e);
                }}
              >
                Cancel
              </InputCancel>
            </div>
          </form>
        </LoginCard>
      </LoginContainer>
    </>
  );
};

export default UserForm;