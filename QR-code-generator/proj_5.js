const qrText = document.getElementById("qr-text");
const sizes = document.getElementById("sizes");
const generateBtn = document.getElementById("generate");
const downloadBtn = document.getElementById("download");
const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmpytInput();
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isEmpytInput();
});

downloadBtn.addEventListener("click", (e) => {
  let img = document.querySelector(".qr-body img");

  if (img !== null) {
    let imgAttr = img.getAttribute("src");
    downloadBtn.setAttribute("href", imgAttr);
  } else {
    downloadBtn.setAttribute(
      "href",
      `${download.querySelector("canvas").toDataURL()}`
    );
  }
});

function isEmpytInput() {
  //   if (qrText.value.length > 0) {
  //     generateQRCode();
  //   } else {
  //     alert("Please enter text or URL to generate QR Code");
  //   }
  qrText.value.length > 0
    ? generateQRCode()
    : alert("Please enter text or URL to generate QR Code");
}

function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}
