import React, { ComponentType, Fragment } from 'react';
import HomeC from '@src/components/Home/Home';
import style from './Home.module.scss';

const Home: ComponentType = () => {
	return (
		<Fragment>
			<div data-test-id="login-form" className={style.data}>
				Hello World
			</div>
			<HomeC />
		</Fragment>
	);
};

export default Home;
