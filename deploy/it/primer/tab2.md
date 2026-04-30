# Esempio pratico (passo per passo)

Costruisci un gioco di TicTacToe. Una volta configurato il sistema (vedi la scheda Inizio), invia questi prompt uno alla volta al tuo agente AI. Le quattro fasi — Fondamenta, Meccanica, Analisi, Strategia — ricorrono in molti progetti, quindi vale la pena imparare lo schema.

## Prompt 1: Fondamenta — Costruisci il tabellone

Crea un gioco di TicTacToe con una griglia 3x3 di celle. Il tabellone deve essere centrato sullo schermo, occupando circa metà della larghezza. Ogni cella deve essere quadrata con un bordo visibile.

## Prompt 2: Meccanica — Aggiungi il gioco a turni

Ci sono due giocatori: l'umano e il computer. Il giocatore che inizia viene scelto a caso. Quando è il turno dell'umano, toccando una cella vuota la si conquista (mostrata in verde). Quando è il turno del computer, fa una breve pausa per "pensare" poi conquista una cella (mostrata in rosso). Le celle conquistate non possono essere toccate di nuovo.

## Prompt 3: Analisi — Rileva il vincitore

Dopo ogni mossa, controlla se una riga, colonna o diagonale è interamente di un colore. In tal caso, annuncia il vincitore. Se tutte le celle sono occupate senza un vincitore, annuncia un pareggio.

## Prompt 4: Strategia — Provare a vincere

Il computer attualmente sceglie le celle a caso. Dagli una strategia base: bloccare l'umano dal completare una linea, e preferire mosse che lavorano verso il completamento di una propria linea.

## Cosa osservare

Dopo ogni prompt, controlla cosa ha creato l'AI. Dovresti riuscire a leggere il codice AllSpeak e capire cosa fa — questo è il punto. Se qualcosa non va, di' all'AI cosa correggere in linguaggio naturale.
