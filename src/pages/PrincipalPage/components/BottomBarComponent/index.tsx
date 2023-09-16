import React from 'react'

export const BottomBarComponent = (props:any) => {
    return (
        <div>
            <footer className="pt-4 my-md-5 pt-md-5 border-bottom" style={{ paddingBottom: '70px', color: 'white' }}>
                <div className="row">
                    <div className="col col-lg-6 text-left">
                        <h5>LOGO HERE</h5>
                        <text>objectives to ensure the website is tailored to your needs. Our team of experienced professionals has the skills and knowledge to create stunning, functional, and user-friendly websites that will bring your business to the next level. With our high-quality designs and personalized service.</text>
                    </div>
                    <div className="col col-lg-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled text-small">
                            <li><a style={{ color: 'white' }} href="#">Functions</a></li>
                            <li><a style={{ color: 'white' }} href="#">About Us</a></li>
                            <li><a style={{ color: 'white' }} href="#">Prices</a></li>
                            <li><a style={{ color: 'white' }} href="#">Enter</a></li>
                        </ul>
                    </div>
                    <div className="col col-lg-3">
                        <h5>Social Media</h5>
                        <ul className="list-unstyled text-small">
                            <li><a style={{ color: 'white' }} href="#">Team</a></li>
                            <li><a style={{ color: 'white' }} href="#">Locations</a></li>
                            <li><a style={{ color: 'white' }} href="#">Privacy</a></li>
                            <li><a style={{ color: 'white' }} href="#">Terms</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}