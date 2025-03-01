fetch('toteutus.json') 
    .then(res => res.json())
    .then(data => {
        document.getElementById("toteutus_nimi").innerText = data.toteutuksen_nimi;
        document.getElementById("osallistujia").innerText = data.osallistujien_lukumäärä;
        document.getElementById("alkamisaika").innerText = data.alkamisaika;
        document.getElementById("loppumisaika").innerText = data.loppumisaika;
        document.getElementById("kesto").innerText = data.kesto_viikoissa;
        document.getElementById("kuva").src = data.kuva;

        data.osallistujat.forEach(nimi => {
            let li = document.createElement("li");
            li.innerText = nimi;
            document.getElementById("osallistujat").appendChild(li);
        });
    })
    .catch(() => document.body.innerHTML += "<p>Tietoa ei pystytä hakemaan</p>");
