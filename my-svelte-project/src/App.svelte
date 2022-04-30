<script>
	import {dialogs, new_dialog} from './stuff.js';
  import Command from './Command.svelte'
	import OpenFile from './OpenFile.svelte'

</script>

<Command
	syntax='open file'
	handler={()=>{
		new_dialog({class: 'open file',})
	}}
/>
<div id='dialogs'>
{#each $dialogs as d (d)}
	dialog: {JSON.stringify(d)}
	{#if d.class === 'open file'}
		<OpenFile {d}/>
	{/if}
<br/>

{/each}
</div>
<style>
#dialogs {
	background-color:#ffffff;
}
</style>
