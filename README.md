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

## Android APK

Die App nutzt Capacitor als Android-Wrapper. Fuer einen lokalen Debug-Build:

```bash
npm run android:apk
```

Auf diesem Rechner ist ein lokales Java-21-JDK unter `.jdk/java-21-jdk` vorbereitet, weil das systemweite Java 25 fuer den Android-Build zu neu ist:

```bash
npm run android:apk:local-jdk
```

Die erzeugte Debug-APK liegt danach hier:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

Zum Oeffnen in Android Studio:

```bash
npm run android:open
```

## Hinweise

- Die Vogeldaten liegen statisch in `src/main.js` und sind auf mitteleuropaeische Jahreszeiten ausgelegt.
- Audio wird nicht mitgeliefert, sondern bei Klick von xeno-canto geladen.
- xeno-canto verlangt aktuell fuer die API einen persoenlichen Key. Lokal liegt er in `.env.local` als `VITE_XENO_CANTO_API_KEY`.
- Bei Frontend-/APK-Builds ist dieser Key kein echtes Secret, weil er in den gebauten Assets enthalten ist. Fuer eine veroeffentlichte App sollte ein Backend-Proxy genutzt werden.
- Vogelbilder werden ueber die Wikipedia Summary API anhand des wissenschaftlichen Namens geladen.
- Browser blockieren Autoplay; deshalb startet die Stimme nur nach Nutzeraktion.
