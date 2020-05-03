// Page Organization Registration
import React from 'react';
import styled from 'styled-components';

import PageBase from './page_base';

const PageContent = styled.div`
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const ImageContent = styled.div`
    position: relative;
`;

const TitleContent = styled.div`
    position: absolute;
    top: 50px;
    margin-left: 20px;
`;

const Title = styled.h2`
    color: #fff;
`;

export default class PageComplete extends PageBase {
    /* Main Render Function */
    render() {
        return (
            <PageContent>
                <ImageContent>
                    <Image src="/images/default_background.jpg" alt="" />
                    <TitleContent>
                        <Title>Thank you for getting in touch!</Title>
                        <Title>We appreciate you contacting us One of our colleagues will get back in touch with you soon!</Title>
                        <Title>Have a great day!</Title>
                    </TitleContent>
                </ImageContent>
            </PageContent>
        );
    }
}
