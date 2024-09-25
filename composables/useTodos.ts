import { useStorage } from "@vueuse/core";
import type { Todo } from "@/types/Todo";
import { computed } from "vue";
export default function useTodos() {
  const todos = useStorage<Todo[]>("todos", []);

  const findTodoById = (id: number) => {
    return todos.value.find((todo) => todo.id === id);
  }

  const addTodo =  (text: string) => {
    if (!text.trim()) return;
    const now = new Date();
    todos.value.push({
      id: now.getTime(),
      text: text,
      done: false,
      doneAt: '',
      date: now.toISOString().split('T')[0], // YYYY-MM-DD
    });
  };

  const editTodo = (id: number, value: string) => {
    const todo = findTodoById(id);
    if (todo) {
      todo.text = value;
    }
  }

  const removeTodo = (id: number) => {
    const index = todos.value.findIndex((todo) => todo.id === id);
    if (index !== -1) todos.value.splice(index, 1);
  };

  const removeAll = () => {
    todos.value = [];
  }

  const completeTodo = (id: number) => {
    const todo = findTodoById(id);
    if (todo) {
      todo.done = !todo.done;
      todo.doneAt = todo.done ? new Date().toISOString() : '';
    }
  };

  const todosGroupedByDate = computed(() => {
    return todos.value.reduce((groups, todo) => {
      const date = todo.date;
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(todo);
      return groups;
    }, {} as Record<string, Todo[]>);
  });

  return {
    todos,
    addTodo,
    editTodo,
    removeTodo,
    completeTodo,
    todosGroupedByDate,
    removeAll,
  }
}