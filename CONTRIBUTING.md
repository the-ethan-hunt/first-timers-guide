# Svelte : A Fan Favourite
### A Brief History
During the early 2010s, creating large and maintainable web applications was quite a challenge, mostly due to the sheer horrors of front-end development that developers had to face. This however was made easier by Frameworks such as [React](https://reactjs.org/) and [Vue](https://vuejs.org/), which brought component-oriented frameworks into existence, making them an instant hit among developers.  However, one developer had a better and bigger idea in mind.

### What is it about and what is it supposed to do
Svelte is a front-end framework made by Rich Harris. Marketed as a "framework without a framework", Svelte does most of the work during the build-time rather than the run-time, unlike other front-end frameworks. It achieves this by using a compiler, which converts declarative component code into plain vanilla JS code.  
This makes Svelte apps faster than apps made through other front-end frameworks, since it just converts UI-components into code, instead of shipping JavaScript runtime to the browser. 

### Explaining its Code Format
Svelte files have the extension `.svelte` and each file can be divided into 3 sections : 

 - `<script>` : This block contains JavaScript that runs when a component instance is created. Variables declared (or imported) at the top level are 'visible' from the component's markup.
 ```
<script>
	let x = 0;
	let y = 0;
	
	function yPlusAValue(value) {
		return value + y;
	}
	
	$: total = yPlusAValue(x);
</script>

Total: {total}
<button on:click={() => x++}>
	Increment X
</button>

<button on:click={() => y++}>
	Increment Y
</button>
```
The `$` tag marks a statement as reactive and are run before other components.
```
<script>
	export let title;

	// this will update `document.title` whenever
	// the `title` prop changes
	$: document.title = title;

	$: {
		console.log(`multiple statements can be combined`);
		console.log(`the current title is ${title}`);
	}
</script>
```
Bindings in this block can also be exported by using a `context = "module"` condition within the tag
```
<script context="module">
	let totalComponents = 0;

	// this allows an importer to do e.g.
	// `import Example, { alertTotal } from './Example.svelte'`
	export function alertTotal() {
		alert(totalComponents);
	}
</script>

<script>
	totalComponents += 1;
	console.log(`total number of times this component has been created: ${totalComponents}`);
</script>
```
- `<style>` : CSS inside this block will be scoped to that component. This works by adding a class to affected elements, which is based on a hash of the component styles
```
<style>
	p {
		/* this will only affect <p> elements in this component */
		color: purple;
	}
</style>
```
- `template` : These contain basic, but not always ordinary html code, and comprise of extra declarative code pre-provided by Svelte. 
Some examples being : normal html tags (`<div>` etc.), attributes and props (textInputs, buttons, etc.), text expressions (regex), comments and many more.


### Advantages of Svelte
1) Firstly, Svelte gains the upper-hand in optimization than other apps, since it reduces the number of digital layers between browser and the web.

2) It has beginner-friendly syntax, which is better to understand than more complex component-based frameworks.

3) Compilers have access to flexibility and power that runtime-only frameworks lack.

One major disadvantage that Svelte has is, because of it being a relatively new language, the support ecosystem it has to offer is relatively smaller than other frameworks, although its constantly evolving and increasing.

### So do people like it?
The answer to this question is a bit complex.  The sheer fact that you can write lesser code using Svelte for the same application than other frameworks, combined with its easy to understand syntax is what sparked a minor , but not so insignificant change in perception among the community.  Although people still didn't wish to completely shift to it, given the lack of technical support,  at the same they also did not give it up entirely. It has gotten many positive reviews among critics and professional developers due to its flexibility and at the same time, paranoia for it not having a big enough community.
<br>
