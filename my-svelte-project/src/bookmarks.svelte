<script>
	import {onMount} from 'svelte'
	import Command from './Command.svelte'
	function some_global_bookmarks_list(){
		return [
			(1,'one'),
			(2,'two')
		]
	}
	var items = some_global_bookmarks_list();

	function speak(x){
		console.log("speak",x)
	}

	function handle_picked_bookmark_item(item){
		console.log('handle_picked_bookmark_item',item)
	}

	function onFocus()
	{
		// speak all the available bookmarks
		for(const item in items){
			speak(item)
		}
	}
	onMount(()=>{onFocus()})

</script>

{#each items as _, i}

<li>
	item
	<Command syntax={i} handler={()=>{handle_picked_bookmark_item(i)}}/>
</li>

{/each}
