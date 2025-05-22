
- [[#4.1.1]]
- [[#4.1.2]]
- [[#4.1.3]]
- [[#4.2.1]]
- [[#4.2.2]]
- [[#4.2.3]]
- [[#4.4.1]]
- [[#4.4.2]]
- [[#4.4.3]]
- [[#4.5.1]]
- [[#4.5.2]]


# 4.1.1
**4.1.1 Richt projecten efficiënt en effectief in volgens de development-lifecycle en houdt rekening met de beschikbare tijd**  
_Dit houd in dat je projecten kan inrichten op een efficiënte en doelgerichte manier. Hierbij maak je gebruik van de DLC, en houd je rekening met de tijd die je hebt._

---

_Leerdoel S19:  
Aan het begin van de meesterproef, bedenk ik nieuwe epic, user stories, en tasks. Dit doe ik in overleg met Victor (eventueel Tufan ook). Hierbij pas ik MoSCoW en tijdsplanning toe, om mijn effectiviteit en efficiëntie nog verder te optimaliseren._

---

## Meesterproef

Aan het begin van de meesterproef heb ik met Victor een checkin gedaan,. Hier heb ik laten zien waar ik aan werk en hoe ver ik ben. Ook hebben we besproken waar ik verder aan ga werken.

Na de checkin heb ik hier een [verslag](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=106525493&issue=lisagjh%7Ci-love-web%7C202) van geschreven en doelen opgesteld. Aan de hand van deze doelen heb ik een aantal user stories bedacht. Hier heb ik _MoSCoW_ gebruikt om de user stories te prioriteren. Hierdoor heb ik beter zicht op wat er moet gebeuren, en wat ik wanneer moet doen.

Hierna heb ik een nieuwe view gemaakt in mijn bestaande projectboard, zodat ik alles van de meesterproef op een plek heb. Deze gebruik ik samen met het status board en de roadmap. Aan het begin van de week kijk ik wat mijn doelen van deze week zijn, en daar stel ik issues voor op. Deze issues plan ik meteen in met een start en eind datum, gebaseerd op hoe groot ik de issue schat. Ik heb tijdens de meesterproef gemerkt dat ik beter word in het inschatten van hoeveel tijd iets gaat innemen. Voorheen moest ik vaak issues opnieuw inplannen omdat iets langer duurde dan ik dacht, maar nu doe ik dat een stuk minder.

Tijdens de meesterproef werk ik iteratief met de DLC. Ik gebruik het in mijn projectboard als labels op issues, om voor mijzelf duidelijk te maken wat er bij elke issue moet gebeuren, en om makkelijker dingen terug te vinden. Ook doorloop ik de DLC of delen hiervan meerdere keren tijdens het werken. Dit zie je [hier](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=105913245&issue=lisagjh%7Ci-love-web%7C190) bijvoorbeeld. Ik ga van analyseren, naar ontwerpen, naar bouwen, en terug naar ontwerpen.

Ook werk ik nu veel meer met branches. Ik merkte aan het eind van de free space dat ik steeds vaker in de knoop kwam met versiebeheer. Ik kon vaak niet de juiste commit terug vinden, of liep tegen bugs aan omdat ik aan verschillende dingen werkte op een branch. Dit kostte veel tijd. Door nu meer met branches te werken, focus ik mij op elke branch op een taak. Dit is overzichtelijker en beter onderhoudbaar.

- [issue checkin 14-4](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=106525493&issue=lisagjh%7Ci-love-web%7C202)
    
- [projectboard - meesterproef view](https://github.com/users/lisagjh/projects/13/views/14)
    

## Waarom is dit goede bewijslast?

Dit is goede bewijslast, omdat ik hier laat zien dat ik projecten efficiënt en effectief in richt, de DLC toepas en rekening houd met beschikbare tijd. Ik heb gekeken naar wat goed en minder goed werkte tijdens de free space, en op basis hiervan aanpassingen gemaakt in mijn workflow (werken met branches, nieuwe view, etc), wat mijn efficiëntie en effectiviteit verbeterd heeft!

Ook laat ik hiermee zien dat ik mijn leerdoel van sprint 19 heb behaald.
# 4.1.2

**4.1.2 Combineert principes, standaarden en best-practices op het gebied van frontend design en development en zet deze flexibel en onderbouwd in om een passende oplossing voor een opdrachtgever te realiseren**  
_Dit houd in dat je verschillende principes, standaarden en best-practices toepast en combineert om een passende oplossing voor de opdrachtgever te realiseren. Hierbij kan je onderbouwen waarom en wanneer je deze dingen gebruikt._

---

## Wat is de bewijslast?

### ComboBox component

Ik heb een nieuw component gemaakt voor het Blue Estate project. Dit component is om de listings te kunnen filteren op prijs. Dit doe ik met een "combobox", een input veld waar de gebruiker zelf een bedrag kan typen maar ook suggesties krijgt waar uit gekozen kan worden.

Ik heb rekening gehouden met allerlei verschillende dingen, zoals gebruikers verwachtingen, toegankelijkheid, error prevention.

Ik heb in dit component gebruik gemaakt van **debouncing**, om te voorkomen dat de waarde te vroeg word door gevoerd en de filter functie te vaak uitgevoerd word. Dit heb ik gedaan omdat wanneer je een minimale prijs had geselecteerd, en je begint met typen van de maximale prijs, kreeg je meteen een error en zat je vast op dat scherm. Ik heb de debouncing dus gebruikt als _error prevention_, wat in de WCAG 2.2 valt onder _3.4.4 error prevention._ Debouncing is een best practice, error prevention valt onder toegankelijkheid, wat een fundamenteel principe is.

Ook heb ik gelet op **toegankelijkheid**. Dit heb ik op verschillende manieren gedaan. Ik merkte tijdens het testen dat er een aantal problemen waren. Zo was het eerst niet mogelijk om uberhaupt bij de suggesties te komen. Om dit te fixen, heb ik de HTML structuur aangepast, waarna het wel mogelijk was.

Ik heb mij hierna eerst vooral gefocust op **toetsenbord** gebruikers, en zorgen dat het component goed te gebruiken is met een toetsenbord. Ik had een probleem waar de suggesties te vroeg gesloten werden, doordat de focus het input veld verliet. Ik heb hiervoor een tijdje rond gespeeld met `onfocus` en `onblur`, en hulp gehad van Jason. Uiteindelijk weten op te lossen door `onfocusin` en `onfocusout` te gebruiken op de parent die de input en suggesties bevat.

Daarna heb ik meer gekeken naar **ARIA** roles en attributes. Zo heb ik een `role="combobox"` toegevoegd, `aria-controls` met het id van de suggesties div, en `aria-expanded` die true/false is op basis van of de suggesties zichtbaar zijn. Op de suggesties heb ik `aria-hidden` toegevoegd, en bij elke suggestie een `aria-label`.

Ik heb ook rekening gehouden met **gebruiks verwachtingen (UX interaction patterns)**, door te zorgen dat als de gebruiker focus heeft op de input of suggesties, en je klikt buiten deze velden of op esc, worden de suggesties gesloten en de focus weg gehaald. Dit valt onder best practice, maar kan ook gezien worden als toegankelijkheid (principe).  
_zie issue toegankelijkheid._

- [issue debouncing](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=106915336&issue=lisagjh%7Ci-love-web%7C211) & [issue improve debouncing](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=107444261&issue=lisagjh%7Ci-love-web%7C215)
    
- [issue toegankelijkheid](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=106365781&issue=lisagjh%7Ci-love-web%7C199)
    
- image: demo-combobox & combobox-code
    

---

### Refactoring & component based werken

In week 12 ben ik begonnen met de `/collection/+page.svelte` meer in componenten verdelen.

De code werd erg onoverzichtelijk en rommelig. Er stonden erg veel dingen die ik goed in componenten kon opdelen. Dus dit heb ik gedaan.

De `<Sidebar>` en alles wat daar in zat kon zo in een apart component geknipt en geplakt worden. Ook het formulier in de hero heb ik in een apart component gezet.

Daarna heb ik ook gekozen om de `<ul>` met alle listing cards in een apart component te zetten.

Dit zijn dus niet erg generieke of goed herbruikbare componenten. Dit is bewust, want dat was niet het doel. Het doel was de `/collection/+page.svelte` overzichtelijker, netter, leesbaarder, en beter onderhoudbaar te maken.

Verder heb ik ook een component gemaakt die wel herbruikbaar is, het `Icon.svelte` component. Ik gebruik vaak dezelfde SVGs. Ik wilde zorgen dat als ik een icoontje wilde aanpassen, dat dat maar op een plek hoeft. Op deze manier zorg ik voor betere consistentie en makkelijker onderhoud.  
Ook is de code netter. SVGs nemen vaak veel ruimte in in de code, waardoor het rommelig, onoverzichtelijk en slecht leesbaar word. Nu is de code netter.

- [issue collection page componenten](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=107750423&issue=lisagjh%7Ci-love-web%7C222)
    
- [issue refactoren en componenten met afbeeldingen](https://github.com/lisagjh/i-love-web/issues/38#issuecomment-2829692068)
    
- image: before-refactor , after-refactor, Icon-component-code & Icon-component-use
    

---

## Waarom is dit goede bewijslast?

Het **ComboBox** component is goede bewijslast, omdat ik hier laat zien dat ik meerdere principes, best practices en standaarden toepas. Ook kan ik onderbouwen waarom ik deze toepas. Ik laat zien dat ik deze flexibel inzet, door bijvoorbeeld op verschillende manieren een principe als toegankelijkheid toe te passen: niet alleen toetsenbord navigatie verbeteren maar ook aria gebruiken.

- toegankelijkheid - _principe_: toetsenbordnavigatie, aria roles en attributen
    
- error prevention (WCAG 3.3.4) wat valt onder toegankelijkheid, maar ook best practice - net als debouncing
    
- Gebruikers verwachting (UX interaction patterns) - sluiten op klik buiten het veld of op esc
    

**Refactoring en components** is ook goede bewijslast, omdat ik hier het principe DRY & clean code heb toegepast. Dit doe ik door alle iconen op een plek te zetten. Dit maakt onderhoud makkelijker, verbetert schaalbaarheid en consistentie, en maakt de code netter en leesbaarder.  
Ook laat ik zien dat ik flexibel ben in het toepassen van best practices en conventies: sommige componenten zijn generiek en herbruikbaar, en ander totaal niet. Ik maak hier een bewuste keuze, om mijn code netter & overzichtelijker te maken. Hiermee laat ik zien dat ik niet zomaar dingen doe, maar kan onderbouwen waarom ik dit doe.


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

---

_Leerdoel S19:_  
Vaker Jason en Danielle om feedback vragen! en eigenlijk gewoon wekelijkse reviews inplannen tijdens de meesterproef!  
En Gian of Yannick inschakelen wanneer ik hulp nodig heb bij de performance.

---

## Wat is de bewijslast?

## Checkins en Reviews

Tijdens mijn stage werk ik samen met verschillende mensen. Zo hou ik checkins met Victor, vraag ik design feedback aan Danielle en Yasmine, en soms Tufan, en stel ik code vragen aan Jesaya en remote devs, Kween, Maxim, Edgar.

### Checkins

Ik neem het initiatief in het organiseren van de samenwerking. Zo vraag ik Victor vrijwel wekelijks (soms om de week) of hij tijd heeft voor een checkin. Hier laat ik dan altijd even zien waar ik aan heb gewerkt. Ik vertel dan hoe ik dit heb gedaan, maar ook waar ik tegen aan loop.

Zo ook tijdens deze [checkin](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=106525493&issue=lisagjh%7Ci-love-web%7C202). Hier heb ik laten zien wat ik in de weken daarvoor heb gemaakt, het Blue Estate project en Sport in Haarlem. Daarna hebben we besproken wat ik zou willen presenteren aan de klant.

Deze checkins zijn voor mij erg waardevol, omdat Victor altijd wel weet bij wie ik daar voor terecht kan als hij zelf geen antwoord heeft. Vooral als het een remote developer is, die ken ik niet zo goed en spreek ik erg weinig, dus ik weet niet waar hun expertise ligt.

- [issue checkin 14-4](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=106525493&issue=lisagjh%7Ci-love-web%7C202)
    

### Reviews

Ook vraag ik Danielle vaak om feedback. Zo heb ik echt veel aan haar feedback gehad bij het ontwerpen en ontwikkelen van de detail page van de listings. Ik had zelf een ontwerp gemaakt in Figma. Deze heb ik aan Danielle gepresenteerd, en feedback op gevraagd. Op basis hiervan heb ik een nieuwe versie gemaakt. Daarna ben ik dit gaan bouwen. Tijdens het bouwen heb ik ook feedback gevraagd. Deze heb ik toen meteen toegepast.

Sinds eind april is er ook een web design stagiaire, Yasmine (CMDer!). Dus haar vraag ik ook om feedback. Zo heb ik haar om wat meer algemene feedback op het ontwerp van Blue Estate Agency gevraagd.

Beide zijn voor mij erg waardevol! Mijn designers eye is nog niet zo goed getraind, dus mij vallen sommige dingen, zoals een oneven padding bijvoorbeeld, niet zo erg op. Maar ook andere tips, zoals sommige dingen makkelijker maken voor de gebruiker (i[ssue)](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=108737352&issue=lisagjh%7Ci-love-web%7C247), heb ik erg veel aan!

- [issue design listing detail page](https://github.com/users/lisagjh/projects/13/views/8?pane=issue&itemId=105017978&issue=lisagjh%7Ci-love-web%7C175)
    
- [issue design review Yasmine 01-05](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=108700765&issue=lisagjh%7Ci-love-web%7C244) & [](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=108700765&issue=lisagjh%7Ci-love-web%7C244)[feedback design review](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=108737352&issue=lisagjh%7Ci-love-web%7C247)
    

### Reflectie

Sinds het faillisement van WPinaDay is er wel het een en ander veranderd. Zo werkt Jason hier nu niet meer, en moet ik mijn code technische vragen aan anderen vragen. Hiervoor ga ik nu naar Jesaya, software engineer / computer science student / backend? stagiair. Hij werkt wel met frameworks, dus dat is wat dat betreft wel makkelijker.

Ik vind de samenwerking hier nog steeds erg fijn! Ik had als doel om vaker reviews te doen, en dat doe ik ook. Ik vraag nu vaker design feedback, en merk dit verschil ook in mijn werk. De listing detail page ziet er echt een stuk beter uit!

## Waarom is dit goede bewijslast?

### Leerdoel

Ik wil proactief blijven in het organiseren van samenwerking als junior developer.

# 4.2.2 
**4.2.2 Draagt verantwoording voor eigen en teamresultaten en stuurt verwachtingen van belanghebbenden.**  
_Dit houd in dat je verantwoording neemt voor de resultaten voor jouzelf en hoe dit bijdraagt aan het team, en dat je zorgt dat de belanghebbenden (opdrachtgever, begeleider) realistische verwachtingen heeft._

---

## Wat is de bewijslast?

### Real Estate Recommendation Bot

Ik heb gewerkt aan de Real Estate Recommendation Bot. Dit project is een chatbot met openAI's ChatGPT, die de gebruiker helpt om het perfecte vakantiehuisje te vinden. Ik heb over deze opdracht een briefing gehad van Victor. Mijn opdracht is om met React en Tailwind de frontend te bouwen. Ik heb nog nooit met React gewerkt, en alleen bij Sport in Haarlem een paar kleine aanpassingen gemaakt met Tailwind.

Victor wist al dat ik nog geen ervaring heb met React, dus ik heb aangegeven dat ik mij eerst hier in zou gaan verdiepen voordat ik het project in duik. Ik ben begonnen met het lezen van de React docs, en het volgen van hun "tic tac toe" tutorial. Ik had dit tijdens de briefing gezegd.

Ik ben hierna begonnen met het analyseren van de opdracht. Hier heb ik voor mijzelf duidelijk gemaakt wat de opdracht is, wat het moet hebben, welke states, welke look. Aan de hand hiervan ben ik mij gaan verdiepen in het bouwen van een chatbot en het ontwerp hiervan, specifiek op het vlak van "Conversation Design".

Ik had bij dit project weer alle vrijheid met het ontwerp. De enige eisen waren "sophisticated, light, subtle shadows, round corners". Een beetje dezelfde vibe als Blue Estate. Ik heb eerst een aantal schetsen gemaakt, en deze daarna in Figma uitgewerkt. Ik heb op de Figma ontwerpen feedback gevraagd aan Danielle en Yasmine, en deze feedback toegepast. Toen ik het ontwerp had doorgevoerd in het project, heb ik het aan Victor laten zien. Hij was er erg enthousiast over.

Verder had Victor mij ook gevraagd om te letten op verbeterpunten van de chatbot, zodat de backender dit zou kunnen aanpassen. Dit heb ik dus ook gedaan. Zo miste ik bijvoorbeeld de afbeeldingen van de properties – het is immers voor de gebruiker ook fijn om te zien wat hij boekt. Daarnaast waren er voornamelijk verbeterpunten op conversationeel vlak; de bot laat niet alle opties zien, hij vergeet snel eisen die je al hebt genoemd, hij kan je niet informeren over bestemmingen. Deze punten zouden de ervaring van de gebruiker een stuk fijner maken. Ik heb dit met Victor gedeeld, hij gaat het met de backender bespreken.

- [issue briefing](https://github.com/lisagjh/i-love-web/issues/167)
    
- [opdracht analyse](https://github.com/lisagjh/i-love-web/issues/166?issue=lisagjh%7Ci-love-web%7C237)
    
- [React basics](https://github.com/lisagjh/i-love-web/issues/166?issue=lisagjh%7Ci-love-web%7C221)
    
- [ontwerp en feedback](https://github.com/lisagjh/i-love-web/issues/166?issue=lisagjh%7Ci-love-web%7C251)
    

### Sport in Haarlem - Jira

Ik ben bezig met de data van SIH te verrijken met een nieuwe API. Ik heb hiervoor een aantal tickets toegewezen gekregen in Jira.

De eerste taak was om de nieuwe SportSupport API te verkennen en onderzoeken, deze te analyseren en vergelijken met de bestaande data, en aan de hand hiervan een lijst van overeenkomende en verschillende data punten te maken. Dit heb ik gedaan, en mijn conclusie heb ik in de comment van de taak gezet.

Een andere taak was om de huidige sportkaart codebase te verkennen. Dit ging een beetje hand in hand met de verkenning van de nieuwe API, omdat ik hier heb gekeken naar hoe nu de data word opgehaald en gebruikt. Op deze taak kwam een aanvulling van Kween; controleer de huidige `collection.php` file, en vul aan met de accessibility improvements. Hierbij moet ik zorgen dat al mijn accessibility aanpassingen in de geupdated file staan, de functionaliteit hetzelfde blijft, en dit uitvoerig testen.  
Ik heb dit gedaan door de ticket en tasks die ik had voor de accessibility improvements langs te gaan, en alles te controleren, en eventueel aan te passen. Dit duurde vrij lang, doordat dit een groot file is, en het vaak niet erg duidelijk is wat waar staat. Toen ik alles had aangepast heb ik opnieuw getest met lighthouse, screenreader en keyboard navigation. Hier kwam ik nog een paar kleine issues tegen, zoals missende of onduidelijke aria-labels, verkeerde heading order, een item met tab-index die het niet zou moeten hebben. Deze issues heb ik ook aangepast.

Hierna heb ik op de task een comment gezet waar ik kort door alle aanpassingen ga, en laat weten dat ik dit getest heb en op welke manier.

- [issue onderzoek SportSupport API](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=110445771&issue=lisagjh%7Ci-love-web%7C259)
    

## Waarom is dit goede bewijslast?

De **Real Estate Recommendation Bot** is goede bewijslast, omdat ik hier verantwoording draag voor de resultaten van mij en het team, en de verwachting van belanghebbenden stuur. Ik stuur de verwachting van Victor, door te laten weten dat ik eerst ga leren over React voor ik er mee ga bouwen. Ook draag ik verantwoording voor resultaten door te zorgen dat het niveau van de code en het resultaat goed is. Dit doe ik door mij te verdiepen in de technologie, door mijn ontwerp te laten reviewen door de designers en hun feedback toe te passen, en door te letten op verbeterpunten (zoals de afbeeldingen of conversationele punten).

**Sport in Haarlem - Jira** is goede bewijslast, omdat ik hier verantwoording draag voor de resultaten van mij en het team. Ik draag hier verantwoording voor eigen resultaten, door de taken op te pakken en te zorgen dat mijn aanpassingen doorgevoerd worden. Ik draag verantwoording voor teamresultaten door te zorgen dat het werk van anderen behouden blijft, en dat de functionaliteiten hetzelfde zijn na mijn aanpassingen.
# 4.2.3
**4.2.3 Houdt rekening met diversiteit binnen teams en handelt respectvol naar anderen.**  
_Dit houd in dat je rekening houd met verschillen binnen het team en zijn leden. Je bent respectvol naar andere teamleden._

---

### Houdt rekening met diversiteit binnen teams ...

Tijdens mijn stage houd ik rekening met de diversiteit binnen teams. Dit doe ik op verschillende vlakken, zoals expertise, rol, en achtergrond.

Een voorbeeld hiervan is dat wanneer ik hulp nodig heb met JS ik Jason om hulp vraag. Als ik feedback wil op het ontwerp, vraag ik Danielle. Als ik specifieke project gerelateerde vragen heb ga ik naar Kween of Victor.

Ook communiceer ik met verschillende mensen anders gebaseerd op hun expertise. Als ik aan Victor laat zien waar ik aan werk gebruik ik frontend vak taal en code termen. Als ik Danielle laat zien waar ik feedback op wil doe ik dit niet en gebruik ik algemene termen. Door dit te doen, is het voor mij en mijn gesprekspartner duidelijk waar we het over hebben, en ontstaat er geen verwarring door het gebruik van onbekende termen.

### ... en handelt respectvol naar anderen.

Ook handel ik respectvol. Danielle is engels, dus met haar spreek ik dan ook Engels. Ik vind het vaak lastig om duidelijk te beschrijven wat ik bedoel, dus ik vraag haar dan ook vaker of ze begrijpt wat ik bedoel. Ik ben respectvol door in een taal te spreken die wij beiden kunnen begrijpen.

Verder ben ik respectvol door op stage anders met collega's om te gaan, dan ik op school met klasgenoten zou doen. Ik weet dat ik met sommige klasgenoten een grapje kan maken of een sarcastische opmerking, en dat we er om kunnen lachen. Op stage doe ik dat niet, omdat dat als onprofessioneel, respectloos, of onbeleefd over zou kunnen komen.

Een ander voorbeeld hierbij is hoe ik Kween op de hoogte stel van een bug die ik tegen kwam bij Sport in Haarlem, in de masonry grid waar zij aan gewerkt heeft. Ik was mijn changes aan het testen op de dev site. Ik ging van de kaart view terug naar de lijst view, toen zag ik dat de grid horizontale overflow had. Ik heb toen een screen recording gemaakt waar ik liet zien hoe ik dit kreeg; eerst in de lijst view wat er goed uit ziet, dan naar de kaart en terug naar de lijst, wat er dan ineens heel anders uit ziet.  
Daarna heb ik Kween een bericht gestuurd, waar ik haar laat weten dat ik een bug heb gevonden met de masonry grid, en vertel hoe ik hier op gekomen ben. Hier voeg ik de recording bij.

Ook bedank ik anderen altijd voor de hulp die ze mij bieden.

## Waarom goede bewijslast?

Dit is goede bewijslast, omdat ik hiermee laat zien dat ik respectvol ben in de omgang met mijn collega's op stage. Dit laat ik op verschillende manieren zien. ZO houd ik rekening met verschillende rollen, expertises en achtergronden. Ook stel ik mij op stage anders op dan ik op school met klasgenoten zou doen. Verder stel ik mijn collega op de hoogte van een bug. Dit doe ik op een respectvolle manier.

# 4.3.1

**4.3.1 Betrekt gesprekspartners, luistert, vat samen, verifieert en vraagt door tot een boodschap helder is.**  
_Je zorgt dat iedereen op een lijn zit door aandachtig te luisteren, samen te vatten, en door te vragen._

---

## Wat is de bewijslast?

### Real Estate Chatbot

Ik heb van Victor een briefing gehad over dit project. Dit project is een chatbot die de gebruiker helpt om een vakantiehuis te vinden die aansluit op hun wensen. De backend word gedaan door iemand anders. Voor mij is de opdracht om de frontend te bouwen met React en Tailwind.

Tijdens deze briefing hebben we het dus daarover gehad. Victor vroeg mij ook om hier te letten op verbeterpunten. Ik snapte niet helemaal wat hij bedoelde, dus daar heb ik op door gevraagd. Toen legde hij uit dat de backend momenteel nog erg minimaal is, en er nog veel ruimte voor verbeteringen is. Zo is er op conversationeel gebied nog veel te winnen, maar ook op het vermogen en mogelijkheden van de bot. Hierna was het voor mij duidelijk, en heb ik hier tijdens het bouwen op gelet.

Ook heb ik na de briefing de opdracht geanalyseerd. Ik heb duidelijk en overzichtelijk opgeschreven wat het product moet bevatten en hoe het er uit moet zien. Hierbij heb ik ook onderzoek gedaan naar "Conversational Design". Hierdoor krijg ik een dieper begrip op wat de opdracht inhoud en hoe ik dit kan aanpakken.

- [issue briefing](https://github.com/lisagjh/i-love-web/issues/166?issue=lisagjh%7Ci-love-web%7C167)
    
- [issue analyse](https://github.com/lisagjh/i-love-web/issues/166?issue=lisagjh%7Ci-love-web%7C237)
    

### Klant Presentatie

Op vrijdag 16 mei heb ik mijn Blue Estate project en de Chatbot gepresenteerd aan de klant, samen met Victor. De meeting was online.

Ik ben de presentatie begonnen door te vertellen dat mijn focus ligt op toegankelijkheid en performance, samen met het behouden van de look and feel van de website. Ik heb eerst de home en collectie page laten zien. Daarna de detail page. Op de originele versie stond boven aan een grote foto, over de hele breedte. Deze heb ik vervangen door een grid van meerdere fotos. De klant gaf aan dat zij hun foto's erg mooi vinden, en het belangrijker vinden om op een foto zoveel mogelijk te laten zien, en niet meer foto's waar je minder op ziet. Ik heb toen gezegd dat ik dit zal aanpassen.

Er waren nog een paar andere feedback puntjes. Soms kon ik niet goed verstaan wat ze zeiden (ze zijn Frans, en geluid via teams is niet altijd geweldig). Op zulk soort momenten heb ik gevraagd wat ze bedoelde. Een aantal keer was het voor mij niet helemaal duidelijk wat er bedoeld werd met een opmerking. Toen heb ik om verduidelijking gevraagd, door zoiets te zeggen als "Oh bedoel je _dit_?".

Na afloop zei Victor dat hij het erg goed vond gaan, en dat de klant enthousiast was! Vervolgens heb ik de feedback genoteerd, en een verslag geschreven van de presentatie.

- [issue verslag presentatie](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=111038260&issue=lisagjh%7Ci-love-web%7C261)
    

## Waarom is dit goede bewijslast?

De **Real Estate Chatbot** is goede bewijslast, omdat ik hier luister naar de opdracht en doorvraag op punten die niet duidelijk zijn. Ook laat ik zien dat ik heb geluisterd naar de briefing, door de opdracht uitgebreid te analyseren.

De **Klant Presentatie** is goede bewijslast. Ik laat zien dat ik luister naar mijn gesprekspartners en zorg dat we op een lijn zitten, door aandachtig te luisteren, door te vragen, bevestiging te vragen, en een verslag te schrijven van de presentatie.

# 4.3.2

**4.3.2 Presenteert en onderbouwt op overtuigende wijze ontwerpkeuzes, eigen ideeën en producten passend bij het publiek.  
**_Dit houd in dat je jouw keuzes en ideeën binnen ontwerp en ontwikkeling kan presenteren en onderbouwen. Dit doe je op een manier wat bij jouw publiek past._

---

## Wat is de bewijslast?

### Checkins Victor

Op 14 april heb ik een checkin gedaan met Victor. Tijdens deze checkin heb ik mijn vooruitgang met Blue Estate laten zien, gepresenteerd wat ik allemaal met Sport in Haarlem heb gedaan, en besproken waar ik verder aan ga werken.

Ik ben begonnen met de progressie van Blue Estate te laten zien. Zo heb ik verteld dat ik bezig ben met het implementeren van de prijs filter. Ik heb mijn idee verteld. Ik wil een combobox component maken waarbij de gebruiker zelf een prijs kan intypen of uit suggesties kan kiezen. Ik heb hierbij verteld hoe dit werkt, en wat ik heb gedaan om dit toegankelijk te maken. Zo heb ik bijvoorbeeld verteld dat ik hier debouncing heb gebruikt, om een error te voorkomen wanneer de ingevoerde waarde een invalid range geeft. Ik heb hier wat meer uitleg over gegeven, zoals dat dit word getriggerd wanneer de user iets typt, bij `onkeyup` , en dat dan een timer word gestart.

Tijdens deze checkin gebruik ik frontend vak taal en technische termen, omdat ik weet dat Victor hier kennis van heeft en zeer technisch is.

- [issue checkin 14-4](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=106525493&issue=lisagjh%7Ci-love-web%7C202)
    

### Design Reviews

Ik heb tijdens mijn meesterproef de detail page van de listings opnieuw ontworpen. Dit heb ik gedaan met Danielle. Tijdens dit proces heb ik haar vaak om feedback gevraagd.

Zo hebben we een review gedaan tijdens de ontwerp fase. Ik had een ontwerp gemaakt in Figma, en deze aan Danielle gepresenteerd. Ik ben begonnen met haar de originele pagina laten zien. Hierbij heb ik verteld wat mij opviel, en wat ik dacht dat beter kon. Daarna heb ik mijn ontwerp gepresenteerd. Hierbij heb ik verteld hoe ik punten uit mijn analyse heb verbeterd, en waar ik tegen aan liep.

Er is nu ook een design stagiair van CMD, Yasmine. Aan haar vraag ik ook feedback.

Tijdens reviews en feedback momenten met Danielle of Yasmine, gebruik ik geen technische termen. Ik gebruik wel UX/UI termen, zoals visuele hiërarchie, whitespace, alignment, etc.

- [issue feedback detail page](https://github.com/lisagjh/i-love-web/issues/175#issuecomment-2778429368)
    

### Klant Presentatie 16 mei

Op 16 mei heb ik de Blue Estate site en de chatbot gepresenteerd aan de klant. Dit was online met Victor en de klant, 2 franse dames. Ik ben begonnen met vertellen dat ik voornamelijk aan de collectie page van Blue Estate heb gewerkt, en dat mijn focus lag op het combineren van toegankelijkheid en performance met een visueel aantrekkelijk en goed werkend product.

Ik heb eerst de homepage laten zien, waaronder de carousel. Ik heb uitgelegd dat ik het ontwerp heb aangepast, om deze carousel echt in de pagina te integreren, en het niet alleen maar een slideshow te laten zijn. Dit heb ik gedaan door de styling aan te passen, zodat dit aansluit op de huisstijl en de vibe van blue estate.

Daarna ben ik verder gegaan naar de collection page. Ik heb verteld dat ik een aantal aanpassingen heb gemaakt, en in overleg met Tufan de cards van de listings heb aangepast. Zo staat er nu geen tekst meer op, en heeft het een carousel met meerdere images in plaats van 1. Ook heb ik gedemonstreerd dat het volledig toegankelijk is met toetsenbord, en dat dit ook in de lighthouse score terug te zien is. Helaas scoorde de performance wel iets minder dan gewoonlijk (nu 87, normaal 90-93 (mobiel)). Hier was de klant erg enthousiast over.

Daarna heb ik de detail page van de listing gepresenteerd. Hier heb ik ook weer verteld dat ik de pagina volledig opnieuw heb ontworpen. Ik heb hierbij verteld dat ik heb gekozen voor een grid van 5 foto's in plaats van 1 foto, omdat dit er clean en netjes uit ziet, en de gebruiker in een oog opslag een goed beeld van de woning geeft. De klant was hier niet super enthousiast over, omdat de afbeeldingen nu als vierkant worden bij gesneden en er hierbij stukjes van de foto verloren gaan. Ik snapte haar punt, maar persoonlijk denk ik dat op deze manier de verhoudingen van de afbeeldingen ten op zichtte van de pagina wel een stuk beter uit komen.

Tijdens deze presentatie heb ik geen technische termen gebruikt, en mijn keuzes en gedachtes zo duidelijk mogelijk uitgelegd. De klant heeft geen technische kennis, dus dit is hier passend.

Na de presentatie zei Victor dat hij het erg goed vond gaan, en dat hij de klant erg enthousiast vond over mijn versie van de website! Altijd fijn om te horen :)

- [issue verslag presentatie](https://github.com/users/lisagjh/projects/13/views/14?visibleFields=%5B%22Title%22,%22Status%22,%22Labels%22,133392529,133392554,%22Parent+issue%22,184698587%5D&pane=issue&itemId=111038260&issue=lisagjh%7Ci-love-web%7C261)
    

## Waarom is dit goede bewijslast?

De **Checkins met Victor** zijn goede bewijslast, omdat ik hier laat zien dat ik mijn werk en ideeën duidelijk kan vertellen. Dit doe ik met frontend taal en technische termen, wat past bij dit publiek.

De **Design Reviews** zijn ook goede bewijslast. Hier laat ik ook zien dat ik mijn ideeën en ontwerpkeuzes duidelijk kan overbrengen, zonder technische termen te gebruiken.

De **Klant Presentatie** is goede bewijslast, omdat ik hier mijn ontwerpkeuzes en ideeën presenteer. Dit doe ik door te vertellen welke aanpassingen ik heb gemaakt en waarom ik dit heb gedaan. Dit heb ik gedaan op een manier die begrijpelijk is voor de klant.

# 4.3.3

**4.3.3 Documenteert op professionele wijze en bespreekt voortgang met belanghebbenden.  
**_Dit houd in dat je tijdens het werken aan een project documenteert op een manier die professioneel is. Je bespreekt je voortgang met belanghebbenden, zoals de opdrachtgever of stagebegeleider._

---

## Wat is de bewijslast?

### Issues met documentatie

Voor het Blue Estate project houd ik een eigen projectboard met issues bij. Hier documenteer ik alles. Ik heb hier meerdere views die ik gebruik: meesterproef tabel (alles na week 10), status board, en een roadmap. Ik maak gebruik van parent- en sub-issues. Dit helpt mij heel erg met het bewaren van overzicht. Zo heb ik bijvoorbeeld parent issues per week. Hier begin ik elke week met bepalen wat ik die week wil doen of bereiken, of wanneer ik bijvoorbeeld een checkin met Victor heb. Ook schrijf ik (bijna) elke dag kort wat ik ga doen en wat ik gedaan heb. Bij de week parent issue maak ik dan subissues van de dingen die ik ga doen die week, bugs of verbeterpunten die ik tegen kom, of andere dingen die gedaan moeten worden.

Ook heb ik een parent issue met openstaande maar niet urgente issues. Hier staat nu bijvoorbeeld nog dat ik voor Blue Estate een readme moet schrijven en de conventies daarbij in een markdown file moet zetten.

Ook gebruik ik hier labels bij. Ik gebruik labels om aan te geven waar de issue voor is, bijvoorbeeld een bug, een enhancement, of een review. Ik gebruik ook labels voor de DLC. Dit is voornamelijk om mijn eigen overzicht te bewaren. Op deze manier zie ik meteen wat ik moet doen, of wat ik kan vinden in die oude issue.

Deze manier van werken werkt voor mij erg goed. Ik heb op deze manier goed grip op mijn taken, wat ik nog moet doen, en wat ik al gedaan heb.

### Date Picker

Een goed voorbeeld van mijn werk wijze is [deze issue](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=107450226&issue=lisagjh%7Ci-love-web%7C216), over de date picker die ik heb gebouwd voor Blue Estate. Ik ben hier begonnen met een analyse, ik heb met Jason besproken hoe ik dit zou kunnen doen en hier aantekeningen van gemaakt. Daarna laat ik zien hoe ik zijn advies volg; door een prototype te bouwen waar ik zelf een datum typ en bij een listing check. Toen dat werkte heb ik bedacht wat de volgende stappen zijn, en ben ik deze gaan afwerken.

Ik documenteer nu ten opzichte van de eerste 10 weken stage niet meer alles van een onderwerp in een en dezelfde issue, maar ik verdeel het over issues. Op deze manier houd ik veel kleinere taken over, die voor mij makkelijker te managen zijn. Ook blijf ik hierdoor meer aan een ding werken, in plaats van allerlei side quests tussendoor omdat ik weer dingen bedenk of zie.

Ik documenteer nog steeds in een main issue, zoals hier bij de date picker. Ik heb dus die stappen bedacht, en voor elke stap een aparte issue aangemaakt. In deze main issue verwijs ik welk terug naar de drie stappen, met issue nummer. Voor mij werkt dit goed, omdat het overzichtelijk blijft en alles makkelijker terug te vinden is.

- [issue date picker bouwen](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=107450226&issue=lisagjh%7Ci-love-web%7C216)
    

### Jira documentatie

Bij Sport in Haarlem kreeg ik de taak om de data van de sportkaart te verrijken met een nieuwe API van SportSupport. Deze taak was verdeeld over meerdere subtaken in Jira.

Een van de taken was het verkennen van de huidige sportkaart codebase. Kween heeft deze daarna aangevuld met dat ik moet zorgen dat mijn aanpassingen met betrekking tot toegankelijkheid in de huidige versie van de `collection.php` file staan, en deze eventueel toevoegen en aanpassen. Hierbij moet ik ook zorgen dat geen van de huidige functionaliteit verloren gaat.

Ik ben gestructureerd aan de slag gegaan. Ik heb mijn eerdere aanpassingen terug gezocht via documentatie in de desbetreffende tickets en een lokaal back up file. Ik heb de volledige pagina getest met screenreader, keyboard-navigatie en Lighthouse. De resultaten en gemaakte aanpassingen heb ik terug gekoppeld in een comment. Hier beschrijf ik wat ik heb gedaan, hoe ik dit getest heb, en dat alles nog werkt zoals verwacht.

- img: SIH-ticket-jira
    

---

### Bespreekt voortgang

Ik doe ongeveer eens in de week of eens in de twee weken een checkin met Victor. Dit verschilt, en ligt aan hoeveel ik te bespreken heb en hoe druk hij het heeft. Als ik bijvoorbeeld een hele week bezig ben met een feature implementeren, wat langzaam maar zeker lukt, heb ik die week niet zo veel te vertellen en zie ik de nood er niet altijd van in. Gelukkig heb ik vaker wel dan niet genoeg te bespreken.

> **_Volledige verslagen staan in de issues !!_**

#### 14-4

Op 14 april heb ik een checkin gehad met Victor. Hier heb ik mijn progress met Blue Estate laten zien, en de nieuwe features die ik heb geïmplementeerd gepresenteerd. Ook heb ik hier de nieuwe detail pagina laten zien, en verteld dat ik deze zelf heb ontworpen en met feedback van Danielle heb verbeterd. We hebben hier ook gekeken naar wat ik nog verder wil af ronden, en hier heb ik user stories voor opgesteld.

Verder hebben we het gehad over Sport in Haarlem. Ik heb laten zien wat ik heb gedaan, en de dingen die ik heb aangepast of toegevoegd buiten de tickets om. Hierbij heb ik verteld dat het veel kleine aanpassingen waren, met een groot verschil. Daarna heb ik een briefing gehad over het nieuwe project, een Real Estate Chatbot. Ik ga hiervoor de frontend bouwen met React.

#### 29-4

op 29 april heb ik weer de progressie van Blue Estate laten zien; het prijsfilter/combobox laten zien + de toegankelijkheid, en de work in progress datepicker. Verder heb ik de detail page die nu af is laten zien, en de gallery die daar bij hoort + de fancy animated gallery. Daarna hebben we het gehad over een presentatie voor de klant, die we nog graag willen doen.

Ook zijn we hier nog even terug gekomen op de Real Estate Chatbot waar ik eerder een briefing van had gehad.

- [checkin Victor 14 april](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=106525493&issue=lisagjh%7Ci-love-web%7C202)
    
- [checkin Victor 29 april](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=108426512&issue=lisagjh%7Ci-love-web%7C240)
    

---

## Waarom is dit goede bewijslast?

De **issues met documentatie** is goede bewijslast, omdat ik hiermee laat zien dat ik op een professionele manier documenteer. Ik gebruik hier verschillende tools om het overzichtelijk te houden, zoals de roadmap, parent/subissues, en labels.

De **Jira documentatie** is ook goede bewijslast, omdat ik hier laat zien dat ik op een professionele manier documenteer in een teamomgeving. Dit doe ik door mijn voortgang en resultaten te documenteren in de comments van de Jira tasks. Op deze manier is het voor mij en anderen duidelijk en inzichtelijk wat ik heb gedaan.

De **checkins** zijn goede bewijslast, omdat ik hier mijn voortgang bespreek met Victor, mijn stagebegeleider. Ik laat hier zien dat ik op verschillende momenten met Victor bespreek waar ik aan werk, waar ik tegen aan loop, en waar ik aan ga werken.


# 4.4.1
**4.4.1 Analyseert een vraag, signaleert knelpunten, kiest onderbouwd oplossingsrichting en valideert resultaten.**  
_Dit houd in dat je een vraag analyseert, eventuele problemen signaleert, en op basis hiervan een oplossingsrichting kan kiezen en onderbouwen. De resultaten van de analyse controleer je._

---

## Wat is de bewijslast?

### Real Estate Recommendation Bot

Aan het begin van de meesterproef, op maandag 14 april (begin week 11) heb ik met Victor een checkin gedaan. Hier heb ik laten zien hoe ver ik ben en waar ik nu aan werk. Ook hebben we besproken waar ik verder aan ga werken.

Tijdens de checkin heb ik ook een briefing gehad van Victor over een nieuw project, de _Real Estate Recommendation Bot._ De backend hiervan word gedaan door een backender, Maksim. Voor mij is de opdracht om de frontend hiervan te bouwen. Dit moet gedaan worden met React.  
Hier kwam ik meteen twee grote knelpunten tegen:

- ik heb nog nooit gewerkt met React
    
- ik heb nog nooit een "AI chat bot" gebouwd
    

In de frontend stond al een skelet van een React project, en een beetje React code. Hier heb ik naar gekeken, niks van gesnapt en gesloten. Toen heb ik besloten eerst wat React te leren, om de basics te leren, er achter te komen hoe het werkt en wat er zo bijzonder aan is. Dit doe ik in een aparte [repo op github](https://github.com/lisagjh/react-intro). Ik heb Victor ook geïnformeerd dat ik eerst wat basis kennis van React wil hebben voor ik in dit project duik. Hij ging hier mee akkoord.

Ik ben hierna begonnen met het analyseren van het project. Ik heb opgeschreven wat het moet bevatten (compact results en expanded view states) en hoe het er uit moet zien. Hierna ben ik meer onderzoek gaan doen naar chatbots. Hier heb ik een bron gevonden over "conversation design".

- [issue analyse](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=108205745&issue=lisagjh%7Ci-love-web%7C237)
    
- image: analyse-RE-bot , issue-re-bot, ticket-re-bot
    

### Blue Estate Agency - Meesterproef

Tijdens die checkin op 14 april heb ik ook met Victor gekeken naar wat ik verder ga doen met Blue Estate. Ik had al gevraagd of ik dit project zou kunnen presenteren aan de klant, ergens rond eind mei. Victor gaat hier een afspraak voor in plannen.

Tijdens deze checkin hebben we besproken welke features en functionaliteiten ik nog zou willen toevoegen. Zo hebben we het gehad over een availability filter implementeren, en zorgen dat de prijs filter dan ook matched met de prijs van de geselecteerde datums.  
Na dit gesprek heb ik nog een keer naar de originele website gekeken, en een aantal [user stories](https://github.com/lisagjh/i-love-web/issues/203#issue-2996208611) bedacht.

Bij een aantal van deze user stories heb ik geen idee hoe ik dit moet doen, aanpakken of hoe dit zou werken. Dit waren voor mij een aantal knelpunten. Zo heb ik geen idee hoe ik een filter moet maken voor beschikbaarheid, of waar ik sommige data moet vinden. Hiervoor ga ik hulp vragen bij verschillende mensen.

- [issue meesterproef - user stories](https://github.com/lisagjh/i-love-web/issues/203#issue-2996208611)
    
- image: userstories
    

---

## Waarom is dit goede bewijslast?

**Real Estate Recommendation Bot** is goede bewijslast, omdat ik hier de vraag analyseer, knelpunten signaleer en een oplossing kies. Dit doe ik door de opdracht analyseer en knelpunten signaleer, zoals het feit dat ik geen ervaring heb met React. Hierbij kies ik een oplossing, door eerst zelf met React aan de slag te gaan. Ook heb ik onderzoek gedaan naar het bouwen van een chatbot en _conversation design_.

**Blue Estate Agency** is goede bewijslast, omdat ik hier analyseer wat er nog gedaan moet worden aan het project voor de presentatie aan de klant. Hierbij signaleer ik ook knelpunten; ik weet hoe sommige dingen werken, of waar ik die data moet vinden.

# 4.4.2

**4.4.2 Schetst om gedachten en processen bespreekbaar te maken, abstracte begrippen over te brengen en de oplossingsrichting inzichtelijk te maken.**  
_Dit houd in dat je schetsen kan gebruiken om een idee te bespreken met een ander, duidelijk te maken wat je bedoelt en inzicht te creëeren in de oplossing._

---

## Wat is de bewijslast?

### Listing Detail Page

Ik ben de meesterproef begonnen met de detail page van de listings opnieuw te ontwerpen. Ik had van te voren Danielle, de ux/ui designer hier, al gevraagd of zij mij hierbij zou willen helpen. Dit wilde zij graag doen, op welke manier ik wilde. Ik heb gekozen om zelf een nieuw ontwerp te maken, en dan Danielle feedback te vragen.

Ik begonnen met een aantal schetsen op papier. Daarna ben ik deze in figma gaan maken. Ik heb nog nooit zelf een hele pagina ontworpen, of dit in Figma gemaakt. Ik vond het erg leuk dit te doen. Ik heb 3 verschillende versies gemaakt, 2 zonder sticky sidebar, en eentje met sticky sidebar.  
Toen deze uitgewerkt waren, heb ik Danielle om feedback gevraagd. We kwamen al snel tot de conclusie dat de sticky sidebar the way to go was. Verder heb ik genoeg andere feedback gehad, voornamelijk over spacing en alignment. Ik heb deze feedback in het Figma ontwerp toegepast. Daarna ben ik gaan bouwen.

- [issue listing detail page schets + figma](https://github.com/users/lisagjh/projects/13/views/8?pane=issue&itemId=105017978&issue=lisagjh%7Ci-love-web%7C175)
    
- image _detail-page_
    

### Prijsfilter

Ik wilde een nieuwe feature toevoegen om te filteren op prijs. Ik heb eerst de prijsfilter op de echte website geanalyseerd. Hierbij heb ik gelet op gebruiksvriendelijkheid en toegankelijkheid. De originele filter is een range slider. Deze is met het toetsenbord te besturen, maar wel maar met een euro per keer. De labels zijn erg klein, en niet goed leesbaar. Het is lastig om de prijs die je wilt precies te selecteren.

Hierna ben ik wat gaan schetsen, om te kijken hoe ik wil dat het eruit ziet. Ik heb allerlei verschillende versies geschetst, maar voornamelijk comboboxes. Ook heb ik verschillende states geschetst; error states, en open/gesloten suggesties (focused state?).

Deze schetsen hebben mij geholpen om mijn idee en een knelpunt met Jason te bespreken. Ik wist niet zo goed hoe ik de functionaliteit om alleen prijs suggesties die matchen met wat de gebruiker typt te laten zien. Met de schetsen kon ik mijn idee makkelijker uit leggen.

- image _schetsen-prijs-filter_
    
- image _schetsen-prijsfilter-states_
    
- [issue prijs filter + schetsen](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=105913245&issue=lisagjh%7Ci-love-web%7C190)
    

## Waarom is dit goede bewijslast?

De _listing detail page_ is goede bewijslast, omdat ik hier schetsen gebruik om een pagina te ontwerpen. Ook gebruik ik Figma om dit idee verder uit te werken, en om feedback te krijgen op mijn idee. Hiermee maak ik mijn gedachten bespreekbaar, en de oplossingsrichting inzichtelijk.

De _Prijsfilter_ is goede bewijslast, omdat ik hier schetsen gebruik om ideeën te verkennen, en een passende oplossing te vinden. Ook heeft het mij geholpen om mijn gedachten bespreekbaar te maken, mijn idee duidelijk te maken (abstracte begrippen overbrengen), en om mijn oplossingsrichting inzichtelijk te maken.

### Leerdoel

Ik wil oefenen met verschillende versies van een component schetsen, door niet alleen de meest obvious ideeën maar ook alternatieve ideeën te schetsen, om mijn keuze beter te kunnen onderbouwen. _(morphological charts?)_

# 4.4.3

**4.4.3 Bedenkt en implementeert complexe frontend code en gebruikt daarbij de fundamentele principes van het web, API's, databases, tools en frameworks.**  
_Dit betekent dat je complexe frontend code kan bedenken en gebruiken bij een project. Hierbij gebruik je fundamentele principes (A11Y, performance, responsiveness, PE, separation of concerns, semantiek), en API's, tools (code editors, vite, devTools, git, testing tools) en frameworks._

---

## Wat is de bewijslast?

### ComboBox

In het Blue Estate project heb ik een feature toegevoegd om op prijs te kunnen filteren. Dit heb ik gedaan met een `ComboBox` component: een input veld waar de gebruiker zelf een nummer kan typen, maar waar ook suggesties gegeven worden om uit te kiezen.

Suggesties

Ik wilde zorgen dat de gebruiker alleen relevante suggesties te zien kreeg die matchen met wat er getypt word. Ik wist niet hoe ik dit moest doen, dus dit met Jason overlegt. Hij vertelde over `string prototype search` en `innerText.search`, waarbij niet matchende buttons `-1` of `false` zouden krijgen, en je ze daarmee `hidden` kan geven.

Ik heb eerst gezorgd dat als je een prijs hebt geselecteerd, je bij de andere alleen valide prijs suggesties te zien krijgt. Dit doe ik met een `getFilteredSteps()`. Hier word gezorgd dat de suggestie groter of kleiner moet zijn dan de andere geselecteerde waarde.

Debounce functie

Toen de filter eenmaal werkte, was er een probleem. Als je een minimum prijs heb ingevuld, moet je de maximum prijs snel genoeg typen om een error te voorkomen. Deze error zorgde ervoor dat je niks meer kon doen, waardoor de gebruiker vast zou zitten. Om dit te voorkomen, moest ik iets toevoegen om het doorvoeren van de getypte waarde aan de verbonden variable te delayen. Na veel googlen leerde ik over de debounce functie.  
Ik ben deze gaan implementeren, maar dit werkte niet. Ik heb van alles geprobeerd, maar kwam er niet uit. Tot dat ik zag dat ik de variabele nog steeds met `bind:value` aan de input heb gekoppeld. Hierdoor werd die debounce functie overridden, en de waarde nog steeds meteen door gevoerd. Door dit weg te halen, werkte de debounce wel.

De debounce functie word `onkeyup={(e) => debounceMin(e.target.value)}` op de input gecalled. Dus elke keer dat de gebruiker iets typt en de toets los laat, word deze functie getriggered.

Deze debounce functie voorkomt onnodige re-renders, en voorkomt dat de gebruiker te vroeg een error message te zien krijgt. Dit is dus ook goed voor performance en user experience. Ook valt dit onder _"error prevention"_ in de WCAG, wat onderdeel is van toegankelijkheid en goede UX.

Toegankelijkheid

Tijdens het werken aan dit component heb ik gelet op de toegankelijkheid. Ik heb voortdurend getest, voornamelijk met het toetsenbord. Hierdoor kwam ik er al snel achter dat de suggesties niet met het toetsenbord te bereiken zijn. Dit heb ik opgelost door de HTML structuur aan te passen.

Hierna was het probleem dat de suggesties te vroeg weer worden gesloten. Om dit op te lossen heb ik rond gespeeld met `onfocusin`, `onfocusout`, `onblur`, etc. Dit heb ik eerst gedaan op de input, en daarna op de `<div>` die als wrapper op de input en suggesties zit. Dit werkte! Zolang de focus in de parent div, blijven de suggesties zichtbaar.

Daarna heb ik toegevoegd dat de suggesties gesloten worden als je buiten de box klikt of op `esc` klikt.

Verder heb ik ook een aria `role="combobox"` toegevoegd. Hierbij heb ik `aria-controls` en `aria-expanded` toegevoegd.

- [issue suggesties in valide range](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=106360647&issue=lisagjh%7Ci-love-web%7C195)
    
- image _filteredsteps-fn.png_
    
- [issue debounce functie](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=107444261&issue=lisagjh%7Ci-love-web%7C215)
    
- image _debounce-fns.png_
    
- [issue toegankelijkheid](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=106365781&issue=lisagjh%7Ci-love-web%7C199)
    

---

## Tools

Ik gebruik verschillende tools. Ik gebruik VSCode voor het coderen. Hierbij gebruik ik Windsurf als code assistant, voornamelijk voor de intellisense en autocomplete. Soms ook om extra uitleg te zetten bij functies. Ik gebruik Bitbucket voor het beheren van de Blue Estate Agency codebase, git voor versiebeheer, FileZilla voor het werken met de elementor/php websites, TGI color contrast analyser, DevTools voor inspecteren, testen en controleren, en Figma.  
Hierbij gebruik ik ook ChatGPT. Niet om me een directe oplossing te geven, maar om mij te helpen de juiste oplossing te vinden, extra utileg te geven over allerlei code dingen.

## Waarom is dit goede bewijslast?

Het ComboBox component is goede bewijslast, omdat ik hier op verschillende manieren complexe code bedenk en gebruik bij dit component. Zo heb ik complexe JS gebruikt om alleen prijs suggesties die een valide prijs range geven te laten zien, en om debounce functies te implementeren, waarmee een delay op het doorvoeren van de waarde komt. Daarnaast heb ik ook op de toegankelijkheid gelet, door te zorgen dat het met het toetsenbord te navigeren is, en de correcte `aria` roles en attributes heeft.

### Leerdoel

Ik wil beter worden in het ontwerpen en bouwen van toegankelijke componenten, door mij te verdiepen in toegankelijkheid en ARIA roles/attributes.


# 4.5.1

**4.5.1 Blijft op de hoogte van internationale ontwikkelingen in het vakgebied, omarmt verandering en maakt zelfstandig keuzes over eigen ontwikkeling.**  
_Dit houd in dat je op de hoogte blijft van ontwikkelingen in het frontend vak gebied, zoals nieuwe CSS features of frameworks, en deze veranderingen toepast. Ook maak je zelfstandig keuzes over je eigen ontwikkeling._

---

[--> Issue 4.5.1](https://github.com/users/lisagjh/projects/13/views/11?pane=issue&itemId=96433322&issue=lisagjh%7Ci-love-web%7C49)

## Wat is de bewijslast?

### Mailings

Ik volg nog steeds allerlei mailing lists: frontend focus, CSS weekly, The Collective, en nu ook Frontend Weekly. Hier haal ik veel nuttige dingen uit; interessante artikelen, new en upcoming CSS features, en soms ook vette websites.

Zo heb ik een [artikel](https://developer.chrome.com/blog/a-customizable-select?hl=en#unchanged_javascript_interfaces) over een [custom select](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=105514047&issue=lisagjh%7Ci-love-web%7C185) ook toegepast, zodat deze beter bij de huisstijl paste.

Op 1 april heb ik ook online **Smashing Meets Modern CSS** bijgewoond. Ik heb alleen de eerste talk live bij kunnen wonen. De andere twee heb ik later online terug gekeken.

Via de mailings maar ook via Bluesky en Awwwards kom ik veel coole sites tegen. Deze bewaar ik vaak in een markdown file, en zet er kort bij wat ik er vet aan vind. Zo heb ik altijd een bron van inspiratie beschikbaar!

- [issue custom select](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=105514047&issue=lisagjh%7Ci-love-web%7C185)
    
- image: smashing-meets
    
- image: coolesites
    

### Omarmt verandering

Voor het Real Estate Recommendation Bot project moet ik met React en Tailwind werken. Ik heb met beide nog nooit gewerkt. Ik ben begonnen met React eerst zelf een beetje leren, zodat ik het begin van het project wat er staat kan begrijpen, en zelf nieuwe dingen kan toevoegen.

Ik ben hiervoor begonnen met de docs lezen, en de [tutorial uit de react docs](https://react.dev/learn/tutorial-tic-tac-toe) volgen. Daarna ben ik een aantal video's over React gaan kijken. Vooral [deze video over Hooks](https://www.youtube.com/watch?v=TNhaISOUy6Q) heeft mij erg geholpen. Ook heb ik hier een paar kleine oefeningetjes mee gedaan, in een [aparte repo](https://github.com/lisagjh/react-intro/blob/main/notes.md#usestate). Tegelijkertijd heb ik overal [aantekeningen](https://github.com/lisagjh/react-intro/blob/main/notes.md#usestate) van gemaakt.

Een van deze oefeningen was een button die de count verhoogd. Dit begon simpel, met 1 button, en 1 veld die liet zien hoe vaak de button geklikt was. Daarna ben ik extra dingen gaan toevoegen. Zoals een reset button. Daarna een timer. Daarna een functie zodat je kan zien hoevaak je per seconde hebt geklikt. Hierbij heb ik React Hooks gebruikt, om te gaan begrijpen hoe deze werken. Ik moet zeggen dat ik het makkelijker vond dan verwacht.

Verder heb ik dus ook Tailwind gebruikt. Ik wist niet zo goed hoe het werkte, maar begin het nu _bijna_ leuk te vinden. Zo had ik in het begin moeite met de kleuren, en zorgen dat een huisstijl consistent gebruikt kan worden. Na wat googelen kwam ik erachter dat je, net als in CSS maar dana anders, custom properties kunt maken! Dit maakte het voor mij al een stuk makkelijker.

- [issue React leren](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=108605691&issue=lisagjh%7Ci-love-web%7C243) en [deze issue React Basics](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=107613262&issue=lisagjh%7Ci-love-web%7C221)
    
- [Repo met oefeningen](https://github.com/lisagjh/react-intro) en [aantekeningen](https://github.com/lisagjh/react-intro/blob/main/notes.md#usestate)
    

### Keuzes eigen ontwikkeling

Ik maak op allerlei verschillende manieren keuzes over mijn eigen ontwikkeling.

Ik wist dat ik aan het begin van mijn meesterproef de detail pagina van de listings wilde gaan aanpakken. Ik wilde deze een nieuw design geven, om het de frisse, chique en exclusieve look te geven die de cliënt wilt. Ik had van te voren Daniëlle om hulp gevraagd hierbij. Zij wilde graag helpen, en zei dat ze dit op verschillende manieren kon doen: zij maakt het ontwerp en ik kijk mee, of ik maak het ontwerp en laat het door haar reviewen. Ik heb hier de tweede versie gekozen, waar ik het ontwerp maak. Op deze manier leer ik zelf meer over Figma, UX/UI design principes, het ontwerpen van een website en responsive design. Hierbij heb ik mij in UX/UI verdiept met verschillende online bronnen - artikelen, youtube videos, etc.

Ook ben ik begonnen met een online cursus voor PHP. Dit doe ik via Codecademy. Ik ben hier aan begonnen om de code die ik bij het Sport in Haarlem project zag beter te kunnen begrijpen, maar ook om er achter te komen of ik dit leuk vind en hier meer mee zou willen werken na mijn stage. Tijdens het werken aan SIH heeft het mij geholpen om de PHP code die ik zag beter te begrijpen, en heb ik zelf ook een paar kleine aanpassingen kunnen maken.  
Tijdens het leren van PHP maak ik aantekeningen. Dit helpt mij om de nieuwe stof beter te onthouden. Door hier voorbeelden bij te begrijp ik het ook beter.  
Doordat ik mij verdiept heb in PHP, heb ik de data verrijking opdracht kunnen doen voor Sport in Haarlem. Erg leuk maar ook uitdagend!

- [issue design & feedback detail page](https://github.com/users/lisagjh/projects/13/views/8?pane=issue&itemId=105017978&issue=lisagjh%7Ci-love-web%7C175)
    
- [aantekeningen PHP](https://github.com/lisagjh/lisavanderhoorn.nl/blob/V2/src/content/blog/learn-php.md)
    
- image PHP-course
    

## Waarom is dit goede bewijslast?

Het volgen van de **mailings** en het bijwonen van de **Smashing Meets**, is goede bewijslast omdat ik hiermee op de hoogte blijf van internationale ontwikkelingen.

Het **werken met React en Tailwind** is goede bewijslast, omdat ik hiermee laat zien dat ik een andere Techstack omarm. Dit doe ik bijvoorbeeld door met Tailwind te werken in plaats van CSS en classes, maar ook door tijd te investeren in het begrijpen React, door een tutorial te volgen, verschillende bronnen te onderzoeken, en dit zelfstandig toe te passen — in een project en in oefeningen.

Het **herontwerpen van de detail pagina** is goede bewijslast, omdat ik er hier voor kies om mij verder te ontwikkelen op het gebied van web design.  
Ook het volgen van de **PHP cursus** is goede bewijslast, omdat ik hier kies om mijn kennis uit te breiden naar een andere programmeer taal die veel gebruikt word bij web dev.


# 4.5.2

**4.5.2 Maakt zelfstandig nieuwe materie eigen, gebruikt dit bij beroepstaken, deelt ervaring met belanghebbenden en leert van anderen.  
**_Dit betekent dat je zelfstandig nieuwe materie leert, en dit kan toepassen bij een project. Ook deel je jouw ervaring met belanghebbenden (team, stagebegeleider, tribe) en leer je van anderen (team, stagebegeleider, tribe)._

---

## Wat is de bewijslast?

### Maakt nieuwe materie eigen en gebruikt bij beroepstaken 

#### **Select - custom styling**

Toen ik aan het werken was aan de listing detail page, zag ik weer een artikel voorbij komen over dat je nu een select een custom styling kan geven. De opdrachtgever wilt een exclusieve en chique uitstraling, waar de standaard select opmaak niet echt bij past. Ik heb hier eerst het [artikel](https://developer.chrome.com/blog/a-customizable-select?hl=en) doorgelezen, en de MDN paginas voor [selectedcontent](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/selectedcontent) en [::picker()](https://developer.mozilla.org/en-US/docs/Web/CSS/::picker) door gaan lezen. Daarna ben ik dit gaan toepassen in mijn project!

- [issue select custom styling](https://github.com/lisagjh/i-love-web/issues/185)
    
- image: select-custom
    

#### **React**

Voor een nieuw project, de [Real Estate recommendation bot](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=104444141&issue=lisagjh%7Ci-love-web%7C166), moet ik een chatbot bouwen met React. Ik heb nog geen ervaring met React. Ik heb eerst het skelet van het project bekeken, maar snapte niet echt wat er stond. React was erg verwarrend. Ik heb besloten om eerst de basis van React te leren voor ik in dit project duik. Dit doe ik door eerst de tutorial uit de react docs te volgen, en dit in een aparte [github repo](https://github.com/lisagjh/react-intro) te zetten. Daarna heb ik nog een paar extra oefeningen gedaan. Door eerst buiten het project iets over React te leren, snap ik wat er in het project gebeurd. Ook is het niet zo overweldigend, omdat ik begrijp wat er staat, en ben ik in staat om dingen aan te passen of toe te voegen.

- [issue React leren](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=108605691&issue=lisagjh%7Ci-love-web%7C243) en [deze issue React Basics](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=107613262&issue=lisagjh%7Ci-love-web%7C221)
    
- [Repo met oefeningen](https://github.com/lisagjh/react-intro) en [aantekeningen](https://github.com/lisagjh/react-intro/blob/main/notes.md)
    

#### **Tailwind**

Bij ditzelfde project ben ik Tailwind gaan gebruiken. Ik heb bij een ander project, Sport in Haarlem, ook een klein beetje Tailwind gebruikt, maar alleen hier en daar wat kleurtjes aangepast. Bij dit project stond al een skelet met wat styling klaar, maar ik had alle vrijheid om dit aan te passen. Dit moest ook wel, want de opdracht was een chique en exclusieve look, en nu was alles erg donker.

Ik ben begonnen met de Tailwind docs doorlezen, en onderzoeken hoe je consistent kleur kan gebruiken. Toen leerde ik dat je een soort custom properties kan instellen in de `tailwind.config.js` file, dus dit heb ik gedaan. Hierna ben ik verder gegaan met alle styling aanpassen.

#### **PHP**

Ik ben zelfstandig bezig geweest met mij verdiepen in PHP. Ik heb hiervoor via codecademy een aantal cursussen gevolgd. Ik ben hier aan begonnen om de code van Sport in Haarlem beter te kunnen begrijpen.

In week 15 vertelde Victor dat de data van Sport in Haarlem verrijkt moest worden met een andere API, SportSupport. Toen vertelde ik dat ik bezig ben geweest met PHP leren, en heb wat van mijn aantekeningen laten zien. Victor heeft toen gevraagd of ik dit wilde doen. Dit was voor mij een erg leuke uitdaging, en een mooie kans om die nieuwe kennis toe te passen.

Ik ben hier mee aan de slag gegaan. Ik heb de codebase eerst onderzocht, en daarna gaan onderzoeken hoe ik dit moet gaan doen. Ik heb geleerd hoe je data ophaalt in PHP, wat een associative array is, en hoe je die data van PHP naar de frontend krijgt.

- [issue SIH data verrijking](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=110839355&issue=lisagjh%7Ci-love-web%7C260)
    
- [PHP aantekeningen](https://github.com/lisagjh/lisavanderhoorn.nl/blob/V2/src/content/blog/learn-php.md)
    

---

### _... deelt ervaring met belanghebbenden ..._

#### **TKD 25 april - debounce functie**

Op de terug kom dag op 25 april heb ik bij gepraat met mijn klasgenoten, en tijdens het stuk over "research and development" mijn ervaring gedeeld. We begonnen met 3 punten bespreken: wat vond je niet leuk, wat vond je leuk, wat wil je delen. Ik heb voor het "wat wil je delen" gedeeld over de debounce functie die ik heb gebruikt bij een filter. Ik heb eerst laten zien hoe het component nu werkt, verteld wat het probleem was, en daarna de oplossing laten zien. Ik heb hierbij ook verteld hoe ik op de oplossing ben gekomen (collega), en problemen waar ik tegen aan liep tijdens het implementeren hiervan.  
Toevallig liep Justus langs en die luisterde even mee. Die zei dat dit erg leuk zou zijn om aan de tribe te presenteren.

Omdat ik dit niet uitgebreid heb kunnen uitleggen, en mijn uitleg niet echt goed had voorbereid, heb ik hier nu een klein [postje](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=108233836&issue=lisagjh%7Ci-love-web%7C238) over geschreven. Deze heb ik gestuurd in een groepsapp met een aantal klasgenoten. Ik heb gevraagd of, als ze willen, ze het zouden willen lezen en evt een comment achterlaten.

Door deze post heb ik mijn klasgenoten toch nog meer kunnen vertellen over debouncing en hoe ik dit heb toegepast in mijn project. Ook heb ik hier een duidelijke bron bij kunnen geven, en naar mijn issues gelinkt waar ik laat zien hoe ik hier mee werk.

- [Post debouncing TKD](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=108233836&issue=lisagjh%7Ci-love-web%7C238)
    
- image: delen-debounce-post
    

---

### _... leert van anderen._

#### **Prijs filter**

Ik wilde in de Blue Estate website een filter toevoegen om de listings op prijs te filteren. Ik liep hierbij tegen een aantal knelpunten aan. Ik wist niet hoe ik ervoor kon zorgen dat als de gebruiker begon te typen, deze alleen relevante suggesties te zien krijgt. Ook had ik een probleem met het zichtbaar maken van de suggesties.

De suggesties op `show` en `hidden` zetten ging moeizaam. Ik had in eerste instantie `onfocus` en `onblur` gebruikt op de input, maar zodra de focus van de input naar de suggesties verplaatste, werd deze gesloten. Ook wanneer je op een button klikt om de prijs te selecteren, werd deze niet geselecteerd omdat de div werd gesloten. Ik heb mijn probleem met Jason en Daniel besproken. Jason wist ook niet zo snel een goede oplossing. Het was al het eind van de dag, dus ik ben daarna naar huis gegaan. De volgende ochtend opende ik mijn laptop en zag ik dat hij een prototype had gemaakt om het te testen en een passende oplossing te vinden.  
Deze oplossing heb ik in eerste instantie ook gebruikt. Ik merkte tijdens het testen dat hier nog steeds kleine bugs in zaten. Op basis van Jason's oplossing heb ik een meer Svelte specifieke oplossing gevonden, waarbij ik `onfocusin` en `onfocusout` gebruik.

Volgende knelpunt was dat ik alleen prijs suggesties wilde laten zien die matched met wat de gebruiker typt. Ik wist niet hoe ik dit moest aanpakken. Jason gaf een uitleg over `button.innerText.search` en `string prototype search`. Dit heeft mij geholpen om bij mijn uiteindelijke oplossing te komen, ookal is die totaal anders. Ik heb de input value vergeleken met de prijs suggesties die uit een array komen.

- [issue focus en visibility](https://github.com/lisagjh/i-love-web/issues/196)
    
- [issue suggesties input match](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=106367776&issue=lisagjh%7Ci-love-web%7C200)
    
- image: prijsfilter
    

### Waarom is dit goede bewijslast?

De **custom select** is goede bewijslast, omdat ik hier zelfstandig nieuwe materie eigen maak en toepas in een project. Dit doe ik door te leren hoe ik een select een custom style kan geven van een artikel, en dit toe te passen in het Blue Estate project.

**React**, **Tailwind** en **PHP** zijn goede bewijslast, omdat ik hier ook laat zien dat ik nieuwe materie eigen maak en toepas in een project. Dit doe ik door op verschillende manieren te leren over deze technieken, en dit te implementeren en gebruiken binnen een project.

De **TKD debounce functie** is goede bewijslast, omdat ik hier mijn ervaring deel met belanghebbenden. Dit heb ik eerst kort gedaan op de terug kom dag zelf, en daarna via een online post die ik heb gedeeld met mijn klasgenoten.

De **Prijs filter** is ook goede bewijslast, omdat ik hier van anderen leer. Ik heb Jasons voorbeeld en advies gebruikt, en aangepast om het goed te laten werken in mijn project met Svelte 5.


# 4.5.3

**4.5.3 Kent eigen capaciteiten en beperkingen, waardeert het vermogen van anderen, maakt dit bespreekbaar en schakelt zelfstandig hulp in waar nodig.**  
_Dit houd in dat je weet wat jouw sterke en zwakke punten zijn. Je waardeert de capaciteiten van anderen. Je kunt deze dingen bespreekbaar maken, en je kunt hulp inschakelen wanneer je dit nodig hebt._

---

## Wat is de bewijslast?

### Kent eigen capaciteiten en beperkingen

Tijdens de meesterproef heb ik verschillende checkins gehad met Victor. Hier bespreken we hoe het gaat, waar ik aan werk en waar ik tegen aan loop. Ik had een nieuwe opdracht gekregen; het bouwen van de frontend voor de Real Estate Chatbot, met React en Tailwind. Ik heb aangegeven dat ik hier geen ervaring mee heb, en mij hier eerst in wil verdiepen.

Ook geef ik knelpunten aan. Zo lukte het bijvoorbeeld niet om bij Blue Estate een prijs voor de geselecteerde datum range te maken. Ik heb het hier met Victor over gehad, en besloten om dit nu niet te doen.

Naast mijn zwakke punten, weet ik ook steeds beter waar mijn sterke punten liggen. Ik ben zelfverzekerder over de kwaliteit van mijn code en keuzes, en mijn onderbouwing hiervan – _zoals bij 4.4.3 :)_ . Dit komt door alle positieve feedback die ik hier krijg, maar ook door feedback van klasgenoten en de feedback van mijn midterm. Ook merk ik dat ik beter word in het ontwerpen van websites, en mijn _designers eye_ beter is dan aan aan het begin van mijn stage.

Ook merk ik dat een van mijn sterke punten ligt bij toegankelijkheid. Dit zie ik vooral terug tijdens het werken aan Sport in Haarlem, maar ook bij bijvoorbeeld het prijsfilter/ComboBox component van Blue Estate. Ik kan problemen op het vlak van toegankelijkheid herkennen, en weet hoe ik dit kan verbeteren.

Over het algemeen ben ik al gegroeid op gebied van zelfverzekerdheid en mondigheid, maar ik kan hier nog veel in verbeteren. Zo heb ik bijvoorbeeld, toen Victor vertelde over de data verrijking die bij Sport in Haarlem moest gebeuren met PHP, aangegeven dat ik zelfstandig bezig ben geweest met het leren van PHP, en dit wel wil doen. Victor heeft mij toen ook deze taak gegeven! Door hier zelfverzekerd te zijn in mijn eigen kennis en kunnen, heb ik een leuke nieuwe maar uitdagende taak gekregen.

Verder wil ik mij graag nog verdiepen in creative development _(zoals combineren van design en development, werken met libraries zoals GSAP, meer leren over en doen met P5js, misschien werken met WebGL? )_, en meer leren over UX/UI design. Tijdens mijn stage ben ik al veel bezig met UX/UI design, doordat ik veel vrijheid had in het ontwerp van de projecten.

### Waardeert vermogen van anderen

Tijdens mijn stage werk ik samen met verschillende mensen. Zo heb ik bijvoorbeeld veel met Jason en Danielle gewerkt. Wanneer ik hulp of feedback van hun kreeg heb ik ze altijd bedankt. Toen ze weg gingen heb ik ze ook uitvoerig bedankt voor alles.

Ik heb Danielle ook nog gemaild, omdat ik graag nog wat feedback zou krijgen van haar. Ik ben deze mail begonnen met haar bedanken voor alles, en specifiek voor alles wat ik heb mogen leren op gebied van UX/UI van haar.

- _img: slack-thanks_
    
- _img: danielle-thanks_
    

### Schakelt zelfstandig hulp in

Als ik ergens tegen aan loop, probeer ik dit altijd eerst zelf op te lossen. Als ik er dan nog niet uit kom, neem ik initiatief om om hulp te vragen. Zo vroeg ik Jason altijd om code hulp, Danielle of Tufan voor design feedback, en Kween voor hulp bij Sport in Haarlem of PHP dingen daarbij.

Een voorbeeld hiervan is dat ik bij het verrijken van de data van Sport in Haarlem een probleem had waarbij de nieuwe data niet in het overzicht met de andere data kwam, maar wel apart er in gezet kon worden. Ik kon maar niet vinden wat dit veroorzaakte. Ik heb toen Kween een bericht gestuurd, waarbij ik uitleg van het probleem gaf en heb gevraagd of ze tijd had om mij te helpen. Uiteindelijk bleek het erg simpel: `main_category: "evenement"` had `main_category: "evenementen"` moeten zijn.

- _img: slack-hulp_
    

## Waarom is dit goede bewijslast?

Dit is goede bewijslast, omdat ik aantoon dat ik mijn eigen capaciteiten en beperkingen ken. Dit doe ik door te laten zien dat ik tijdens checkins aangeef waar ik tegen aan loop, maar ook herken dat ik gegroeid ben.

Ik laat zien dat ik zelfstandig hulp in schakel, door bijvoorbeeld Kween om hulp te vragen bij een bug waar ik tegen aan liep.

Ook laat ik zien dat ik anderen waardeer, door hun te bedanken voor hun hulp en/of feedback.