// Personalize estes dados antes de publicar.
const WHATSAPP_NUMBER = "5500000000000"; // Ex.: 5581999999999 (55 + DDD + número)

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(opened));
  menuButton.textContent = opened ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const whatsappLink = document.getElementById("whatsapp-link");
whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}`;
whatsappLink.target = "_blank";
whatsappLink.rel = "noopener";

document.getElementById("lead-form").addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    "Olá! Gostaria de solicitar um orçamento de móveis planejados.",
    `Nome: ${data.get("nome")}`,
    `WhatsApp: ${data.get("telefone")}`,
    `Ambiente: ${data.get("ambiente")}`,
    `Ideia: ${data.get("mensagem") || "Gostaria de conversar sobre o projeto."}`
  ].join("\\n");

  if (WHATSAPP_NUMBER === "5500000000000") {
    alert("Antes de usar o formulário, configure o número de WhatsApp no arquivo script.js.");
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});
