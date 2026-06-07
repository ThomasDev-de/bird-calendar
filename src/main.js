const birds = [
  {
    name: 'Rotkehlchen',
    scientific: 'Erithacus rubecula',
    months: [1, 2, 3, 10, 11, 12],
    habitat: 'Hecken, Gärten und lichte Wälder',
    text: 'Das Rotkehlchen singt oft schon in der Dämmerung. Im Winter wirkt es besonders präsent, weil es neugierig in Gärten und Parks nach Nahrung sucht.',
    tip: 'Achte auf die orange Brust und den feinen, perlenden Gesang von niedrigen Zweigen.'
  },
  {
    name: 'Amsel',
    scientific: 'Turdus merula',
    months: [2, 3, 4, 5, 6],
    habitat: 'Gärten, Parks und Siedlungen',
    text: 'Die Amsel gehört zu den ersten Sängern im Frühjahr. Männchen tragen ihren flötenden Gesang gern von Dachfirsten oder Baumspitzen vor.',
    tip: 'Kurz vor Sonnenuntergang sind ihre klaren Strophen besonders gut zu hören.'
  },
  {
    name: 'Kohlmeise',
    scientific: 'Parus major',
    months: [1, 2, 3, 4, 11, 12],
    habitat: 'Laubwälder, Parks und Gärten',
    text: 'Die Kohlmeise ist anpassungsfähig und beginnt früh im Jahr mit Reviergesang. Ihr Ruf klingt oft wie ein rhythmisches zweisilbiges Signal.',
    tip: 'Sie besucht Futterstellen häufig und zeigt eine schwarze Bauchlinie.'
  },
  {
    name: 'Blaumeise',
    scientific: 'Cyanistes caeruleus',
    months: [1, 2, 3, 4, 12],
    habitat: 'Gärten, Streuobstwiesen und Wälder',
    text: 'Blaumeisen sind klein, flink und auffällig gefärbt. Im Spätwinter inspizieren sie bereits Höhlen und Nistkästen.',
    tip: 'Blauer Scheitel, gelber Bauch und akrobatische Bewegungen verraten sie schnell.'
  },
  {
    name: 'Star',
    scientific: 'Sturnus vulgaris',
    months: [2, 3, 4, 9, 10],
    habitat: 'Wiesen, Weiden, Siedlungen und Obstgärten',
    text: 'Stare kehren früh zurück und imitieren andere Vogelstimmen. Im Herbst sammeln sie sich in eindrucksvollen Schwärmen.',
    tip: 'Im Prachtkleid glänzt das Gefieder metallisch grün-violett mit hellen Punkten.'
  },
  {
    name: 'Buchfink',
    scientific: 'Fringilla coelebs',
    months: [3, 4, 5, 6],
    habitat: 'Wälder, Parks, Alleen und Gärten',
    text: 'Der Buchfink liefert im Frühjahr eine typische, abfallende Gesangsstrophe. Viele Männchen haben lokale Dialekte.',
    tip: 'Lausche auf die kräftige Strophe mit markantem Schlussschnörkel.'
  },
  {
    name: 'Zilpzalp',
    scientific: 'Phylloscopus collybita',
    months: [3, 4, 5, 6, 7, 8],
    habitat: 'Gebüsche, Waldränder und Parks',
    text: 'Der Zilpzalp kündigt den Frühling sehr deutlich an. Sein Name beschreibt seinen einfachen, wiederholten Gesang ziemlich genau.',
    tip: 'Suche ihn in bewegtem Laubwerk, oft verrät zuerst die Stimme den kleinen Sänger.'
  },
  {
    name: 'Mönchsgrasmücke',
    scientific: 'Sylvia atricapilla',
    months: [4, 5, 6, 7, 8],
    habitat: 'Dichte Gebüsche, Gärten und Auwälder',
    text: 'Die Mönchsgrasmücke singt voll und melodisch aus Deckung. Männchen tragen eine schwarze, Weibchen eine braune Kopfkappe.',
    tip: 'Höre auf eine ruhige, klare Strophe aus Sträuchern oder Baumkronen.'
  },
  {
    name: 'Rauchschwalbe',
    scientific: 'Hirundo rustica',
    months: [4, 5, 6, 7, 8, 9],
    habitat: 'Dörfer, Höfe, Wiesen und Gewässernähe',
    text: 'Rauchschwalben jagen Insekten elegant im Flug. Sie sind Zugvögel und prägen warme Monate mit schnellen Flugmanövern.',
    tip: 'Der tief gegabelte Schwanz und die schnellen Richtungswechsel sind typisch.'
  },
  {
    name: 'Mauersegler',
    scientific: 'Apus apus',
    months: [5, 6, 7, 8],
    habitat: 'Städte und hohe Gebäude',
    text: 'Mauersegler verbringen fast ihr ganzes Leben in der Luft. Ihre schrillen Rufe gehören zu warmen Sommerabenden in der Stadt.',
    tip: 'Blick nach oben: sichelförmige Silhouetten rasen in Gruppen zwischen Häusern.'
  },
  {
    name: 'Kuckuck',
    scientific: 'Cuculus canorus',
    months: [4, 5, 6, 7],
    habitat: 'Offene Landschaften, Moore, Waldränder und Auen',
    text: 'Der Kuckuck ist ein Brutparasit und legt Eier in fremde Nester. Sein Ruf ist einer der bekanntesten Laute des Frühlings.',
    tip: 'Am besten hört man ihn morgens in strukturreichen Landschaften.'
  },
  {
    name: 'Feldlerche',
    scientific: 'Alauda arvensis',
    months: [3, 4, 5, 6, 7],
    habitat: 'Äcker, Wiesen und offene Feldflur',
    text: 'Die Feldlerche singt im Steigflug hoch über offenen Flächen. Ihr ausdauernder Gesang ist ein klassisches Zeichen der Feldlandschaft.',
    tip: 'Suche nicht am Boden, sondern hoch am Himmel nach einem flatternden Punkt.'
  },
  {
    name: 'Nachtigall',
    scientific: 'Luscinia megarhynchos',
    months: [4, 5, 6],
    habitat: 'Dichte Gebüsche, Auen und Parks',
    text: 'Die Nachtigall singt kraftvoll, variantenreich und oft nachts. Trotz auffälliger Stimme bleibt sie im Gebüsch meist verborgen.',
    tip: 'Warme Maiabende in dichter Vegetation sind ideal.'
  },
  {
    name: 'Grünspecht',
    scientific: 'Picus viridis',
    months: [2, 3, 4, 5, 6],
    habitat: 'Parks, Streuobstwiesen und lichte Wälder',
    text: 'Der Grünspecht sucht häufig Ameisen am Boden. Sein lachender Ruf trägt weit und ist im Frühjahr besonders auffällig.',
    tip: 'Halte auf Rasenflächen Ausschau nach einem grünen Specht mit rotem Scheitel.'
  },
  {
    name: 'Buntspecht',
    scientific: 'Dendrocopos major',
    months: [1, 2, 3, 4, 10, 11, 12],
    habitat: 'Wälder, Parks und alte Gärten',
    text: 'Der Buntspecht trommelt im Frühjahr zur Reviermarkierung. Er nutzt Baumstämme, aber auch resonante Metallteile.',
    tip: 'Schwarz-weiß-rotes Gefieder und kurze Trommelwirbel sind gute Hinweise.'
  },
  {
    name: 'Zaunkönig',
    scientific: 'Troglodytes troglodytes',
    months: [1, 2, 3, 9, 10, 11, 12],
    habitat: 'Unterholz, Hecken, Bachufer und Gärten',
    text: 'Der winzige Zaunkönig hat eine erstaunlich laute Stimme. Er bleibt gern bodennah in dichtem Gestrüpp.',
    tip: 'Der kurze, aufgestellte Schwanz ist beim schnellen Huschen gut erkennbar.'
  },
  {
    name: 'Stieglitz',
    scientific: 'Carduelis carduelis',
    months: [6, 7, 8, 9, 10],
    habitat: 'Brachen, Gärten, Obstwiesen und Samenstände',
    text: 'Stieglitze suchen Disteln und andere Samenpflanzen. Ihre roten Gesichtsmasken und gelben Flügelbinden sind unverwechselbar.',
    tip: 'Im Spätsommer findest du sie oft an verblühten Stauden und Disteln.'
  },
  {
    name: 'Haussperling',
    scientific: 'Passer domesticus',
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    habitat: 'Siedlungen, Höfe und Straßengrün',
    text: 'Der Haussperling lebt eng mit Menschen zusammen. Seine Trupps sind ganzjährig aktiv und nutzen Nischen an Gebäuden.',
    tip: 'Beobachte Gruppen an Hecken, Fassadenbegrünung oder Außengastronomie.'
  },
  {
    name: 'Elster',
    scientific: 'Pica pica',
    months: [1, 2, 3, 4, 10, 11, 12],
    habitat: 'Siedlungen, Parks, Feldgehölze und Waldränder',
    text: 'Elstern sind intelligente Rabenvögel. Schon früh im Jahr bauen sie große, kuppelförmige Nester in Bäumen.',
    tip: 'Der lange Schwanz und das schwarz-weiße Gefieder mit blaugrünem Glanz fallen sofort auf.'
  },
  {
    name: 'Eichelhäher',
    scientific: 'Garrulus glandarius',
    months: [9, 10, 11, 12],
    habitat: 'Wälder, Parks und baumreiche Gärten',
    text: 'Der Eichelhäher sammelt im Herbst Eicheln und versteckt Vorräte. Dabei verbreitet er Samen und hilft dem Wald.',
    tip: 'Ein rauer Warnruf und die blauen Flügelfelder sind typisch.'
  },
  {
    name: 'Kranich',
    scientific: 'Grus grus',
    months: [2, 3, 10, 11],
    habitat: 'Zugrouten, Feuchtgebiete und Rastplätze',
    text: 'Kraniche ziehen in Keilformationen und rufen trompetend. Frühling und Herbst sind die besten Zeiten für Zugbeobachtungen.',
    tip: 'Bei klarem Wetter lohnt der Blick nach oben, besonders am Nachmittag.'
  },
  {
    name: 'Graugans',
    scientific: 'Anser anser',
    months: [1, 2, 3, 9, 10, 11, 12],
    habitat: 'Seen, Flüsse, Wiesen und Feuchtgebiete',
    text: 'Graugänse sind kräftige Wasservögel und oft in lauten Trupps unterwegs. Viele bleiben inzwischen ganzjährig in Mitteleuropa.',
    tip: 'Achte auf orange Schnäbel und rufende Gruppen über Gewässern.'
  },
  {
    name: 'Stockente',
    scientific: 'Anas platyrhynchos',
    months: [1, 2, 3, 4, 5, 10, 11, 12],
    habitat: 'Teiche, Seen, Flüsse und Stadtparks',
    text: 'Die Stockente ist die bekannteste Ente. Im Frühjahr sieht man oft Balzgruppen und später Familien mit Küken.',
    tip: 'Männchen zeigen grünen Kopf, gelben Schnabel und weißen Halsring.'
  },
  {
    name: 'Eisvogel',
    scientific: 'Alcedo atthis',
    months: [1, 2, 7, 8, 9, 10, 11, 12],
    habitat: 'Klare Bäche, Flüsse und Seen mit Uferabbrüchen',
    text: 'Der Eisvogel fliegt pfeilschnell knapp über dem Wasser. Sein blau-oranges Gefieder wirkt selbst bei kurzem Blick leuchtend.',
    tip: 'Setz dich ruhig ans Ufer und achte auf einen hohen, kurzen Pfiff.'
  },
  {
    name: 'Bienenfresser',
    scientific: 'Merops apiaster',
    months: [5, 6, 7, 8],
    habitat: 'Warme offene Landschaften, Sandgruben und Steilhänge',
    text: 'Der Bienenfresser ist farbenprächtig und wärmeliebend. In warmen Regionen brütet er in Erdröhren an sandigen Hängen.',
    tip: 'Seine rollenden Rufe hört man oft, bevor die bunten Vögel sichtbar werden.'
  },
  {
    name: 'Seidenschwanz',
    scientific: 'Bombycilla garrulus',
    months: [1, 2, 11, 12],
    habitat: 'Beerentragende Sträucher, Parks und Alleen',
    text: 'Seidenschwänze erscheinen in manchen Wintern invasionsartig aus dem Norden. Sie fressen gern Beeren von Eberesche oder Mistel.',
    tip: 'Achte auf die Haube, den weichen Ruf und Trupps in beerentragenden Bäumen.'
  },
  {
    name: 'Wacholderdrossel',
    scientific: 'Turdus pilaris',
    months: [1, 2, 3, 10, 11, 12],
    habitat: 'Wiesen, Obstgärten, Parks und Feldgehölze',
    text: 'Wacholderdrosseln sind im Winter oft in Trupps unterwegs. Sie suchen Beeren und Nahrung auf offenen Wiesen.',
    tip: 'Grauer Kopf, brauner Rücken und ein schackernder Ruf helfen bei der Bestimmung.'
  },
  {
    name: 'Mehlschwalbe',
    scientific: 'Delichon urbicum',
    months: [4, 5, 6, 7, 8, 9],
    habitat: 'Siedlungen, Fassaden und offene Landschaften',
    text: 'Mehlschwalben bauen geschlossene Lehmnester unter Dachvorsprüngen. Im Sommer jagen sie Insekten hoch über Häusern.',
    tip: 'Der weiße Bürzel unterscheidet sie gut von der Rauchschwalbe.'
  },
  {
    name: 'Gartenrotschwanz',
    scientific: 'Phoenicurus phoenicurus',
    months: [4, 5, 6, 7, 8],
    habitat: 'Obstwiesen, lichte Wälder und naturnahe Gärten',
    text: 'Der Gartenrotschwanz braucht höhlenreiche, strukturreiche Lebensräume. Sein rostorangener Schwanz zittert oft auffällig.',
    tip: 'Alte Obstbäume und Nistkästen erhöhen die Chance auf Beobachtungen.'
  },
  {
    name: 'Singdrossel',
    scientific: 'Turdus philomelos',
    months: [3, 4, 5, 6, 7],
    habitat: 'Wälder, Parks und große Gärten',
    text: 'Die Singdrossel wiederholt kurze Motive meist zwei- bis viermal. Ihr Gesang ist dadurch gut strukturiert und wiedererkennbar.',
    tip: 'Höre auf wiederholte Phrasen aus hohen Baumkronen.'
  }
];

const monthNames = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
];

const state = {
  visibleDate: new Date(),
  selectedDate: new Date(),
  audio: null,
  audioBird: null,
  imageCache: new Map()
};

const apiKeyStorageKey = 'bird-calendar:xeno-canto-api-key';
const defaultApiKey = import.meta.env.VITE_XENO_CANTO_API_KEY?.trim() ?? '';

const todayCard = document.querySelector('#today-card');
const monthTitle = document.querySelector('#month-title');
const calendarDays = document.querySelector('#calendar-days');
const detailPanel = document.querySelector('#detail-panel');
const prevMonth = document.querySelector('#prev-month');
const nextMonth = document.querySelector('#next-month');

function dateKey(date) {
  return [date.getFullYear(), date.getMonth(), date.getDate()].join('-');
}

function formatDate(date, options = {}) {
  return new Intl.DateTimeFormat('de-DE', {
    weekday: options.weekday ?? 'long',
    day: 'numeric',
    month: 'long',
    year: options.year ?? 'numeric'
  }).format(date);
}

function birdForDate(date) {
  const month = date.getMonth() + 1;
  const seasonal = birds.filter((bird) => bird.months.includes(month));
  const pool = seasonal.length > 0 ? seasonal : birds;
  const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
  const index = (dayOfYear * 7 + month * 11 + date.getFullYear()) % pool.length;
  return pool[index];
}

function getApiKey() {
  return localStorage.getItem(apiKeyStorageKey)?.trim() || defaultApiKey;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function xenoCantoSpeciesQuery(scientificName, country = '') {
  const [genus, species] = scientificName.split(' ');
  return [`gen:${genus}`, `sp:${species}`, country && `cnt:${country}`].filter(Boolean).join(' ');
}

function wikipediaArticleUrl(scientificName) {
  return `https://de.wikipedia.org/wiki/${encodeURIComponent(scientificName.replaceAll(' ', '_'))}`;
}

function renderToday() {
  const today = new Date();
  const bird = birdForDate(today);
  todayCard.innerHTML = `
    <span class="card-label">Heute</span>
    <strong>${bird.name}</strong>
    <small>${formatDate(today)}</small>
    <span class="today-sound-status">Ton wird bei Klick gesucht.</span>
    <button class="sound-button compact" type="button" data-audio="${bird.scientific}">Stimme laden</button>
  `;
}

function renderCalendar() {
  const year = state.visibleDate.getFullYear();
  const month = state.visibleDate.getMonth();
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startOffset = (first.getDay() + 6) % 7;

  monthTitle.textContent = `${monthNames[month]} ${year}`;
  calendarDays.innerHTML = '';

  for (let index = 0; index < startOffset; index += 1) {
    calendarDays.append(createSpacer());
  }

  for (let day = 1; day <= last.getDate(); day += 1) {
    const date = new Date(year, month, day);
    const bird = birdForDate(date);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'day';
    if (dateKey(date) === dateKey(new Date())) button.classList.add('is-today');
    if (dateKey(date) === dateKey(state.selectedDate)) button.classList.add('is-selected');
    button.innerHTML = `
      <span class="day-number">${day}</span>
      <span class="bird-name">${bird.name}</span>
      <span class="bird-habitat">${bird.habitat}</span>
    `;
    button.addEventListener('click', () => {
      state.selectedDate = date;
      renderCalendar();
      renderDetail(date);
    });
    calendarDays.append(button);
  }
}

function createSpacer() {
  const spacer = document.createElement('span');
  spacer.className = 'spacer';
  return spacer;
}

function renderDetail(date) {
  const bird = birdForDate(date);
  detailPanel.innerHTML = `
    <div class="detail-copy">
      <p class="eyebrow">${formatDate(date)}</p>
      <h2>${bird.name}</h2>
      <p class="latin">${bird.scientific}</p>
      <p>${bird.text}</p>
      <p><strong>Beobachtung:</strong> ${bird.tip}</p>
      <p><strong>Lebensraum:</strong> ${bird.habitat}</p>
    </div>
    <div class="media-stack">
      <figure class="bird-image-card" id="bird-image-card">
        <div class="image-placeholder">Bild wird über Wikipedia gesucht...</div>
      </figure>
      <div class="sound-card">
        <p class="sound-title">Vogelstimme</p>
        <p class="sound-status" id="sound-status">${getApiKey() ? 'API-Key lokal geladen. Ton wird bei Klick über xeno-canto gesucht.' : 'Kein API-Key geladen. Bitte .env.local prüfen und den Dev-Server neu starten.'}</p>
        <button class="sound-button" type="button" data-audio="${bird.scientific}">Stimme abspielen</button>
        <a class="source-link" href="https://xeno-canto.org/explore?query=${encodeURIComponent(xenoCantoSpeciesQuery(bird.scientific))}" target="_blank" rel="noreferrer">Auf xeno-canto öffnen</a>
      </div>
    </div>
  `;
  renderBirdImage(bird);
}

async function renderBirdImage(bird) {
  const imageCard = document.querySelector('#bird-image-card');
  if (!imageCard) return;

  try {
    const image = await findBirdImage(bird.scientific);
    if (!image || birdForDate(state.selectedDate).scientific !== bird.scientific) return;

    imageCard.innerHTML = `
      <img src="${escapeHtml(image.src)}" alt="${escapeHtml(bird.name)}" loading="lazy" />
      <figcaption>
        Bild: <a href="${escapeHtml(image.pageUrl)}" target="_blank" rel="noreferrer">Wikipedia</a>
        ${image.credit ? ` · ${escapeHtml(image.credit)}` : ''}
      </figcaption>
    `;
  } catch (error) {
    imageCard.innerHTML = `
      <div class="image-placeholder">
        Kein Wikipedia-Bild gefunden.
        <a href="${escapeHtml(wikipediaArticleUrl(bird.scientific))}" target="_blank" rel="noreferrer">Artikel öffnen</a>
      </div>
    `;
  }
}

async function findBirdImage(scientificName) {
  if (state.imageCache.has(scientificName)) return state.imageCache.get(scientificName);

  const pageTitle = scientificName.replaceAll(' ', '_');
  const endpoints = [
    `https://de.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle)}`,
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle)}`
  ];

  for (const endpoint of endpoints) {
    const response = await fetch(endpoint);
    if (!response.ok) continue;

    const data = await response.json();
    const src = data.originalimage?.source ?? data.thumbnail?.source;
    if (!src) continue;

    const image = {
      src,
      pageUrl: data.content_urls?.desktop?.page ?? wikipediaArticleUrl(scientificName),
      credit: data.description ?? ''
    };
    state.imageCache.set(scientificName, image);
    return image;
  }

  state.imageCache.set(scientificName, null);
  return null;
}

async function playBirdSound(scientificName, statusElement) {
  if (state.audio && state.audioBird === scientificName) {
    await state.audio.play();
    return;
  }

  if (state.audio) {
    state.audio.pause();
    state.audio = null;
    state.audioBird = null;
  }

  statusElement.textContent = 'Suche passende Aufnahme...';

  try {
    const apiKey = getApiKey();

    if (!apiKey) {
      statusElement.textContent = 'Kein API-Key geladen. Bitte .env.local prüfen und den Dev-Server neu starten.';
      return;
    }

    const recording = await findRecording(scientificName, apiKey);

    if (!recording) {
      statusElement.textContent = 'Keine direkte Aufnahme gefunden. Der Link öffnet weitere Treffer.';
      return;
    }

    const audio = new Audio(recording.file.startsWith('//') ? `https:${recording.file}` : recording.file);
    state.audio = audio;
    state.audioBird = scientificName;
    statusElement.innerHTML = `Aufnahme: ${recording.rec || 'unbekannt'} · Lizenz: ${recording.lic || 'siehe xeno-canto'}`;
    await audio.play();
  } catch (error) {
    statusElement.textContent = 'Ton konnte nicht geladen werden. Bitte xeno-canto-Link verwenden.';
  }
}

async function findRecording(scientificName, apiKey) {
  const queries = [
    xenoCantoSpeciesQuery(scientificName, 'Germany'),
    xenoCantoSpeciesQuery(scientificName)
  ];

  for (const query of queries) {
    const url = new URL('https://xeno-canto.org/api/3/recordings');
    url.searchParams.set('query', query);
    url.searchParams.set('key', apiKey);

    const response = await fetch(url);
    if (!response.ok) throw new Error('xeno-canto nicht erreichbar');

    const data = await response.json();
    const recordings = data.recordings?.filter((item) => item.file) ?? [];
    const best = recordings.find((item) => item.q === 'A') ?? recordings.find((item) => item.q === 'B') ?? recordings[0];
    if (best) return best;
  }

  return null;
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-audio]');
  if (!button) return;
  const statusElement = button.closest('.sound-card')?.querySelector('#sound-status')
    ?? button.closest('.today-card')?.querySelector('.today-sound-status')
    ?? button;
  playBirdSound(button.dataset.audio, statusElement);
});

prevMonth.addEventListener('click', () => {
  state.visibleDate = new Date(state.visibleDate.getFullYear(), state.visibleDate.getMonth() - 1, 1);
  state.selectedDate = new Date(state.visibleDate.getFullYear(), state.visibleDate.getMonth(), 1);
  renderCalendar();
  renderDetail(state.selectedDate);
});

nextMonth.addEventListener('click', () => {
  state.visibleDate = new Date(state.visibleDate.getFullYear(), state.visibleDate.getMonth() + 1, 1);
  state.selectedDate = new Date(state.visibleDate.getFullYear(), state.visibleDate.getMonth(), 1);
  renderCalendar();
  renderDetail(state.selectedDate);
});

renderToday();
renderCalendar();
renderDetail(state.selectedDate);
