const nomi = [
  "Robert",
  "Jennifer",
  "Rebecca",
  "Dennis",
  "Margaret",
  "Brian",
  "Julia",
  "Patrick",
  "Helen",
  "Brittany",
  "Ronald",
  "Kenneth",
  "Steven",
  "Stacy",
  "Jacob",
  "Daniel",
  "Cheryl",
  "Trevor",
  "Maria",
  "Seth"
]

let userName = (prompt("Inserisci il tuo nome"))
let invitatoTrovato = false;
let i = 0;

while (i < nomi.length && invitatoTrovato == false){
  if (nomi[i] == userName) {
    invitatoTrovato = true;
  }
  i++;
}

if (invitatoTrovato == true){
  document.getElementById("result").innerHTML = "Puoi entrare";
} else {
  document.getElementById("result").innerHTML = "Non puoi entrare"
}
