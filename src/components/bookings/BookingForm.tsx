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

// TypeScript
import { BookingFormInt } from "../../interfaces/BookingInterface";

// This form gets used from editBooking and newBooking. If used for editing a booking it will be preloaded with the data from the currentBooking to edit
const BookingForm = ({
  currentBooking,
  handleInput,
  handleSubmit,
  formTitle,
  handleCancel,
}: BookingFormInt ) => {
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
              <InputDescription>User name</InputDescription>
              <InputForm
                required
                type="text"
                className="input-user"
                value={currentBooking.userName}
                placeholder="User Name"
                name="userName"
                onChange={handleInput}
              ></InputForm>
            </InputContainer>
            <InputContainer>
              <InputDescription>User picture</InputDescription>
              <InputForm
                className="input-user"
                value={currentBooking.userPicture}
                placeholder="Copy your photo URL"
                name="userPicture"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInput(e)
                }
              ></InputForm>
            </InputContainer>
            <div style={{ display: "flex", justifyContent: "space-between"}}>
              <InputContainer style={{ width: "45%" }}>
                <InputDescription>Check in</InputDescription>
                <InputForm
                  required
                  style={{ color: "#777777" }}
                  type="date"
                  className="input-user"
                  placeholder="dd/mm/yyyy"
                  name="checkIn"
                  value={currentBooking.checkIn}
                  onChange={handleInput}
                ></InputForm>
              </InputContainer>
              <InputContainer style={{ width: "45%" }}>
                <InputDescription>Check out</InputDescription>
                <InputForm
                  required
                  style={{ color: "#777777" }}
                  type="date"
                  className="input-user"
                  placeholder="dd/mm/yyyy"
                  name="checkOut"
                  value={currentBooking.checkOut}
                  onChange={handleInput}
                ></InputForm>
              </InputContainer>
            </div>
            <InputContainer>
              <InputDescription>Special request &#40;optional&#41;</InputDescription>
              <InputForm
                type="textarea"
                className="input-user"
                placeholder="Special request"
                name="specialRequest"
                value={currentBooking.specialRequest}
                onChange={handleInput}
              ></InputForm>
            </InputContainer>
            <InputContainer>
              <InputDescription>Room Type</InputDescription>
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
              <InputDescription>Booking Status</InputDescription>
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
                marginTop: "3rem",
                display: "flex",
                justifyContent: "space-between",
                width: "30%",
                margin: "auto",
                gap: "2rem",
              }}
            >
              <InputSubmit type="submit" value={"Save"} />
              <InputCancel
                onClick={(e: any) => {
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

export default BookingForm;