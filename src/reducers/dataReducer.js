
const dataInitialValue = []
const profileReducer = (state=dataInitialValue, action)=>{
    switch(action.type) {

        case 'SET_DATA' : {
             return  [...action.payload]
        }

        default : {
            return [].concat(state)
        }
    }
}
 export default profileReducer
