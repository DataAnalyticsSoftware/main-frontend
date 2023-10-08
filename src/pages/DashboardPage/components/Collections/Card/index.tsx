import React, { useContext, useEffect, useState } from 'react'
import { DashboardContext } from '../../../context/DashboardContext'
import { getCollectionData } from '../../../../../services/index';
import { GenericContext } from '../../../../../context/GenericContext';



export const Card = () => {
    const { data } = useContext(GenericContext)

    const a = (props: any) => {
        console.log(props);
        return (
                    <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {props}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>
        )
    }

    return (
        <div style={{ display: 'flex', width:'100%',justifyContent:'space-evenly',flexFlow:'wrap', maxHeight:'750px', overflow:'scroll' }}>           
            {
                data.map(value => {
                    return (
                        <>
                        <div className='mr-5 mb-4'
                            style={{ height: '300px', width: '250px', backgroundColor: 'red', borderRadius: '15px', textAlign: 'center', }} >
                            <h2 className='mt-2'>{value.name}</h2>
                            <img  />
                            <hr ></hr>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >Edit</button>
                        </div>
                       {a(value.id)}
                        </>
                    )
                }) 
            }    
        </div>
    )
}