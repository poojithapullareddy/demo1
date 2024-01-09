const objectRepository = {
  "default": {
    "label_username_or_email": (page) => page.getByLabel("Username or Email"),
    "label_password": (page) => page.getByLabel("Password"),
    "button_sign_in": (page) => page.getByRole("button", { name: "Sign in" }),
    "fastackbutton": (page) => page.locator(".fa-stack > button"),
    "button_home": (page) => page.getByRole("button", { name: "Home" }),
    "text_my_apps12_apps": (page) => page.getByText("My Apps12 Apps"),
    "text_user_management": (page) => page.getByText("User Management"),
    "placeholder_quick_search": (page) => page.getByPlaceholder("Quick Search.."),
    "locator_953124": (page) => page.locator("div:nth-child(3) > .fii-c-list__item > .k-display-flex > .fii-c-list__body > .container > div > div > .flex-column > .k-font-size-sm"),
    "button_user_details": (page) => page.getByRole("button", { name: "User Details" }),
    "div": (page) => page.locator("div").filter({ hasText: {} }),
    "locator_102843": (page) => page.locator("div:nth-child(3) > .fii-c-tile > .fii-c-notification > .fa-stack"),
    "text_login_history_search_ll": (page) => page.getByText("Login History Search LL"),
    "locator_22254": (page) => page.locator("div:nth-child(4) > .fii-c-tile > .fii-c-notification > .fa-stack"),
    "label_profile_menu": (page) => page.getByLabel("Profile Menu"),
    "button_sign_out": (page) => page.getByRole("button", { name: "Sign Out" }),
  },
};
module.exports = objectRepository;