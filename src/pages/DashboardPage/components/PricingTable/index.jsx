import React from "react";
import { Button } from "../../../../components/Button/Button";

export const PricingTableComponentDashboard = (props) => {
    return (
        <div class="container" >
            <div class="card-deck mb-3 text-center">
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Free</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
                        <h5 class="card-title pricing-card-title"> <small class="text-muted">Ideal for getting Started</small></h5>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>1 users included</li>
                            <li>100 clients imports</li>
                            <li>1 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                        </ul>
                        <Button label={'Buy'} />
                    </div>
                </div>
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Basic</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$299 <small class="text-muted">/ mo</small></h1>
                        <h5 class="card-title pricing-card-title"> <small class="text-muted">Ideal for growing brands</small></h5>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>10 users included</li>
                            <li>1500 clients imports</li>
                            <li>15 GB of storage</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                        </ul>
                        <Button label={'Buy'} />
                    </div>
                </div>
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Pro</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$650 <small class="text-muted">/ mo</small></h1>
                        <h5 class="card-title pricing-card-title"> <small class="text-muted">Ideal for larger teams</small></h5>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>30 users included</li>
                            <li>5000 clients imports</li>
                            <li>20 GB of storage</li>
                            <li>Phone and email support</li>
                            <li>Help center access</li>
                        </ul>
                        <Button label={'Buy'} />
                    </div>
                </div>
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Enterprise</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$?<small class="text-muted">/ mo</small></h1>
                        <h5 class="card-title pricing-card-title"> <small class="text-muted">Ideal for Big Companies</small></h5>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>Unlimited users included</li>
                            <li>Unlimited clients imports</li>
                            <li>Unlimited storage</li>
                            <li>Phone and email support</li>
                            <li>Help center access</li>
                        </ul>
                        <Button label={'Contact'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
