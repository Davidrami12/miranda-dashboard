import { MouseEventHandler, ReactNode } from "react";

export interface BookingInterface {
  _id?: string;
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
  formTitle: ReactNode;
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
  index: number;
  number: string;
  booking: BookingInterface;
  handleOpenModal: (userName: string, specialRequest: string, e: any) => void;
}