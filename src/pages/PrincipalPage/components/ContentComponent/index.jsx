import React, { useContext } from 'react'
import { LoginComponent } from '../LoginComponent'
import { Button } from '../../../../components/Button/Button'
import { PricingTableComponent } from '../PricingTableComponent';
import { BottomBarComponent } from '../BottomBarComponent';
import { GenericContext } from '../../../../context/GenericContext';
export const ContentComponent = (props) => {
    const { token } = useContext(GenericContext)
    return (
        <>
            <div class="container-fluid" style={{ marginTop: '150px', marginBottom: '120px', paddingRight: '80px', paddingLeft: '80px' }}  >
                <div class="row" >
                    <div class="col" >
                        <div class="text-left">
                            <h6>Boost your Services</h6>
                            <h1 style={{ fontSize: '86px' }}>Try Our Website's <span style={{ color: '#0179FE' }}>Services Now!</span></h1>
                            <text>Are you looking to take your YouTube channel to the next level and reach a wider audience? Look no further! Our website offers a comprehensive YouTube Views service designed to boost your video's visibility and engagement.</text>
                        </div>
                        <div class="text-left mt-4">
                            <Button label={'Learn More'} />
                        </div>

                    </div>
                    <div class="col">
                        {!token && <LoginComponent />}
                    </div>
                </div>

                <div class="row mb-5" style={{ marginTop: '120px', marginBottom: '120px' }}  >
                    <div class="col">
                        <div class="text-left">
                            foto
                        </div>
                    </div>
                    <div id='aboutUs' class="col text-left">
                        <h3>About Us</h3>
                        <div class='mt-4'>
                            <h5 style={{ color: '#0179FE' }}>Quality Assurance</h5>
                            <text>We are committed to providing genuine and organic views that comply with YouTube's terms of service. Our views come from real users, ensuring authenticity and credibility for your content.Our views-boosting service isn't just about numbers</text>
                        </div>
                        <div class='mt-4'>
                            <h5 style={{ color: '#0179FE' }}>Customer Centric</h5>
                            <text >We value your success as much as you do. Our customer support team is available 24/7 to assist you with any inquiries,</text>
                        </div>
                        <div class="text-left mt-4">
                            <Button label={'Learn More'} />
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '160px', marginBottom: '120px' }}>
                    <h1>Boosting Services</h1>
                    <text>In an increasingly competitive digital landscape, capturing the attention of your target audience on YouTube can be challenging</text>
                </div>

                <div class="row mb-5" style={{ marginTop: '200px', marginBottom: '200px' }} >
                    <div class="col text-left" >
                        <div id='functions'>
                            <h5 style={{ color: '#0179FE' }} >Organic Views Enhancement</h5>
                            <text>We specialize in providing genuine, organic views that align with YouTube's guidelines. Our methods ensure that your view count grows naturally, helping your video gain traction and credibility.</text>
                        </div>
                        <div class="text-left mt-4">
                            <Button label={'Learn More'} />
                        </div>

                    </div>
                    <div class="col">
                        <div class="text-left">
                            foto
                        </div>
                    </div>
                </div>

                <div class="row mb-5" style={{ marginTop: '200px', marginBottom: '200px' }} >
                    <div class="col">
                        <div class="text-left">
                            foto
                        </div>
                    </div>
                    <div class="col text-left">
                        <div class='mt-4'>
                            <h5 style={{ color: '#0179FE' }}>Algorithm Optimization</h5>
                            <text>YouTube's algorithm takes into account various factors, including views, watch time, likes, comments, and shares. Our services are designed to improve these metrics, increasing the likelihood of your video being recommended to a wider audienceYouTube's algorithm takes into account various factors, including views, watch time, likes, comments, and shares. </text>
                        </div>
                        <div class="text-left mt-4">
                            <Button label={'Learn More'} />
                        </div>
                    </div>
                </div>

                <div class="row mb-5" style={{ marginTop: '200px', marginBottom: '200px' }} >
                    <div class="col text-left">
                        <div >
                            <h5 style={{ color: '#0179FE' }}>Targeted Audience Reach</h5>
                            <text>We analyze your content and target audience to strategize the best approach for boosting views. This ensures that your video reaches the right viewers who are more likely to engage with your content.We analyze your content and target audience to strategize the best approach for boosting views. </text>
                        </div>
                        <div class="text-left mt-4">
                            <Button label={'Learn More'} />
                        </div>

                    </div>
                    <div class="col">
                        <div class="text-left">
                            foto
                        </div>
                    </div>
                </div>
                <div id="pricingTable" style={{ marginTop: '140px', marginBottom: '80px' }}>
                    <h1>Our Pricing</h1>
                    <text>ur goal is to offer solutions that cater to a wide range of needs and budgets, empowering creators and businesses to enhance their YouTube presence effectively. Explore our pricing packages below to find the perfect fit for your goals.</text>
                </div>
                <div>
                    <PricingTableComponent />
                </div>

                {/*FOOTER AQUI ABAJO---------->*/}
            </div >

            <div style={{ backgroundColor: '#0179FE', paddingRight: '80px', paddingLeft: '80px', color: 'white', paddingTop: '10px', paddingBottom: '40px' }}>
                <BottomBarComponent />
            </div>
        </>

    )
}