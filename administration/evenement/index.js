"use strict";
    // Injection du contenu avec les variables existantes
    const agendaContainer = document.getElementById('agendaContainer');
    agendaContainer.style.display = 'block';

    // Prochain événement
    if(prochaineEdition){
    document.getElementById('nomProchain').innerText = prochaineEdition.nom;
    document.getElementById('dateProchain').innerText = prochaineEdition.date;
    document.getElementById('descriptionProchain').innerHTML = prochaineEdition.description;
    if(prochaineEdition.lien){
    document.getElementById('lienProchain').href = prochaineEdition.lien;
} else {
    document.getElementById('lienProchain').style.display = 'none';
}
}

    // Liste des autres événements
    if(Array.isArray(agendaEvenements)){
    const liste = document.getElementById('listeEvenements');
    for(const evt of agendaEvenements){
    const div = document.createElement('div');
    div.classList.add('mb-2');
    div.innerHTML = `
            <div><strong>Nom :</strong> ${evt.nom}</div>
            <div><strong>Date :</strong> ${evt.date}</div>
            <div><strong>Description :</strong> ${evt.description}</div>
            ${evt.lien ? `<div><a href='${evt.lien}' target='_blank'>Plus d'infos</a></div>` : ''}
        `;
    liste.appendChild(div);
}
}
