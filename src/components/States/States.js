import React from 'react'
import './States.css'
import { connect } from 'react-redux'


class States extends React.Component{
    constructor(){
        super()
        this.state={
            
        }
    }

    render(){
        console.log('states component data',this.state)
        return(
            <div className='States'>
                <h2>states component</h2>
            </div>
            )
        }
    
    }
const mapStateToProps= (state)=>{
    return{
        data: state.data,
        }
}

export default connect(mapStateToProps)(States)