<script>
	var items = some_global_bookmarks_list();

	function onFocus()
	{
		// speak all the available bookmarks
		foreach item in items:
			speak(item)
	}

</script>

{#each items as item, i}

<li>
	item
	<Command syntax="{i}" handler="()=>{handle_picked_bookmark_item(i)}/>
</li>

{/each}
