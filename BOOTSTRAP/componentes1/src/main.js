const theme = document.querySelector(".dark-light");
const html = document.documentElement;

theme.addEventListener("click", lightDark);
function lightDark() {
  const esOscuro = html.getAttribute("data-bs-theme") === "dark";
  html.setAttribute("data-bs-theme", esOscuro ? "light" : "dark");
  theme.textContent = esOscuro ? "🌙" : "☀️";
}
const popover = new bootstrap.Popover(".popover-dismiss", {
  trigger: "focus",
});
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("Bueno, bien clickado igualmente👍👍", "success");
  });
}
const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
