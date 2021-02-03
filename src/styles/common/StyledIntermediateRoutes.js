import styled from "styled-components";

export const StyledIntermediateRoutes = styled.div`
	padding: ${({ theme }) => theme.globalPadding};

	h2,
	img {
		margin: 15px 0;
		font-size: 40px;
	}

	img {
		height: 25%;
		width: 25%;
	}
`;
