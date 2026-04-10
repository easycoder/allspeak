# Ordinamento avanzato #
L'esempio precedente era semplice, ma a volte gli elementi di una lista comprendono più valori. Per una lista della spesa potresti avere il prezzo, il codice prodotto e così via. Qui modificheremo la nostra lista aggiungendo i prezzi, poi ordineremo sia per prezzo che alfabeticamente.

~copy~

La lista ora ha gli stessi elementi, ma ciascuno contiene 2 valori: il nome dell'articolo e il suo prezzo (in centesimi o altra unità; AllSpeak non gestisce valori in virgola mobile). All'inizio del passo precedente ho detto che il formato JSON può gestire cose diverse dalle liste; qui abbiamo una mappa di proprietà: un insieme di valori ognuno con una chiave che indica di cosa si tratta — qui name o price — e il valore stesso. Ciascun articolo viene aggiunto separatamente a una lista, quindi la struttura complessiva è una lista di articoli ognuno con 2 proprietà.

Tutto il resto è uguale all'esempio precedente — a parte la funzione di confronto, che ora deve entrare nelle proprietà per trovare il prezzo ed eseguire il confronto su quello. Ho rinominato la funzione per rendere questo chiaro.

Come prima c'è un piccolo trabocchetto: milk e sugar hanno lo stesso prezzo ma sugar viene visualizzato prima perché compare prima nella lista. Possiamo far apparire questi 2 articoli in ordine alfabetico cambiando la riga 98 in

~pre:else
begin
    if property `name` of A is greater than property `name` of B
        put 1 into Result
    else if property `name` of A is less than property `name` of B
        put -1 into Result
    else put 0 into Result
end~

La pagina successiva ti mostrerà come estrarre solo alcuni degli elementi di una lista.

~next:Filtrare le liste~
