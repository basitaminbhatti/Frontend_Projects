function updateCard() {
    const cardNumber = document.getElementById("cardNumberInput").value;
    const cardName = document.getElementById("cardNameInput").value;
    const validUpTo = document.getElementById("validUpToInput").value;

    document.getElementById("cardNumber").textContent = cardNumber;
    document.getElementById("cardName").textContent = cardName;
    document.getElementById("validUpTo").textContent = validUpTo;
  }