/* fonction de création et destruction d'un cookie */

function setCookie(name, value = '', days = -1, path = '/') {
    let maxAge = days * 25 * 60 * 60;
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=${path}; Samesite=Strict; Secure`;
}

/* fonction pour lire la valeur d'un cookie */

function getCookie(name) {
    let tabCookie = document.cookie.split('; ');
    for (cookie of tabCookie) {
        let tabValue = cookie.split('=');
        if (tabValue[0] === name) {
            return tabValue[1];
        }
    }
    return false;
}

function cEO(element, attributes = {}) {
    let newElement = document.createElement(element);
    for (let key in attributes) {
        newElement.setAttribute(key, attributes[key]);
    }
    return newElement;
}

function cTN(texte){
    return document.createTextNode(texte);
}

function parseXML(xmlData, html = '', userOptions = null) {
    /* le XML sera affiché sous la forme d'une liste html */
    html = cEO('ul');
    /* 
    options de l'affichage des attributs des éléments XML 
    soit demandées par l'utilisateur soit par défaut, 
    les classes ne fonctionnants qu'avec 
    l'utilisation de bootstrap 5.2 minimum
    */
    let options = userOptions || {
        style: `
            font-style:italic;
            font-weight:bold;
            list-style-type: none`, 
        class: 'alert alert-primary p-0  ps-2 pe-2 mb-0'
    };
    /* on  parcours tous les noeuds enfant de la racine */
    xmlData.childNodes.forEach(element => {
        /* si le noeud n'est pas un noeud texte ou un commentaire */
        if (element.nodeName !== '#text' && element.nodeName !== '#comment') {
            /* si le noeud a des enfants, il s'agit d'une sous-liste */
            if (element.children.length !== 0) {
                let li = cEO('li');
                let b = cEO('b', {style:''});
                b.appendChild(cTN(`${element.nodeName} :`)); 
                li.appendChild(b); 
                /* si l'élément possède des attributs, on les affiche */
                if(element.attributes.length > 0){
                    let ulAttr = cEO('ul', options);
                    for(attr of element.attributes){
                        let liAttr = cEO('li');
                        let elemAttr = cTN(`attr : ${attr['name']} => ${attr['value']}`)
                        liAttr.appendChild(elemAttr);
                        ulAttr.appendChild(liAttr);
                    }
                    li.appendChild(ulAttr);
                }
                html.appendChild(li);
            } else {
                /* si pas d'enfant, c'est un élément de liste */
                let li = cEO('li');
                let b = cEO('b', {style:''});
                b.appendChild(cTN(`${element.nodeName} : `));
                li.appendChild(b);
                li.appendChild(cTN(`${element.innerHTML}`));
                //b.appendChild(cTN(`${element.nodeName} : ${element.innerHTML}`));
                //li.appendChild(b);
                /* si l'élément possède des attributs, on les affiche */
                if(element.attributes.length > 0){
                    let ulAttr = cEO('ul', options);
                    for(attr of element.attributes){
                        let liAttr = cEO('li');
                        let elemAttr = cTN(`attr : ${attr['name']} => ${attr['value']}`)
                        liAttr.appendChild(elemAttr);
                        ulAttr.appendChild(liAttr);
                    }
                    li.appendChild(ulAttr);
                }
                html.appendChild(li);
            }
            if (element.children.length !== 0) {
                /* si le noeud a des enfants, on rappelle la fonction */
                html.appendChild(parseXML(element, html, options));
            }
        }
    });
    /* on renvoie la liste formée à l'appel */
    return html;
}