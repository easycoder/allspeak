# Solitario #

Solitario è un nome generico per diverse attività/giochi/esercizi per un singolo giocatore. Le varianti più comuni sono probabilmente i giochi di carte, ma una delle più tradizionali è un gioco che si svolge su una tavola di legno con una griglia di fori inizialmente riempiti di pioli. Un foro viene lasciato inizialmente vuoto e le regole sono molto semplici: quando prendi un piolo e lo fai saltare sopra il suo vicino in uno spazio vuoto, il vicino viene rimosso dal tabellone. La sfida è rimuovere tutti i pioli tranne uno. È sorprendentemente difficile.

Qui abbiamo una versione elettronica del Solitario. I pioli vengono spostati usando il drag and drop, come descritto nella pagina precedente, ma qui le cose si complicano un po'. Nota: anche se questo script funziona su un dispositivo mobile, non è l'ideale perché il dito tende a oscurare la vista di dove viene trascinato il piolo, e non sembra esserci un modo affidabile per impedire al browser di trascinare l'intero contenuto dello schermo insieme all'elemento selezionato. C'è una versione di questo script su [https://allspeak.software/solitaire/](https://allspeak.software/solitaire/) che usa la selezione invece del trascinamento ed è più adatta ai browser mobili.

~copy~

Il codice che disegna il tabellone è abbastanza tipico dei giochi e dei programmi grafici simili, nel senso che calcola le posizioni e le dimensioni sullo schermo non usando valori fissi ma calcolando valori relativi a un punto di partenza. In questo caso per PC è 500 pixel e per mobile è la larghezza dello schermo. Anche se il codice potrebbe richiedere un po' di tempo per essere esaminato, permette di apportare modifiche abbastanza semplicemente. Qui, i numeri 7 e 14 si riferiscono al numero di pioli in una riga, il 6 rende semplicemente i pioli più piccoli e il 95 e 100 forzano l'area di gioco a essere più piccola in modo che stia tutta dentro il cerchio. Il resto te lo lascio da capire.

Lo script fa ampio uso di array, ciascuno contenente 49 elementi, uno per ogni cella del tabellone; una griglia 7 per 7 di celle, non tutte utilizzate. Il primo di questi array è una mappa che descrive lo stato attuale del tabellone. Ogni posizione ha 1 di 3 valori: 0 indica una cella che non fa parte del gioco, 1 è una cella vuota e 2 significa che un piolo occupa la cella. Ogni cella ha un piolo; non si muovono mai tranne temporaneamente durante il trascinamento, dopodiché vengono semplicemente resi visibili o invisibili.

Due array — ~code:Lefts~ e ~code:Tops~ — contengono le posizioni di ciascuna cella rispetto al contenitore.

Ogni cella è rappresentata da un array di cerchi grigi, e ogni piolo da un cerchio rosso. Ogni piolo può occupare solo un foro. Inizialmente ci sono un piolo in meno rispetto ai fori; la cella centrale è vuota. La prima parte dello script si occupa di preparare il tabellone, poi abbiamo i 3 gestori di eventi per presa, trascinamento e rilascio.

Quando prendi un piolo, prima di trascinarlo lo script calcola se c'è una posizione legale (secondo le regole del Solitario) in cui può essere spostato. I pioli possono muoversi di 2 posizioni in su, in giù, a sinistra o a destra, ma solo se c'è una cella vuota in quella posizione e un piolo da scavalcare. Se una mossa è possibile il piolo viene colorato in modo diverso e portato in primo piano impostando il suo z-index. La variabile ~code:Selected~ viene impostata all'indice del piolo, che altrimenti contiene il valore false.

Quando trascini il piolo lo script calcola la sua nuova posizione e lo ridisegna in quella posizione. Poi controlla se la posizione corrente del puntatore si trova all'interno di una delle 4 possibili destinazioni. In caso affermativo, colora il foro di giallo come segnale visivo che puoi rilasciare il piolo.

Quando rilasci un piolo ci sono 2 scenari possibili. Se sei arrivato a una destinazione valida, il piolo viene riportato al suo z-index originale, riportato nella sua posizione originale ma rimosso (reso invisibile). Il piolo scavalcato viene anch'esso rimosso e il piolo precedentemente invisibile nella destinazione viene reso visibile.

Il secondo scenario è quando rilasci un piolo in un punto diverso da una destinazione valida. Tutto ciò che dobbiamo fare qui è ripristinare le cose allo stato precedente alla presa del piolo.

Tutto ciò che resta da fare è controllare se ci sono ancora mosse possibili, e in caso contrario mostrare un messaggio per informare il giocatore. Non c'è un pulsante Ricomincia ma non sarebbe difficile aggiungerne uno.

I programmatori più attenti potrebbero notare che gli algoritmi per trovare le mosse valide sono implementati due volte ma in modo diverso. Questo è in gran parte dovuto al fatto che lo script è un derivato di una versione precedente (che non usava il drag and drop). La tecnica usata per testare se un dato piolo può essere mosso è più concisa, ma ho deciso di lasciare com'era il codice che controlla se ci sono mosse disponibili. Ogni tecnica usa diversi calcoli aritmetici e dimostra come spesso ci siano 2 o più modi per raggiungere un dato obiettivo.

~next:Pan e Zoom~
