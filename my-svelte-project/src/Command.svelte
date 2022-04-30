<script>
	import {onMount, onDestroy} from 'svelte'
	export let syntax;
	export let handler;

	function registerVoiceGrammar(syntax, handler){
		console.log("registerVoiceGrammar", syntax, handler)
	}
	function unregisterVoiceGrammar(syntax, handler){
		console.log("unregisterVoiceGrammar", syntax, handler)
	}

	onMount(() =>
	{
		registerVoiceGrammar(syntax, handler);
		handler()
	})
	onDestroy(() =>
	{
		unregisterVoiceGrammar(syntax, handler);
	})
	console.log(syntax, handler)
</script>

<small>
	available voice command: {syntax}
</small>
