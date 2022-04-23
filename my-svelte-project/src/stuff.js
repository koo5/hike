import * from './stores.js';

function new_dialog(dialog)
{
	dialogs.update(x => [...x, dialog]);

}
