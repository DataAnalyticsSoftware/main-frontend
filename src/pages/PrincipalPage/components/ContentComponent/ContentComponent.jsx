import React from 'react'
import { LoginComponent } from '../../components/LoginComponent/LoginComponent'
import { Button } from '../../../../components/Button/Button'
export const ContentComponent = (props) => {
    return (
        <div class="container" style={{ marginTop: '150px', marginBottom: '120px' }} >
            <div class="row " >
                <div class="col">
                    <div class="text-left">
                        <h6>Ordena y clasifica tu base de datos</h6>
                        <h1>¡Prueba nuestros servicios ahora mismo!</h1>
                        <text>Are you looking to take your YouTube channel to the next level and reach a wider audience? Look no further! Our website offers a comprehensive YouTube Views service designed to boost your video's visibility and engagement.</text>
                    </div>
                    <div class="text-left mt-4">
                        <Button label={'Learn More'} />
                    </div>

                </div>
                <div class="col">
                    <LoginComponent />
                </div>
            </div>

            <div class="row mb-5" style={{ marginTop: '120px', marginBottom: '120px' }} >
                <div class="col">
                    <div class="text-left">
                        foto
                    </div>
                </div>
                <div class="col text-left">
                    <h3>About Us</h3>
                    <div class='mt-4'>
                        <h5>Quality Assurance</h5>
                        <text>We are committed to providing genuine and organic views that comply with YouTube's terms of service. Our views come from real users, ensuring authenticity and credibility for your content.Our views-boosting service isn't just about numbers</text>
                    </div>
                    <div class='mt-4'>
                        <h5>Quality Assurance</h5>
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
                <div class="col text-left">
                    <div >
                        <h5>Algorithm Optimization</h5>
                        <text>YouTube's algorithm takes into account various factors, including views, watch time, likes, comments, and shares. Our services are designed to improve these metrics, increasing the likelihood of your video being recommended to a wider audienceYouTube's algorithm takes into account various factors, including views, watch time, likes, comments, and shares. </text>
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
                        <h5>Algorithm Optimization</h5>
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
                        <h5>Targeted Audience Reach</h5>
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
            <div style={{ marginTop: '140px', marginBottom: '80px' }}>
                <h1>Our Pricing</h1>
                <text>ur goal is to offer solutions that cater to a wide range of needs and budgets, empowering creators and businesses to enhance their YouTube presence effectively. Explore our pricing packages below to find the perfect fit for your goals.</text>
            </div>
            <div>
                pricing
            </div>
        </div>

    )
}