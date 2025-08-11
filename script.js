const reviews = [
  {
    id: 1,
    name: 'Edwin Amador',
    img: 'https://mail.google.com/mail/u/0?ui=2&ik=742eff6900&attid=0.1&permmsgid=msg-f:1840200981121990641&th=1989b50ae319fff1&view=fimg&fur=ip&permmsgid=msg-f:1840200981121990641&sz=s0-l75-ft&attbid=ANGjdJ9RrKfLoIoResytHhKPWNBwy5xri3Gzf4GE2CbvAol2bB4-nOEBUgPj-_yf5kM8ZoVHAHmdS1BRROt7w5M24MYg9aowJtPQbpT_upmsKn_mCFXD4GPv1yq7xfM&disp=emb&realattid=1989b505d00823a67c81&zw',
    job: 'Teacher',
    text: `As students begin learning Spanish, Leah Brown often developed greater resilience and open-mindedness by embracing the challenges of a new linguistic system. Throughout the school year, this academic pursuit cultivates personal growth, fostering patience through the complexities of grammar and building confidence with each successful conversation. By year's end, Leah not only gained a new language but also a broadened cultural perspective and a more empathetic understanding of the world. Proof of this, she passed the Spanish class with honors.`
  },
  {
    id: 2,
    name: 'Jermaine Guthrie',
    img: 'https://mail.google.com/mail/u/1?ui=2&ik=aa3e55d1f2&attid=0.1&permmsgid=msg-f:1840203388215287940&th=1989b73b550ae084&view=fimg&fur=ip&permmsgid=msg-f:1840203388215287940&sz=s0-l75-ft&attbid=ANGjdJ-lYPNaIoFfmuJ59ayUDGNTDv9TEnzZN2T9xFN9Q6wFF5wulG5auPanzTe6uJSSw3VPFqDmQ3_3P3LgYMJi3e2mY5B_DDdKdoJ6VC493RciI_po0xRMQR85AC0&disp=emb&realattid=1989b7373e99eff0fd31&zw',
    job: 'Senior Wealth Advisor',
    text: 'Leah is my very smart, kind, and beautiful niece. We take great pride in her academic success and are certain she has an exceptionally bright future ahead of her. She also has a warm and approachable personality that makes her easy to talk to. My daughter, who is three years younger than Leah, often tells me that she is comfortable confiding in Leah about anything, which speaks to Leah\'s caring nature and the trust she inspires in those around her. My daughter looks up to Leah not just as a cousin but as a role model.'
  }
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const container = document.querySelector('.review');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

function showPerson(index) {
  const item = reviews[index];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

function fadeAndShow(index) {
  container.classList.add('fade');
  setTimeout(() => {
    showPerson(index);
    container.classList.remove('fade');
  }, 300);
}

window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem);
});

nextBtn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  fadeAndShow(currentItem);
});

prevBtn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  fadeAndShow(currentItem);
});
