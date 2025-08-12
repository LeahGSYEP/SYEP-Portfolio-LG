const reviews = [
  {
    id: 1,
    name: 'Edwin Amador',
    img: 'sir.jpeg',
    job: 'Teacher',
    text: `As students begin learning Spanish, Leah Brown often developed greater resilience and open-mindedness by embracing the challenges of a new linguistic system. Throughout the school year, this academic pursuit cultivates personal growth, fostering patience through the complexities of grammar and building confidence with each successful conversation. By year's end, Leah not only gained a new language but also a broadened cultural perspective and a more empathetic understanding of the world. Proof of this, she passed the Spanish class with honors.`
  },
  {
    id: 2,
    name: 'Jermaine Guthrie',
    img: 'sir2.jpeg',
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
  });
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
