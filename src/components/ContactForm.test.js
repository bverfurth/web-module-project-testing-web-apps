import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ContactForm from "./ContactForm";

test("renders without errors", () => {
  render(<ContactForm />);
});

test("renders the contact form header", () => {
  //Arrange
  render(<ContactForm />);
  //Act
  const header = screen.getByText(/Contact Form/i);
  //Assert
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).toHaveTextContent("Contact Form");
});

test("renders ONE error message if user enters less then 5 characters into firstname.", async () => {
  //Arrange
  render(<ContactForm />);
  //Act
  const firstNameInput = screen.getByLabelText(/First Name*/i);
  userEvent.type(firstNameInput, "test");
  //Assert
  await waitFor(() => {
    expect(
      screen.queryByText(/firstName must have at least 5 characters./i)
    ).toBeInTheDocument();
  });
});

test("renders THREE error messages if user enters no values into any fields.", async () => {
  //Arrange
  render(<ContactForm />);

  //Act
  const firstName = screen.getByLabelText("First Name*");
  userEvent.type(firstName, "Edd");

  const lastName = screen.getByLabelText("Last Name*");
  userEvent.type(lastName, "Burke");

  const email = screen.getByLabelText("Email*");
  userEvent.type(email, "bluebill1049@hotmail.com");

  //Assert
  const error = await screen.findAllByText(/error/i);

  expect(error.length).toEqual(1);
});

test("renders ONE error message if user enters a valid first name and last name but no email.", async () => {
  //Arrange
  render(<ContactForm />);
  //Act

  //Assert
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
  //Arrange
  //Act
  //Assert
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
  //Arrange
  //Act
  //Assert
});

test("renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.", async () => {
  //Arrange
  //Act
  //Assert
});

test("renders all fields text when all fields are submitted.", async () => {
  //Arrange
  //Act
  //Assert
});
