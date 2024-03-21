import { render, screen } from "@testing-library/react";
import { ActionMenu } from "./action-menu";
import userEvent from "@testing-library/user-event";

const user = userEvent;

describe("ActionMenu", () => {
  test("Menuボタンが表示される", () => {
    // given
    const buttonText = "Menu";

    // when
    render(<ActionMenu />);
    const menuTrigger = screen.getByRole("button", { name: buttonText });

    // then
    expect(menuTrigger).toBeInTheDocument();
  });

  test("ボタンをクリックするとメニューが表示される", async () => {
    // given
    render(<ActionMenu />);
    const menuTrigger = screen.getByRole("button", { name: "Menu" });

    // when
    await user.click(menuTrigger);

    // then
    const menuContent = screen.getByRole("menu");
    expect(menuContent).toBeInTheDocument();
  });
});