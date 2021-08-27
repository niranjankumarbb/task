import React from 'react'
import './DataShow.css'
import { connect } from 'react-redux'


 class   DataShow       extends React.Component {
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return (
            <div className='DataShow'>
               <h2> DataShow component</h2>
            </div>
        )
    }
}

const mapStateToProps= (state)=>{
    return{
        data: state.data,
     }
}

export default connect(mapStateToProps)(DataShow)
