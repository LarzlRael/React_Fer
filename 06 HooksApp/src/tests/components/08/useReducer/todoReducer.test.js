import { todoReducer } from "../../../../componentes/08-useReducer/todoReducer"
import { demoTodos } from "../../../fixtures/demoTodos";



describe('Test in todo Redcuer', () => {

    test('should return state by default ', () => {

        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    })

    test('should add a TODO', () => {
        const newTodo = {
            id: 1,
            desc: 'aprender React',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);

    })


})
