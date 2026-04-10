# Pan e Zoom #

Quando i programmi televisivi mostrano una serie di immagini, spesso applicano qualcosa chiamato "Effetto Ken Burns" (dal nome del documentarista americano che ha sperimentato questa tecnica). Questo fa sì che ogni immagine esegua lentamente un pan e/o uno zoom prima di dissolversi nella successiva, dando un senso di movimento. L'effetto è stato ampiamente usato dal documentarista americano da cui prende il nome.

In questo passo del tutorial ci occuperemo solo del pan e zoom; la dissolvenza la vedremo dopo.

La maggior parte del lavoro nell'animazione è svolto da un modulo plugin `vfx` di ~ec~. Tutto ciò che lo script deve fare è impostare le cose e poi eseguire.

~copy~

Il codice qui è progettato per funzionare con qualsiasi dimensione del contenitore immagine, quindi tutte le dimensioni sono calcolate come percentuale dell'elemento genitore. I dati per l'animazione sono tutti contenuti in una variabile chiamata ~code:Spec~, con 2 blocchi di dati per l'inizio e la fine dell'animazione. Gli elementi chiave sono i valori ~code:left~, ~code:top~ e ~code:width~. ~code:width~ è la percentuale dell'intera immagine che verrà mostrata all'inizio o alla fine dell'animazione. ~code:left~ è la percentuale che "sporgerà" a sinistra dell'area di visualizzazione e ~code:top~ la quantità corrispondente che sporgerà in alto. Poiché l'altezza dell'immagine segue sempre la sua larghezza, mantenendo lo stesso rapporto d'aspetto, è tutto ciò che ci serve. Il pacchetto dati include anche l'URL dell'immagine, il numero di passi coinvolti e quale passo deve far sì che lo script faccia qualcosa di speciale, in questo caso fermare l'animazione.

Tutto ciò che dobbiamo fare ora è inviare richieste regolari per far avanzare l'animazione di un passo. Questo viene fatto dallo script piuttosto che dal plugin, così da poter mantenere il controllo sul processo.

Se crei più di un'animazione ma le inserisci tutte nella stessa variabile come array, il comando ~code:step~ le eseguirà tutte, anche se le uniche che faranno effettivamente qualcosa saranno quelle il cui contatore di passi non ha ancora raggiunto il numero di passi previsto. Puoi riavviare un'animazione in qualsiasi momento usando

```
    index Anim to N
    start Anim
```

~next:L'Effetto Ken Burns~
