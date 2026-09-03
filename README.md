# IS-310-Gruppe3
Nettside for gruppe 3 i faget IS-310 Prosjektgjennomføring

## Om nettsiden

Dette er en enkel, statisk nettside (ren HTML/CSS, ingen byggeverktøy) for prosjektgruppa.

### Struktur

- `index.html` – Forside med kort intro til gruppa og lenker til alle studentene.
- `om-oss.html` – Presentasjon av gruppa: sammensetning, erfaringer, ønsket prosjekttype,
  type bedrift, ambisjonsnivå, "hvorfor velge oss" og våre verdier/kvaliteter.
- `studenter/student1.html` … `studenter/student5.html` – Individuell presentasjon for hver
  student, med plass til tekst og/eller videopresentasjon, samt lenker til LinkedIn og GitHub.
- `css/style.css` – Felles stilark for hele siden.

### Kjøre siden lokalt

Siden krever ingen installasjon. Åpne `index.html` direkte i en nettleser, eller kjør en
enkel lokal server, f.eks.:

```bash
python3 -m http.server
```

og gå til `http://localhost:8000` i nettleseren.

### Oppdatere studentpresentasjoner

Bytt ut plassholderteksten, avatar-initialene og lenkene til LinkedIn/GitHub i hver
`studenter/studentN.html`-fil med den aktuelle studentens egen informasjon.
