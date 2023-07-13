import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import 'jest-styled-components';
import { RoomStatus } from "../components/rooms/RoomRowStyled";

test("Renders green tag with text AVAILABLE if the current room is available", () => {
  const roomStatus = "Available";

  render(<RoomStatus status={roomStatus}>{roomStatus}</RoomStatus>);

  expect(screen.getByText("Available")).toBeInTheDocument("Available");
  expect(screen.getByText("Available")).toHaveStyle(`backgroundColor:"#5AD07A"`);
});

test("Renders red tag with text BOOKED if the current room is not available", () => {
  const roomStatus = "Booked";

  render(<RoomStatus status={roomStatus}>{roomStatus}</RoomStatus>);

  expect(screen.getByText("Booked")).toBeInTheDocument("Booked");
  expect(screen.getByText("Booked")).toHaveStyle(`backgroundColor:"#E23428"`);
});