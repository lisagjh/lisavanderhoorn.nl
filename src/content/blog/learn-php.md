---
id: 2
title: "Introduction to PHP"
pubDate: 2025-05-14
description: "Mijn aantekeningen bij het leren van PHP."
image:
  url: "https://docs.astro.build/assets/rose.webp"
  alt: "The Astro logo on a dark background with a pink glow."
tags: ["PHP", "learning in public"]
---

# Introduction to PHP

## History of PHP

In 1994 is PHP gecreeërd. 

PHP is een van de fundamentele technologieën van web development, en een van de meest gebruikte server side technologieën. Het word vooral veel gebruikt met populaire CMS'en: WordPress, Drupal, Joomla.
Ook is veel van de underlying code van WooCommerce and Magento gebaseerd op PHP. 

PHP heeft veel built-in functionaliteit voor interactie met data. Vanilla PHP alleen kan ook gebruikt worden om web app backends te bouwen. Maar er zijn ook verschillende krachtige frameworks: Laravel, CakePHP, Symfony.

![[Screenshot 2025-04-07 at 21.03.54.png]]

## How is PHP used in HTML?

PHP word gebruikt om dynamische web pages te bouwen.

PHP is ontworpen om goed samen te werken met HTML, waardoor het in-line gebruikt kan worden in een HTML document. Als de website gerendered word, word de PHP uitgevoerd, en als HTML toegevoegd.

![[Screenshot 2025-04-07 at 21.04.34.png]]

Het begin van een PHP line start met: `<?php` en eindigt met `?>`.  Bijvoorbeeld:

```html
<p>This HTML will get delivered as is</p>
<?php echo "<p>But this code is interpreted by PHP and turned into HTML</p>";?>

```

In PHP, wordt het `echo` keyword gebruikt voor output text. De tekst in dit geval is alles tussen de `"aanhalingstekens"` . Een instructie die in PHP is geschreven heeft een `statement`. Een semicolon `;` is required aan het eind van elk statement.

## How is PHP executed?

PHP kan niet alleen gebruikt worden om dynamische HTML te genereren, maar ook als programmeertaal via de terminal. Wanneer je een PHP-script schrijft, begin je ook altijd met `<?php`, maar de afsluitende tag is meestal niet nodig, en word als conventie vaak weg gelaten.

PHP negeert witruimte, en is deels niet hoofdlettergevoelig – bijvoorbeeld, `echo` en `Echo` werken beide. Toch is het aangeraden om de standaard schrijfwijze (`echo`) te gebruiken.

## PHP comments

Er zijn twee manieren om comments te gebruiken in PHP. De eerste is `single line comments`. Hier word `#` of `//` gebruikt.

De tweede soort is een `multi line comment`. Hier gebruik je `/* comment */` om meerdere lines of code uit te commenten.

### Voorbeeld - Todo list

De Todo list is een goed voorbeeld, omdat hier de CRUD behaviors worden gebruikt - create, read, update, delete.

```php
<?php

require 'vendor/autoload.php';

// Verbinding maken met de database
$pdo = new \PDO("sqlite:" . "db/sqlite.db");

// Nieuwe TODO aanmaken
if (isset($_POST['submit'])) {
    $description = $_POST['description'];
    $sth = $pdo->prepare("INSERT INTO todos (description) VALUES (:description)");
    $sth->bindValue(':description', $description, PDO::PARAM_STR);
    $sth->execute();
}

// TODO verwijderen
elseif (isset($_POST['delete'])) {
    $id = $_POST['id'];
    $sth = $pdo->prepare("DELETE FROM todos WHERE id = :id");
    $sth->bindValue(':id', $id, PDO::PARAM_INT);
    $sth->execute();
}

// TODO markeren als compleet
elseif (isset($_POST['complete'])) {
    $id = $_POST['id'];
    $sth = $pdo->prepare("UPDATE todos SET complete = 1 WHERE id = :id");
    $sth->bindValue(':id', $id, PDO::PARAM_INT);
    $sth->execute();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Todo List</title>
</head>
<body class="container">
    <h1>Todo List</h1>

    <form method="post" action="">
        <input type="text" name="description" value="">
        <input type="submit" name="submit" value="Add">
    </form>

    <h2>Current Todos</h2>

    <table class="table table-striped">
        <thead>
            <tr>
                <th>Task</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <?php
            $sth = $pdo->prepare("SELECT * FROM todos ORDER BY id DESC");
            $sth->execute();

            foreach ($sth as $row): ?>
                <tr>
                    <td><?= htmlspecialchars($row['description']) ?></td>
                    <td>
                        <?php if (!$row['complete']): ?>
                            <form method="POST">
                                <button type="submit" name="complete">Complete</button>
                                <input type="hidden" name="id" value="<?= $row['id'] ?>">
                                <input type="hidden" name="complete" value="true">
                            </form>
                        <?php else: ?>
                            Task Complete!
                        <?php endif; ?>
                    </td>
                    <td>
                        <form method="POST">
                            <button type="submit" name="delete">Delete</button>
                            <input type="hidden" name="id" value="<?= $row['id'] ?>">
                            <input type="hidden" name="delete" value="true">
                        </form>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>

```

# PHP strings & variables

- String: woorden of stukken tekst die door de computer worden gezien als een item. Een string is een reeks karakters, tussen `"quotation marks"`.

```php
<?php
echo "Hello World!" ;
```

Het is belangrijk om duidelijk te maken wat een string is en wat niet in een PHP program. Elk deel van de code is tekst, maar de strings zijn data - deze moeten niet uitgevoerd worden door de computer.

## Escape Sequences

Aan het begin en eind van een string gebruiken we aanhalingstekens. Deze laten de computer weten dat alles daar tussen een stukje data is. 

Als je binnen die string iets tussen aanhalingstekens  zet, herkent PHP dit niet en krijg je een syntax error.
```php
echo "She said "hi" to the dog."; //syntax error, unexpected 'hi' (T_STRING)
```

Dit kan je oplossen door `\` backslashes om het deel van de string te zetten met de aanhalingstekens. Dit noem je een *escape sequence*.

Bij het printen van meerdere strings heb je ook een escape sequence nodig:

```php
echo "1. Go to gym";
echo "2. Cook dinner"; 

/* output:
1. Go to gym2. Cook dinner
*/
```

Hier kun je `\n` er voor zetten, om aan te geven dat het op een nieuwe regel moet staan:

```php
echo "1. Go to gym";
echo "\n2. Cook dinner"; 

1. Go to gym
2. Cook dinner
*/
```

```php
echo "1. Teach PHP";
echo "\n2. Something else";
echo "\n3. Learn to have \"fun\"";
```


## String Concatenation

```php
echo "Code" . "cademy";
echo "\nMy name is:" . " " . "Lisa";
echo "\n" . "tur" . "duck" . "en";
```


## Variables

In PHP gebruik je het `$` teken om een variabele te definiëren. Variable names kunnen nummers, letters en underscores (`_`) bevatten, maar moeten altijd beginnen met een letter of underscore. De variable names zijn case sensitive, dus `$my_example` en `$My_example` worden als twee verschillende variables gezien.

![[Screenshot 2025-05-13 at 15.57.34.png]]

Een veel gebruikte conventie bij benaming is het gebruik van een underscore tussen twee woorden, oftewel `snake_case`.

```php
$name = "Lisa";
$language = "php";

echo "I am" . $name;
echo "\n" . $language
```


### Variable parsing

```php
$dog_name = "Tadpole";
$favorite_food = "salmon";
$color = "brown";

echo "I have a $color dog named $dog_name and her favorite food is $favorite_food.";
// Prints: I have a brown dog named Tadpole and her favorite food is salmon.
```

#### curly braces

Dit voorbeeld geeft een error, omdat `toys` niet bestaat. 

```php
$toy = "frisbee";
echo "Alex likes playing with $toys";
```

Als je achter de variable iets wilt zetten, kan je de variabele in curly braces wrappen – `${variable}`. Alles wat er dan direct achter staat word er aan geplakt.

```php
$dog_name = "Tadpole";
$favorite_food = "treat";
$color = "brown";

echo "I have a ${color}ish dog named $dog_name and her favorite food is ${favorite_food}s.";
// Prints: I have a brownish dog named Tadpole and her favorite food is treats.
```

## Concatenating Assignment Operator

```php
$sentence = "\nI'm going on a picnic, and I'm taking apples";
$sentence .= ", but also milk";
$sentence .= ", cant do nuts though";

echo $sentence;
// Prints: I'm going on a picnic, and I'm taking apples, but also milk, cant do nuts though
```

## Assign by Reference

Wanneer we een variabele toewijzen aan een andere variabele, reserveert de computer een nieuw stukje geheugen dat wordt gekoppeld aan de linkeroperand, en slaat daar een kopie op van de waarde van de rechteroperand.

De nieuwe variabele is een kopie van de waarde van de originele variabele, maar het is een onafhankelijke variabele; verandering bij de een heeft geen invloed op de ander.

**Voorbeeld:**
```php
$first_player_rank = "Beginner"; 
$second_player_rank = $first_player_rank; 
echo $second_player_rank; // Prints: Beginner

$first_player_rank = "Intermediate"; // Reassign the value of $first_player_rank
echo $second_player_rank; // Still Prints: Beginner
```

Je kan ook een alias maken, een bijnaam. In plaats van een kopie van de originele variabele waarde, maken we een nieuwe naam die naar de zelfde plek in het geheugen verwijst. Hier word een andere operator voor gebruikt, de reference assignment oeprator – `=&`. 

Als we "assign by reference" gebruiken, zeggen we dat de variabele aan de linker kant van de operator verwijzen naar exact dezelfde data als de variabele rechts. Met assignment by reference,  veranderingen aan de ene variabele hebben wel invloed op de ander.

**Voorbeeld:**
```php
$first_player_rank = "Beginner";
$second_player_rank =& $first_player_rank; 
echo $second_player_rank; // Prints: Beginner

$first_player_rank = "Intermediate"; // Reassign the value of $first_player_rank
echo $second_player_rank; // Prints: Intermediate

```

**Voorbeeld assign by reference:**
```php
/* Imagine a lot of code here */
$very_bad_unclear_name = "15 chicken wings";

$order =& $very_bad_unclear_name;
$order .= ", 3 nuggets";
echo "\nYour order is: $very_bad_unclear_name.";

// Your order is: 15 chicken wings, 3 nuggets.
```

```php
$name = "Tadpole";  
$title = ", Princess of Dogulon";  
$name .= $title;  
echo $name;
```

---

# Numbers

PHP heeft twee nummer data types. De `integer` data type is een heel positief of negatief nummers (3, 4500, -98, 0). De `floating point` data type is decimale nummers (4.1, 2.999, -9.2, -1827.98)

```php
$my_int = 78;
$my_float = 89.9;

echo $my_int; // Prints: 78
echo "\n"; // new line
echo $my_float; // Prints 89.9
```

Er zijn ook verschillende operators die we kunnen gebruiken. 

```php
echo 5 + 1; // Prints: 6
echo 6.6 + 1.2; // Prints: 7.8
echo 198263 - 263;  // Prints: 198000
echo -22.8 - 19.1; // Prints: -41.9
```

Op deze manier kunnen we ook rekenen met variabelen:

```php
$tadpole_age = 7;
$lily_age = 6; 
$age_difference = $tadpole_age - $lily_age;
echo $age_difference; // Prints 1
```

En ook delen en keer

```php
$num_languages = 4;
$months = 11;
$days = $months * 16;

$days_per_language = $days / $num_languages;

echo $days_per_language;
```

Maar ook een exponentiation operatotr – `**`. 
```php
echo 4 ** 2; // Prints: 16`
```

Dit kan op floats en negatieve nummers ook gebruikt worden

```php
echo 2.89 ** 3.2;  // Prints: 29.845104015297
echo 10 ** -1; // Prints: 0.1
```

En de modula operator – `%`. Deze operator returns de remainder, het overblijfsel van de linker operand gedeeld door de rechter operand.

```php
echo 7 % 3; // Prints: 1
```

Je kan ook bepaalde sommen tussen haakjes zetten.

```php
echo 94 - 4.25 + 7 - (23.50 * 1.2) + (20 / 4);
```

De volgorde van de operations word zo bepaald:

1. Any operation wrapped in parentheses (`()`)
2. Exponents (`**`)
3. Multiplication (`*`) and division (`/`)
4. Addition (`+`) and subtraction (`-`).

The acronym PEMDAS can be helpful for remembering the order of precedence for these arithmetic operations.

### Tabel

| **Operation**  | **Symbol** | **Example**        | **Output** |
| -------------- | ---------- | ------------------ | ---------- |
| Addition       | `+`        | `echo 1 + 4.5;`    | 5.5        |
| Subtraction    | `-`        | `echo 9 - 1;`      | 8          |
| Multiplication | `*`        | `echo -1.9 * 2.9;` | -5.51      |
| Division       | `/`        | `echo 9 / 1;`      | 9          |
| Modulo         | `%`        | `echo 11 % 3;`     | 2          |
| Exponentiation | `**`       | `echo 8 ** 2;`     | 64         |



## Mathematical Assignment Operators

```php
$savings = 800;
$bike_cost = 75;
$savings = $savings - $bike_cost;
echo $savings; // Prints: 725

// kan korter! MAND --->

$savings = 800;
$bike_cost = 75;
$savings -= $bike_cost;
echo $savings; // Prints: 725
```


PHP heeft ook `increment operators`:

```php
$age = 89; 
$age++;
echo $age; // Prints: 90

$days_til_vacation = 7; 
$days_til_vacation--;
echo $days_til_vacation; // Prints: 6
```

### Tabel Overzicht Operators

| **Operation:** | **Long Syntax:** | **Short Syntax:** |
| -------------- | ---------------- | ----------------- |
| Add            | $x = $x + $y     | $x += $y          |
| Subtract       | $x = $x - $y     | $x -= $y          |
| Multiply       | $x = $x * $y     | $x *= $y          |
| Divide         | $x = $x / $y     | $x /= $y          |
| Modulo         | $x = $x % $y     | $x %= $y          |

---

# PHP Functions

Bronnen bij dit deel:

- [PHP functions](https://www.codecademy.com/resources/docs/php/functions)
- [Introduction to functions - cheatsheet](https://www.codecademy.com/learn/learn-php-functions/modules/introduction-to-functions-in-php/cheatsheet)

## Introduction to Functions

```php
function greetLearner()
{
  echo "Hello, Learner!\n";
  echo "I hope you're enjoying PHP!\n";
  echo "Love, Codecademy";
}

// invoke function:
greetLearner();
```


```php
function printStringReturnNumber()
{
  echo "ERROR: Page not found!\n";
  return 404;
}

$my_num = printStringReturnNumber();
echo $my_num;

// prints:
// ERROR: Page not found!
// 404
```

```php
function first()
{
  return "You did it!\n";
}

function second()
{
  return "You're amazing!\n";
}

function third()
{
  return "You're a coding hero!\n";
} 

echo first() . " " . second() . " " . third() ;
```


```php
function sayCustomHello($name)
{
echo "Hello, $name!";
};

sayCustomHello("Aisle Nevertell"); // Prints: Hello, Aisle Nevertell!

sayCustomHello("Codecademy learner"); // Prints: Hello, Codecademy Learner!

```


```php
function increaseEnthusiasm($val)
{
return $val . "!";
}

function repeatThreeTimes($string)
{
return $string . $string . $string;
}

echo increaseEnthusiasm("henlo");
echo repeatThreeTimes("hi");
echo increaseEnthusiasm(repeatThreeTimes("HI"));
```


### Multiple Parameters

We kunnen ook functies met meerdere parameters definiëren.

```php
function divide($num_one, $num_two)
{
  return $num_one / $num_two;
};

echo divide(12, 3); // Prints: 4
echo divide(3, 12); // Prints: 0.25
```

❗️ Een functie met minder argumenten aanroepen dan er verwacht worden geven errors, zoals deze:

```php
function expectTwo($first, $second)
{
  return "whatever";
}

echo expectTwo("test"); // ❌ Will result in an error
```

**Voorbeeeld:**

```php
function calculateArea($one, $two)
{
return $one * $two;
}

function calculateVolume($one, $two, $three)
{
return $one * $two * $three;
}

echo calculateArea(3, 5); // 15
echo calculateVolume(3, 5, 2); // 30
```


### Default Parameters

Je kan errors voorkomen door een default parameters mee te geven aan de functie. Als er dan geen argument word meegegeven als de functie invoked word, word deze gebruikt. Als er wel een argument word meegegeven, word deze overschreven.

```php
function greetFriend($name = "old chum")
{
  echo "Hello, $name!";
};

greetFriend("Marvin"); // Prints: Hello, Marvin!

greetFriend(); // Prints: Hello, old chum!
```


### Pass by Reference

We kunnen functions met variables aanroepen of met directe waardes. Als we een function invoken met een variable als argument, is het alsof we die waarde toewijzen aan de function's parameter. We wijzen een kopie van de waarde van de argument variable toe. Het variable argument en de parameter zijn aparte entities; verandering aan de parameter in de functie heeft geen effect op de waarde die gepassed is.

```php
function addX ($param)
{
  $param = $param . "X";
  echo $param;
};
$word = "Hello";
addX($word); // Prints: HelloX
echo $word; // Prints: Hello
```

Als we wel permanent een variabele willen veranderen, daan zetten we een `&` voor de parameter argument van de functie.

```php
function addXPermanently (&$param)
{
  $param = $param . "X";
  echo $param;
};
$word = "Hello";
addXPermanently($word); // Prints: HelloX
echo $word; // Prints: HelloX
```


**Voorbeeld**

```php
$string_one = "you have teeth";
$string_two = "toads are nice";
$string_three = "brown is my favorite color";

function convertToQuestion(&$str) // gebruik van & 
{
$str = "Do you think " . $str . "?\n";
// redefinieren van string argument
}

// in de console de nieuwe string variabele
echo convertToQuestion($string_one);
echo convertToQuestion($string_two);
echo convertToQuestion($string_three)
```


### Variable Scope

```php
function calculateDaysLeft($feed_quantity, $number, $rate)
{
  $result = $feed_quantity / ($number * $rate);
  return $result;
}

echo calculateDaysLeft(300, 2, 30);
```




![[Screenshot 2025-05-14 at 15.13.55.png]]










## Introduction to Built-In Functions

PHP heeft een aantal built-in functions. Deze functies – ook bekend als internal functions – kunnen aangeroepen worden zonder dat wij ze zelf te hoeven schrijven.

```php
echo("This works!\n");
echo "This also works!\n";
echo "Buuuut!", " ", "This", " ", "does!", "\n";
//echo("This would NOT work", "\n");
```


### Werken met Variables

PHP heeft een handige built-in function voor het verkrijgen van informatie over de variables, zoals `gettype()`. Deze functie neemt een argument en returned een string waarde die aangeeft wat voor data type het argument is.

```php
$name = "Aisle Nevertell";
$age = 1000000;

echo gettype($name); // Prints: string
echo gettype($age); // Prints: integer
```

Een andere functie die ook een variabele argument gebruikt is de `var_dump()` functie. Het print details over het argument dat het krijgt. Het laat zien wat voor soort data type het is, en welke waarde het heeft. Voor een string laat het de lengte hiervan zien.

```php
var_dump($name); // Prints: string(15) "Aisle Nevertell"
var_dump($age); // Prints: int(1000000)
```

`strrev()` krijgt een argument, een string, en draait deze om.

```php
echo strrev("Hello, World!"); // Prints: !dlroW ,olleH
```

`strtolower()` transformeert de argument string naar alleen kleine letters.

```php
echo strtolower("HeLLo"); // Prints: hello
```

`strrepeat()` neemt een string als eerste argument, en een nummer als het tweede. Het returned een string die de argument string zo vaak herhaald als het argument nummer.

```php
echo str_repeat("hi", 10); // Prints: hihihihihihihihihihi 
```


### Werken met Substrings

Een substring is een deel van een string. `substr_count()` is een functie die de hoeveelheid substrings in een string returned. Het neemt twee argumenten; de string die doorzocht word, en de substring die gezocht word — soms ook de `neelde` genoemd.

```php
$story = "I was like, \"Dude, like just tell me what you like think because like everyone else is like being totally honest, and like I just want to know what you like think.\" So like I don't know...";

echo substr_count($story, "like"); // Prints: 8
```







# Bronnen


- [Officiële PHP docs](https://www.php.net/manual/en/language.types.string.php)
- [Variables - codecademy](https://www.codecademy.com/resources/docs/php/variables)
- [PHP functions](https://www.codecademy.com/resources/docs/php/functions)
- [Introduction to functions - cheatsheet](https://www.codecademy.com/learn/learn-php-functions/modules/introduction-to-functions-in-php/cheatsheet)