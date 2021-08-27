import axios from 'axios'

export const startGetData = ()=>{
    return (dispatch)=>{
         axios.get(`https://api.covid19india.org/csv/latest/statewise_tested_numbers_data.csv`)
        .then(response=>{
            console.log('covid data response', response.data)
            dispatch(setData(response.data))
        })
        .catch(err=>{
            console.log('postsAction startGetPosts error', err)
        })
    }
}


export const setData= (data)=>{
     return { type : 'SET_DATA', payload : data}
}
