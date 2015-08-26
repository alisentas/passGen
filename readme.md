passGen - Password Generator
====

![Download](http://img.shields.io/badge/download-1.2%20kb-blue.svg)

Passgen is a powerful password generator. You can also use it for generating random strings.

Usage
====

Call passGen function with the options object like this:

```javascript
passGen({
    length: 16,
    readable: false,
    letter: true,
    number: true,
    upperCase: true,
    specialChar: true,
})
```

**length:** required, length of password

All other options are optional.

**readable**: If selected, password will be a readable word like: asperdundim. Default: false

**letter**, **number**, **specialChar**: Should password include letters, numbers and special chars (punctuation, !?:%...) respectively. Default: true

**uppercase**: If selected, some of the letters in the password will be uppercase. Default: true

Examples:
====
````javascript
passGen({ length: 15 }); // pp?!R(-8-T282JR

passGen({ length: 15, readable: true}); // ykACgONxudYecDOv

passGen({ length: 16, readable: true, upperCase: false}); // cyelnenbawzazfas
```


[Demo](http://alisentas.github.io/passGen/) here.
