import {createGlobalState} from 'react-hooks-global-state';

const {setGlobalState, useGlobalState} = createGlobalState({
    condition: false

})

export {useGlobalState, setGlobalState};