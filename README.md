# BUILD-WEEK-2_TEAM-4
# Spotify-build-week
## Descrizione
Questo progetto è una Music App sviluppata per consentire agli utenti di esplorare album, ascoltare tracce musicali e interagire con una libreria di artisti. L'app è progettata per essere semplice ed elegante, con un tema scuro per una visibilità ottimale durante l'ascolto della musica.

## Funzionalità principali
- Esplorazione degli album: Gli utenti possono scoprire album di diversi artisti. Selezionando un artista, verranno mostrati gli album a lui associati, e cliccando su un album sarà possibile visualizzare informazioni più dettagliate, come ad esempio: l'elenco delle tracce.
- Riproduzione musicale: Ogni pagina è dotata di un player musicale che permette di ascoltare anteprime delle tracce, “con controlli di riproduzione.”
- Comandi di riproduzione: Offre il controllo della riproduzione tramite play, pausa, “avanzamento della canzone attraverso i tasti appositi
- Navigazione tra le pagine: L'app permette di navigare facilmente tra le pagine.
- Design responsive: L'app è progettata per essere utilizzata sia su desktop che dispositivi mobili. 

## Struttura del Progetto
### Il progetto utilizza i seguenti linguaggi:
#### HTML:
 - Pagina principale (index.html): Visualizza informazioni  sugli album e consente di interagire con il player musicale.
 - Pagina album (album.html): Dettagli sull'album e tracce associate.
 - Pagina artista (artist.html): Mostra informazioni su un artista e i suoi album.
 - playlist.html: mostra l'elenco dei cantanti preferiti che sono stati inseriti tramite l'interazione del tasto cuore.

#### CSS:
 - Design scuro: L'app adotta un tema dark mode per offrire un'esperienza visiva più rilassante, riducendo l'affaticamento degli occhi e facilitando l'interazione con l'applicazione grazie a un contrasto ottimale.
 - Layout responsive: Le pagine sono progettate per adattarsi sia ai dispositivi desktop che quelli mobili.
 - Bottoni e controlli interattivi: I bottoni e le icone sono progettati per garantire un'interazione fluida con l'utente, grazie a effetti di hover e animazioni che rendono l'utilizzo dell'app più intuitivo e la sua interfaccia facilmente comprensibile.

#### JavaScript:
 - Funzionalità dinamiche: L'app sfrutta l'API di Deezer per caricare album, tracce e informazioni sugli artisti.

- Controllo della riproduzione musicale: Gestisce in modo fluido la riproduzione delle tracce, il monitoraggio del progresso e i controlli audio. Offrendo un'esperienza d'ascolto fluida e senza interruzioni.

## Interazione con l'utente:
Gli eventi interattivi, come la selezione di un album, la ricerca di tracce o l'interazione con i controlli di riproduzione, sono gestiti in tempo reale per garantire un'esperienza utente fluida e altamente reattiva. Ogni azione intrapresa dall'utente genera un aggiornamento immediato dei contenuti, ottimizzando la navigazione e l'accesso alle informazioni. L'interfaccia è arricchita da effetti visivi e animazioni che migliorano l'intuitività e facilitano l'interazione, rendendo l'applicazione più accessibile e facile da usare.



## Installazione
1.	Clona il repository
Copia codice "https://github.com/tuo-username/music-app.git"

2.	Esegui il progetto:
Apri il file index.html nel tuo browser per vedere l'app in azione.


## Funzionamento:
-	Componente JavaScript: Il codice JavaScript interagisce con l'API Striveschool di Deezer per caricare gli album degli artisti e le relative tracce. La variabile myArtists contiene gli ID di vari artisti, e viene selezionato un artista casualmente per visualizzare i suoi album.
-	Gestione della riproduzione musicale: Controlli Play/Pause: Quando l'utente preme il pulsante di riproduzione, il brano inizia a suonare, e il pulsante cambia per diventare "Pausa".
- Progresso del brano: La barra di progresso (seekBar) si aggiorna durante la riproduzione, permettendo all'utente di navigare nel brano.
-	Caricamento dati dall'API Striveschool Deezer: L'app utilizza l'API Deezer Striveschool per ottenere i dati degli album e dei brani. La funzione getData si occupa di recuperare gli album di un artista e di visualizzare un album casuale.

## Tecnologie Utilizzate:
#### HTML5
è stato utilizzato per creare la struttura e markup semantico delle pagine.
#### CSS3
Per il design e la stilizzazione.
#### JavaScript 
Per l'interazione dinamica con l'utente.
#### Deezer Striveschool API
Per il recupero di dati relativi ad album, artisti e tracce musicali.
#### Bootstrap
Per creare un design reattivo e mobile-first, facilitando l'adattamento dell'interfaccia su diverse dimensioni di schermo.  
Istallato tramite CDN. 

[![Bootstrap](https://img.shields.io/badge/Bootstrap-0A66C2?style=for-the-badge&logo=white)](https://getbootstrap.com/) 
### Font "Circular"
 Per garantire una tipografia moderna e chiara, con diverse varianti di peso e stile.

## Struttura dei File
- index.html: La pagina principale che carica i dati degli album.
- album.html: La pagina che visualizza i dettagli di un album selezionato.
- artist.html: La pagina che visualizza i dettagli di un artista selezionato.
- playlist.html: La pagina visualizza i dettagli degli artisti inseriti nell'elenco dei preferiti.
- styles.css: Il file di stile che gestisce il layout e la grafica.
- script.js: Il file JavaScript che gestisce la logica di funzionamento e interazione della pagina index.html
- album.js: Il file JavaScript che gestisce la logica di funzionamento e interazione della pagina album.html 
- artist.js: Il file JavaScript che gestisce la logica di funzionamento e interazione della pagina artist.html
- playlist: Il file JavaScript che gestisce la logica di funzionamento e interazione della pagina playlist.html

schermi:
<div>
  <img src="" />
  <img src=""/>
</div>

## Ringraziamenti:
I ringraziamenti vanno a tutte le persone che hanno contribuito in modo significativo al successo di questo progetto. Un sentito grazie a, Valentina Rizzo, Alessandro Incalza, Samuele Converso Ombretta Deriu e Mariam Azfar Azami per il loro impegno, dedizione e collaborazione. Senza il loro supporto, questo progetto non sarebbe stato possibile.
