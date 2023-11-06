class User{
    constructor(nome,cognome, età, luogo){
        this.firstName = nome;
        this.lastName = cognome;
        this.age = età;
        this.location = luogo;
    }

    differenzaEtà(userX){
        if(this.age === userX.age){
            return `${this.firstName} ha la stessa età di ${userX.firstName}`;
        } else if (this.age > userX.age){
            return `${this.firstName} è più vecchio di ${userX.firstName}`;
        } else{
            return `${this.firstName} è più giovane di ${userX.firstName}`;
        }
    }

}

let utente1 = new User('Mario', 'Rossi', 30, 'Roma')
console.log(utente1);

class Utenti extends User{
    constructor(nome,cognome,età,luogo){
        super(nome,cognome,età,luogo);
    }
}

let utente2 = new Utenti('Luigi', 'Verdi', 25, 'Como')
console.log(utente2);

let confrontoEtà = utente1.differenzaEtà(utente2);
console.log(confrontoEtà);




class Pet{
    constructor(nome, padrone, specie, razza){
        this.petName = nome;
        this.ownerName = padrone;
        this.species = specie;
        this.breed = razza;
    }

    sameOwner(x){
        if(this.ownerName === x.ownerName) {
            return true;
    }   else{
            return false;
    }}
}

let cliente1 = new Pet('Fuffi', 'Mario', 'gatto', 'siamese')
console.log(cliente1);

class Clienti extends Pet{
    constructor(nome, padrone, specie, razza,){
        super(nome,padrone,specie,razza)
    }
}

let cliente2 = new Clienti('Luna', 'Mario', 'cane', 'pitbull')
console.log(cliente2);
let stessoPadrone = cliente1.sameOwner(cliente2);
console.log(stessoPadrone);
