# Getting Started

This tutorial explains how to create a simple web-based shopping application using [LaxarJS](https://laxarjs.org).
It provides a step-by-step introduction into creating widgets and activities and using them in an application.
The tutorial is intended for developers who are familiar with standard web technologies (HTML, JavaScript) and a basic familiarity with a UI-technologies such as [*React*](https://facebook.github.io/react/), [*AngularJS*](https://angularjs.org/) or [*Vue.js*](https://vuejs.org/), with Vue.js being used throughout this tutorial.

If you are completely unfamiliar with LaxarJS, you might want to check out [Why LaxarJS](https://laxarjs.org/docs/generator-v2-latest/docs/why_laxar/) and maybe have a brief look at the [key concepts](https://laxarjs.org/docs/generator-v2-latest/docs/concepts/) first.
While this tutorial aims to be a comprehensive guide for starters, it will not include and explain every line of code of the whole project.
Instead, each step introduces a new concept of LaxarJS.
Still, links to the relevant project source files are provided from each section.


## Get the Prerequisites

To create projects with LaxarJS, [*Node.js*](https://nodejs.org) (v6 or later) is required.
Everything else will be obtained as we go.

First, you will need to create a new LaxarJS application.
To simplify this process, install the *Yeoman* scaffolding tool as well as the *Yeoman generator for LaxarJS 2*:

```console
npm install -g yo generator-laxarjs2
```

Depending on your setup you may need to use `sudo` for this.
If you cannot or do not want to modify your global NPM packages, take a look to the [*local installation* instructions](https://laxarjs.org/docs/generator-laxarjs2-v2-latest/#local-installation) in the [generator documentation](https://laxarjs.org/docs/generator-laxarjs2-v2-latest/).


## Creating a LaxarJS Application

The recommended way to create a LaxarJS application is by using our _Yeoman generator._
Since you just installed the generator, all you need to do is:

```console
mkdir shop-demo
cd shop-demo
yo laxarjs2
```

The generator will ask for some details about the application, offering helpful suggestions where possible.
Let us answer the questions of the LaxarJS generator as follows, making sure to include the integration technology `"vue"`:

<pre>
? <b>The application name:</b> <em>shop-demo</em>
? <b>Description (optional):</b> <em>a small web shop</em>
? <b>License:</b> <em>none</em>
? <b>Project homepage (optional):</b>
? <b>Author name (optional):</b>
? <b>Select integration technologies to include:</b>
  ◯ AngularJS 1.x ("angular")
  ◯ Angular 2.x/4.x ("angular2")
  ◯ React ("react")
  ◉ <em><b>Vue.js</b> ("vue")</em>
? <b>Should an example set of widgets be generated?</b> <em>No</em>
</pre>

Provided with this information, the generator will create a basic LaxarJS application for you.
It also prepares a `package.json` containing its dependencies.
To install these dependencies, you will need to run:

```console
npm install
```

Now you can start the [webpack development server](https://webpack.js.org/configuration/dev-server/) which assembles your application and serves it over HTTP:

```console
npm start
```

The empty application can now be opened, by pointing your web browser at [http://localhost:8080/debug.html](http://localhost:8000/debug.html).
Here, you should see an empty document containing nothing but a greeting message to tell you that everything was set up correctly.

To stop the server (for now), press `Ctrl-C`.


## The Next Step

The next step is to create a simple widget and to add it to your application in order to display ["Hello World!"](02_hello_world.md).

Getting Started | [Hello, World! »](02_hello_world.md)
