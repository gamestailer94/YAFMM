import React from 'react'
export default class Menu extends React.Component
{
    render(){
        return <menu className="position-fixed w-100 bg-dark mt-0 h-5-r">
            <div className="row">
                <div className="col-1">
                    <button data-toggle="tooltip" data-placement="bottom" title="Start"><i className="fa fa-play fa-lg" /></button>
                </div>
            </div>
        </menu>
    }
}