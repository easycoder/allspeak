# L'Effetto Ken Burns #

In questo passo del tutorial completeremo l'Effetto Ken Burns aggiungendo altre immagini e una dissolvenza tra di esse. Ogni immagine si animerà secondo il proprio set di regole, così l'effetto complessivo è di movimento continuo. In televisione questo dà l'impressione di guardare un video piuttosto che una presentazione di diapositive, ed è per questo che l'effetto è così popolare.

~copy~

La maggior parte del codice è costituita dalle specifiche per ciascuna delle 9 immagini. (Le immagini sono tutte di scene arbitrarie nell'Italia settentrionale). Il codice fa più o meno lo stesso dell'esempio pan/zoom, tranne che si ripete in un ciclo, una volta per ciascuna immagine. Tutto questo è gestito rendendo ~code:Anim~ e ~code:Spec~ array di 9 elementi ciascuno.

La chiave dell'effetto sta nelle transizioni. In alto definiamo lo stile che causerà la dissolvenza in entrata o in uscita di un'immagine da un livello di opacità a un altro. Il codice fa sì che l'immagine corrente svanisca mentre la successiva appare, creando una dissolvenza incrociata. Impostiamo un trigger su ogni immagine a un secondo prima della fine del suo zoom/pan, così la dissolvenza avviene alla fine di un'immagine e all'inizio della successiva. Lo zoom/pan delle 2 immagini viene eseguito contemporaneamente e le immagini sono organizzate come una lista circolare, così l'effetto si ripete all'infinito.

---

## Questo è tutto!

Congratulazioni — hai completato il tutorial Codex di ~ec~. Lungo il percorso hai affrontato variabili, aritmetica, gestione delle stringhe, il DOM, stili, immagini, animazioni, interazione con l'utente, giochi, liste, ordinamento, filtraggio, Google Maps, drag and drop, ed effetti visivi. È una solida base per costruire siti web reali.

Tutto ciò che hai imparato qui si applica direttamente alla costruzione di applicazioni web complete. La pagina ~link:background:Informazioni generali~ contiene di più sulla filosofia dietro ~ec~, e il Manuale del Programmatore (clicca l'icona del libro qui sopra) è il tuo riferimento per cercare qualsiasi comando.

Buon coding!
