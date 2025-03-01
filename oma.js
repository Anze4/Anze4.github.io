fetch('tietue.JSON')  
.then(res => res.json())
.then(data => {
    document.getElementById("otsikko").innerText = data.otsikko;
    document.getElementById("kuvaus").innerText = data.kuvaus;
    document.getElementById("kuva").src = data.kuva;

    document.getElementById("nimi").innerText = "Nimi: " + data.opintojakso.nimi;
    document.getElementById("tunnus").innerText = "Tunnus: " + data.opintojakso.tunnus;
    document.getElementById("opintopisteet").innerText = "Opintopisteet: " + data.opintojakso.opintopisteet;

    data.sisalto.forEach(aihe => {
        let li = document.createElement("li");
        li.innerText = aihe;
        document.getElementById("sisalto").appendChild(li);
    });

    data.tekniikat.forEach(tekniikka => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = tekniikka.linkki;
        a.target = "_blank";
        a.innerText = tekniikka.aihe;
        li.appendChild(a);
        document.getElementById("tekniikat").appendChild(li);
    });
})
.catch(() => document.body.innerHTML += "<p>Tietoa ei pystytä hakemaan</p>");
    
