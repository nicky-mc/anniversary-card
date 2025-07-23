// --- Get all the elements we need ---
const card = document.getElementById("card");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const translationModal = document.getElementById("translationModal");

// --- Card flip logic ---
if (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
}

// --- Modal logic ---
if (openModalBtn && closeModalBtn && translationModal) {
  // To open the modal
  openModalBtn.addEventListener("click", function () {
    translationModal.classList.remove("hidden");
  });

  // To close with the 'X' button
  closeModalBtn.addEventListener("click", function () {
    translationModal.classList.add("hidden");
  });

  // To close by clicking the background
  translationModal.addEventListener("click", function (event) {
    if (event.target === translationModal) {
      translationModal.classList.add("hidden");
    }
  });
}
