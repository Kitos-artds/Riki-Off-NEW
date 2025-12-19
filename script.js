const exhibits = [
    {title:"A First Battle", link:"https://rikipediya.fandom.com/ru/wiki/A_First_Battle"},
    {title:"Boy.exe", link:"https://rikipediya.fandom.com/ru/wiki/Boy.exe"},
    {title:"Рустам", link:"https://rikipediya.fandom.com/ru/wiki/Рустам"},
    {title:"Фокины", link:"https://rikipediya.fandom.com/ru/wiki/Фокины"}
];

const container = document.getElementById('museum-container');
const modal = document.getElementById('modal');
const iframe = document.getElementById('iframe');
const closeBtn = document.getElementById('close-btn');

exhibits.forEach(ex => {
    const card = document.createElement('div');
    card.classList.add('comic-card');
    card.innerHTML = `
        <h3>${ex.title}</h3>
    `;
    card.onclick = () => {
        iframe.src = ex.link;
        modal.classList.remove('hidden');
    };
    container.appendChild(card);
});

closeBtn.onclick = () => {
    modal.classList.add('hidden');
    iframe.src = "";
};
