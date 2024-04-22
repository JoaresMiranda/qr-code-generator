const container = document.querySelector('#container');
const inputText = document.querySelector('#inputText');
const buttonForm = document.querySelector('#button');
const result = document.querySelector('#result');
const qrCodeImg = document.querySelector('#result img');
const textGenerate = document.querySelector('#textGenerate');
const buttonNewQrCode = document.querySelector('#btnNewQrCode');

// Function
const generateQrCode = () => {
  const inputValue = inputText.value;

  if (!inputValue || inputValue.trim().length === 0) {
    alert('Text or URL is required');
    return;
  }

  buttonForm.value = 'Generating code...';

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${inputValue}`;

  qrCodeImg.addEventListener('load', () => {
    container.classList.replace('active', 'inactive');
    result.classList.replace('inactive', 'active');
    textGenerate.innerHTML = `<p>${inputValue}</p>`;
  });
};

// Events
buttonForm.addEventListener('click', (e) => {
  e.preventDefault();
  generateQrCode();
});

inputText.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    generateQrCode();
  }
});

buttonNewQrCode.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.replace('inactive', 'active');
  result.classList.replace('active', 'inactive');
  buttonForm.value = 'Genarate QR-Code';
  inputText.value = '';
  inputText.focus();
});
