import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { ActionMenu } from "./action-menu";
import * as LoginModule from "@/features/auth/actions/logout";
import { logout } from "@/features/auth/actions/logout";

const user = userEvent;

beforeEach(() => {
  vi.resetAllMocks();
});

vi.mock('@/features/auth/actions/logout');

function mockLogout() {
  vi.spyOn(LoginModule, 'logout').mockResolvedValue();
}

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

  test('logoutボタンをクリックするとlogout関数が呼ばれる', async () => {
    // given
    mockLogout();
    render(<ActionMenu />);
    const menuTrigger = screen.getByRole("button", { name: "Menu" });

    // when
    await user.click(menuTrigger);
    const logoutButton = screen.getByRole("menuitem", { name: "logout" });
    await user.click(logoutButton);

    // then
    expect(logout).toHaveBeenCalled();
  });
});