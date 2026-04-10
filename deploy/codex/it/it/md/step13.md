# Gestione delle liste #
Una lista in ~ec~ è una stringa di testo in formato JSON, che è un modo per rappresentare strutture dati. Per una lista si tratta di un insieme di elementi, anche se ci sono altri modi in cui i dati possono essere organizzati, che vedremo in un altro passo.

In questo esempio creeremo una lista della spesa, poi la ordineremo in ordine alfabetico. La forma più semplice della lista è quella in cui ogni elemento è solo un nome. Clicca questo pulsante per caricare il codice d'esempio nell'editor:

~copy~

All'inizio dello script ci sono le variabili che useremo. Di particolare interesse sono OriginalList e DisplayList. La prima è la lista così come inserita, con gli elementi in nessun ordine particolare. La seconda è la stessa lista dopo che è stata preparata per la visualizzazione.

Alle righe 16-25 creiamo la nostra lista originale. Iniziamo svuotando la variabile ~code:OriginalList~, poi aggiungiamo gli elementi uno per uno.

Poi costruiamo l'interfaccia utente: un pannello per contenere la lista e 2 pulsanti sotto. Niente premi per lo stile, ovviamente. I 2 pulsanti hanno ciascuno delle azioni associate, da eseguire quando vengono cliccati. Il pulsante ~code:Unsorted~ semplicemente salta a un'etichetta più avanti, per evitare di ripetere lo stesso codice. Per visualizzare la lista copiamo la lista originale nella lista di visualizzazione e chiamiamo la subroutine ~code:Display~, che aggiunge ogni elemento a turno nel pannello.

Quando clicchiamo il pulsante ~code:Sorted~ copiamo la lista ma poi la ordiniamo prima di visualizzarla. In ~ec~, come in JavaScript stesso, non si fanno ipotesi su come vuoi che l'ordinamento venga eseguito. Di solito vuoi un ordinamento alfabetico, ma supponiamo che tu voglia gli elementi ordinati per lunghezza del nome? Per permettere la massima flessibilità, i linguaggi di programmazione ti lasciano definire una funzione di confronto che prende 2 elementi dalla lista e li confronta. Qui la funzione si chiama ~code:AlphabeticSort~ e funziona così:

Il comando di ordinamento opera confrontando gli elementi nella lista finché non sono nell'ordine desiderato. Sa quando questo è avvenuto esaminando i risultati dalla funzione di confronto specificata dall'utente (~code:AlphabeticSort~). Questa funzione verrà chiamata diverse volte, ogni volta con una coppia di elementi, e ogni volta deve restituire un valore che indica se sono nell'ordine corretto. I 2 elementi vengono forniti come argomenti dell'array stesso, con nomi speciali ~code:a~ e ~code:b~. La nostra funzione di confronto li compara e inserisce il risultato in un altro argomento chiamato ~code:v~. I valori restituiti sono 1, 0 o -1, a seconda che il primo argomento abbia un valore maggiore, uguale o minore del secondo argomento. Una volta ordinata la lista, viene visualizzata.

Nota che in questo caso i valori sono stringhe, non numeri, quindi il confronto è alfabetico.

Questa tecnica ti permette di fare qualsiasi tipo di ordinamento di cui hai bisogno. Ora ordiniamo per lunghezza della parola. Prova a sostituire le righe 65 e 66 con

~pre:if the length of A is greater than the length of B put 1 into Result
else if the length of A is less than the length of B put -1 into Result~

e guarda cosa succede. La lista sarà ora in ordine di lunghezza della parola. Tuttavia, ci sono 4 elementi con 4 lettere e 2 con 6 lettere, e questi non sono ordinati alfabeticamente. Per ottenere questo dobbiamo modificare la riga 67 come segue:

~pre:else
begin
    if A is greater than B put 1 into Result
    else if A is less than B put -1 into Result
    else put 0 into Result
end~

Qui abbiamo aggiunto un secondo confronto, questa volta sui valori effettivi come prima, che avviene solo se i due elementi hanno la stessa lunghezza.

Nel prossimo passo vedremo un ordinamento più avanzato.

~next:Ordinamento avanzato~
