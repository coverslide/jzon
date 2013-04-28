# JZON

A simple wrapper for JSON functions to return errors instead of throw

## Introduction

I tend to use a lot of JSON in my apps, but I dislike the common method of wrapping JSON calls in a try/catch block. It can get very repetetive for such a common task, so instead of writing:

```javscript
try{
  var x = JSON.parse(str);
catch(e){
  //error handling bits here
}
```

I would rather write:

```javascript
  var x = jzon.parse(str);
```

Then the code handling `x` should be able to determine whether it received an error or the parsed value.

## Installation

```
npm install jzon
```

## Usage

JZON can function as a drop-in replacement for the native JSON libraries.

```javascript
var jzon = require('jzon');
jzon.parse(str);
jzon.stringify(obj);
```

Also, the jzon variable itself is a function which you can use like so:

```javascript
var x = jzon('parse', str);
var y = jzon('stringify', obj);
```

And, if you like callback style, the last argument can be a callback.

```javascript
jzon.parse(str, function(err, obj){
  if(err) return
})
```

## License

ISC
