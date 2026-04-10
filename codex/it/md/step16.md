# Usare Google Maps #
Uno dei punti di forza di ~ec~ è il modo in cui può essere esteso tramite plugin. Si tratta di moduli di codice JavaScript che forniscono funzionalità linguistiche aggiuntive agli utenti del sistema. AllSpeak viene fornito con diversi plugin, disponibili su richiesta, quindi ti mostrerò come usare uno dei più interessanti.

Le mappe di Google sono una delle funzionalità più spettacolari che si possano trovare su un sito web. Offrono una vasta gamma di funzioni e richiedono pochissimo sforzo per essere integrate nella pagina. Detto questo, serve un po' di impegno per imparare come fare, e noi abbiamo eliminato quell'impegno costruendo il nostro plugin ~ec~ per gestire le mappe al posto tuo. Al momento è un po' essenziale ma speriamo di aggiungere più funzionalità col tempo. Clicca qui per caricare lo script della mappa:

~copy~

Lo script costruisce una pagina usando tutto lo spazio disponibile, poi lo divide in una barra ~code:Controls~ e il pannello principale della mappa. La barra ~code:Controls~ ha solo un titolo ma c'è spazio per mettere tutti i pulsanti che ti servono per controllare il funzionamento della tua mappa.

Nella lista delle variabili vedrai ~code:gmap Map~. Questo fa parte delle nuove funzionalità disponibili con il plugin caricato, così come i comandi successivi che fanno riferimento alla ~code:Map~.

La mappa richiede un div in cui posizionarla, poi puoi creare la mappa con un insieme molto ridotto di comandi. La prima cosa da aggiungere alla mappa è una "API key" fornita da Google per autorizzare l'uso di una mappa su questo sito web. Lo script recupera questa chiave dal server usando ~code:rest get~, quindi non è inserita direttamente nel codice dello script. Puoi ottenere la tua API key registrandoti come sviluppatore Google e richiedendo la tua chiave nella pagina apposita. (Purtroppo va oltre lo scopo di queste note descrivere come farlo.)

Servono solo 3 informazioni per configurare una mappa: ~code:latitude~, ~code:longitude~ e ~code:zoom~. Sperimenta con ciascuno di questi per scoprire come funzionano; prova a ottenere una mappa che mostri casa tua.

~next:Seleziona, Trascina e Rilascia~
