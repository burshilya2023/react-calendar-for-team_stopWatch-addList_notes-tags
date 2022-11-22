import { FC } from "react"
import styled from "styled-components"

//!NOT USED
export type Item = {
	id: string
	label: string
}
const WrapperComponentS = styled.div`
	.grid {
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-wrap: wrap;
		position: relative;
		transition: translate(1s);
		gap: 2rem;
		&:hover {
			&::after {
				content: "grid container";
				position: absolute;
				bottom: -5px;
				right: 0;
				font-size: 10px;
				transition: 1s;
			}
		}
	}
	.card {
		background-image: url("https://99px.ru/sstorage/53/2022/01/mid_338352_681473.jpg");
		padding: 8rem 0 0;
		text-align: left;
		background-position: center;
		color: inherit;
		text-decoration: none;
		border-radius: 0.6rem;
		overflow: hidden;
		transition: color 0.2s ease, border-color 0.55s ease;
		max-width: 280px;
		position: relative;
		cursor: pointer;
		transition: transform 200ms ease;
		background-color: #296d6ea0;
		@media (max-width: 565px) {
			max-width: 330px;
		}
		@media (hover) {
			&:hover,
			:focus-within {
				transform: scale(1.03);
			}
			&:hover > .card__content {
				transform: translateY(0);

				& > * {
					opacity: 1;
				}
			}
			&:hover .card__title::after {
				transform: scaleX(1);
			}
		}
		&__content {
			transition: transform 400ms ease;
			transition-delay: 160ms;

			padding: var(--padding);
			background: linear-gradient(
				hsl(0 0% 0% /0),
				hsl(20 0% 0% /0.3) 15%,
				hsl(0 0% 0% /0.8)
			);

			display: flex;
			grid-row-gap: 10px;
			flex-direction: column;
			@media (hover) {
				transform: translateY(75%);
				& > *:not(.card__title) {
					transition: 0.5s;
					opacity: 0;
				}
			}
		}
		&__title {
			margin: 0 0 1rem 0;
			position: relative;
			font-size: 1.5rem;
			display: flex;

			width: max-content;
			&::after {
				transition: transform 400ms ease;
				@media (hover) {
					transform: scaleX(0);
				}
				transform-origin: left;
				/* left: calc(var(--padding) * -1); */
				bottom: -5px;
				content: "";
				position: absolute;
				height: 3px;
				width: calc(100% + var(--padding));
				background-color: var(--color-accent-400);
				transition: transform 500ms ease;
			}
		}
		&__body {
			margin: 0;
			font-size: 1.25rem;
			line-height: 1.5;
			color: rgb(255, 255, 255, 0.8);
		}
		&__button {
			cursor: pointer;
			display: inline;
			outline: none;

			border-radius: 0.3rem;
			color: var(--color-neutral-900);
			background-color: var(--color-accent-400);
			padding: 0.5em 1em;
			border: 2px solid var(--color-accent-400);
			display: flex;
			justify-content: space-between;
			gap: 20px;

			&:hover,
			:focus {
				background-color: var(--color-neutral-100);
				color: var(--color-accent-400);
			}
		}
	}
`
type DefaultProps = {
	show: boolean
	ArrayItem: Item[]
	handleClose: () => void
	onDeleteTag: (id: string) => void
	getText: (id: string, label: string) => string
}
const GridComponent: FC<any> = ({}) => {
	const gridBlock = [...new Array(16)].map((_, index) => (
		<div className='card' key={index}>
			<div className='card__content'>
				<h2 className='card__title'>title{index + 1}</h2>
				<div className='card__body'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga alias
					molestiae sed?
				</div>
				<button className='card__button'>button{index}</button>
			</div>
		</div>
	))

	return (
		<WrapperComponentS>
			<div className='grid'>{gridBlock}</div>
		</WrapperComponentS>
	)
}

export default GridComponent
