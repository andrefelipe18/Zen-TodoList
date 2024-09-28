import { describe, expect, test, assertType, expectTypeOf } from 'vitest'
import useTodos from '../composables/useTodos'
import { Todo } from '../types/Todo'

describe('useTodos', () => {
  test('type todo', () => {
    const { todos, addTodo } = useTodos()
    addTodo('test')
    addTodo('test2')
    assertType<Todo>(todos.value[0])
    expectTypeOf(todos.value).toEqualTypeOf([] as Todo[])
  })

  test('addTodo', () => {
    const { addTodo, todos } = useTodos()
    addTodo('test')
    expect(todos.value.length).toBe(1)
  })

  test('editTodo', () => {
    const { addTodo, editTodo, todos } = useTodos()
    addTodo('test')
    editTodo(todos.value[0].id, 'edited')
    expect(todos.value[0].text).toBe('edited')
  })

  test('removeTodo', () => {
    const { addTodo, removeTodo, todos } = useTodos()
    addTodo('test')
    removeTodo(todos.value[0].id)
    expect(todos.value.length).toBe(0)
  })

  test('completeTodo', () => {
    const { addTodo, completeTodo, todos } = useTodos()
    addTodo('test')
    completeTodo(todos.value[0].id)
    expect(todos.value[0].done).toBe(true)
  })

  test('removeAll', () => {
    const { addTodo, removeAll, todos } = useTodos()
    addTodo('test')
    addTodo('test2')
    addTodo('test3')
    removeAll()
    expect(todos.value.length).toBe(0)
  })

  test('todosGroupedByDate', () => {
    const { addTodo, todosGroupedByDate } = useTodos()
    addTodo('test')
    addTodo('test2')
    const now = new Date();
    const date = now.toISOString().split('T')[0]
    expect(todosGroupedByDate.value[date].length).toBe(2)
  })

  test('findTodo', () => {
    const { findTodo } = useTodos()
    const todo = findTodo(0)
    expect(todo).toBeDefined()
  })
})