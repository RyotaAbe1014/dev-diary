import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { CheckboxWithLabel } from "./CheckboxWithLabel";

describe("CheckboxWithLabel", () => {
  test("renders checkbox with label", () => {
    // Arrange
    const value = true;
    const label = "Test Label";
    const onClick = vi.fn();

    // Act
    render(<CheckboxWithLabel value={value} label={label} onClick={onClick} />);

    // Assert
    const checkbox = screen.getByRole("checkbox");
    const labelElement = screen.getByText(label);

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
    expect(labelElement).toBeInTheDocument();
  });

  test("calls onClick when checkbox is clicked", () => {
    // Arrange
    const value = false;
    const label = "Test Label";
    const onClick = vi.fn();

    render(<CheckboxWithLabel value={value} label={label} onClick={onClick} />);

    const checkbox = screen.getByRole("checkbox");

    // Act
    fireEvent.click(checkbox);

    // Assert
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});