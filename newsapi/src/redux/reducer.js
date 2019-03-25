const defaultState = {
     
    articlelist :[],
    links:''
}

const artikelReducer = (state=defaultState, action) => {
    switch (action.type) {
         
        case `ARTIKEL`:
        return {...state, articlelist: action.payload.articles }
        case `LINK`:
        return {...state, links: action.payload }
         
    }
}

export default artikelReducer