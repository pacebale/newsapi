import axios from 'axios';


export const artiklesAction = (payload) => {
  return {
      
      type:'ARTIKEL',
      payload: payload 
  }
}

export const linkAction = (url) => {
    // alert(JSON.stringify(url))
  return {
      
      type:'LINK',
      payload: url 
  }
}
export const fetchThunk = () => {

  return async(dispatch, getstate) => {
      let options = {
          "method": 'GET',
           "url" : `https://newsapi.org/v2/top-headlines?country=id&apiKey=428fbd2b4f584dac8858c73ce97b8a75`,
          
        }
        try {
          let { data } = await axios(options)
          if (data) {
            // alert(JSON.stringify(data))
             return dispatch(artiklesAction(data))
             
            
            
          } else {
            
              return dispatch(artiklesAction([]))
          }
        } catch (error) {
          
        }
      }
  }



  export const headerThunk = (payload) => {
    return (dispatch, getstate) => {
        return dispatch(artiklesAction(payload))
    }
}