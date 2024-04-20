const main = document.querySelector('#main');
const inputText = document.querySelector('#inputText');
const buttonForm = document.querySelector('#button');
const qrCodeImg = document.querySelector('#result img');

// Function
const generateQrCode = () => {
  const inputValue = inputText.value;
  if (!inputValue) return;

  buttonForm.value = 'Gerando código...';

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${inputValue}`;

  qrCodeImg.addEventListener('load', () => {
    main.classList.add('active');
    buttonForm.value = 'Código criado!';
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

inputText.addEventListener('keyup', () => {
  if (!inputText.value) {
    buttonForm.value = 'Gerar QR-Code';
    main.classList.remove('active');
  }
});
