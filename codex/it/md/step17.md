# Seleziona, Trascina e Rilascia #
Le interfacce grafiche interattive offrono spesso all'utente la possibilità di spostare elementi sullo schermo, come alternativa al copia e incolla. Sotto il cofano l'implementazione può essere piuttosto complessa poiché di solito ci sono molte cose da considerare; cose che sono specifiche della particolare applicazione.

In ~ec~ la funzionalità base di drag-drop fornisce una solida base su cui costruire funzionalità molto più complesse. L'esempio che presentiamo qui è il più semplice possibile; nella pagina successiva c'è un esempio più complesso.

~copy~

Lo script costruisce una schermata semplice contenente un singolo componente che può essere preso e spostato. Il componente può essere quasi qualsiasi elemento; l'unica cosa che richiede attenzione speciale è il testo, che normalmente mostra un cursore a I quando il puntatore ci passa sopra. In questo esempio il cursore viene forzato alla freccia predefinita.

Lo script ha 2 elementi e una manciata di variabili. L'elemento Container esiste solo per avere lo stile CSS ~code:position:relative~, che permette agli elementi al suo interno di avere un posizionamento assoluto. (Non è molto intuitivo ma funziona così.) Il ~code:Component~ è l'oggetto che trascineremo; è semplicemente una stringa di testo.

Lo script è interessato a 2 eventi: uno quando l'utente clicca dentro il componente, l'altro quando l'elemento viene poi trascinato. Per il primo dobbiamo sapere dove è avvenuta la "presa" rispetto all'angolo in alto a sinistra della finestra. Dobbiamo anche sapere dove si trova attualmente il componente rispetto al suo genitore (così da poter cambiare quel valore).

Quando si verifica un evento di trascinamento, lo script ottiene la posizione del puntatore (o del dito su uno schermo mobile) e calcola di quanto si è spostato dalla posizione di "presa". Aggiunge a questo la posizione precedente del componente nel suo contenitore e il risultato viene usato per impostare una nuova posizione.

Il sistema ti permette anche di specificare cosa succede quando il componente viene rilasciato. Qui usiamo l'azione predefinita, che è semplicemente smettere di trascinare il componente.

~next:Solitario~
