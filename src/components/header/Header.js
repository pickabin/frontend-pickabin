import React, { useState } from 'react';
import { Navigation, Nav, Ul, Li, Logo } from './Header.style';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../styles/Common.style';
import hamburger from '../../images/icon-hamburger.svg';
import close from '../../images/icon-close.svg';
const Header = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<div>
			<Container>
				<Navigation>
					<Nav>
						<Logo>
							<img src={logo} alt='logo' />
						</Logo>
						<Ul className={open ? `active` : `navlinks`}>
							<Li>
								<Link to={`#`}>Home</Link>
							</Li>
							<Li>
								<Link to={`#`}>Features</Link>
							</Li>
							<Li>
								<Link to={`#`}>Testimoni</Link>
							</Li>
							<Li>
								<Link to={`#`}>Contact</Link>
							</Li>
						</Ul>
						<Button>Get The App Now</Button>
						<img
							src={open ? close : hamburger}
							className='hamburger'
							alt=''
							onClick={handleClick}
						/>
					</Nav>
				</Navigation>
			</Container>
		</div>
	);
};

export default Header;
