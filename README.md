# storage

> The coolest cortex module

## Getting Started
Before anything taking its part, you should install [node](http://nodejs.org) and "cortex".

#### Install Node

Visit [http://nodejs.org](http://nodejs.org), download and install the proper version of nodejs.

#### Install Cortex

    # maybe you should use `sudo`
    npm install -g cortex

## Using storage In Your Project

First, install 'storage' directly with `cortex install` (recommended)

	cortex install storage --save

or, you could update your package.json manually

    dependencies: {
        'storage': '<version-you-want>'
    }

and install dependencies

	cortex install

Then, use `require` method in your module

    var storage = require('storage');

Finally, start cortex server

    cortex server

Then cortex will care all the rest.


## API Documentation

### storage: constructor
': constructor' means the `module.exports` of module 'storage' is a constructor that we should use it with the `new` keyword

	new storage(options)

#### options
- options.name {String}



### storage.\<method-name\>(arguments)
Means this is a static method of `module.exports`

#### arguments
// arguments description here

### .\<method-name\>(arguments)
Mean this is a method of the instance

#### arguments
// arguments description here