import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  test("renders the button with the correct label", () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    const buttonElement = screen.getByText("Click Me");
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders without crashing when no onClick is provided", () => {
    render(<Button label="No Click Handler" />);
    const buttonElement = screen.getByText("No Click Handler");
    expect(buttonElement).toBeInTheDocument();
  });
});
