# Bird Calendar

Ein kleiner Web-Kalender, der fuer jeden Tag einen jahreszeitlich passenden Vogel auswaehlt, ein Kurzportraet zeigt und bei Klick eine passende Vogelstimme ueber die oeffentliche xeno-canto-API sucht.

## Start

```bash
npm install
npm run dev
```

Danach die lokale URL aus der Konsole im Browser oeffnen.

## Build

```bash
npm run build
npm run preview
```

## Hinweise

- Die Vogeldaten liegen statisch in `src/main.js` und sind auf mitteleuropaeische Jahreszeiten ausgelegt.
- Audio wird nicht mitgeliefert, sondern bei Klick von xeno-canto geladen.
- xeno-canto verlangt aktuell fuer die API einen persoenlichen Key. Lokal liegt er in `.env.local` als `VITE_XENO_CANTO_API_KEY`.
- Vogelbilder werden ueber die Wikipedia Summary API anhand des wissenschaftlichen Namens geladen.
- Browser blockieren Autoplay; deshalb startet die Stimme nur nach Nutzeraktion.
