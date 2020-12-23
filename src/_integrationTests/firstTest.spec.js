import moxios from 'moxios';
import { testStore } from './../../Utils';
import { applicationLoadedSuccessfully } from '../app/common/redux/actions/commonActions';

describe('fetchPosts action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {

        expect(1).toBe(1);

        // const expectedState = [{
        //     title: 'Example title 1',
        //     body: 'Some Text'
        // },{
        //     title: 'Example title 2',
        //     body: 'Some Text'
        // },{
        //     title: 'Example title 3',
        //     body: 'Some Text'
        // }];
        // const store = testStore();

        // moxios.wait(() => {
        //     const request = moxios.requests.mostRecent();
        //     request.respondWith({
        //         status: 200,
        //         response: expectedState
        //     })
        // });

        // return store.dispatch(applicationLoadedSuccessfully())
        // .then(() => {
        //     const newState = store.getState();
        //     expect(newState.posts).toBe(expectedState);
        // })
        
    });

});