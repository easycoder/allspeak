# Stili e CSS #
Il passo precedente ci ha dato una riga di testo in cima allo schermo, ma è schiacciata contro il bordo sinistro in modo piuttosto antiestetico. Possiamo risolvere questo problema dandole un po' di stile. Ecco lo stesso script, con l'aggiunta di alcuni stili:

~step~
~copy~

Come prima, clicca  per eseguire lo script.

Il risultato è molto meglio; il testo è più grande, è al centro del pannello ed è di una bella tonalità di blu. Come è stato fatto?

Sul web, il contenuto della tua pagina — _ciò che vedi_ — è determinato dall'HTML. Questo include sia il testo visibile che le immagini, ma anche la struttura a blocchi che compone la tua pagina. I paragrafi e gli altri componenti definiti nei tuoi script AllSpeak si traducono direttamente nelle corrispondenti forme da inserire nella pagina web. I nomi dei tipi sono identici anche se la sintassi è molto diversa.

Lo stile, d'altra parte, governa l'aspetto della pagina, ed è controllato dai CSS, che sta per _Cascading Style Sheets_ (Fogli di Stile a Cascata). Tenere queste due cose separate ci permette di cambiare l'aspetto senza dover cambiare il contenuto. Potresti non apprezzare quanto sia utile questa tecnica finché non ci lavori per un po'.

I CSS ti permettono di controllare praticamente qualsiasi aspetto dell'aspetto di un elemento. Come ad esempio:

- dimensione
- colore
- margini e padding
- bordi
- sfondi
- posizionamento
- visibilità

e così via. Nel nostro esempio abbiamo usato il seguente:

~code:text-align:center;color:blue;font-size:1.4em~

che ha 3 parti. La prima parte imposta il testo come allineato al centro nel paragrafo; la seconda parte imposta il colore del testo e la parte finale imposta la dimensione del carattere a 1,4 volte quella del valore predefinito corrente, qualunque esso sia. L'unità 'em' proviene dal mondo della tipografia e rappresenta la dimensione della lettera 'm' nel carattere e stile corrente.

Gli stili CSS sono semplicemente stringhe di testo e li usiamo in ~ec~ esattamente come descritto nell'ampia documentazione disponibile online e nei libri, quindi non entreremo nei dettagli qui. Tutti gli stili che usiamo nei nostri esempi sono molto ben documentati. Quindi, per esempio, se vuoi scoprire cosa fa lo stile text-align, basta cercare su Google "css text-align".

~next:Aggiungere immagini~