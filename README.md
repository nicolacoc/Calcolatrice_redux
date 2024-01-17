# Calcolatrice Redux

Questo è un esempo di come funziona react redux.

Ho creato brevemente una calcolatrice basica con 2 numeri decimali.

Quest'ultima funziona così: ad ogni tasto ho assegnato un 
valore(numero oppure una funzione) es. + valore "SUM".
Quest'ultimo viene rimandato ai reducers i quali sono gli unici
a poter modificare lo stato di redux, come potete vedere dallo schema.

 ![schema](schema.png)

Poi attraverso dei componenti che vengono dispacchati viene visualizzato la cifra.
