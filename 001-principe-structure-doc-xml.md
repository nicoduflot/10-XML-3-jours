# XML

## Principe
C’est un langage balisé, on utilise des balises similaires aux balises HTML, à la différence que les balises créées peuvent être nommées au besoin (du format de données) selon les règles suivantes.

### Les règles de nommage des balises 

- Les noms peuvent contenir des lettre, des chiffres ou des caractères spéciaux
- Les noms doivent OBLIGATOIREMENT débuter par une lettre ou un underscore
```
<5test /> => interdit
<test5 /> => valide
```
- Les noms NE PEUVENT PAS commencer avec les lettre XML (quelle que soit la casse)
- Les noms NE PEUVENT PAS contenir d'espaces.
- Les caractères spéciaux interdits : - , ; . < > 

### Il existe deux type de balises : 

**Balises par paire**

```xml
<balise>donnée</balise>
<balise>
    <autreBalise>Donnée</autreBalise>
</balise>

<nom>Duflot</nom>

<personne type="physique">
    <nom>Duflot</nom>
    <prenom>Nicolas</prenom>
    <prenom>Eric</prenom>
    <prenom></prenom>
    <!-- on peut aussi écrire <prenom /> -->
</personne>
```

**Et les balises uniques**
```xml
<nom valeur="Duflot" />
<prenom valeur="Nicolas" />
<prenom valeur="Eric" />
```
Les balises vont contenir des attributs, pour des options ou des informations "cachées", se sont des compléments d'informations sur la données des balises XML.

Les règles de nommage des attributs : 
 - Idem que pour les noms de balises
 - Les valeurs des attributs doivent être limitées entre des guillemets 'simples' ou "doubles"
 - Dans une balise, un attribut ne sera présent qu'une et une seule fois

**Quelques exemples (prix d'un article):**

```xml
<article>
    <nom>
        Mug Holder Goldorak
    </nom>
    <reference>
        MUG-ANIME-Grendizer-01
    </reference>
    <!-- liste des prix selon les devises acceptées -->
    <prix total="25.3" devise="EURO" />
    <prix total="26.68" devise="USD" />
</article>
```
ou

```xml
<article>
    <nom>
        Mug Holder Goldorak
    </nom>
    <reference>
        MUG-ANIME-Grendizer-01
    </reference>
    <!-- liste des prix selon les devises acceptées -->
    <prix>
        <total>25.3</total> 
        <devise>EURO</devise>
    </prix>
    <prix>
        <total>26.68</total> 
        <devise>USD</devise>
    </prix>
</article>
```
ou

```xml
<article>
    <nom>
        Mug Holder Goldorak
    </nom>
    <reference>
        MUG-ANIME-Grendizer-01
    </reference>
    <!-- liste des prix selon les devises acceptées -->
    <prix devise="EURO">25.3</prix>
    <prix devise="USD">260.68</prix>
</article>
```

## Le corps d'un document se compose comme suite : 

### un prologue

Une balise racine, c'est elle qui est l'ancètre des toutes les informations du document

Un document XML bien formé suit donc les règles suivantes : 
 - Un prologue xml (contenant la version xml utilisée et s'il est seul ou s'il utilise un document de formatage)
 - le document ne contient qu'une seule balise racine
 - le nom des balises et des attributs respectent les règles de nommage.
 - Les balises paires sont bien fermées
 - les valeurs des attributs sont contenues entre des guillemets simples ou doubles.
 - les balises du document ne se chevauchent pas, il y a une arborescence cohérente dans le document.

## Structure d'un fichier en détail.

### Le prologue 

La première ligne d'un document XML, elle donne les informations de traitement.

Version : la versio XML utilisée, il y en a deux, 1.0 et 1.1
Le W3C préconise d'utiliser la 1.0

encoding : le codage des caractères, le jeu de caractère qui sera utilisé dans le document.
De base, on utilise UTF-8 (Universal charaster set TransFormation 8 bits).
Certains éditeurs enregistrent sois le format ISO8859-1 (il suffit de le changer dans le prologue).

Standalone : l'autonomie du document, est-t'il rattaché à un autre (par exemple les schémas qui vont normer le XML comme les DTD ou XSD), ce fichier est "seul", donc la valeur "yes" est indiquée
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
```
### Élément racine

C'est l'élément principal qui contiendra le jeu de données.
```xml
<!-- Élément racine -->
<rolodex lang="fr">
    <!-- une entrée du rolodex -->
    <contact type="physique">
        <nom>Durand</nom>
        <prenom>Jean</prenom>
        <adresses>
            <adresse type="facturation">
                <numero>7</numero>
                <voie type="Impasse">Inmpasse du chemin</voie>
                <codepostal>75015</codepostal>
                <ville>Paris</ville>
                <pays codelang="fr-FR">FRANCE</pays>
            </adresse>
            <adresse type="livraison">
                <numero>7</numero>
                <voie type="Impasse">Inmpasse du chemin</voie>
                <codepostal>75015</codepostal>
                <ville>Paris</ville>
                <pays codelang="fr-FR">FRANCE</pays>
            </adresse>
            <adresse type="livraison">
                <numero>1</numero>
                <voie type="rue">Rue de la paix</voie>
                <codepostal>75001</codepostal>
                <ville>Paris</ville>
                <pays codelang="fr-FR">FRANCE</pays>
            </adresse>
        </adresses>
        <emails>
            <email type="personnel">jean_durand@yahoo.fr</email>
            <email type="professionel">jdurand@acme.com</email>
        </emails>
    </contact>
    <!-- d'autres entrées du rolodex -->

</rolodex>
```