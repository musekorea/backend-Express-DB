const checkBtn = document.querySelector('#check');
const dbData = document.querySelector('.dbData');

checkBtn.addEventListener('click', sendData);

async function sendData() {
  const req = await fetch('http://127.0.0.1:8080/edit', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let rows = await req.json();
  rows = rows.rows;
  renderDB(rows);
}

function renderDB(rows) {
  rows.forEach((email, index) => {
    let span = document.createElement('span');
    span.setAttribute('class', 'editSpan');
    span.innerHTML = `${index < 10 ? `0${index + 1}` : index + 1} : ${
      email.email
    }</br>`;
    dbData.appendChild(span);
    console.log(email.email, index);
  });
}
