<script>
	export let syntax;
	export let handler;

	onMount(() =>
	{
		registerVoiceGrammar(syntax, handler);
	}
	onDestroy(() =>
	{
		unregisterVoiceGrammar(syntax, handler);
	}
</script>

<small>
	available voice command: {syntax}
</small>
