<script>
	export let path;

	import Bookmarks from './bookmarks.svelte'
	import Command from './Command.svelte'
	import Input from './Input.svelte'

	const file_path_syntax = 'file path syntax'

	function focus(x){
		console.log("focus",x)
	}

</script>

file path entry:
<input bind:value={path}/>
<Input syntax={file_path_syntax} handler={(value)=>{path = value;}}/>


fs_bookmarks:
<Bookmarks/>
<Command
	syntax='bookmarks'
	handler={()=>{
		focus(Bookmarks)
	}}
/>

browse:
