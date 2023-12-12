document.addEventListener("DOMContentLoaded", function () {
  const modalButton = document.querySelector("#modals");
  const modalElement = document.querySelector(".modal");
  const closeElement = document.querySelector(".close");
  const modalContent = document.querySelector(".modal-content");

  console.log(modalButton);
  console.log(modalElement);
  console.log(closeElement);

  modalButton.addEventListener("click", function () {
    modalElement.classList.add("open");
  });

  closeElement.addEventListener("click", function () {
    modalElement.classList.remove("open");
  });
});
