console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
    var middleEarth = document.createElement("section");
    middleEarth.setAttribute("id", "middle-earth");
  // inside, add each land as an article tag
    for (i = 0; i<lands.length; i++) {
     var land = lands[i];
     var article = document.createElement("article");
     var h1 = document.createElement("h1");
     var text = document.createTextNode(land);
     h1.appendChild(text);
     window.article = article;
     article.appendChild(h1);
     middleEarth.appendChild(article);
     document.body.appendChild(middleEarth);
   }
    
    
  // inside each article tag include an h1 with the name of the land

  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var article = document.getElementsByTagName("article");
  var hobbitList = document.createElement("ul");
  for (i = 0; i<hobbits.length; i++) {
    var hobbit = hobbits[i];
    var li = document.createElement("li");
    var name = document.createTextNode(hobbit);
    li.appendChild(name);
    hobbitList.appendChild(li);
    li.setAttribute("class", "hobbit");
    article[0].append(hobbitList);
    

  }
  
  // give each hobbit a class of hobbit
}

makeHobbits();
// Part 3

function keepItSecretKeepItSafe() {
  var frodo = document.querySelector("li");
  var ring = document.createElement("div");
  // create a div with an id of 'the-ring'
  ring.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  ring.setAttribute("class", "magic-imbued-jewelry");
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  ring.addEventListener("click", nazgulScreech);
  // add the ring as a child of Frodo
  frodo.append(ring);

}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  var article = document.getElementsByTagName("article");
  var aside = document.createElement("aside");
  var buddyList = document.createElement("ul");
  
  
  // create an aside tag
  for (i = 0; i<buddies.length; i++) {
    var buddy = buddies[i];
    var li = document.createElement("li");
    var name = document.createTextNode(buddy);
    li.appendChild(name);
    buddyList.appendChild(li);
    aside.appendChild(buddyList);
    article[1].appendChild(aside);
}
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}
makeBuddies();


// Part 5


function beautifulStranger() {
var rivendell = document.getElementsByTagName("article")[1];
var goodbye = rivendell.lastChild;
var li = goodbye.lastChild;
var items = li.childNodes;
items[3].innerText = "Aragorn";
console.log(items);


  // change the 'Strider' textnode to 'Aragorn'
}

beautifulStranger();
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
var shire = document.getElementsByTagName("article")[0];
console.log(shire);
var hobbits = document.querySelector('ul');
console.log(hobbits);
var rivendell = document.getElementsByTagName('article')[1];
console.log(rivendell);
rivendell.append(hobbits);

}

leaveTheShire();
// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
