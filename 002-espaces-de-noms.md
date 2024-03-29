## Les espaces de noms

Ils permettent d'utiliser des vocabulaires XML pré-établis.

Équivalent de "dialectes" XML qui ont été définis pour des utilisations diverses.
Plutôt que de redéfinir des dialects à chaque fois qu'on a besoin d'un document XML, on fait appel à eux.
Pour les utiliser, on défini ce qu'on appel un "espace de nom" => namespace c'est pour ça que dans le document
on écrira xmlns xml NameSpace.
Un espace de nom peut être définit par défaut, dans ce cas toutes les balises du document doivent
appartenir à ce dialecte,
ou il peut être utilisé partiellement, dans ce cas on lui définit un préfixe qui sera a mettre dans les balises
faisant référence à ce dialecte.

Un dialecte standard commun existe, le "Dublin Core", https://www.dublincore.org/specifications/dublin-core/dcmi-terms/ ,
il contient une quinzaine d'éléments dont title, creator, subject et date pour écrire les caractéristiques principale d'un 
document (métadonnées).

" DocBook " permet de décrire les les métadonnées d'un document https://tdg.docbook.org/tdg/5.1/ 

" XInclude https://www.w3.org/TR/xinclude/ permet d'inclure dans des fichiers XML d'autre fichiers XML

## Quelques espaces de noms communéments utilisés

XML
    http://www.w3.org/XML/1998/namespace 
XInclude
    http://www.w3.org/2001/XInclude 
XLink
    http://www.w3.org/1999/xlink 
MathML
    http://www.w3.org/1998/Math/MathML 
XHTML
    http://www.w3.org/1999/xhtml 
SVG
    http://www.w3.org/2000/svg 
Schémas
    http://www.w3.org/2001/XMLSchema 
Instances de schémas
    http://www.w3.org/2001/XMLSchema-instance 
Schematron
    http://purl.oclc.org/dsdl/schematron 
XSLT
    http://www.w3.org/1999/XSL/Transform 
XSL-FO
    http://www.w3.org/1999/XSL/Format 
DocBook
    https://tdg.docbook.org/tdg/5.1/ 
Dublin Core
    https://www.dublincore.org/specifications/dublin-core/dcmi-terms/ 

"" Namespace

L'espace de nom donne un contexte à un terme, par exemple certains mots ont plusieurs définitions, 
c'est le contexte dans lequel on utilise ce mot qui donne sa "fonction / définition" finale

On peut par exemple associer le document à l’espace de nom XHTML et par soucis de praticité 
on va utiliser le préfixe html (faciliter la lecture humaine du document) 
car il faut savoir qu’à la base le choix du préfixe est totalement arbitraire.
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!-- prologue -->
<!-- élément racine -->
<html:html xmlns:html="http://www.w3.org/1999/xhtml">
    <html:head>
        <html:title>
            Les espaces de noms
        </html:title>
    </html:head>
    <html:body>
        .....
    </html:body>
</html:html>
```
On peut décrire plusieurs espaces de nom dans un même document
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<html:html
    xmlns:html="http://www.w3.org/1999/xhtml"
    xmlns:mml="http://www.w3.org/1998/Math/MathML"
>
    <html:head>
        <html:title>
            Les espaces de noms
        </html:title>
    </html:head>
    <html:body> ..... <mml:math>
            <mml:apply>
                <mml:eq>
                    <!-- (a + b)² -->
                    <mml:msup>
                        <mml:mfenced>
                            <mml:mrow>
                                <mml:mi>a</mml:mi>
                                <mml:mo>+</mml:mo>
                                <mml:mi>b</mml:mi>
                            </mrow>
                        </mfenced>
                        <mml:mn>2</mml:mn>
                    </msup>
                </mml:eq>
            </mml:apply>
        </mml:math>
    </html:body>
</html:html>
```
on peut limiter la portée de la déclaration d'un espace de nom,
pour la déclaration multiple, il est aussi possible de n'utiliser (d'appeler) une espace de nom 
seulement quand il est requis
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!-- ici on utilise le dialecte HTML -->
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>
            Les espaces de noms
        </title>
    </head>
    <body> 
        ..... 
        <!-- à partyir de cetyte balise et uniquement à l'intérieur de celle-ci on utlise le dialecte Math -->
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <apply>
                <eq>
                    <!-- (a + b)² -->
                    <msup>
                        <mfenced>
                            <mrow>
                                <mi>a</mi>
                                <mo>+</mo>
                                <mi>b</mi>
                            </mrow>
                        </mfenced>
                        <mn>2</mn>
                    </msup>
                </eq>
            </apply>
        </math>
        <!-- on revient surle dialecte HTML, car on sort de la portée du dialecte Math -->
    </body>
</html>
```
Mais comment faisons nous s'il n'existe pas de contexte pour nos données, ou seulement une partie ?
Il est possible "d'annuler" un espace de nom (de la même façon que l'on a appelé un espace de nom de manière ponctuelle)
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>
            Les espaces de noms
        </title>
    </head>
    <body>
        .....
        <!-- 
            Pour inclure mon propre dialecte, je doit annuler la portée de HTML dans un espace du document 
            Pour ce faire, je vais déclarer un espace de nom nul
        -->
        <rolodex xmlns="">
            <nom>Lagaffe</nom>
            <prenom>Gaston</prenom>
        </rolodex>
        <!-- on sort de la portée de l'espace de nom nul, on revient en HTML -->
    </body>
</html>
```