# Il tracciatore #
La parte più difficile della programmazione è capire perché le cose non funzionano come previsto, e per molti di noi questo succede spesso. Per aiutare in questo, gli ambienti di sviluppo di solito hanno qualche tipo di funzionalità per fermare un programma in esecuzione, esaminare le sue variabili e procedere attraverso le istruzioni una per una. Il tuo browser ha un ottimo debugger ma tutto ciò che ti dirà è cosa sta succedendo all'interno del motore di ~ec~, non cosa sta facendo il tuo script. Quindi abbiamo aggiunto una funzionalità che fa queste cose. È un po' essenziale ma ci sono momenti in cui può aiutare molto.

Il tracciatore di ~ec~ ha bisogno che tu gli dica dove può mostrare le sue informazioni, e questo si fa nel tuo script stesso. Tornando al rettangolo rimbalzante, clicca il pulsante per ottenere lo stesso script con del codice per il tracciatore aggiunto:

~copy~

In cima abbiamo un ~code:div~ aggiuntivo chiamato ~code:Tracer~. La prima cosa che lo script fa è creare questo div, dandogli un id specifico; un valore speciale che ~ec~ conosce.

Più avanti nel programma, all'inizio del ciclo principale, vogliamo iniziare a esaminare il nostro script in esecuzione. In questo esempio ci sono solo 2 cose di cui possiamo chiedere informazioni; i valori di ~code:Angle~ e ~code:Height~. Puoi chiedere solo i valori di variabili ordinarie numeriche/stringa; gestire altri tipi aumenterebbe enormemente le dimensioni di ~ec~ per qualcosa che viene usato relativamente poco. Alla riga 26, il primo comando ~code:trace~ prende una lista delle variabili che vogliamo ispezionare e indica se devono essere presentate orizzontalmente su una riga o verticalmente. Questo comando è opzionale; a volte vuoi solo sapere dove ti trovi senza aver bisogno di conoscere i valori delle variabili.

Il secondo comando ~code:trace~ fa fermare il programma quando lo raggiunge. Mostra le variabili che hai richiesto più le ultime 5 righe eseguite prima di raggiungere il comando trace, poi si ferma. Puoi chiedergli di continuare di un passo o di riprendere l'esecuzione senza fermarsi.

Se esegui questo script vedrai tutto questo in azione, e quando procedi passo per passo nel codice i valori di ~code:Angle~ e ~code:Height~ aumenteranno, uno più velocemente dell'altro.

Una volta che hai diagnosticato e risolto qualsiasi problema avessi, puoi rimuovere il codice del tracciatore e il programma funzionerà normalmente.

~next:Interattività~