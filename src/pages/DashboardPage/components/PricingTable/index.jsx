import React, { useContext } from "react";
import { Button } from "../../../../components/Button/Button";
import { DashboardContext } from "../../context/DashboardContext";

export const PricingTableComponentDashboard = (props) => {
    const { pricing } = useContext(DashboardContext)
    return (
        <div className="container" >
            <div className="card-deck mb-3 text-center">
                {pricing?.map((value => {
                    return (
                        <div className="card mb-4">
                            <i className={`bi bi-${value.icon}`} style={{ fontSize: '50px', color: 'orange', marginTop: '22px' }}></i>
                            <div className="mt-3">
                                <h4 className="my-0 font-weight-normal">{value.name}</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">${value.price} <small className="text-muted">/ mo</small></h1>
                                <h5 className="card-title pricing-card-title"> <small className="text-muted">{value.ideal}</small></h5>
                                <ul className="list-unstyled mt-3 mb-4" style={{ display: 'flex', flexDirection: 'column-reverse' }}>
                                    {value?.plusInfo?.map((value => {
                                        return (
                                            <l1>{value.replace(',', ',\n')}</l1>
                                        )
                                    }))}
                                </ul>
                                <button type="button" className="btn btn-primary position-relative w-100" style={{ borderRadius: '20px', height: '60px' }}>
                                    <span >
                                        {value.btnValue}
                                    </span>
                                </button>
                            </div>
                        </div>
                    )
                }))}
            </div></div>

    )
}
