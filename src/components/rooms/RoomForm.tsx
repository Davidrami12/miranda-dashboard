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
import { RoomInterface } from "../../interfaces/RoomInterface";

type RoomType = {
  currentRoom: RoomInterface | null | undefined;
};

// This form gets used from editRoom and newRoom. If used for editing a room it will be preloaded with the data from the currentRoom to edit
const RoomForm = ({
  currentRoom,
  handleInput,
  handleSubmit,
  formTitle,
  handleCancel,
}: RoomType | any) => {
  const listOfAmenities = [ "AC", "Shower", "Towel", "Bathtub", "Coffee Set", "LED TV", "Wi-Fi"];

  return (
    <>
      <DashboardForm style={{ minHeight: "80%" }}>
        <LoginCard style={{ height: "fit-content", width: "850px" }}>
          <FormTitle>{formTitle}</FormTitle>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <InputContainer style={{ width: "45%" }}>
                <InputDescription>Photo one</InputDescription>
                <InputForm
                  type="text"
                  className="input-user"
                  name="photo"
                  value={currentRoom.photo}
                  placeholder="First photo URL"
                  onChange={handleInput}
                  required
                ></InputForm>
              </InputContainer>
              <InputContainer style={{ width: "45%" }}>
                <InputDescription>Photo two</InputDescription>
                <InputForm
                  type="text"
                  className="input-user"
                  name="photoTwo"
                  value={currentRoom.photoTwo}
                  placeholder="Second photo URL"
                  onChange={handleInput}
                  required
                ></InputForm>
              </InputContainer>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <InputContainer style={{ width: "45%" }}>
                <InputDescription>Photo three</InputDescription>
                <InputForm
                  type="text"
                  className="input-user"
                  name="photoThree"
                  value={currentRoom.photoThree}
                  placeholder="Third photo URL"
                  onChange={handleInput}
                  required
                ></InputForm>
              </InputContainer>
              <InputContainer style={{ width: "45%" }}>
                <InputDescription>Photo four</InputDescription>
                <InputForm
                  type="text"
                  className="input-user"
                  name="photoFour"
                  value={currentRoom.photoFour}
                  placeholder="Four photo URL"
                  onChange={handleInput}
                  required
                ></InputForm>
              </InputContainer>
            </div>
            
            {/* <InputContainer>
              <InputDescription>Photo five</InputDescription>
              <InputForm
                type="text"
                className="input-user"
                name="photoFive"
                value={currentRoom.photoFive}
                placeholder="Five photo URL"
                onChange={handleInput}
              ></InputForm>
            </InputContainer> */}
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

              <InputContainer style={{ width: "15%" }}>
                <InputDescription>Room Nº.</InputDescription>
                <InputForm
                  type="number"
                  className="input-user"
                  name="room_number"
                  value={currentRoom.room_number}
                  placeholder="Room number"
                  onChange={handleInput}
                  required
                ></InputForm>
              </InputContainer>

              <InputContainer style={{ width: "75%" }}>
                <InputDescription>Room Type</InputDescription>

                <RadioInput
                  type="radio"
                  id="singleBed"
                  value="Single Bed"
                  name="bed_type"
                  onClick={handleInput}
                  defaultChecked={currentRoom.bed_type === "Single Bed"}
                  required
                />
                <RadioLabel htmlFor="singleBed">Single Bed</RadioLabel>

                <RadioInput
                  type="radio"
                  id="doubleBed"
                  value="Double Bed"
                  name="bed_type"
                  onClick={handleInput}
                  defaultChecked={currentRoom.bed_type === "Double Bed"}
                  required
                />
                <RadioLabel htmlFor="doubleBed">Double Bed</RadioLabel>

                <RadioInput
                  type="radio"
                  id="doubleSuperior"
                  value="Double Superior"
                  name="bed_type"
                  onClick={handleInput}
                  defaultChecked={currentRoom.bed_type === "Double Superior"}
                  required
                />
                <RadioLabel htmlFor="doubleSuperior">Double Superior</RadioLabel>

                <RadioInput
                  type="radio"
                  id="suite"
                  value="Suite"
                  name="bed_type"
                  onClick={handleInput}
                  defaultChecked={currentRoom.bed_type === "Suite"}
                  required
                />
                <RadioLabel htmlFor="suite">Suite</RadioLabel>

              </InputContainer>

            </div>
            
            
            <div style={{display: "flex", alignItems: "center"}}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "70%"}}>
                <InputContainer style={{ width: "40%" }}>
                  <InputDescription>Room rate ($)</InputDescription>
                  <InputForm
                    type="number"
                    className="input-user"
                    placeholder="Price per night"
                    name="room_rate"
                    value={currentRoom.room_rate}
                    onChange={handleInput}
                    required
                  ></InputForm>
                </InputContainer>
                <InputContainer style={{ width: "40%" }}>
                  <InputDescription>Offer discount</InputDescription>
                  <RadioInput
                    type="radio"
                    id="yes"
                    value="Yes"
                    name="discount"
                    onClick={handleInput}
                    defaultChecked={currentRoom.discount === "Yes"}
                    required
                  />
                  <RadioLabel htmlFor="yes">Yes</RadioLabel>
                  <RadioInput
                    type="radio"
                    id="no"
                    value="No"
                    name="discount"
                    onClick={handleInput}
                    defaultChecked={currentRoom.discount === "No"}
                    required
                  />
                  <RadioLabel htmlFor="no">No</RadioLabel>
                </InputContainer>
              </div>

              {currentRoom.discount === "Yes" ? (
                <InputContainer style={{ width: "30%" }}>
                  <InputDescription>Discount percentage (%)</InputDescription>
                  <InputForm
                    type="number"
                    max={90}
                    className="input-user"
                    name="discountPercent"
                    value={currentRoom.discountPercent}
                    placeholder="Discount %"
                    onChange={handleInput}
                    required
                  ></InputForm>
                </InputContainer>
              ) : null}
              
            </div>

            <div style={{display: "flex", justifyContent: "space-between"}}>
              <InputContainer style={{ width: "60%" }}>
                <InputDescription>Room description</InputDescription>
                <InputForm
                  type="text"
                  className="input-user"
                  name="description"
                  value={currentRoom.description}
                  placeholder="Description for this room"
                  onChange={handleInput}
                  required
                ></InputForm>
              </InputContainer>
              <InputContainer style={{ width: "35%" }}>
                <InputDescription>Cancellation Policy</InputDescription>
                <InputForm
                  type="text"
                  className="input-user"
                  name="cancellationPolicy"
                  value={currentRoom.cancellationPolicy}
                  placeholder="Provide any service policy"
                  onChange={handleInput}
                  required
                ></InputForm>
              </InputContainer>
            </div>
            
            <InputContainer>
              <InputDescription>
                Desired amenities to include in the new room
              </InputDescription>
              {listOfAmenities.map((amenity, index) => (
                <div key={index} style={{ display: "inline-block" }}>
                  {currentRoom.room_facilities.includes(amenity) ? (
                    <RadioInput
                    type="checkbox"
                    name="room_facilities"
                    id={amenity}
                    value={amenity}
                    onClick={handleInput}
                    defaultChecked={currentRoom.room_facilities.includes(amenity)}
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
              <InputDescription>Room status</InputDescription>
              <RadioInput
                type="radio"
                id="available"
                value="Available"
                name="room_status"
                onClick={handleInput}
                defaultChecked={currentRoom.room_status === "Available"}
                required
              />
              <RadioLabel htmlFor="available">Available</RadioLabel>
              <RadioInput
                type="radio"
                id="booked"
                value="Booked"
                name="room_status"
                onClick={handleInput}
                defaultChecked={currentRoom.room_status === "Booked"}
                required
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