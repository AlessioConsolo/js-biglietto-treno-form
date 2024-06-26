# js-biglietto-treno-form

Descrizione: Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Questo è il primo esercizio suddiviso per milestone, quindi seguite le milestone nell'ordine: non passate alla successiva se non avete fatto la precedente
Numero minimo di push: 10
MILESTONE 0: Creare il file README.md
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

1. Creo una form in HTML che vada a chiedere all'utente nome, cognome e km da percorrere
2. Creo una variabile che vada a collegarsi al button del form
3. Creo una funzione al cui interno inserisco delle variabili che vadano a prendere il valore inserito dall'utente agli appositi slot del form
4. Creo una variabile che vada a calcolare il valore inserito dall'utente nel form nella sezione dei kilometri per il valore fisso del costo di ogni kilometro percorso (0.21€).
5. Creo una variabile con valore 0 per andare a definire in un secondo momento la percentuale di sconto da applicare in base all'età.
6. Creo una serie di condizioni utili al calcolo dello sconto da applicare in base all'età dell'utente.
7. Creo un'ultima variabile in grado di calcolare il prezzo finale del biglietto.
8. Creo una var document in modo da poter mostrare il risultati sulla pagina.
