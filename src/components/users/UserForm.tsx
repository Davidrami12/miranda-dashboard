// React
import React from "react";

// Styled Components
import {
  LoginContainer,
  LoginCard,
  DashboardForm,
  InputContainer,
  Input,
  InputForm,
  FormTitle,
  RadioInput,
  RadioLabel,
  InputDescription,
  InputSubmit,
  InputCancel,
} from "../styled/Forms";
import { DropdownMenu } from "../styled/DropdownMenu";

// This form gets used from editBooking and newBooking. If used for editing a booking it will be preloaded with the data from the currentUser to edit
const UserForm = ({
  currentUser,
  handleInput,
  handleSubmit,
  formTitle,
  handleCancel,
}: any) => {
  return (
    <>
      <DashboardForm style={{ minHeight: "80%" }}>
        <LoginCard
          style={{ height: "fit-content", width: "850px" }}
        >
          <FormTitle>{formTitle}</FormTitle>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <InputContainer>
              <InputDescription>User picture</InputDescription>
              <InputForm
                type="text"
                className="input-user"
                value={currentUser.photo}
                placeholder="Copy your photo URL"
                name="photo"
                onChange={handleInput}
              ></InputForm>
            </InputContainer>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <InputContainer style={{ width: "30%" }}>
                <InputDescription>User name</InputDescription>
                <InputForm
                  required
                  type="text"
                  className="input-user"
                  value={currentUser.name}
                  placeholder="User Name"
                  name="name"
                  onChange={handleInput}
                ></InputForm>
              </InputContainer>
              <InputContainer style={{ width: "30%" }}>
                <InputDescription>User email</InputDescription>
                <InputForm
                  required
                  type="email"
                  className="input-user"
                  value={currentUser.email}
                  placeholder="User Email"
                  name="email"
                  onChange={handleInput}
                ></InputForm>
              </InputContainer>
              <InputContainer style={{ width: "30%" }}>
                <InputDescription>Phone number</InputDescription>
                <InputForm
                  required
                  type="number"
                  className="input-user"
                  value={currentUser.phone}
                  placeholder="Phone Number"
                  name="phone"
                  onChange={handleInput}
                ></InputForm>
              </InputContainer>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              {/* <InputContainer style={{ width: "fit-content", marginBottom: "2rem" }}>
                <InputDescription>Position</InputDescription>
                <DropdownMenu
                  type="white"
                  name="position"
                  options={["Manager", "Reception", "Room Service"]}
                  selected={currentUser.position}
                  handleInput={handleInput}
                ></DropdownMenu>
              </InputContainer> */}
              <InputContainer style={{ width: "50%" }}>
                <InputDescription>Position Description</InputDescription>
                <InputForm
                  type="textarea"
                  className="input-user"
                  placeholder="Position Description"
                  name="description"
                  value={currentUser.description}
                  onChange={handleInput}
                ></InputForm>
              </InputContainer>
            </div>
            
            <InputContainer>
              <InputDescription>Start Date</InputDescription>
              <InputForm
                required
                style={{ color: "#777777" }}
                type="date"
                className="input-user"
                placeholder="dd-mm-yyyy"
                name="date"
                value={currentUser.date}
                onChange={handleInput}
              ></InputForm>
            </InputContainer>
            
            <InputContainer>
              <InputDescription>Select the User Status</InputDescription>
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
              <InputDescription>Password</InputDescription>
              <InputForm
                type="password"
                className="input-user"
                value={currentUser.pass}
                placeholder="Enter the Password"
                name="pass"
                onChange={handleInput}
              ></InputForm>
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
      </DashboardForm>
    </>
  );
};

export default UserForm;