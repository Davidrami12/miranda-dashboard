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
  RadioDescription,
  InputSubmit,
  InputCancel,
} from "../../pages/Login/LoginStyled";

// This form gets used from editRoom and newRoom. If used for editing a room it will be preloaded with the data from the currentRoom to edit
const RoomForm = ({
  currentRoom,
  handleInput,
  handleSubmit,
  formTitle,
  handleCancel,
}) => {
  const listOfAmenities = [ "AC", "Shower", "Towel", "Bathtub", "Coffee Set", "LED TV", "Wi-Fi"];

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
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <InputContainer style={{ width: "45%" }}>
                <RadioDescription>Photo one</RadioDescription>
                <InputForm
                  type="text"
                  className="input-user"
                  name="photo"
                  value={currentRoom.photo}
                  placeholder="First photo URL"
                  onChange={handleInput}
                ></InputForm>
              </InputContainer>
              <InputContainer style={{ width: "45%" }}>
                <RadioDescription>Photo two</RadioDescription>
                <InputForm
                  type="text"
                  className="input-user"
                  name="photoTwo"
                  value={currentRoom.photoTwo}
                  placeholder="Second photo URL"
                  onChange={handleInput}
                ></InputForm>
              </InputContainer>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <InputContainer style={{ width: "45%" }}>
                <RadioDescription>Photo three</RadioDescription>
                <InputForm
                  type="text"
                  className="input-user"
                  name="photoThree"
                  value={currentRoom.photoThree}
                  placeholder="Third photo URL"
                  onChange={handleInput}
                ></InputForm>
              </InputContainer>
              <InputContainer style={{ width: "45%" }}>
                <RadioDescription>Photo four</RadioDescription>
                <InputForm
                  type="text"
                  className="input-user"
                  name="photoFour"
                  value={currentRoom.photoFour}
                  placeholder="Four photo URL"
                  onChange={handleInput}
                ></InputForm>
              </InputContainer>
            </div>
            
            {/* <InputContainer>
              <RadioDescription>Photo five</RadioDescription>
              <InputForm
                type="text"
                className="input-user"
                name="photoFive"
                value={currentRoom.photoFive}
                placeholder="Five photo URL"
                onChange={handleInput}
              ></InputForm>
            </InputContainer> */}
            <InputContainer>
              <RadioDescription>Room Type</RadioDescription>
              <RadioInput
                required
                type="radio"
                id="singleBed"
                value="Single Bed"
                name="bed_type"
                onClick={handleInput}
                defaultChecked={currentRoom.bed_type === "Single Bed"}
              />
              <RadioLabel htmlFor="singleBed">Single Bed</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="doubleBed"
                value="Double Bed"
                name="bed_type"
                onClick={handleInput}
                defaultChecked={currentRoom.bed_type === "Double Bed"}
              />
              <RadioLabel htmlFor="doubleBed">Double Bed</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="doubleSuperior"
                value="Double Superior"
                name="bed_type"
                onClick={handleInput}
                defaultChecked={currentRoom.bed_type === "Double Superior"}
              />
              <RadioLabel htmlFor="doubleSuperior">Double Superior</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="suite"
                value="Suite"
                name="bed_type"
                onClick={handleInput}
                defaultChecked={currentRoom.bed_type === "Suite"}
              />
              <RadioLabel htmlFor="suite">Suite</RadioLabel>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Room number</RadioDescription>
              <InputForm
                required
                type="text"
                className="input-user"
                name="room_number"
                value={currentRoom.room_number}
                placeholder="Room Number"
                onChange={handleInput}
              ></InputForm>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Room description</RadioDescription>
              <InputForm
                type="text"
                className="input-user"
                name="description"
                value={currentRoom.description}
                placeholder="Room description"
                onChange={handleInput}
              ></InputForm>
            </InputContainer>
            <div style={{display: "flex", alignItems: "center"}}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "70%"}}>
                <InputContainer style={{ width: "40%" }}>
                  <RadioDescription>Room rate</RadioDescription>
                  <InputForm
                    required
                    type="number"
                    className="input-user"
                    placeholder="Price per night"
                    name="room_rate"
                    value={currentRoom.room_rate}
                    onChange={handleInput}
                  ></InputForm>
                </InputContainer>
                <InputContainer style={{ width: "40%" }}>
                  <RadioDescription>Offer</RadioDescription>
                  <RadioInput
                    required
                    type="radio"
                    id="yes"
                    value="Yes"
                    name="discount"
                    onClick={handleInput}
                    defaultChecked={currentRoom.discount === "Yes"}
                  />
                  <RadioLabel htmlFor="yes">Yes</RadioLabel>
                  <RadioInput
                    required
                    type="radio"
                    id="no"
                    value="No"
                    name="discount"
                    onClick={handleInput}
                    defaultChecked={currentRoom.discount === "No"}
                  />
                  <RadioLabel htmlFor="no">No</RadioLabel>
                </InputContainer>
              </div>

              {currentRoom.discount === "Yes" ? (
                <InputContainer style={{ width: "30%" }}>
                  <RadioDescription>Discount %</RadioDescription>
                  <InputForm
                    required
                    type="number"
                    className="input-user"
                    name="discountPercent"
                    value={currentRoom.discountPercent}
                    placeholder="Discount %"
                    onChange={handleInput}
                  ></InputForm>
                </InputContainer>
              ) : null}
              
            </div>

            <InputContainer>
              <RadioDescription>Cancellation Policy</RadioDescription>
              <InputForm
                type="text"
                className="input-user"
                name="cancellationPolicy"
                value={currentRoom.cancellationPolicy}
                placeholder="Cancellation Policy"
                onChange={handleInput}
              ></InputForm>
            </InputContainer>
            <InputContainer>
              <RadioDescription>
                Desired amenities to include in the new room
              </RadioDescription>
              {listOfAmenities.map((amenity, index) => (
                <div key={index} style={{ display: "inline-block" }}>
                  {currentRoom.room_facilities.includes(amenity) ? (
                    <RadioInput
                      type="checkbox"
                      name="room_facilities"
                      id={amenity}
                      value={amenity}
                      onClick={handleInput}
                      defaultChecked
                    />
                  ) : (
                    <RadioInput
                      type="checkbox"
                      name="room_facilities"
                      id={amenity}
                      value={amenity}
                      onClick={handleInput}
                    />
                  )}

                  <RadioLabel htmlFor={amenity}>{amenity}</RadioLabel>
                </div>
              ))}
            </InputContainer>
            <InputContainer>
              <RadioDescription>Room status</RadioDescription>
              <RadioInput
                required
                type="radio"
                id="available"
                value="Available"
                name="room_status"
                onClick={handleInput}
                defaultChecked={currentRoom.room_status === "Available"}
              />
              <RadioLabel htmlFor="available">Available</RadioLabel>
              <RadioInput
                required
                type="radio"
                id="booked"
                value="Booked"
                name="room_status"
                onClick={handleInput}
                defaultChecked={currentRoom.room_status === "Booked"}
              />
              <RadioLabel htmlFor="booked">Booked</RadioLabel>
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

export default RoomForm;