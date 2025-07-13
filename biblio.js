function verif1(){
    let nom = document.getElementById("nom").value 
    if (nom.length < 3 || ! alpha(nom)) {
        alert("nom invalide")
        return false
    }
    let prenom = document.getElementById("pre").value
    if (prenom.length <3 || ! alpha(prenom)) {
        alert("prenom !!!!")
        return false
    }
    let telph = document.getElementById("numb").value
    if (telph.length != 8 || Number(telph[0])<1 || ! chiffre(telph)) {
        alert("verifier votre numero du telephone")
        return false
    }
    let adr = document.getElementById("adr").value
    if (adr.length <10) {
        alert(" votre adresse est obligatoire bien definir")
        return false
    }
    let motpas = document.getElementById("mp").value
    if (motpas.length != 6 || motpas.indexOf(" ") !=  -1) {
        alert(" ce mot de passe n'est pas bien fait")
        return false
    }
    let cmp = document.getElementById("cp").value
    if (cmp != motpas) {
        alert("confiramtion incorrect")
        return false
    }
    return true
}

function alpha(ch) {
    ch=ch.toUpperCase()
    for(let i=0 ; i<ch.length ;i++){
        if (ch[i]<"A" || ch[i]>"Z") {
            return false
        }
    }
    return true
}

function chiffre(num) {
    for(let j=0 ; j<num.length ; j++){
        if(num[j]<"0" || num[j]>"9"){
            return false
        }
    }
    return true
}

function verif2(){
    let type = document.getElementById("s").value
    if (type == "") {
        alert("type obligatoire")
        return false
    }
    let qua = document.getElementById("qua").value
    if (parseInt(qua) < 1 || parseInt(qua) > 5 ) {
        alert("la quantite d ' une comande entre 1 et 5")
        return false
    }
    let tel = document.getElementById("tel").value
     if (tel.length != 8 || Number(tel[0])<1 || ! chiffre(tel)) {
        alert("verifier votre numero du telephone")
        return false
    }
    let mp = document.getElementById("mpa").value
    if (mp.length != 6 || mp.indexOf(" ") !=  -1) {
        alert(" ce mot de passe n'est pas bien fait")
        return false
    }
    alert("merci pour votre confience le livreur il appelera lorsque il a devant votre maison")
    return true
}