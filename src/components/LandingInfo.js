import React from 'react';
import {
    Jumbotron,
    Row,
    Col
} from 'reactstrap';

const LandingInfo = () => {
    return (
        <Jumbotron style={{
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg)',
            backgroundSize: 'cover'
        }}>
            <div className="text-center text-white align-items-center">
                <h1 className="display-3">Enjoy your meal!</h1><br/>
                <hr style={{backgroundColor : 'white', maxWidth: '400px'}}  />
                <Row className="mt-4" xs="1" sm="1" md="2" lg="2">
                <Col className="text-right align-items-center">
                    <h3 style={{color:"#940f0f"}}><strong>MEALKHU</strong></h3>
                    <div className="pr-4 pt-1">
                        <img src="flower.png" alt="logo" width="95" />
                    </div>
                </Col>
                <Col className="text-left">
                    <h4># 경희대 주변 식당</h4>
                    <h4># 메뉴별, 가격별 필터링</h4>
                    <h4># 랜덤추천 기능</h4>
                    <h4># 밀쿠맵</h4>
                </Col>
                </Row>
            </div>
        </Jumbotron>
    );
}

export default LandingInfo;