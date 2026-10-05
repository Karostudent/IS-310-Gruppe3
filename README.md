# Perspektiv | IS-310 Prosjektgjennomføring

Statisk nettside for Gruppe 3 i emnet IS-310 ved Universitetet i Agder. Nettsiden presenterer gruppa Perspektiv, de seks studentene og prosjektarbeidet vårt. Den er også laget for virksomheter som vil dele en utfordring eller utforske et mulig bachelorprosjekt sammen med oss.

## Innhold

- **Forside** (`index.html`): introduksjon til Perspektiv, video og gruppas viktigste budskap.
- **Om gruppa** (`om-oss.html`): bakgrunnen vår, erfaringene vi tar med oss og hva slags reelle problemstillinger vi ønsker å utforske.
- **Møt studentene** (`møt-studentene.html`): oversikt over alle seks studentene og praksisarbeidene våre, med lenker til individuelle profiler.
- **Prosjekt** (`prosjekt.html`): arbeidet med et rapporteringssystem for luftfartshindre i samarbeid med Kartverket og Norsk Luftambulanse, inkludert bilder fra løsningen og medieomtale.
- **Kontakt** (`kontakt.html`): informasjon for virksomheter som vil diskutere en utfordring, og kontaktinformasjon til gruppeleder og scrum master.
- **Studentprofiler** (`studenter/student1.html`–`studenter/student6.html`): individuelle presentasjoner med profilinformasjon, kontaktlenker og navigasjon mellom studentene.

Nettsiden bruker et felles stilark og tilpasser layouten til mindre skjermer. Navigasjonsmenyen og logoen har enkel JavaScript-funksjonalitet.

## Teknologi og struktur

Nettsiden er bygget med HTML, CSS og JavaScript. Den er statisk og har ingen pakkeinstallasjon, byggeverktøy eller serverdel.

```text
index.html                 Forside
om-oss.html                Om Perspektiv
møt-studentene.html        Studentoversikt og praksisarbeid
prosjekt.html              Prosjektpresentasjon
kontakt.html               Kontaktinformasjon
studenter/                 Seks individuelle studentprofiler
css/style.css              Felles stilark og responsiv utforming
js/logo-scroll.js          Responsiv meny og logo ved rulling
images/                    Logoer, portretter, prosjektbilder og video
```

## Kjør lokalt

Du trenger Python 3 for å starte en enkel lokal webserver. Åpne PowerShell eller en terminal i prosjektmappen og kjør:

```bash
python3 -m http.server
```

og gå til `http://localhost:8000` i nettleseren.

### Oppdatere studentpresentasjoner

Bytt ut plassholderteksten, avatar-initialene og lenkene til LinkedIn/GitHub i hver
`studenter/studentN.html`-fil med den aktuelle studentens egen informasjon.
