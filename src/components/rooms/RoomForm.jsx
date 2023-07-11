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

// This form gets used from editRoom and newRoom. If used for editing a room it will be preloaded with the data from the currentRoom to edit
const RoomForm = ({
  currentRoom,
  handleInput,
  handleSubmit,
  formTitle,
  handleCancel,
}) => {
  const listOfAmenities = [
    "Air Conditioner",
    "Kitchen",
    "Grocery",
    "Towels",
    "Smart Security",
    "High speed WiFi",
    "Cleaning",
    "Single Bed",
    "24/7 Online Support",
    "Expert Team",
    "Breakfast",
    "Shower",
    "Shop near",
    "Strong locker",
  ];

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
              <RadioDescription>Photo one</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photo"
                value={currentRoom.photo}
                placeholder="First photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Photo two</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photoTwo"
                value={currentRoom.photoTwo}
                placeholder="Second photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Photo three</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photoThree"
                value={currentRoom.photoThree}
                placeholder="Third photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Photo four</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photoFour"
                value={currentRoom.photoFour}
                placeholder="Four photo URL"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Photo five</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="photoFive"
                value={currentRoom.photoFive}
                placeholder="Five photo URL"
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
              <Input
                required
                type="text"
                className="input-user"
                name="room_number"
                value={currentRoom.room_number}
                placeholder="Room Number"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>Room description</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="description"
                value={currentRoom.description}
                placeholder="Room description"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
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
            <InputContainer>
              <RadioDescription>Room rate</RadioDescription>
              <Input
                required
                type="number"
                className="input-user"
                placeholder="Price per night"
                name="room_rate"
                value={currentRoom.room_rate}
                onChange={handleInput}
              ></Input>
            </InputContainer>
            {currentRoom.discount === "Yes" ? (
              <InputContainer>
                <RadioDescription>Discount %</RadioDescription>
                <Input
                  required
                  type="number"
                  className="input-user"
                  name="discountPercent"
                  value={currentRoom.discountPercent}
                  placeholder="Discount %"
                  onChange={handleInput}
                ></Input>
              </InputContainer>
            ) : null}

            <InputContainer>
              <RadioDescription>Cancellation Policy</RadioDescription>
              <Input
                type="text"
                className="input-user"
                name="cancellationPolicy"
                value={currentRoom.cancellationPolicy}
                placeholder="Cancellation Policy"
                onChange={handleInput}
              ></Input>
            </InputContainer>
            <InputContainer>
              <RadioDescription>
                Select the amenities included in the new room
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
      </LoginContainer>
    </>
  );
};

export default RoomForm;