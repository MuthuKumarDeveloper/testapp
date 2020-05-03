// Page Base
import React, { Component } from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: #f8f9fb;
	overflow: scroll;
`;

export {
	PageWrapper,
};

export default class PageBase extends Component {
}
