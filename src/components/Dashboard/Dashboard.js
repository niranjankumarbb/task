import React from 'react'
import { connect } from 'react-redux'
import { startGetData} from '../../actions/dataAction'
import {Card} from 'react-bootstrap'
import States from '../States/States.js'
import DataShow from '../DataShow/DataShow.js'
import './Dashboard.css'


class Dashboard extends React.Component{
    constructor(){
        super()
        this.state={
           date: '',
           dateNewFormat: ''
        }
    }

    componentDidMount(){
        this.props.dispatch(startGetData())
     }

     handleDate=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
         const dateData= e.target.value.split('-').reverse()
         let newFormatDate=''
         dateData.forEach(ele=>{
            newFormatDate= newFormatDate+'/'+ ele
         })
              newFormatDate= ''+ newFormatDate.slice(1)
         this.setState({newFormatDate})
      }

    render(){
        console.log('dashboard component state values', this.state)
        console.log('dashboard component props values', this.props)

        return(
            <div className='Dashboard'>
                 <div className="row">
                   <div className="col-md-12 "> 
                      <div className="row">
                        <div className='dashboardDate'>
                       <div className="col-md-3 offset-md-9 "> 
                       <Card className='text-right'>
                        {/* <Card.Body >This is some text within a card body.</Card.Body> */}
                        <input type='date' id='date'  name='date' value={this.state.date} onChange={this.handleDate} />
                        </Card>                   
                        </div>
                        </div>
                      </div>   
                      <div className="row">
                      <div className="col-md-3 "> 
                        <div >
                        <States/>
                        </div>

                       </div>
                       <div className="col-md-9"> 
                        <DataShow/>
                       </div>
                      </div>  
                   </div>   
                 </div>   

                 </div>                    
        )
    }
}
 
const mapStateToProps= (state)=>{
    return{
        data: state.data,
     }
}

export default connect(mapStateToProps)(Dashboard)