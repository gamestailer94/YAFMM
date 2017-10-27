import React from 'react'
export default class Menu extends React.Component
{

    componentDidMount(){
        $('[data-toggle="tooltip"]').tooltip()
    }
    
    render(){
        return <menu className="position-fixed w-100 bg-dark mt-0 h-5-r">
            <div className="row mt-3">
                <div className="col-1">
                    <button className="btn btn-success" data-toggle="tooltip" data-placement="bottom" title="Start"><i className="fa fa-play fa-lg" /></button>
                </div>
                <div className="col-1">
                    <button className="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Start"><i className="fa fa-wrench fa-lg" /></button>
                </div>
            </div>
        </menu>
    }
}