import React, { useContext } from "react";
import { Button } from "../../../../components/Button/Button";
import { DashboardContext } from "../../context/DashboardContext";

export const PricingTableComponentDashboard = (props) => {
    const { pricing } = useContext(DashboardContext)
    return (
        <div className="container" >
            <div className="card-deck mb-3 text-center" style={{ height: '530px' }}>
                {pricing?.map((value => {
                    return (
                        <div key={value.name} className="card mb-4" style={{ borderRadius: '20px', width: '250px' }}>
                            <i className={`bi bi-${value.icon}`} style={{ fontSize: '50px', color: 'orange', marginTop: '22px' }}></i>
                            <div className="mt-3">
                                <h4 className="my-0 font-weight-normal">{value.name}</h4>
                            </div>
                            <div className="card-body position-relative ">
                                <p className="mb-0">Starting at</p>
                                <h1 className="card-title pricing-card-title mt-0">${value.price} <small className="text-muted">/ mo</small></h1>
                                <h5 className="card-title pricing-card-title"> <small className="text-muted">{value.ideal}</small></h5>
                                <button type="button" className="btn btn-primary position-relative w-100 mb-3" style={{ borderRadius: '20px', height: '60px' }}>
                                    <span >
                                        {value.btnValue}
                                    </span>
                                </button>
                                <div className="shadow mb-5 lg-body" style={{ backgroundColor: 'white', padding: '0px 22px 5px', position: 'absolute', borderRadius: '20px' }}>
                                    <h5 key={value.name} className="mt-4">Features Included</h5>
                                    <hr></hr>
                                    <ul key={value.name} className="list-unstyled mt-3 mb-4" style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                                        {value?.plusInfo?.map((value => {
                                            return (
                                                <l1>{value.replace(',', ',\n')}</l1>
                                            )
                                        }))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    )
                }))}
            </div></div>

    )
}
