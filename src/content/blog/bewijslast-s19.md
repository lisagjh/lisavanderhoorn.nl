
# 4.1.1 

**4.1.1 Richt projecten efficiënt en effectief in volgens de development-lifecycle en houdt rekening met de beschikbare tijd.**

_Dit houd in dat je projecten kan inrichten op een efficiënte en doelgerichte manier. Hierbij maak je gebruik van de DLC, en houd je rekening met de tijd die je hebt._

## Wat is de bewijslast?

### Projectboard in GitHub

Tijdens mijn stage houd ik alles bij in mijn [projectboard](https://github.com/users/lisagjh/projects/13/views/12) van mn iloveweb. Ik heb hier een board met TODO, In progress, done en on hold. Dit is mijn main view.  
Hiermee creeër ik overzicht in wat er gedaan moet worden, waar ik mee bezig ben, en wat al gedaan is. Dit helpt mij om snel te vinden wat ik zoek.

Hiernaast heb ik ook een view genaamd l[ogboek](https://github.com/users/lisagjh/projects/13/views/8). Hier maak ik gebruik van parent- en sub-issues om alles te ordenen. Ik gebruik hier elke week als een aparte parent issue. De tasks die ik die week oppak worden hierbij de sub-issues. Ik heb ook een aparte "[general issues](https://github.com/users/lisagjh/projects/13/views/9?pane=issue&itemId=100615225&issue=lisagjh%7Ci-love-web%7C99)" parent issue, waar ik van alles in zit wat geen hoge prioriteit heeft, maar wat wel moet gebeuren, of een idee wat ik wil onthouden voor een later moment. Op deze manier gaan (kleine) verbeterpunten en ideeën niet verloren.  
Met het logboek kan ik ordenen wat er elke week moet gebeuren, en helpt het mij ook om prioriteiten te stellen en issues eventueel op te splitten in kleinere tasks.

Ook heb ik nu een aparte parent [issue voor de Sport in Haarlem ticket](https://github.com/lisagjh/i-love-web/issues/119) die ik oppak. Deze staat natuurlijk ook in Jira, maar ik vind het ook fijn om dit ook voor mijzelf te documenteren wanneer nodig. Dit kan mij ook helpen met het plannen van de tasks, en overzicht houden van alles wat ik moet doen.

Verder gebruik ik ook de [roadmap](https://github.com/users/lisagjh/projects/13/views/9) om overzicht te houden wat wanneer moet gebeuren. Dit geeft mij een breder overzicht, en helpt mij met het stellen van prioriteiten, en plannen van de tasks.

Bij de issues gebruik ik labels. Ik gebruik vooral labels voor de fases van de DLC, maar ook een label voor reviews, een label voor bugs en een voor enhancements. Hiermee zie ik meteen wat een issue is, en wat ik hier bij kan doen. Ook helpt dit mij weer sneller dingen terug vinden: als ik ergens aan werk en weet dat ik dit twee weken eerder ook gedaan heb, kan ik de juiste issue snel terug vinden.

### Jira ticket

Ik heb in Jira een ticket assigned gekregen, om de toegankelijkheid van Sport in Haarlem te verbeteren. In een ticket zitten meerdere tasks. Ik heb eerst zelf gekeken in het Jira board, en gekeken hoe anderen de tickets oppakken, wat ze documenteren, etc. Daarna heb ik met Victor een gesprek gehad om toch iets meer uitleg te krijgen over de manier van werken. En ook omdat het raar voelt om zomaar in die code te gaan werken zonder het te overleggen.

In elke task staat het probleem en welke actie er moet worden ondernomen. Dit vind ik erg fijn, het maakt meteen duidelijk wat/waar/hoe iets met gebeuren.

De manier van werken met Jira vind ik erg fijn. Ik vind het erg overzichtelijk. Ik vind het ook fijn dat er een optie is voor `to be reviewed` in het bord, waardoor er ruimte is voor review en feedback.  
Collection.php

Om aan Sport in Haarlem te werken, moet ik via filezilla in een php bestand werken. Dit is een bestand van meer dan 2500 lines of code. Hier zit dus ook alles in: PHP, JS, html en css.

Ik ben toen begonnen met dit bestand verkennen, een beetje door scrollen en kijken wat er allemaal staat. Ik had geen idee waar ik naar zat te kijken. Jason heeft mij geholpen met de nodige code te vinden.

Er is wel structuur in dit bestand. Zo beginnen we met algemene setup, en staan daarna stukken code die bij elkaar horen, dus de html en de JS en CSS hiervan, bij elkaar. Er is in de map waar dit werk bestand staat wel een `readme.md` maar hier staat niks in.

Zelf zou ik hier iets meer structuur in brengen en consistentie in witruimte. Ook zou ik een duidelijkere manier implementeren om aan te geven waar elke sectie begint, door bijvoorbeeld een soort better comments VScode extensie te gebruiken, waarbij je een karakter als ! of * aan het begin van de comment toevoegt, waardoor de comment een kleur krijgt en meer opvalt. Of een comment van meerdere regels lang, die begint meet een word als `block` of `section`, om aan te geven dat dit stuk code voor een ander deel is.  
En dan hierbij de `readme` gebruiken om dit soort dingen aan te geven.  
Of meer component based werken, maar ik weet niet of dit een mogelijkheid is met PHP en elementor/wordpress, en hoe dit dan zou werken.  
Deze opties zouden onervaren developers als ik meer handvaten geven om hiermee te werken, en het makkelijker maken om te vinden wat we zoeken.

## Waarom is dit goede bewijslast?

Mijn eigen projectboard is goede bewijslast, omdat ik mijn project inricht op een manier die voor mij goed werkt. Dit helpt mij om overzicht te houden, en efficiënt en effectief te werken. Hierbij gebruik ik labels: DLC, bugs, enhancements, en reviews, en gebruik ik de roadmap om mijn taken te plannen.

Het werken in Jira is ook goede bewijslast, omdat ik hier mee werk in een bestaande workflow en documenteer in de tasks. Ook reflecteer ik op deze manier van werken.

Het werken in een bestaande codebase, in dit geval de `collection.php` , is goede bewijslast, omdat ik hier werk in een bestaand project. Hierbij pas ik mij aan aan de manier van werken. Ook herken ik verbeterpunten die de efficiëntie en effectiviteit kunnen verbeteren, en bedenk ik eventuele oplossingen.

### Leer ~~vraag~~ doel:

Aan het begin van de meesterproef, bedenk ik nieuwe epic, user stories, en tasks. Dit doe ik in overleg met Victor (eventueel Tufan ook?). Hierbij pas ik MoSCoW en tijdsplanning toe, om mijn effectiviteit en efficiëntie nog verder te optimaliseren.


# 4.1.2

**4.1.2 Combineert principes, standaarden en best-practices op het gebied van frontend design en development en zet deze flexibel en onderbouwd in om een passende oplossing voor een opdrachtgever te realiseren**  
_Dit houdt in dat je verschillende principes, standaarden en best practices toepast en combineert om een passende oplossing voor de opdrachtgever te realiseren. Hierbij kan je onderbouwen waarom en wanneer je deze dingen gebruikt._

## Wat is de bewijslast?

### Progressive Enhancement

Ik heb een formulier om de listings te filteren, op locatie en capaciteit. Ik heb hier progressive enhancement toegepast. Het formulier werkt zonder JS, maar met JS heb ik een `onsubmit` event, waarin een`event.preventDefault()` zit, om een refresh van de page te voorkomen. Op deze manier word de gebruikservaring verbeterd.

Ik vond het belangrijk om ervoor te zorgen dat dit formulier werkt zonder JS. De locatie- en capaciteit filters zijn de belangrijkste op de pagina, en zouden dus voor iedere gebruiker beschikbaar moeten zijn.

Ik heb dit getest in verschillende browsers, met en zonder JS. Ook heb ik dit getest met Browserstack (browserstack local), op verschillende oudere browsers; zie de video demo waar ik op edge 83 op windows 8 heb getest.

_Zie pe-form-code , pe-form-demo , PE-form-demo-edge83-winds8_

### Component Based werken

Ik probeer zo veel mogelijk met componenten te werken, om te zorgen dat de code overzichtelijk, leesbaar en netjes blijft, en vooral dat het niet een te lange file word.

Ik heb een filter component gemaakt, volgens het dumb component principe. Dit houd in dat het component zelf geen state of logica heeft, maar alleen de UI weergeeft. Dit component ontvangt alle data en functies via props. Dit maakt dit component generiek en herbruikbaar.

Ik heb ook de pagination controls in een component gezet. Hier heb ik ook weer het dumb component principe gebruikt, maar is iets minder generiek. Ook heb ik de functie om de paginatie te laten werken in de `/collection/+page.svelte` laten staan. Het lukte mij niet om deze in het component werkend te maken vanwege bepaalde data die hierbij nodig is. Het is wel een leuke uitdaging voor de meesterproef om dit wel werkend te maken.

Verder heb ik ook andere kleine dingen in componenten verdeeld. Zoals de active tags, en de counters die gebruikt worden bij de bed/bathroom filters.

Door component based te werken, houd ik ook rekening met het clean code standaard/principe.

_Zie filter-component , pagination & component-based_  
_-_ [_Issue PE filters_](https://github.com/users/lisagjh/projects/13/views/8?pane=issue&itemId=97561160&issue=lisagjh%7Ci-love-web%7C57)  
- [_Issue pagination_](https://github.com/users/lisagjh/projects/13/views/12?pane=issue&itemId=101298929&issue=lisagjh%7Ci-love-web%7C118)  
_-_ [_Issue componenten_](https://github.com/users/lisagjh/projects/13/views/8?pane=issue&itemId=99349824&issue=lisagjh%7Ci-love-web%7C86)

### Optimized Images

Ik heb de lokale afbeeldingen en de afbeeldingen uit de API geoptimaliseerd. De afbeeldingen kunnen nu allemaal als webp en avif geleverd worden, en worden ook met verschillende afmetingen geleverd (responsive images). Door dit te doen is de performance score op de lighthouse van 83 naar 94 gegaan.

Door de afbeeldingen nu als WebP en AVIF te leveren, gebruik makend van next-gen image formats, is de laadtijd verbeterd terwijl de kwaliteit behouden blijft.

_Zie local-images-optimised , API-images-optimised , optimised-images-lighthouse_  
_-_ [_issue local optimised images_](https://github.com/users/lisagjh/projects/13/views/8?pane=issue&itemId=98884160&issue=lisagjh%7Ci-love-web%7C77)

### Conventies

Er zijn binnen Atlantis Digital geen conventies die door het hele bedrijf gebruikt worden. Ik heb aan het begin van mijn project ook geen overzicht met conventies opgesteld. Ik werk wel met bepaalde conventies die ik eigenlijk altijd gebruik, wat onderhand eigenlijk mijn standaard werkwijze is gewoorden. Zo gebruik ik altijd `kebab-case` voor html en css, `camelCase` voor javascript, probeer ik betekenisvolle namen te gebruiken, alles in het engels, gebruik `pseudo-private custom properties`, consistentie in indenting en whitespace, etc.

Aan het begin van de meesterproef wil ik wel een net overzicht maken met alle conventies die ik hanteer. Zo kan ik anderen helpen om mijn code beter te begrijpen, en er eventueel op verder te werken.

## Waarom is dit goede bewijslast?

Progressive enhancement is goede bewijslast, omdat ik hier laat zien dat ik PE werk, en dus rekening houd met een best practice. Dit doe ik door te zorgen dat de filter werkt zonder JS, en met JS de gebruikservaring te verbeteren, met een `preventdefault` en loading state bijvoorbeeld.

Het werken met component is ook goede bewijslast, omdat ik hier verschillende principes en standaarden combineer. Door component based te werken, gebruik ik het dumb component principe. Ook gebruik ik hierbij het clean code principe: ik had een file met >600 lines of code, dit heb ik gereduceerd door component based te werken.

De geoptimaliseerde afbeeldingen zijn goede bewijslast, omdat ik hier laat zien dat ik rekening houd met performance en webstandaarden. Door de afbeeldingen in avif en webp te leveren, is de performance score beter en laden ze sneller. Ook houd ik hier rekening met een standaard en best practice: het gebruik van next-gen image formats.

Ik combineer hier dus verschillende best practices, standaarden, en principes, en pas deze toe bij het realiseren van mijn project. Ook kan ik onderbouwen waarom ik deze gebruik.

### Leervraag:

Hoe kan ik mijn componenten verbeteren op gebied van herbruikbaarheid, modulariteit en onderhoudbaarheid?

**Leerdoel:**

Tijdens de meesterproef wil ik meer onderzoek doen naar verschillende component patronen; container-presentational components, dumb-smart components, en context driven components.

Aan het begin van de meesterproef wil ik een `.md` bestand opstellen met alle conventies die ik hanteer bij dit project.
# 4.1.3
**4.1.3 Bewaakt de belangen van de eindgebruiker bij het realiseren van een oplossing voor een opdrachtgever**  
_Dit betekent dat jij als developer verantwoordelijk bent voor het beschermen van de belangen van de eindgebruikers gedurende het proces van het realiseren van een project, en niet alleen achteraf aanpassingen moet maken hiervoor. Je zorgt dat het product gebruiksvriendelijk is._

---

## Wat is de bewijslast?

### Real Estate Chatbot

Ik heb gewerkt aan een chatbot die de gebruiker helpt het perfecte vakantiehuisje te vinden. Mijn taak was om de frontend te bouwen hiervan. Victor had mij tijdens de briefing gevraagd of ik wilde letten op verbeterpunten van de bot, omdat het nog verder ontwikkeld moest worden en echt in een begin staat was. Dit heb ik gedaan.

Ik ben dit project begonnen met analyseren van de opdracht en onderzoek doen naar het ontwerpen en bouwen van een chatbot. Ik heb hierbij voornamelijk onderzoek gedaan naar conversational design. Op basis hiervan heb ik ook een aantal verbeter punten besproken met Victor. Zo is het momenteel niet mogelijk om de images van de properties erbij te zetten, laat de bot vaak niet alle opties zien, vergeet het snel dingen, en kan het de gebruiker niet informeren over opties zoals bestemmingen. Op deze punten kan nog veel gewonnen worden, want binnen _conversation design_ is het belangrijk dat de chatbot een fijne en behulpzame tool is, en geen frustrerende gebruikservaring is.

### ComboBox

Ik heb een nieuw component gemaakt voor het Blue Estate project. Dit component is om de listings te kunnen filteren op prijs. Dit doe ik met een "combobox", een input veld waar de gebruiker zelf een bedrag kan typen maar ook suggesties krijgt waar uit gekozen kan worden.

Ik heb tijdens het bouwen van dit component rekening gehouden met de eindgebruiker, door tijdens het bouwen hiervan tussendoor te testen met toetsenbord en screenreader. Hierdoor kwam ik al snel een aantal problemen tegen. Zo was het bijvoorbeeld niet mogelijk om met toetsenbord bij de suggesties te komen. Dit heb ik opgelost door de HTML structuur aan te passen.

Het volgende probleem was dat wanneer je door de suggesties wilde tabben, dit niet kon omdat ze te snel gesloten werden. Dit kwam doordat de focus de `input` verliet. Ik heb hier verschillende manieren geprobeerd, met `onfocus` en `onblur`, en timeouts. Ik heb hierbij hulp gehad van Jason, om uiteindelijk op de juiste oplossing te komen. Dit heb ik gedaan door `onfocusin` en `onfocusout` te gebruiken op de parent waar de input en suggesties in zitten.

Daarna heb ik verder gekeken naar hoe ik dit component kan verbeteren voor screenreaders. Hiervoor heb ik aria gebruikt. Ik heb hiervoor onderzoek gedaan, en gekozen om `role="combobox"` te gebruiken op de input. Ik heb getwijfeld of dit op de input of de parent `<div>` moest, dus hiervoor nog verder gekeken. Volgens de WAI ARIA 1.2 specificaties hoort dit op een focusable element waar de gebruiker input kan geven.

Verder heb ik ook gezorgd dat de suggesties gesloten worden op esc of als je buiten de input/suggesties klikt. Dit valt in lijn met de verwachtingen van de gebruikers.

Het eindproduct heb ik aan Jason laten zien. Hij vond mijn oplossingen erg goed, en vond het goed dat ik met veel verschillende dingen rekening heb gehouden.

- [issue toegankelijkheid](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=106365781&issue=lisagjh%7Ci-love-web%7C199)
    

## Waarom is dit goede bewijslast?

De **Real Estate Chatbot** is goede bewijslast, omdat ik hier laat zien dat ik rekening houd met de belangen van de eindgebruiker. Dit doe ik door tijdens het werken aan de chatbot te letten op verbeterpunten, en deze te bespreken met Victor.

De **ComboBox** is goede bewijslast omdat ik hier aantoon dat ik tijdens het bouwen van het component rekening houd met belangen van de eindgebruiker. Dit doe ik door tijdens het bouwen te testen met mijn toetsenbord, en dit te verbeteren. Ook test ik met een screenreader, en gebruik ik aria roles en attributen. Daarnaast houd ik rekening met wat een gebruiker verwacht (_UX interaction patterns)_, door te zorgen dat de suggesties sluiten als de gebruiker er buiten klikt en op esc.

Ik laat zien dat ik proactief ben in het bewaken van de belangen van de eindgebruiker, en dit op verschillende manieren doe.

# 4.2.1 
**4.2.1 Organiseert samenwerking, reflecteert op efficiëntie en effectiviteit en stuurt bij waar nodig.  
**_Dit houd in dat je met anderen samenwerkt, en dat je kan reflecteren op jouw doelgerichtheid en efficiëntie. Ook kan je jouw aanpak aanpassen wanneer je merkt dat er niet efficiënt of effectief gehandeld word._

## Wat is de bewijslast?

### Samenwerking

Tijdens mijn stage werk ik samen met veel verschillende mensen. Zo werk ik samen met Jason voor de code technische dingen. Als ik ergens vast loop, of een idee heb maar niet weet hoe ik dit moet aanpakken, kan ik Jason vragen voor zijn input.

Ook werk ik samen met Tufan, de projectmanager van _wpinaday_ (_webdev_). Ik vraag hem om feedback op het design van mijn Blue Estate project. Dit is voor mij erg waardevol, omdat hij altijd allerlei details en verbeterpunten benoemt die mij niet opvallen.  
Ik probeer sinds deze week ook Danielle vaker om feedback te vragen. Zo heb ik afgelopen dinsdag een design review gehad met Tufan en Danielle. Hierna heb ik wat feedback toegepast, en op donderdag Danielle weer gevraagd wat zij hiervan vind.

Verder heb ik ook online samen gewerkt met Kween, een developer. Zij heeft mij geholpen met een paar kleine issues aan het begin via slack. Ook nu ik met Sport in Haarlem bezig ben heeft zij mij geholpen om hierin te komen, en de juiste files te vinden. Momenteel helpt ze mij ook met een probleem waar ik tegen aan loop, waarbij mij veranderingen niet worden toegepast. Dit is nog een work in progress.

Ook krijg ik hulp vanuit onverwachte hoeken! Zo werkt hier ook Yannick, die doet volgens mij van alles en nog wat. Tijdens een lunch wandeling vroeg hij hoe het project ging. Ik gaf aan dat het prima ging, maar dat ik moeite had met de performance en de LCP. Ik heb verteld over allerlei dingen die ik geprobeerd heb en aan het proberen ben om dit te verbeteren. Een uur later kreeg ik een Slack melding met een analyse over de LCP en performance. Hier ben ik later nog een keer op terug gekomen.

### Code feedback

Code reviews doe ik met Jason. Dit doe ik niet vaak, ook omdat ik vaker tussendoor kleine dingen bespreek, en hij dan ook vaak al feedback geeft op wat hij ziet.

Het lastige is dat ik met Sveltekit werk, en Jason (en andere developers) geen ervaring hebben met Sveltekit of frameworks, dus inhoudelijk feedback op svelte specifieke dingen is lastig. De feedback helpt mij wel heel erg met clean code en code conventions. Zo kreeg ik vorige keer feedback op het gebruik van const en let. Daarna hebben we ook gepraat over wat betekenen deze nou, en waarom gebruik je elke.

Ook stelt Jason vragen die iemand met framework/svelte ervaring niet zou stellen. Zo heb ik bijvoorbeeld een hele waslijst aan reactieve variabelen met `$state`. Jason vroeg wat dit betekent. Ik heb toen uitgelegd dat hiermee de variabele geüpdate kan worden. Toen zei Jason: maar daar is `let` toch eigenlijk ook voor? Hierdoor ben ik nog een keer gaan nadenken waarom ik dit eigenlijk gebruik, en waarom `let` alleen niet genoeg zou zijn. Ik heb het nog iets verder geprobeerd uit te leggen, dat `$state` variabelen reactief zijn. Door die reactiviteit wordt de variabele automatisch geüpdate als de data hierin verandert. En dat hierdoor ook `$effect` blokken automatisch rerunnen enzo.

Door deze feedback momenten word ik mij meer bewust over de code die ik schrijf en waarom ik bepaalde keuzes maak.

### Design feedback

Tijdens mijn stage probeer ik om ongeveer om de week een design review te doen met Tufan, en nu ook met Danielle.  
Buiten de reviews om vroeg ik niet zo vaak om feedback. Ik heb dinsdag een review gedaan met Tufan en Danielle. Daar zei Tufan dat ik ook Danielle vaker om feedback kan vragen. Hier heb ik naar geluisterd. Op woensdag heb ik feedback verwerkt en toegepast. In de card van de listings staan details over hoeveelheid gasten, slaap- en badkamers. De tekst paste niet echt lekker, dus het idee was om hier icoontjes bij te gebruiken. Op donderdag heb ik Danielle meteen gevraagd wat ze van mijn aanpassingen vond, en hier nieuwe feedback uitgehaald. Hierdoor zag de card er meteen een stuk beter uit.

Door donderdag meteen weer feedback te vragen, weet ik meteen of mijn aanpassing goed is. Op deze manier kan ik sneller en gerichter aanpassingen maken.

### Reflectie

Ik vind de samenwerking hier erg fijn. Iedereen staat altijd voor mij klaar als ik iets nodig heb. Ik krijg ook genoeg ongevraagde hulp toegereikt, _zie voorbeeld LCP Yannick_.

Ik wil tijdens de meesterproef wel gestructureerder reviews en feedback momenten inplannen. Dit wil ik doen door bijvoorbeeld wekelijks op dezelfde dag een code review te doen. Ook wil ik vaker Danielle om design feedback vragen. Dit ga ik ook hard nodig hebben, omdat ik de listing detail page wil aanpakken.

Misschien is het ook goed om de code reviews met Jason een andere invulling te geven. Dit wil ik doen door niet alleen om zijn feedback te vragen, maar zelf ook mijn code meer in detail uit te leggen. Dit kan mij erg helpen met het versimpelen van mijn code, waardoor het toegankelijker en leesbaarder is voor anderen.

Ook denk ik dat ik tijdens de meesterproef meer design feedback wil. Ik wil dan ook de detail pagina van de listings gaan maken, en daar kan ik veel hulp bij gebruiken.

## Waarom is dit goede bewijslast?

Met deze bewijslast laat ik zien dat ik samenwerking organiseer door om feedback te vragen, en code/design reviews in te plannen. Ook reflecteer ik op hoe de samenwerking nu gaat, en wat ik tijdens de meesterproef anders zou willen doen.

---

### Leerdoel:

Vaker Jason en Danielle om feedback vragen! en eigenlijk gewoon wekelijkse reviews inplannen tijdens de meesterproef!  
Misschien ook Daniel vragen? Voor CSS?  
En Gian of Yannick inschakelen wanneer ik hulp nodig heb bij de performance.

# 4.2.2
**4.2.2 Draagt verantwoording voor eigen en teamresultaten en stuurt verwachtingen van belanghebbenden.**  
_Dit houd in dat je verantwoording neemt voor de resultaten voor jouzelf en hoe dit bijdraagt aan het team, en dat je zorgt dat de belanghebbenden (opdrachtgever, begeleider) realistische verwachtingen heeft._

## Wat is de bewijslast?

### Jira Ticket

Ik heb in Jira een ticket assigned gekregen, om de toegankelijkheid te verbeteren van de Sport in Haarlem website. Ik heb eerst zelf door het board gekeken om er achter te komen hoe anderen de tickets oppakken, wat er gedocumenteerd, etc. De eerste task, het uitvoeren van de wcag scan, heb ik meteen uitgevoerd. Hierbij heb ik ook nog handmatige tests gedaan en gedocumenteerd, zoals de keyboard test en screenreader test. Hierbij heb ik ook meteen eventuele oplossingen bedacht en genoteerd.

Hierna ben ik met Victor in gesprek gegaan, en heb ik hier meer uitleg gevraagd over de werkwijze en hoe ik dit kan aanpakken. Ik heb tijdens dit gesprek ook mijn documentatie van de WCAG scan en handmatige testen laten zien, en de eventuele oplossingen die ik hier bedacht heb.

_Zie: jira-ticket-overview en jira-ticket-example_

### Feedback

Tijdens het werken aan het Blue Estate project vraag ik feedback aan Jason of Tufan. Zo doe ik design reviews met Tufan om te zorgen dat de UI/UX van mijn project goed is. De feedback van zo een review documenteer ik in een GH issue. Bij de laatste review heb ik van elk feedback punt een sub-issue gemaakt, wat erg fijn werkt. Zo heb ik overzicht op wat ik al gedaan heb, en wat nog moet gebeuren.

Hierna ga ik deze issues oppakken. Ik documenteer grotere veranderingen wel in de comments van de issue, maar kleine dingen zoals een padding aanpassen of iets weg halen niet.

## Waarom is dit goede bewijslast?

De ticket is goede bewijslast, omdat ik laat zien dat ik actief de verantwoordelijkheid neem over mijn eigen taken en resultaten. Dit doe ik door extra uitleg te vragen over de aanpak en werkwijze bij Victor.

Ook stuur ik de verwachtingen van belanghebbenden door tijdens het gesprek met Victor mijn documentatie van de tests en eventuele oplossingen te laten zien. Op deze manier zorg ik dat hij weet wat hij van mij kan verwachten.

De feedback is ook goede bewijslast. Ik ben zelf verantwoordelijk voor het verkrijgen van feedback, dus ik ben proactief in het vragen van feedback door design reviews te doen met Tufan.

## Leervraag:

Hoe kan ik mijn verantwoordelijkheid bij echte projecten vergroten?

# 4.2.3
 niet laten beoordelen
# 4.3.1

Niet laten beoordelen

# 4.3.2
**4.3.2 Presenteert en onderbouwt op overtuigende wijze ontwerpkeuzes, eigen ideeën en producten passend bij het publiek.  
**_Dit houd in dat je jouw keuzes en ideeën binnen ontwerp en ontwikkeling kan presenteren en onderbouwen. Dit doe je op een manier wat bij jouw publiek past._

---

## **Wat is de bewijslast?**

## Check in - W4

Op woensdag 26 februari heb ik een check in met Victor gedaan. Hier heb ik mijn progressie gepresenteerd. Ik heb eerst laten zien hoe alles werkt. Daarna heb ik verteld over dingen die je niet meteen ziet; image optimisation, PE, A11Y, etc. Dit heb ik ook gedemonstreerd. Ik heb ook laten zien welke aanpassingen ik heb gemaakt in het design. Zo heb ik in overleg met Tufan bij de filters voor de bed/bathrooms niet voor een slider/range input gekozen, maar buttons met -/+. Dit is veel toegankelijker.

Hierna heb ik ook verteld waar ik tegen aan loop. Zo is de performance al een stuk beter na de image optimisations, maar kan het nog steeds beter.

Victor heeft zelf ook veel technische kennis, dus heb ik tijdens het presenteren hiervan gewoon frontend taal gebruikt.

[_issue checkin w4_](https://github.com/users/lisagjh/projects/13/views/8?pane=issue&itemId=99158693&issue=lisagjh%7Ci-love-web%7C82)

## Design Feedback - W7

Op dinsdag 18 maart heb ik een design review gedaan met Tufan, en Danielle.  
Ik heb eerst de paginatie die ik net heb toegevoegd laten zien. Hierbij heb ik verteld dat ik het ontwerp een beetje heb aangepast vergeleken met het origineel, omdat ik de originele kleur niet erg mooi vond. Ik heb de knopjes iets groter gemaakt, de kleur aangepast van bruin naar blauw. Tufan had hier verder geen feedback op, dus dan zal dat wel goed zijn :)

Verder heb ik ook laten zien dat ik de feedback van vorige keren heb toegepast. Zo heb ik minder tekst op de card, de image is groter, de actieve filters in de sidebar gezet, en meer witruimte toegevoegd.

Ook heb ik laten zien waar ik tegen aan loop: op de listing cards staat hoeveel gasten, slaapkamers en badkamers er zijn. Maar ik krijg dit er gewoon niet goed op. Op het origineel is de engelse versie prima, maar de franse versie is ook niet top. Ik heb het geprobeerd op te lossen met elk list item 30% width te geven, met overflow hidden. Maar dit zit er ook gewoon niet mooi uit. Hier kwam het idee om icoontjes te gebruiken in plaats van tekst om te laten zien wat het is.

[_issue design feedback W7_](https://github.com/lisagjh/i-love-web/issues/134#issue-2928757921)

## **Waarom is dit goede bewijslast?**

Dit is goede bewijslast, omdat ik hier mee laat zien dat ik mijn keuzes kan presenteren en onderbouwen.

**Leervraag**

Ik ben niet zo goed in echt presenteren. Hoe kan ik ervoor zorgen dat ik dit aan de (Franse !!) klant toch duidelijk kan presenteren, en mijn keuzes goed kan onderbouwen?

# 4.3.3
**4.3.3 Documenteert op professionele wijze en bespreekt voortgang met belanghebbenden.  
**_Dit houd in dat je tijdens het werken aan een project documenteert op een manier die professioneel is. Je bespreekt je voortgang met belanghebbenden, zoals de opdrachtgever of stagebegeleider._

## Wat is de bewijslast?

### Jira tickets

In w6 heb ik in Jira een ticket assigned gekregen, om de toegankelijkheid van een bestaand project te verbeteren. De eerste task was om een WCAG scan uit te voeren, en aan de hand hiervan 5 verbeterpunten te noteren.

Dit heb ik gedaan, en in eerste instantie gedocumenteerd in een github issue. Hierna wist ik niet zo goed hoe ik moest beginnen, en het voelde gewoon heel raar om zomaar allerlei dingen aan te passen zonder dit te bespreken. Dus aan het begin van week 7 heb ik met Victor hierover gesproken. Ik heb gevraagd wanneer zet je iets op actief, to be reviewed of gereed. Victor heeft dit uitgelegd. Ik heb ook gekeken naar andere tickets, maar zag vrijwel nergens echt documentatie van hoe deze issue is opgepakt. Ik heb tijdens dit gesprek wel mijn documentatie van de WCAG scan laten zien. Victor zei dat ik dit ook in die ticket kon zetten, dus dit heb ik gedaan.

[_Issue WCAG scan_](https://github.com/users/lisagjh/projects/13/views/8?pane=issue&itemId=101790984&issue=lisagjh%7Ci-love-web%7C120)

### Issues met documentatie

Voor het Blue Estate project houd ik mijn eigen projectboard met issues bij. In deze issues documenteer ik vaak hoe ik deze issues aanpak. Ik gebruik hierbij parent-en sub-issues in github. Dit werkt voor mij erg fijn, omdat ik hierdoor niet zomaar een groot en overwhelming overzicht aan openstaande issues zie, maar een georganiseerd overzicht.  
Ik gebruik parent-issues voor elke week, maar ik heb er ook een voor openstaande maar niet urgente issues, en voor de home page.

Ook houd ik een week log bij. Hier noteer ik wekelijks wat ik die week wil bereiken. Dagelijks noteer ik een beetje waar ik aan heb gewerkt, en wat ik doe. Hier schrijf ik vaak ook een klein verslagje van mijn checkins met Victor.

Natuurlijk noteer ik hier ook de feedback die ik krijg in issues.

### Issue: language toggle

[Deze issue](https://github.com/lisagjh/i-love-web/issues/91) is een goed voorbeeld, omdat ik hier mijn volledige proces laat zien. Ik laat hier zien dat ik verschillende fases van de DLC meerdere keren doorloop, vooral analyseren, bouwen en testen. Ik laat hier zien dat mijn eerste idee niet werkte zoals ik wilde, en dat ik daarna een andere aanpak probeer. Ik heb hier ook andere ideeën en vragen die ik tussendoor had, zoals hoe zou dit werken met een component, en zou ik hier stores bij kunnen gebruiken?

---

Deze manier van documenteren helpt mij om mijn proces, gedachtegang en voortgang overzichtelijk te houden. Als ik iets terug moet vinden, zoals code snippets, schetsen of waarom ik iets op een bepaalde manier heb gedaan, kan ik dat makkelijk vinden.

### Checkins

Over de afgelopen weken heb ik verschillende checkins gedaan met Victor. Tijdens deze checkins laat ik zien hoever ik ben met Blue Estate, vertel ik waar ik aan heb gewerkt de laatste tijd, waar ik nog mee bezig ben, en waar ik tegen aan loop. Ook bespreken we waar ik hierna verder aan ga werken.

Zo heb ik in week 4 een checkin gedaan met Victor, waar ik heb laten zien hoe ver ik was, waar ik aan heb gewerkt de laatste dagen, en hebben we besproken wat de volgende stap is.

In week 6 heb ik een gesprekje gehad met Victor over wat ik heb mee genomen van de terug kom dag; dat ik graag meer wil bijdragen aan bestaande projecten, door bijvoorbeeld de toegankelijkheid of performance te verbeteren. Victor heeft mij hierna meteen op een project gezet waar ik dit kan doen! :)  
Daarnaast hebben we ook besproken dat het leuk zou zijn om voor de opdrachtgever, de mensen van Blue Estate mijn project te presenteren ergens rond week 10, en aan het eind nog een keer.  
Ook heb ik hier mijn bewijslast van methodisch handelen met Victor besproken, waarna hij nog een comment zou achterlaten daar.

[_Checkin W4_](https://github.com/lisagjh/i-love-web/issues/82)

[_Checkin W6_](https://github.com/lisagjh/i-love-web/issues/107#issuecomment-2717161348)

**_Toevoeging na TKD 28/3:_**

_Comment van Anne:  
__Goede bewijslast. Voor 4.3.3, zijn er misschien nog meer manieren waarop je documenteert volgens de bedrijfsstandaarden? Bijvoorbeeld hoe je commit messages schrijft, pr's, etc._

Er zijn geen bedrijfsstandaarden wat betreft commits en PRs. Ik heb geen PRs, want ik werk alleen, en werk voornamelijk in de main branch. Ook weet ik niet in hoeverre het nuttig is om uitgebreide PRs te schrijven die ik daarna zelf meteen merge?  
Bij de commits probeer ik wel beschrijvende commits te gebruiken, en begin ik de commit vaak met een "feat", "fix", "wip", "error", of "bug", met daarna een paar woorden om duidelijk te maken wat het is. Bijvoorbeeld: `FIX close menu on navigate`, `WIP language toggle UI`, `FEAT image carousel on Listing Card`.

## Waarom is dit goede bewijslast?

De Jira ticket is goede bewijslast, omdat ik hier op professionele wijze documenteer en mijn voortgang bespreek met belanghebbenden. Ik documenteer zelf in github en in Jira. Ook laat ik hier zien dat ik mijn voortgang bespreek met belanghebbenden (stagebegeleider).

Dit is goede bewijslast, omdat ik laat zien dat ik op professionele wijze documenteer, door mijn proces en relevante aantekeningen te noteren in de issues.

Ook bespreek ik mijn voortgang met belanghebbenden, in dit geval mijn stagebegeleider, en ga ik mijn voortgang presenteren aan de opdrachtgever.

## Leervraag:

Zou ik tijdens de meesterproef misschien beter in sprints van 2 weken kunnen werken, ipv per week?

---

**Links:**

1. [issue language toggle](https://github.com/lisagjh/i-love-web/issues/91)
    
2. [issue check in Victor week 4](https://github.com/users/lisagjh/projects/13/views/8?pane=issue&itemId=99158693&issue=lisagjh%7Ci-love-web%7C82)
    
3. [issue check in Victor week 6](https://github.com/lisagjh/i-love-web/issues/107#issuecomment-2717161348)

# 4.4.1

**4.4.1 Analyseert een vraag, signaleert knelpunten, kiest onderbouwd oplossingsrichting en valideert resultaten.**  
_Dit houd in dat je een vraag analyseert, eventuele problemen signaleert, en op basis hiervan een oplossingsrichting kan kiezen en onderbouwen. De resultaten van de analyse controleer je._

---

## **Wat is de bewijslast?**

### Blue Estate Agency

In de eerste week van mijn stage had ik een briefing met Victor over het project waar ik aan ga werken: Blue Estate Agency. Hij liet mij de huidige website zien. Mijn opdracht is om deze website na te bouwen in Sveltekit, te beginnen met de collection page. Hierbij heb ik de vrijheid gekregen om het ontwerp aan te passen / verbeteren.

Om een goed beeld te krijgen van de huidige situatie, wat beter kan, en waar ik eventueel tegen aan kan lopen, heb ik de bestaande website geanalyseerd. Ik heb meerdere lighthouse tests uitgevoerd. De gemiddelde scores waren vrij laag (oranje). Vooral performance scoorde erg laag. Het viel mij ook op dat er problemen waren met kleurcontrast. Ik heb ook gekeken naar de Network tab: hier werd 5mb transferred en 8.5mb resources gebruikt. Hier zou ook veel bespaard kunnen worden!

Andere problemen die ik voorzag waren het werken met een onbekende API, waarbij ik OpenID Authentication moet gebruiken om de data te kunnen ophalen, en het bouwen van een filter systeem, dit had ik nog nooit eerder gedaan.  
_Bij het opzetten van de authentication en ophalen van de data heb ik gelukkig hulp kunnen krijgen van Sam via Slack._

Daarna ben ik begonnen met bouwen. Op basis van mijn bevindingen heb ik een aantal dingen aangepast: zo gebruik ik bij de buttons bijvoorbeeld een iets donkerdere kleur bruin. Ook heb ik extra aandacht besteed aan de performance, door bijvoorbeeld de afbeeldingen uit de api te optimaliseren met een route in mijn project met Sharp, en data die niet meteen nodig is pas op te halen wanneer de gebruiker er om vraagt met een `/deferred-data` route. Daarnaast heb ik ook Pagination geïmplementeerd, zo worden niet alle items in een keer ingeladen.

Na het optimaliseren van de afbeeldingen zag ik dat de lighthouse performance score verbeterd is met ruim 20 punten. Ook in de network tab zie ik verbetering: 30% minder requests, 34% minder kb aan transfers, en 25% minder resources.

### Sport in Haarlem

Na de TKD heb ik in Jira een ticket assigned gekregen, om de toegankelijkheid van Sport in Haarlem te verbeteren. In deze ticket zitten meerdere tasks. Ik heb eerst zelf gekeken in het Jira board, en gekeken hoe anderen de tickets oppakken, wat er gedocumenteerd wordt, etc. Daarna heb ik gekeken naar mijn ticket en tasks.

De eerste task was om een WCAG scan uit te voeren. Ik wist niet of hier een standaard tool voor was, dus dit heb ik gevraagd. Dit was er niet, dus zelf eentje uitgezocht. Daarnaast ook met lighthouse een test gedaan, zodat ik meer inzicht had in welke elementen de test faalde. Daarna ook handmatige tests gedaan (toetsenbord en screenreader). Dit had ik allemaal gedocumenteerd in GH.

Hierna had ik nog een gesprek met Victor, om iets meer uitleg te krijgen over de werkwijze met Jira en wat er zoal gedocumenteerd wordt.

Het eerste knelpunt voor mij hier was dat ik niet bekend was met Jira en hoe er mee gewerkt wordt. Dit was simpel op te lossen met een gesprek. Een ander knelpunt is het werken met custom code bij een WP website. Eerst omdat ik niet wist waar ik de codebase hiervan moet vinden. Daarna omdat ik in de verkeerde codebase zat. Daarna omdat het file waarin gewerkt moest worden erg groot en onoverzichtelijk is.

Op basis van de handmatige tests en de tasks heb ik een aantal aanpassingen gedaan. Zo heb ik bijvoorbeeld een feature toegevoegd om een popup te kunnen sluiten met `esc`, relevante `aria-label` en `role` toegevoegd, `aria-live` toegevoegd, en een skiplink toegevoegd. Dit draagt allemaal bij aan het verbeteren van de toegankelijkheid.

## **Waarom is dit goede bewijslast?**

Blue Estate is goede bewijslast, omdat ik hier de vraag van de opdrachtgever heb geanalyseerd. Dit heb ik gedaan door de bestaande website te inspecteren en testen.  
Hierbij heb ik verschillende knelpunten gesignaleerd; onbekende technologieën (api, authenticatie, filters), veel data, slechte performance.  
Op basis hiervan heb ik een oplossingsrichting gekozen en wanneer nodig mijn aanpak bijgestuurd, met bijvoorbeeld de extra routes en pagination.  
Daarnaast valideer ik mijn resultaten met tools zoals Lighthouse, Network tab/inspector, en de TGI Color Contrast Analyser.

SIH is ook goede bewijslast, omdat ik hier de ticket en tasks analyseer,. Ik signaleer verschillende knelpunten, zoals onbekendheid met Jira, een onduidelijke codebase en werken met custom code in WP. Ook voer ik tests uit, en bepaal ik op basis hiervan een oplossingsrichting.

**Leervraag:**

Wat zijn best practices voor het optimaliseren van web performance in SvelteKit?

---

- [_Lees de briefing van Blue Estate hier._](https://github.com/users/lisagjh/projects/13/views/8?pane=issue&itemId=96399020&issue=lisagjh%7Ci-love-web%7C36)
    
- [_Issue met CCA test_](https://github.com/lisagjh/i-love-web/issues/56#issuecomment-2650757430)
    
- [_Issue Sport in Haarlem_](https://github.com/lisagjh/i-love-web/issues/119)

# 4.4.2
_SEM3 Leervraag: Hoe kan ik schetsen tijdens mijn stage blijven doen (of meer doen)?_

**4.4.2 Schetst om gedachten en processen bespreekbaar te maken, abstracte begrippen over te brengen en de oplossingsrichting inzichtelijk te maken.**  
_Dit houd in dat je schetsen kan inzetten om een idee te bespreken met een ander, duidelijk te maken wat je bedoelt en inzicht te creeeren in de oplossing._

## **Wat is de bewijslast?**

**Pagination Active State**

In het Blue Estate project heb ik op de collectie pagina, pagination geïmplementeerd. Toen dit klaar was leek het me leuk om de active state op de buttons te animeren. Hiervoor heb ik deze schets gemaakt. In de schets heb ik geprobeerd om mijn idee verder uit te werken, en te bedenken hoe dit zou moeten werken als ik hier CSS view transitions gebruik. Ik heb in de schets wat code snippets erbij geschreven.

- _zie img: pagination-active-state_
    

**Amenities Filters - details & fetching**

In het Blue Estate project heb ik filters voor de "amenities". Ik had in eerste instantie de data gewoon gefetched, maar dit had een negatieve impact op de performance. Om dit te voorkomen, word de data nu via een `deferred-data` route in mijn project gefetched. Ik was aan het struggelen met uitvinden hoe ik kon zorgen dat die data pas later werd gefetched, wanneer het nodig was. Toen heb ik met deze schets een idee bedacht: dit word pas opgehaald wanneer de gebruiker er om vraagt. Als het details element waar de filter in zit word een functie aangeroepen waardoor die data word gefetched.

Toen ik de flow van de interactie geschets had, heb ik een kleine code snippet toegevoegd Dit helpt mij om te bedenken hoe dit in code er uit moet komen te zien.

Deze schets heeft mij geholpen met bedenken hoe dit zou moeten werken. En heeft het mij geholpen met het vebeteren van de gebruikservaring, doordat dit mij heeft geholpen met bedenken hoe ik de skeleton state kan implementeren. Dit laat zien aan de gebruiker dat de amenities gefetched worden, en ziet er beter uit dan een blok tekst met _"Loading amenities ..."_.

- _zie img:_ _amenities-details_
    

**Infinite Carousel schets**

In het Blue Estate project, is op de home pagina een carousel. Op de originele site is deze infinite, en loopt deze constant over alle images heen. Ik heb mijn versie iets anders aangepakt. Ik ben begonnen met een CSS carousel, waar de gebruiker door heen kan scrollen. Op deze manier kan de gebruiker ook zonder JS nog alle images bekijken.

Voor de eerste versie heb ik een schets gemaakt, om voor mijzelf de html structuur en de css duidelijk te maken - _zie image carousel-JS-V1-schets_. Toen ik de CSS only versie werkend had, heb ik een nieuwe schets gemaakt, waarbij ik meer heb gekeken naar de JS.

Deze carousel wilde ik dus infinite maken. Mijn eerste idee was om elke keer als je voorbij een kaartje was gescrolld, deze aan de andere kant er weer achter te plakken. Dit idee heb ik uitgewerkt met een schets - _zie image_ _carousel-js-schets_. Mijn idee heb ik met Jason, een andere frontender, besproken, en hierbij mijn schets gebruikt om het idee duidelijker uit te leggen. Hij zei dat dit een prima aanpak was, en dat er veel verschillende manieren zijn om zoiets te doen. Hij gaf de tip om `appendChild` op te zoeken. Hier was ik nog niet bekend mee. Ik heb dit opgezocht en uiteindelijk ook gebruikt.

_Feedback Jelte 28/3: Super goed dat je ook je tekenblad gebruikt om te schrijven, niet veel mensen doen dit! hier ook hetzelfde, schrijf even kort hoe je appendchild hebt gebruikt_

Ik heb de originele eerste en laatste items (de cards) in de array gecloned. Deze heb ik dan aan de andere kant eraan geplakt met `append` en `prepend` . Als je dan op een van die cards scrolled, word je automatisch naar de originele verplaatst (met scroll: auto, waardoor het zo een jump is die instant is).

- _zie img: carousel-JS-v1 schets_
    
- _zie img: carousel-Js-schets_
    

## **Waarom is dit goede bewijslast?**

De Pagination active state is goede bewijslast, omdat ik hiermee mijn oplossingsrichting inzichtelijk maak voor mijzelf. Dit doe ik met de schets en de code snippets bij de schets.

De amenities filter is ook goede bewijslast, omdat ik hiermee een abstract idee kan overbrengen, en de oplossingsrichting inzichtelijk maak.

De carousel schets is goede bewijslast, omdat ik hier mijn idee bespreekbaar heb gemaakt met een andere frontende. Ook hielp dit om mijn idee te verduidelijken, en maakte het de oplossingsrichting inzichtelijk. Ook is dit goede bewijslast, omdat ik hier laat zien dat ik schetsen op verschillende manieren inzet.

**Leervraag:**

Hoe kan ik mijn ideeën verder uitwerken met wireframes/wireflows?

**Leerdoel:**

Ik wil tijdens mijn meesterproef, ideeën meer uitwerken met wireframes/flows/schetsen, voor ik de code in duik.

# 4.4.3
**4.4.3 Bedenkt en implementeert complexe frontend code en gebruikt daarbij de fundamentele principes van het web, API's, databases, tools en frameworks.**  
_Dit betekent dat je complexe frontend code kan bedenken en gebruiken bij een project. Hierbij gebruik je fundamentele principes (A11Y, performance, responsiveness, PE, separation of concerns, semantiek), en API's, tools (code editors, vite, devTools, git, testing tools) en frameworks._

## Wat is de bewijslast?

### Infinite Carousel

Op de home page heb ik een carousel gemaakt die oneindig over de cards loopt. Om dit te maken ben ik begonnen met de html structuur. Daarna heb ik de CSS toegevoegd, en zo gezorgd dat je door de cards kan scrollen, met scroll snapping.  
Hierna ben ik begonnen met de JS toevoegen. Ik heb eerst de `nextSlide()` functie gemaakt. Hiermee word ervoor gezorgd dat de carousel automatisch naar de volgende card gaat. Daarna de grootste uitdaging: zorgen dat de carousel infinite is. Ik wist niet zo goed hoe ik dit zou moeten doen. Ik heb een schets gemaakt om een beter idee te krijgen hierbij. Na heel wat googlen ben ik `appendChild` tegen gekomen. Dit heb ik dan ook gebruikt.  
In de `setupInfiniteCarousel` functie heb ik de eerste en laatste kaart gecloned, en aan de andere kant van de carousel er aan geplakt.  
Daarna heb ik een `handleLoopback()` functie gemaakt. Met deze functie word er gekeken of je op de originele eerste of laatste kaart ben, en wanneer dat zo is, word er naar de geclonede versie hiervan gescrolld (met scroll auto waardoor je dit niet ziet). Hierdoor lijkt het alsof het oneindig doorgaat.

Ik heb hierbij wel ook een test gedaan met toetsenbord, om te controleren of toetsenbord gebruikers gevangen zouden zitten in de carousel. Gelukkig was dit niet het geval! Na de laatste geclonede kaart kan je gewoon weer door tabben door de rest van de page.

> _Momenteel wel een klein beetje buggy als je zelf probeert te scrollen door de carousel, verder gaat het wel goed!_

- [_issue carousel_](https://github.com/lisagjh/i-love-web/issues/68)
    

### Pagination

In het Blue Estate project in Sveltekit heb ik server side pagination geïmplementeerd. Hiervoor heb ik in de `+page.server.js` eerst de `skip` en `limit` variabelen gedefinieerd. `skip` is hierbij de hoeveelheid listings die worden overgeslagen bij het ophalen van de data . `limit` is de hoeveelheid listings per pagina.  
Deze heb ik toegevoegd aan de query waarmee de listings uit de API worden opgehaald. Daarna heb ik de `totalPages` gedefinieerd, op basis van de hoeveelheid listings gedeeld door de limit. Dit word allemaal meegegeven in de `data`. Nu zitten `skip` en `limit` dus in de query en de url. Ook worden nu alleen de nodige listings eerst opgehaald, wat goed is voor de performance: er zijn 30% minder requests, 34% minder kb aan transfers, en 25% minder resources.  
Op deze manier kan ik de "pagination controls" maken met `<a>` elementen. Hier word in de `href` de `skip`, `limit` en `index` van de huidige pagina gebruikt, om dynamisch de `href` aan te passen. Ditzelfde word gedaan voor de previous en next button. Nu werkt de pagination zonder JS! Woehoe.

Nu het leukere deel: _enhancen_! ✨

Hier heb ik natuurlijk een functie met `event.preventDefault` erin, om te zorgen dat de pagina niet herlaad. Ook toggle ik hier een disabled state op de prev/next button wanneer nodig, gebruik ik een smooth scroll, word de url geupdate, en word er een view transition aangeroepen om de active state te animeren!  
Ik heb hier een `<a>` gebruikt vanwege semantiek en toegankelijkheid. Een `<a>` is bedoeld voor navigatie, en een `<button>` voor interacties. Ik had bij V1 wel een button gebruikt, maar dit dus later aangepast!

- _Zie de gif voor een demo!_
    
- [Issue Pagination](https://github.com/users/lisagjh/projects/13/views/8?pane=issue&itemId=101298929&issue=lisagjh%7Ci-love-web%7C118)
    

---

### Tools

Tijdens het developen gebruik ik verschillende tools. Zo gebruik ik BitBucket voor beheren van de Blue Estate codebase, git voor versiebeheer, FileZilla voor het werken met de elementor/php websites, TGI color contrast analyser, DevTools voor inspecteren, testen en controleren, en Figma.

## Waarom is dit goede bewijslast?

De server side pagination is goede bewijslast, omdat ik hier complexe frontend code bedenk en implementeer, werk met frameworks en APIs, en hierbij fundamentele principes van het web gebruik.  
Ik heb hier PE gewerkt door te zorgen dat de paginatie zonder JS werkt via de server side, en daarna te verbeteren met JS. Ook is dit bevorderend voor de performance doordat alleen de nodige listings worden gefetched, en dit is terug te zien in de network tab. Verder heb ik ook toegankelijkheid en semantiek hierin verwerkt door te kiezen voor de juiste html elementen: `<a>` .

### Leervraag

# 4.5.1
**4.5.1 Blijft op de hoogte van internationale ontwikkelingen in het vakgebied, omarmt verandering en maakt zelfstandig keuzes over eigen ontwikkeling.**  
_Dit houd in dat je op de hoogte blijft van ontwikkelingen in het frontend vak gebied, zoals nieuwe CSS features of frameworks, en deze veranderingen toepast. Ook maak je zelfstandig keuzes over je eigen ontwikkeling_

## **Wat is de bewijslast?**

**Internationale ontwikkelingen**

Ik blijf op de hoogte van ontwikkelingen op gebied van frontend development door verschillende mailing lists te volgen. Frontend Focus en CSS Weekly zijn mijn favoriete. The Collective van Codrops vind ik ook interessant. In deze mailings zie ik veel interessante artikelen, nieuwe HTML of CSS features langs komen, en technieken waar ik nog niet bekend mee ben langs komen.  
Zo heb ik een artikel voorbij zien komen over het [stylen van een details element](https://css-tricks.com/using-styling-the-details-element/#aa-animate-the-opening-and-closing) die ik erg goed kon gebruiken (zelfde als die Krijn stuurde)  
Ook heb ik hier bijvoorbeeld de CSS functions langs zien komen, sibling-index() en sibling-count(). Super vet 🤩

Het artikel over sibling-index en -count heb ik ook gedeeld op teams!

**Eigen Ontwikkeling & keuzes**

Tijdens de terugkomdag heb ik met andere studenten en docenten, Charley en Justus, gesproken over mijn stage ervaring en wat ik kan doen om mijn stage straks succesvol af te ronden. Hier heb ik tijdens de show n tell met andere studenten gepraat over mijn ervaring, en laten zien waar ik aan werk. Charley stond mee te luisteren en had wat vragen. Hierna ben ik hierover met Justus in gesprek gegaan. Die zei dat met een paar kleine aanpassingen ik mijn stage zeker goed kan afronden. Hiervoor moet ik wel het gesprek aan gaan _(Dorien zei bij mn endterm ook al dat ik meer van me moest laten horen)_. Dit heb ik na de TKD ook gedaan. Ik heb hierbij aan gegeven dat ik meer wil bijdragen aan een bestaand project. Victor wist meteen een goed project, Sport in Haarlem, en heeft mij hier tickets voor gegeven in Jira.

Hierbij ga ik de toegankelijkheid verbeteren van de sportkaart pagina. Om dit te doen, moet ik werken in de bestaande codebase. De website is gebouwd met Elementor, met custom code met PHP. Door deze extra taak leer ik veel verschillende dingen: code van anderen lezen, bestaande code verbeteren, werken met php (klein beetje maar), en werken met custom code in wordpress/elementor.

> _Op de TKD met Justus besproken dat ik hier mijn eigen ontwikkeling als bewijslast kon gebruiken!_

Verder maak ik ook keuzes over mijn eigen ontwikkeling door bepaalde technologieën in mijn eigen website te gebruiken; zoals GSAP. Na de talk van Cassie Evans ben ik geïnspireerd geraakt om hier meer mee te gaan doen, en dit te verwerken in mijn eigen werk als ik het niet kwijt kan in mijn stage project.  
Dit ben ik nu aan het doen in de vorm van een animatie die ik eerder al eens heb gedaan, waarbij de "ogen" van de svg de muis volgen. [hier op codepen want WIP.](https://codepen.io/lisagjh/pen/qEBoRrj) en hier [de inspiratie uit semester 2.](https://github.com/Annevd/pleasurable-ui/wiki/3.-Bouwen#svg-movement-follows-cursor)

**Verandering**

Verandering omarmen is nooit mijn sterkste punt geweest. Ik heb altijd even tijd nodig om te wennen. De eerste twee weken vond ik dan ook best pittig.  
Daarna ging het beter, en voelde ik mij meer op mijn gemak. Ik denk dat het ook wel heeft geholpen dat ik op een andere plek ben gaan zitten. Ik zat eerst in het deel van het kantoor waar de marketing en cyber security mensen zitten. Nu zit ik bij de webdevs. Dit maakte het voor mij een stuk makkelijker om mensen aan te spreken. Ik merk dat ik nu sneller vragen stel en samenwerk.  
De eerste twee weken voelde ik me erg ongemakkelijk, en vond ik de transitie erg lastig. Nu voel ik me op gemak, en heb ik het hier erg naar mijn zin. Ik heb gemerkt dat een kleine verandering, zoals een andere werkplek, een groot verschil kan maken in hoe ik mij voel en hoe comfortabel ik ben.

## **Waarom is dit goede bewijslast?**

De mailings zijn goede bewijslast, omdat ik hiermee op de hoogte blijf van ontwikkelingen in het vakgebied.

Mijn eigen ontwikkeling, het gesprek aan gaan en hierdoor oppakken van nieuwe taken, zijn ook goede bewijslast, omdat ik hiermee persoonlijke ontwikkeling doormaak en keuzes maak over mijn eigen ontwikkeling.  
Ook maak ik keuzes over mijn eigen ontwikkeling, door naast de projecten van stage bezig te blijven met andere technieken/technologieen waar ik geïnteresseerd in ben, in dit geval GSAP.

Ook is de transitie van FDND naar stage, en kleine transities binnen stage, goede bewijslast voor het omarmen van verandering.

## **Leervraag:**

Hoe kan ik beter omgaan met veranderingen en sneller mijn draai vinden in een nieuwe werkomgeving?

**Leerdoel:**

Tijdens de meesterproef wil ik een nieuwe techniek/css feature/ JS of svelte feature toepassen in mijn werk.

Ik wil mijn iloveweb uitbreiden met een blog, waar ik af en toe kan schrijven over of laten zien hoe ik met code experimenteer, zoals experimenteren met nieuwe css features, gsap, creative coding, etc etc.

---

- [Issue details element](http:// https://github.com/users/lisagjh/projects/13/views/8?pane=issue&itemId=101137850&issue=lisagjh%7Ci-love-web%7C113)
    
- [Issue gesprek TKD](https://github.com/lisagjh/i-love-web/issues/107#issuecomment-2717161348)

# 4.5.2
**4.5.2 Maakt zelfstandig nieuwe materie eigen, gebruikt dit bij beroepstaken, deelt ervaring met belanghebbenden en leert van anderen.  
**_Dit betekent dat je zelfstandig nieuwe materie leert, en dit kan toepassen bij een project. Ook deel je jouw ervaring met belanghebbenden (team, stagebegeleider, docent, tribe) en leer je van anderen (team, stagebegeleider, docent, tribe)._

## Wat is de bewijslast?

1. **Pagination**
    

Ik was met Jason in gesprek over het verbeteren van de performance van de Blue Estate site. Hij kwam met het idee om pagination te implementeren. Daarna heeft hij mij een stuk code die gestuurd, waarmee hij pagination heeft geïmplementeerd in een ander project. Dit was erg veel code, en ik wist dat dit een stuk korter zou kunnen in Sveltekit, maar de basis hiervan was een goed begin punt. Ik heb mijn eerste versie die puur client side was hierop gebaseerd. Daarna ben ik dit concept/principe meer gaan verkennen, en "server side pagination" _ontdekt_. De huidige versie is dan ook server side.

Door dit te doen heb ik weer meer geleerd over hoe client/server side code werkt, en hoe Svelte 5 werkt! Ook heeft het implementeren en optimaliseren van de pagination de mobile performance score verbeterd op de lighthouse test, van een score tussen 87-89 naar consistent een score tussen de 90-93 :)

- [Issue pagination](https://github.com/lisagjh/i-love-web/issues/118)
    

---

2. **Pagination View Transitions**
    

In week5/6 heb ik gewerkt aan het implementeren van pagination in het Blue Estate project. Toen ik de pagination eindelijk werkend had, leek het me leuk om een kleine animatie toe te voegen aan de buttons en de active state, om het wat meer pleasurable te maken. Dit heb ik gedaan met css view transitions, en een keyframes animatie die gekoppeld is aan die view transition.

Toen ik klaar was heb ik dit aan Jason laten zien. Die vroeg hoe ik die animatie heb gedaan. Toen heb ik verteld dat dit met css view transitions is gedaan. Hier was hij nog niet bekend mee, dus heb ik mijn code verder uitgelegd en mijn creative spike van sprint 17 laten zien. Na ons gesprek ging hij er zelf nog meer dingen over op zoeken.

Ik merkte wel dat ik view transitions vrij moeilijk uit te leggen vind! Ook al weet ik hartstikke goed hoe het werkt.

_Zie de demo pagination in de bijlage :)_

3. **Terug kom dag W5**
    

In week 5 van de stage, hebben we een terug kom dag gehad. Tijdens deze terug kom dag heb ik met andere studenten gepraat over hoe de stage gaat tot nu toe, of hoe hun free space is.  
Zo ook tijdens de show and tell die we deden. Deze heb ik met Anne, Nazneen en Alisa gedaan. Ik vond het erg leuk om te horen wat Nazneen en Alisa deden tijdens hun freespace, wat ze leuk vonden en minder leuk, wat hun dagelijkse taken waren, en hoe het over het algemeen ging.  
Ik vond het ook fijn om mijn stage ervaring met Anne te bespreken.  
Ik heb tijdens de show and tell laten zien waar ik aan werk, hoe ik werk, hoe de situatie hier is, etc. Hierna had Charley wat vragen, en ben ik met Justus in gesprek gegaan over wat ik kan doen om te zorgen dat ik meer (nieuwe) kennis en ervaring opdoe en mijn stage succesvol kan afronden.  
Na de terug kom dag ben ik dan ook in gesprek gegaan met Victor over hoe ik dit kan doen door meer bij te dragen aan bestaande projecten.

Door met andere studenten te praten over onze ervaringen en door met Charley en Justus te praten, ben ik mij meer bewust geworden over het feit dat ik actiever moet zijn en meer moet communiceren als ik meer kennis wil vergaren en dit wil toepassen in verschillende projecten.

4. **Delen in teams**
    

Ik houd tegenwoordig de mailings actief in de gaten. Ook scroll ik wekelijks door Bluesky. Hier kom ik veel interessante artikelen tegen. Over html features die ik nog niet ken, nieuwe CSS features die er aan komen, handige tips & tricks, echt van alles en nog wat!

De interessantste dingen deel ik via teams, in het random channel. Natuurlijk kijk ik ook naar wat anderen sturen!

## Waarom is dit goede bewijslast?

De _pagination_ is goede bewijslast, omdat ik hier laat zien dat ik van anderen leer, nieuwe materie eigen maak en toepas in beroepstaken.  
Ik leer van anderen door met Jason te praten over pagination, en zijn code als basis voor mijn eerste versie te gebruiken.  
Ik maak nieuwe materie eigen, door zelfstandig server-side pagination te onderzoeken en toe te passen. Dit sluit ook aan op het gebruiken bij de beroepstaken.

Met de view transitions laat ik zien dat ik mijn ervaring deel met belanghebbenden. Dit doe ik door met Jason hierover te praten; ik leg uit wat view transitions zijn, leg mijn code uit en laat voorbeelden zien.

De terug kom dag is ook goede bewijslast, omdat ik hier mijn ervaring deel met belanghebbenden. Hier deel ik mijn ervaring met medestudenten en docenten. Door dit te doen reflecteer ik meer op mijzelf en mijn proces, en krijg ik meer inzicht in wat ik zelf kan verbeteren.

### Leervraag:

Wat zou ik verder nog kunnen delen met collega's hier?

# 4.5.3
niet laten beoordelen.