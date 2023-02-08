// modules
import Kian from './modules/Kian.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        Kian,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
