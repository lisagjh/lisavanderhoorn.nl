---
title: "JS Debouncing"
pubDate: 2025-04-25
description: "In deze post leg ik uit wat debouncing is en hoe ik het heb toegepast in een project tijdens mijn stage."
image:
  url: "https://docs.astro.build/assets/rose.webp"
  alt: "The Astro logo on a dark background with a pink glow."
tags: ["JS", "stage", "learning in public"]
---

# Debouncing

In deze post leg ik uit wat debouncing is en hoe ik heb toegepast in een project tijdens mijn stage.

## ComboBox.svelte

Dit component laat gebruikers een prijs range invoeren of selecteren, om alleen items te zien die binnen deze range vallen. De gebruiker kan ook alleen een minimale of maximale prijs invoeren.

Wanneer een gebruiker focust op een input veld, verschijnt de bijbehorende `<div>` met suggesties. Als in het andere input veld al een waarde geselecteerd is, krijg je hier alleen suggesties te zien die groter/kleiner zijn dan die waarde.

Ik heb bij dit component een debounce functie gebruikt om onnodige re-renders en errors te voorkomen.

## Debounce

### Wat is debouncing?

Debouncing is een techniek waarbij een functie pas wordt uitgevoerd na een korte vertraging nadat de gebruiker stopt met typen. Dit voorkomt dat de functie telkens wordt aangeroepen tijdens het typen. Dit word vaak gebruikt bij searchbars of filters.

Ik gebruik in dit component debouncing om de filter logica pas uit te voeren nadat de gebruiker stopt met typen.

Dit is de debounce functie:

```js
let debounceMinTimer;
let debounceMaxTimer;

const debounceMin = (value) => {
  clearTimeout(debounceMinTimer); // Annuleer een eventuele vorige timer

  debounceMinTimer = setTimeout(() => {
    const numValue = Number(value);

    if (selectedMaxValue && numValue >= 0 && numValue <= selectedMaxValue) {
      tempMinValue = numValue; // Bijwerken van de minimumwaarde
      checkPriceValidity(); // Controleer of de prijzen geldig zijn
    }
  }, 500); // Debounce tijd van 500ms
};

const debounceMax = (value) => {
  clearTimeout(debounceMaxTimer); // Annuleer een eventuele vorige timer

  debounceMaxTimer = setTimeout(() => {
    const numValue = Number(value);

    if (numValue >= tempMinValue) {
      tempMaxValue = numValue; // Bijwerken van de maximumwaarde
      checkPriceValidity(); // Controleer of de prijzen geldig zijn
    }
  }, 500); // Debounce tijd van 500ms
};
```

### Hoe werkt debouncing?

Elke keer dat de gebruiker typt, wordt de vorige timer (als die bestaat) geannuleerd met `clearTimeout(debounceMinTimer)` of `clearTimeout(debounceMaxTimer)`. Dit voorkomt dat de filter functie te vaak wordt uitgevoerd.

Daarna word een nieuwe timer ingesteld, die na 500ms de filterfunctie uitvoert. Dit betekent dat de filtering pas plaatsvindt als de gebruik een halve seconde niks heeft ingevoerd in het input veld. Dit wordt aangeroepen op de `<input>` met `onkeyup`:

`onkeyup={(e) => debounceMin(e.target.value)}`

Dus een halve seconde nadat de gebruiker een toets omhoog laat komen, wordt de filtering uitgevoerd.

Hierna wordt gecontroleerd of de ingevoerde minimum- en maximumprijs een geldige range zijn. De maximum prijs mag niet kleiner zijn dan de minimum prijs, en andersom.

### Waarom heb ik het gebruikt?

Ik heb hier debouncing gebruikt, omdat wanneer ik begon met typen, de getypte waarde meteen vergeleken werd met de geselecteerde minimum prijs. Dus als ik €1000 geselecteerd heb voor de minimum prijs, en €5000 wil typen voor de maximum prijs, kreeg ik al een error na het typen van 5. Als deze error eenmaal in beeld kwam, zat ik vast. Wat ik verder type werd niet meer geupdate, ik kon de filter niet resetten, en moest de pagina refreshen om het opnieuw te proberen. Hier zou een gebruiker dus vast zitten.

Dit is geen gebruiksvriendelijke ervaring. Daarnaast werd de functie hier constant aangeroepen, wat voor overbodige re-renders zou kunnen zorgen, wat de performance zou kunnen beïnvloeden.

In [deze issue](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=106915336&issue=lisagjh%7Ci-love-web%7C211) heb ik het voor het eerst toegepast, en in [deze issue](https://github.com/users/lisagjh/projects/13/views/14?pane=issue&itemId=107444261&issue=lisagjh%7Ci-love-web%7C215) heb ik de debouncing iets verbeterd. [Hier](https://svelte.dev/playground/f55e23d0bf4b43b1a221cf8b88ef9904?version=5.27.1#H4sIAAAAAAAAE22OTWrDMBCFrzLMJjaYxt0qtiFQeoLuqi4Ue1JE5bGxRm6D0N2LnJp20eX73g8vIpuRUOETXabAPcFz4MGMxGKcxwqv1pFH9RpRbnMOZoDVXjvP84NfyUlmF-PpP95PLMTiUWHj-8XO0mnW4khgNa49HE67FDvSkhVr6Sf2AsP-q4UV2g5itrT0jszyYkeaghRbqzzdnU1AC55k94vyT1PLalxe-8mnCh7rur7Xk-bm-HuRG8tzEJhYfdAtzG0sIohZ3kkUxHw-ECRI2_7-tNhwmeDYaY6rcQkrFPoSVLIESm8VirHu0_KA6mqcp_QNViAcLIYBAAA=) kan je een duidelijk en kort voorbeeld van debouncing in Svelte zien.

## Conclusie

De debouncing techniek zorgt hier voor een fijne gebruikerservaring. Door de filtering pas uit te voeren nadat de gebruiker stopt met typen, worden onnodige herberekingen en re-renders voorkomen, en word er voorkomen dat de gebruiker vast komt te zitten op een error die te vroeg in beeld komt.
