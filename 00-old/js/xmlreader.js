/**
 * 
 * xml reader
 * 
 */
window.addEventListener('DOMContentLoaded', function(){
    let allReaders = document.querySelectorAll('button[data-action="readxml"]');
    allReaders.forEach(button => {
        button.addEventListener('click', ()=>{
            fetch(button.dataset.xmlsource)
            .then(response=>response.text())
            .then(xmlFlux=>{
                /* créer un objet pour parser le XML */
                const parser = new DOMParser();
                /* parser le XML dans une constante */
                const xmlDoc = parser.parseFromString(xmlFlux, 'application/xml');
                /* 
                aller récupérer la racine du XML 
                keyword est le nom de l'élément racine du xml qui contient les données a afficher
                C'est nécessaire pour pouvoir parser correctement le XML
                */
                xmlData = xmlDoc.getElementsByTagName(button.dataset.keyword);
                /* on vide l'élément receveur */
                //document.querySelector(`.${button.dataset.target}`).innerHTML = '';
                let affichage = document.querySelector(`.${button.dataset.target}`);
                let child = affichage.children[0];
                affichage.removeChild(child);
                /* parser le contenu de la racine et l'afficher dans un élément */
                let options = {
                    style: `
                        font-style:italic;
                        font-weight:bold;
                        list-style-type: none;
                        font-size:smaller`, 
                    class: 'alert p-0  ps-2 pe-2 mb-0'
                };
                affichage.appendChild(parseXML(xmlData[0], '', options));
            })
            .catch(e=>console.error(e));
        });
    });

    let allReseters = document.querySelectorAll('button[data-action="resetxml"]');
    allReseters.forEach(element => {
        element.addEventListener('click', ()=>{
            let affichage = document.querySelector(`.${element.dataset.target}`);
            let child = affichage.children[0];
            affichage.removeChild(child);
            affichage.appendChild(cEO('div'));
        });
    });
});