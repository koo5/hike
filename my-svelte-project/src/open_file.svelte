<script>
	export let path;

</script>

file path entry:
<input bind:value={path}/>
<Input syntax=file_path_syntax handler={(value)=>{path = value;}}/>


fs_bookmarks:
<bookmarks/>
<Command syntax='bookmarks' handler={()=>
{
	focus(bookmarks)
}}/>

browse:


