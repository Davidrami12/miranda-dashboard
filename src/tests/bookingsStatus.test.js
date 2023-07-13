import { render, screen } from "@testing-library/react";
import 'jest-styled-components'
import { Status } from "../components/bookings/BookingRowStyled";

test("Renders green tag with text CHECK IN if the current status is Check In", () => {
  const bookingStatus = "Check In";

  const { container } = render(<Status $type={bookingStatus}>{bookingStatus}</Status>);
  const statusElement = container.firstChild;

  expect(screen.getByText("Check In")).toBeInTheDocument();
  expect(statusElement).toHaveStyleRule('color', 'green');
});

test("Renders red tag with text CHECK OUT if the current status is Check Out", () => {
  const bookingStatus = "Check Out";

  const { container } = render(<Status $type={bookingStatus}>{bookingStatus}</Status>);
  const statusElement = container.firstChild;

  expect(screen.getByText("Check Out")).toBeInTheDocument();
  expect(statusElement).toHaveStyleRule('color', 'red');
});

test("Renders orange tag with text IN PROGRESS if the current status is In Progress", () => {
  const bookingStatus = "In Progress";

  const { container } = render(<Status $type={bookingStatus}>{bookingStatus}</Status>);
  const statusElement = container.firstChild;

  expect(screen.getByText("In Progress")).toBeInTheDocument();
  expect(statusElement).toHaveStyleRule('color', 'orange');
});
