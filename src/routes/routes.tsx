import TodoList from '../pages/todo-list';
import ListBox from '../pages/list-box';

export const paths = {
  home: '/',
  todo: '/test1',
  listBox: '/test2',
};

const mainRoutes = [
  { path: paths.home, component: TodoList },
  { path: paths.todo, component: TodoList },
  { path: paths.listBox, component: ListBox },
];

export { mainRoutes };
