import React, { ComponentType, Fragment } from 'react';
import style from './Home.module.scss';

const Home: ComponentType = () => {
	return (
		<Fragment>
			<div data-test-id="login-form" className={style.data}>
				Hello World
			</div>
		</Fragment>
	);
};

export default Home;
