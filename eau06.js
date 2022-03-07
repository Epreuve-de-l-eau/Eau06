#! node

//Script qui affiche si le dernier argument est présent dans les précédents

//Function
let string = (tab) => {
  for (let a = 0; a < tab.length - 1; a++) {
    if (JSON.stringify(tab[tab.length - 1]) == JSON.stringify(tab[a])) {
      win = true
      i = a
      return
    } else {
      win = false
    }
  }
}

//Gestion d'erreur
if (process.argv.length < 4) {
  console.log("Veuillez indiquer au minimum, deux arguments")
  return
}

//Parsing
let arg = process.argv
arg.splice(0, 2)
let win
let i

//Résolution du problème
string(arg)

//Affichage
if (win == false) {
  console.log(arg[arg.length - 1] + " n'est pas présent")
} else {
  console.log(arg[arg.length - 1] + " est présent à l'index " + i)
}
