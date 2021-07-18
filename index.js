const reducer = (state = 0, action) => {
    switch(action.type) {
        case 'MODIFY_WIDTH':
            return action.payload;
    }
 }
 
 const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

 const render = () =>{ 
     const box = document.querySelector('#caixa');
     const newWidth = store.getState();
     box.style.width = newWidth + 'px';
 }
 render();
 store.subscribe(render)

 store.dispatch({type: 'MODIFY_WIDTH', payload: 50})
 store.dispatch({type: 'MODIFY_WIDTH', payload: 20})
 store.dispatch({type: 'MODIFY_WIDTH', payload: 80})
