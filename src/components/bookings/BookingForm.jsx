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

// This form gets used from editBooking and newBooking. If used for editing a booking it will be preloaded with the data from the currentBooking to edit
const BookingForm = ({
  currentBooking,
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
                value={currentBooking.userName}
                placeholder="User Name"
                name="userName"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>User picture</RadioDescription>
              <Input
                className="input-user"
                value={currentBooking.userPicture}
                placeholder="Copy your photo URL"
                name="userPicture"
                onChange={(e) => handleInput(e.target.value)}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Check in</RadioDescription>
              <Input
                required
                style={{ color: "#777777" }}
                type="date"
                className="input-user"
                placeholder="dd-mm-yyyy"
                name="checkIn"
                value={currentBooking.checkIn}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Check out</RadioDescription>
              <Input
                required
                style={{ color: "#777777" }}
                type="date"
                className="input-user"
                placeholder="dd-mm-yyyy"
                name="checkOut"
                value={currentBooking.checkOut}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Special request</RadioDescription>
              <Input
                type="text"
                className="input-user"
                placeholder="Special request"
                name="specialRequest"
                value={currentBooking.specialRequest}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Select the Room Type</RadioDescription>
              <RadioInput
                required
                type="radio"
                id="singleBed"
                value="Single Bed"
                name="roomType"
                onClick={handleInput}
                defaultChecked={currentBooking.roomType === "Single Bed"}
              />
              <RadioLabel htmlFor="singleBed">Single Bed</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="doubleBed"
                value="Double Bed"
                name="roomType"
                onClick={handleInput}
                defaultChecked={currentBooking.roomType === "Double Bed"}
              />
              <RadioLabel htmlFor="doubleBed">Double Bed</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="doubleSuperior"
                value="Double Superior"
                name="roomType"
                onClick={handleInput}
                defaultChecked={currentBooking.roomType === "Double Superior"}
              />
              <RadioLabel htmlFor="doubleSuperior">Double Superior</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="suite"
                value="Suite"
                name="roomType"
                onClick={handleInput}
                defaultChecked={currentBooking.roomType === "Suite"}
              />
              <RadioLabel htmlFor="suite">Suite</RadioLabel>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Select the Booking Status</RadioDescription>
              <RadioInput
                required
                type="radio"
                id="checkIn"
                value="Check In"
                name="status"
                onClick={handleInput}
                defaultChecked={currentBooking.status === "Check In"}
              />
              <RadioLabel htmlFor="checkIn">Check In</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="checkOut"
                value="Check Out"
                name="status"
                onClick={handleInput}
                defaultChecked={currentBooking.status === "Check Out"}
              />
              <RadioLabel htmlFor="checkOut">Check Out</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="inProgress"
                value="In Progress"
                name="status"
                onClick={handleInput}
                defaultChecked={currentBooking.status === "In Progress"}
              />
              <RadioLabel htmlFor="inProgress">In Progress</RadioLabel>
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

export default BookingForm;