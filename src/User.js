import React, { Component } from 'react'
import Table from './Table'
export default class User extends Component {
    state = {      
        loading : false,
        items : [],
    }

    async componentDidMount(){     
        const url = "https://jsonplaceholder.typicode.com/users"
        const response = await fetch(url)    //it is asyncronus. for syncronus will use async in Mount and 'await' change it to syncronus  
        const data = await response.json() 
        this.setState({items:data,  loading:true})  
        console.log(data)
        
    }
    render() {

        var {loading, items} = this.state

        if(!loading){
            return <div>loading..</div>
        }
    
        return (
            <div>
                <Table item={items}/>
            </div>
        )
    }
}
