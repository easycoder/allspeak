!   demo.as — trova i primi 100 numeri primi

    language it

    script Demo

    variabile Trovati
    variabile Candidato
    variabile Divisore
    variabile Quadrato
    variabile Quoziente
    variabile Temp
    variabile Resto
    variabile Primo
    variabile Riga

    metti 0 in Trovati
    metti 2 in Candidato
    metti `` in Riga

    mentre Trovati è minore di 100 inizio
        metti 1 in Primo
        metti 2 in Divisore

        moltiplica Divisore per Divisore dando Quadrato
        mentre Quadrato non è maggiore di Candidato inizio
            ! Calcola il resto: Resto = Candidato - (Candidato / Divisore) * Divisore
            metti Candidato in Quoziente
            dividi Quoziente per Divisore
            moltiplica Quoziente per Divisore dando Temp
            metti Candidato in Resto
            togli Temp da Resto
            se Resto è 0 inizio
                metti 0 in Primo
                metti Candidato in Divisore
            fine
            aggiungi 1 a Divisore
            moltiplica Divisore per Divisore dando Quadrato
        fine

        se Primo non è 0 inizio
            aggiungi 1 a Trovati
            metti Riga cat Candidato cat ` ` in Riga
        fine

        aggiungi 1 a Candidato
    fine

    registra Riga

    esci
