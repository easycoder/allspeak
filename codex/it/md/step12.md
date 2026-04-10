# TicTacToe #
Questo passo del tutorial è un po' più lungo. Si tratta dell'onnipresente gioco per bambini TicTacToe (in Italia conosciuto come Tris). È uno dei giochi più semplici da giocare, e anche da implementare nel codice. Ho scoperto lo stesso gioco presentato come primo esempio in un tutorial ufficiale del framework JavaScript "React" e sono rimasto colpito da quanto sembrasse complesso. Possibile che non si potesse scrivere in modo più semplice? Così l'ho riscritto usando ~ec~ e questo è il risultato. L'aspetto grafico non vincerà premi; è sostanzialmente uguale alla versione React. In entrambi i casi l'enfasi è sul codice, ma React è un'architettura a componenti quindi basa tutto su un insieme di oggetti che gestiscono e disegnano i 9 quadrati, mentre questa versione ~ec~ si concentra di più sulla logica di gioco e relega i componenti di visualizzazione in secondo piano.

~copy~

Lo script inizia con le consuete dichiarazioni, incluse le variabili ~code:Cell~ e ~code:Model~. Una è la cella effettivamente disegnata sullo schermo; l'altra è il dato che rappresenta se la cella è vuota o contiene una O o una X. Dopo le dichiarazioni delle variabili, a queste due variabili vengono assegnati 9 elementi ciascuna; uno per ogni cella del tabellone del TicTacToe.

L'aspetto più notevole nell'inizializzazione è la tabella delle combinazioni vincenti. Numeriamo le celle da 0 a 8, con lo 0 in alto a sinistra e l'8 in basso a destra, numerando riga per riga. Le combinazioni vincenti sono le tre righe, le tre colonne e le due diagonali; in totale 8 combinazioni. Queste sono elencate nella tabella.

Ora impostiamo il tabellone. In alto c'è un pannello per i messaggi, poi il tabellone vero e proprio, che costruiamo scorrendo le celle una per una. Sono tutte sostanzialmente identiche quindi lo stesso codice si applica a ciascuna. L'unica cosa particolare è iniziare una nuova riga ogni 3 celle. Questo si ottiene con il calcolo ~code:modulo~ alla riga 41, che divide ~code:Index~ per 3 e ci dà il resto. Ogni volta che il resto è zero (per le celle 0, 3 e 6) iniziamo una nuova riga. Poi aggiungiamo ogni nuova cella alla riga corrente. Non abbiamo bisogno di fornire informazioni sulla posizione delle celle perché ognuna prende naturalmente il suo posto accanto alla precedente; è così che funziona l'HTML.

Ora possiamo impostare un "callback" che rileverà quando una delle celle viene cliccata. Come nell'esempio precedente ne basta uno solo dato che le celle sono tutte nello stesso array. Nulla impedisce all'utente di cliccare dopo la fine della partita, quindi permettiamo solo 9 click in totale, e allo stesso modo, se la partita è già stata vinta non eseguiamo alcuna azione.

Ora otteniamo l'indice della cella cliccata. Se il ~code:Model~ mostra che questa cella è già stata cliccata, non facciamo nulla.

Se è il turno del giocatore "X" impostiamo ~code:Cell~ a 'X' e mettiamo '1' nell'elemento corrispondente di ~code:Model~. Se è il giocatore "O" mettiamo 'O' in ~code:Cell~ e '-1' nel ~code:Model~. Poi facciamo una chiamata alla subroutine che controlla se c'è un vincitore. (Per i principianti, una subroutine è un pezzo di codice che puoi chiamare da qualsiasi punto del tuo programma per svolgere un compito specifico. Quando finisce, il programma continua dalla riga successiva a quella che ha chiamato la subroutine.)

La subroutine ~code:CheckWinner~ sembra complicata ma in realtà è piuttosto semplice. Scorre le 8 combinazioni vincenti una alla volta. Ciascuna è composta da 3 celle che contengono 0, 1 o -1. Se sommiamo i valori delle 3 celle e il risultato è 3 o -3, allora abbiamo un vincitore. Quando torniamo dalla subroutine controlliamo se è stato trovato un vincitore e, in caso affermativo, mostriamo un messaggio.

E questo è praticamente tutto. Dovresti riuscire a capire cosa sta succedendo, ma se qualcosa non è chiaro prova a usare il tracer (fai riferimento a un paio di passi indietro) e fatti mostrare i valori delle variabili chiave.

~next:Gestione delle liste~
