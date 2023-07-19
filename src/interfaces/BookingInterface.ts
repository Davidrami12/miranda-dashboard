import { MouseEventHandler } from "react";

export interface BookingInterface {
  id: number;
  bookingID: number;
  userName: string;
  userPicture: string;
  orderDate: string;
  checkIn: string;
  checkOut: string;
  specialRequest: string;
  roomType: string;
  status: string;
}

export interface BookingFormInt {
  currentBooking: BookingInterface;
  formTitle: string;
  handleInput: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | MouseEventHandler<HTMLInputElement>
      | any
  ) => void;
  handleSubmit: () => void;
  handleCancel: (e: Event) => void;
}

export interface BookingRowInt {
  booking: BookingInterface;
  handleOpenModal: (userName: string, specialRequest: string, e: any) => void;
}