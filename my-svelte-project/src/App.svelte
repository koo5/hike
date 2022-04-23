<script>
	import * from './stuff.js';


</script>

<Command syntax='open file' handler=()=>
{
	new_dialog({class: 'open file',})
}/>

{#each $dialogs as d (d)}
	{#if class == 'open file'}
		<open_file {d}/>
	{/if}
<br/>

{/each}

