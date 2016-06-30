# DirtyDB

A JSON file reading and writing utility.

To get started, create a new instance of DirtyDB.

```javascript
const instance = new DirtyDB("path/to/db.json");
```

Let's say the JSON file looked something like this:
```javascript
{
    "languages": [
        "CoffeeScript",
        "TypeScript",
        "JavaScript"
    ],
    "best": "JavaScript"
}
```

### Reading from a database

Now, you can read from the JSON file.

```javascript
let data = instance.read(); // the entirety of the JSON data will be returned.
```

Alternatively, you can read only a certain datum by passing its key as a parameter to the `read` function, like so:

```javascript
let data = instance.read("languages"); // this will return an array containing ["CoffeeScript", "TypeScript", "JavaScript"]
let data = instance.read("best"); // this will return a string containing "JavaScript"
```

### Writing to a database

You can write to a database with the `write` function.

```javascript
let customData = instance.read();
customData.languages.push("Dart");
instance.write(customData); // the JSON file is modified to include "Dart" in the "languages" array.
```
