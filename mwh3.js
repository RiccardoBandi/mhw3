
const arrivi = document.querySelector('.arrivi');
const finestra = document.querySelector('.finestra');


function createDropdown() {
  finestra.style.display = 'block';
  finestra.innerHTML = ''; 
  const tendinaData = {
    "SCOPRI LE NOVITÀ": [
      "Novità del giorno",
      "Novità: abbigliamento",
      "Novità: scarpe",
      "Novità: borse",
      "Novità: orologi"
    ],
    "TENDENZE": [
      "Brand da conoscere",
      "Sartoria primaverile",
      "Spezzati preppy",
      "Abbigliamento sportivo retrò",
      "Best seller"
    ],
    "ALTRO": [
      "Il meglio della nuova stagione",
      "Esclusive e collaborazioni",
      "La guida allo stile"
    ]
  };

  const dropdown = document.createElement('div');
  dropdown.className = 'tendina-dropdown';

  for (const section in tendinaData) {
    const column = document.createElement('div');
    column.className = 'column';

    const title = document.createElement('h3');
    title.textContent = section;
    column.appendChild(title);

    tendinaData[section].forEach(item => {
      const link = document.createElement('a');
      link.textContent = item;
      link.href = "#";
      column.appendChild(link);
    });

    dropdown.appendChild(column);
  }

  finestra.appendChild(dropdown);
}


function closeDropdown() {
  finestra.style.display = 'none';
}


arrivi.addEventListener('mouseover', createDropdown);
arrivi.addEventListener('mouseleave', closeDropdown);


finestra.style.display = 'none';


function onJson(json) {
  console.log('JSON ricevuto');
  console.log(json);
  // Svuotiamo la libreria
  const library = document.querySelector('#album-view');
  library.innerHTML = '';
  // Leggi il numero di risultati
  const results = json.albums.items;
  let num_results = results.length;
  // Mostriamone al massimo 10
  if(num_results > 10)
    num_results = 10;
  // Processa ciascun risultato
  for(let i=0; i<num_results; i++)
  {
    // Leggi il documento
    const album_data = results[i]
    // Leggiamo info
    const title = album_data.name;
    const selected_image = album_data.images[0].url;
    // Creiamo il div che conterrà immagine e didascalia
    const album = document.createElement('div');
    album.classList.add('album');
    // Creiamo l'immagine
    const img = document.createElement('img');
    img.src = selected_image;
    // Creiamo la didascalia
    const caption = document.createElement('span');
    caption.textContent = title;
    // Aggiungiamo immagine e didascalia al div
    album.appendChild(img);
    album.appendChild(caption);
    // Aggiungiamo il div alla libreria
    library.appendChild(album);
  }
}

function onResponse(response) {
  console.log('Risposta ricevuta');
  return response.json();
}
function onerror(response) {
  console.log('Risposta non ricevuta');
  return response.json();
}
function search(event)
{
  // Impedisci il submit del form
  event.preventDefault();
  // Leggi valore del campo di testo
  const album_input = document.querySelector('#album');
  const album_value = encodeURIComponent(album_input.value);
  console.log('Eseguo ricerca: ' + album_value);
  // Esegui la richiesta
  fetch("https://api.spotify.com/v1/search?type=album&q=" + album_value,
    {
      headers:
      {
        'Authorization': 'Bearer ' + token
      }
    }
  ).then(onResponse).then(onJson);
}

function onTokenJson(json)
{
  console.log(json)
  // Imposta il token global
  token = json.access_token;
}

function onTokenResponse(response)
{
  return response.json();
}

// OAuth credentials --- NON SICURO!
const client_id = 'xxxxxxxxxxxxxxxxx';
const client_secret = 'yyyyyyyyyyyyyyyyy';
// Dichiara variabile token
let token;
// All'apertura della pagina, richiediamo il token
fetch("https://accounts.spotify.com/api/token",
      {
   method: "post",
   body: 'grant_type=client_credentials',
   headers:
   {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
   }
  }
).then(onTokenResponse).then(onTokenJson);
// Aggiungi event listener al form
const form = document.querySelector('form');
form.addEventListener('submit', search)
function cercavestito(event){
  const api='https://api.trace.moe/search?url=https://images.plurk.com/32B15UXxymfSMwKGTObY5e.jpg';
}

const ricerca = document.querySelector('.album')
ricerca.addEventListener("click",cercavestito);
function lettura(valore){
  fetch(valore)
  .then(onResponse,onerror)
  .then(JSON);
}
function Check(){
  event.preventDefault();
  const emaili= document.querySelector('#verifica');
  const emailv= document.querySelector(verifica_input.value);
  console.log('Verifica e-mail:'+emailv);
  const url ='https://www.disify.com/api/email/your@example.com';
  api.lettura('url');
}
const Controllo= documen.querySelector('Controllo');
Controllo.addEventListener('submit',Check)