import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";


describe('Testin in <AuthReducer />', () => {

    test('should perform the login ', () => {
        const initState = {}

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Fernando'
            }
        }

        const state = authReducer(initState, action);

        expect(state).toEqual({
            uid: 'abc',
            name: 'Fernando'
        })
    });

    test('should perform the logout', () => {
        const initState = {
            uid: 'ijsdifjas',
            name: 'Fernando'
        }

        const action = {
            type: types.logout
        };

        const state = authReducer(initState, action);

        expect(state).toEqual({});
    })

    test('should´t change in the state', () => {
        const initState = {
            uid: 'ijsdifjas345345',
            name: 'Fernando'
        }

        const action = {
            type: types.logout + '234234'
        };

        const state = authReducer(initState, action);

        expect(state).toEqual(initState);
    })



})
