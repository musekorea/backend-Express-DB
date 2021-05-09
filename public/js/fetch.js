const asyncBtn = document.querySelector('.asyncSend');
const idData = document.querySelector('.email');
const passData = document.querySelector('.password');
const postData = {
  id: idData.value,
  password: passData.value,
};
asyncBtn.addEventListener('click', sendData);

async function sendData(e) {
  const postData = {
    id: idData.value,
    password: passData.value,
  };
  const req = await fetch('http://127.0.0.1:8080/async', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  const fetchResData = await req.json();
  console.log(fetchResData);
  await ajaxTest(fetchResData);
}
function ajaxTest(fetchResData) {
  const form = document.querySelector('.form-container');
  const ajaxText = document.querySelector('.ajaxText');
  ajaxText.innerHTML = `${fetchResData.message}`;
}
