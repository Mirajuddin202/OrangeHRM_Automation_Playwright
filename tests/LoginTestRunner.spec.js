import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("Admin can login successfully", async ({ page }) => {
  const login = new LoginPage(page);

  await login.gotoLoginPage();
  await login.login("Admin", "admin123");
  await expect(page).toHaveURL(/dashboard/);
  await expect(login.profilePic).toBeVisible();
});
