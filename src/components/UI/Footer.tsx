import React, { FC, useState, useEffect, useRef, useMemo } from "react"
import styled from "styled-components"
//motion value give me возможность получать вычесляемые значения во время анимации

const FooterWrapperS = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	height: 10vh;

	background-color: #00527e;
	gap: 20px;
	box-shadow: 0 0 0 100vmax var(--bg-color, #00527e);
	clip-path: inset(0 -100vmax);
	ul {
		display: flex;
	}
`

const Footer: FC = ({}) => {
	return (
		<FooterWrapperS>
			<h2>hello Footer</h2>
		</FooterWrapperS>
	)
}

export default Footer
