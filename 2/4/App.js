import db from './data/db.js';
import Todo from './components/Todo.js';

export default {
	data() {
		return {
			db,
		};
	},
	components: { Todo },
};
