import { test, expect, request } from "@playwright/test";
const objectRepository = require("../objectRepository")
const dataRepository = require("../dataRepository.json")
require("dotenv").config()

test("test @smoke", async ({ page, context }) => {
  await page.goto("https://ebs-v80-qa-portal.fischeridentitydev.com/tes/portal/dashboard/");
  await page.goto("https://ebs-v80-qa-portal.fischeridentitydev.com/tes/portal/authentication/login");
  await page.goto("https://ebs-v80-qa-20-sso.fischeridentitydev.com/auth/realms/qa-tes/protocol/openid-connect/auth?client_id=identity-portal&redirect_uri=https%3A%2F%2Febs-v80-qa-portal.fischeridentitydev.com%2Ftes%2Fportal%2Fauthentication%2Flogin-callback&response_type=code&scope=openid%20profile&state=6a671c06762a4e1aa5d6ae681384658f&code_challenge=EWDyZWoTD3ZLbGLBsWZP0wMpItLjgKXJO5YuUT51KF8&code_challenge_method=S256&response_mode=query&acr_values=urn%3Afischer%3Aloa%3A1fa%3Apwd");
  await objectRepository.default.label_username_or_email(page).click();
  await objectRepository.default.label_username_or_email(page).fill(dataRepository[process.env.EXECUTION_ENVIRONMENT].data_758976);
  await objectRepository.default.label_username_or_email(page).click({
    modifiers: ["Control"],
  });
  await objectRepository.default.label_password(page).click();
  await objectRepository.default.label_password(page).fill(dataRepository[process.env.EXECUTION_ENVIRONMENT].data_347800);
  await objectRepository.default.button_sign_in(page).click();
  await page.goto("https://ebs-v80-qa-portal.fischeridentitydev.com/tes/portal/dashboard/");
  await objectRepository.default.fastackbutton(page).first().click();
  await objectRepository.default.button_home(page).click();
  await objectRepository.default.text_my_apps12_apps(page).click();
  await objectRepository.default.text_user_management(page).click();
  await objectRepository.default.placeholder_quick_search(page).fill(dataRepository[process.env.EXECUTION_ENVIRONMENT].data_959848);
  await objectRepository.default.locator_953124(page).first().click();
  await objectRepository.default.fastackbutton(page).first().click();
  await objectRepository.default.button_user_details(page).click();
  await page
    .locator("div")
    .filter({ hasText: /^Manage Profile$/ })
    .locator("span")
    .click();
  await objectRepository.default.button_user_details(page).click();
  await objectRepository.default.locator_102843(page).click();
  await objectRepository.default.text_login_history_search_ll(page).click();
  await objectRepository.default.button_user_details(page).click();
  await objectRepository.default.locator_22254(page).click();
  await objectRepository.default.button_user_details(page).click();
  await objectRepository.default.label_profile_menu(page).click();
  await objectRepository.default.button_sign_out(page).click();
  await page.goto("https://ebs-v80-qa-portal.fischeridentitydev.com/tes/portal/authentication/logged-out");
});
