import styled from "styled-components";

export const TypePills = styled.div`
	display: flex;

	justify-content: ${({ secondaryType }) => {
		if (secondaryType !== null) {
			return "space-evenly";
		} else {
			return "center";
		}
	}};

	margin: ${({ secondaryType }) => {
		if (secondaryType === null) {
			return "0 5px";
		}
	}};

	.type-pill-primary {
		background-color: ${({ theme, type }) => {
			return theme.types[type];
		}};
		border-radius: 5px;
		width: 45%;
		color: ${({ type }) => {
			switch (type) {
				case "poison":
					return "#fff";
				case "water":
					return "#fff";
				case "fire":
					return "#fff";
				case "bug":
					return "#fff";
				case "fighting":
					return "#fff";
				case "psychic":
					return "#fff";
				case "rock":
					return "#fff";
				case "ghost":
					return "#fff";
				case "dragon":
					return "#fff";
				case "ice":
					return "#fff";
				case "flying":
					return "#fff";
				default:
					return "#212121";
			}
		}};
	}
	.type-pill-secondary {
		background-color: ${({ theme, secondaryType }) => {
			return theme.types[secondaryType];
		}};
		border-radius: 5px;
		width: ${({ secondaryType }) => {
			if (secondaryType === null) {
				return "0%";
			} else {
				return "45%";
			}
		}};
		color: ${({ secondaryType }) => {
			switch (secondaryType) {
				case "poison":
					return "#fff";
				case "water":
					return "#fff";
				case "fire":
					return "#fff";
				case "bug":
					return "#fff";
				case "fighting":
					return "#fff";
				case "psychic":
					return "#fff";
				case "rock":
					return "#fff";
				case "ghost":
					return "#fff";
				case "dragon":
					return "#fff";
				case "ice":
					return "#fff";
				case "flying":
					return "#fff";
				default:
					return "#212121";
			}
		}};
	}
`;
