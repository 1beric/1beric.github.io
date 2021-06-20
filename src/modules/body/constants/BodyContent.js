import React from 'react';
import LandingPage from '../components/LandingPage';

import LANDING_PAGE_IMG from '../../../images/landingPage/profile.jpg';
import BERYL_ENGINE_IMG from '../../../images/beryl/crystal_2048.png';
import CMM_COMPILER_IMG from '../../../images/landingPage/profile.jpg';
import SWOOP_LANG_C_IMG from '../../../images/landingPage/profile.jpg';
import THREED_MODEL_IMG from '../../../images/landingPage/profile.jpg';
import NANO_2020_VR_IMG from '../../../images/landingPage/profile.jpg';
import ULTRASOUNDVR_IMG from '../../../images/landingPage/profile.jpg';
import ORGO_SYSTEMS_IMG from '../../../images/landingPage/profile.jpg';

export const LANDING_PAGE = 'Home';
export const BERYL_ENGINE = 'Beryl Engine';
export const CMM_COMPILER = 'C-- Compiler';
export const SWOOP_LANG_C = 'Swoop Language';
export const THREED_MODEL = '3D Modeling';
export const NANO_2020_VR = 'Nano 2020';
export const ULTRASOUNDVR = 'UltrasoundVR';
export const ORGO_SYSTEMS = 'Orgo';

export const values = () => [
	LANDING_PAGE,
	BERYL_ENGINE,
	CMM_COMPILER,
	SWOOP_LANG_C,
	THREED_MODEL,
	NANO_2020_VR,
	ULTRASOUNDVR,
	ORGO_SYSTEMS,
];
export const images = () => [
	LANDING_PAGE_IMG,
	BERYL_ENGINE_IMG,
	CMM_COMPILER_IMG,
	SWOOP_LANG_C_IMG,
	THREED_MODEL_IMG,
	NANO_2020_VR_IMG,
	ULTRASOUNDVR_IMG,
	ORGO_SYSTEMS_IMG,
];
export const imageMap = () => {
	const out = {};
	values.forEach((name, i) => (out[name] = images[i]));
	return out;
};

export const component = type => {
	switch (type) {
		case LANDING_PAGE:
			return <LandingPage />;

		case BERYL_ENGINE:
			return (
				<React.Fragment>
					<h1>{type}</h1>
					<p>
						Dolor eu ea pariatur eiusmod officia Lorem in excepteur nulla do
						elit cupidatat non. Pariatur elit consequat eu anim ut cillum
						nostrud culpa amet culpa. Pariatur exercitation pariatur quis
						laborum sunt labore esse mollit reprehenderit veniam mollit non
						adipisicing. Laboris nulla et eiusmod exercitation deserunt. Est
						mollit sunt sint aliqua consectetur consequat labore elit anim
						cupidatat ullamco consectetur commodo magna. Non sit labore Lorem ut
						Lorem anim. Anim cillum irure eiusmod pariatur. Sunt adipisicing
						occaecat ea occaecat et eu non ut in nulla sunt laboris. Eu minim
						Lorem ad excepteur cillum culpa culpa. Ipsum adipisicing sunt tempor
						mollit consequat irure eu culpa elit aute esse occaecat cupidatat.
						Ullamco ut ex labore do. Laboris occaecat id quis dolore in qui
						culpa et non amet voluptate ipsum elit ex. Voluptate sit do ullamco
						sunt quis occaecat velit ex. Lorem ipsum ullamco consectetur dolor
						qui Lorem dolore irure. Consectetur commodo mollit velit labore
						proident voluptate eu ad non. Culpa sint quis eiusmod in ad id id
						laboris anim culpa minim aliquip. Laboris Lorem ipsum elit velit
						cupidatat commodo in exercitation. Quis esse dolor cillum aute
						ullamco ullamco in Lorem. Aute est sint officia sunt occaecat.
						Veniam consectetur adipisicing laboris laboris laboris anim
						consectetur sint quis ea. Laborum labore ipsum dolore veniam
						consequat sit enim et. Laborum do ad voluptate dolor ullamco
						deserunt eu tempor. Sit minim laborum culpa veniam non cupidatat ex
						pariatur ipsum exercitation excepteur aliqua ad. Dolor mollit
						laborum enim culpa velit dolor. Non officia ipsum elit qui nulla ea
						proident. Nulla adipisicing aliquip aliquip velit exercitation elit
						reprehenderit amet sunt consectetur ut tempor anim esse. Id
						cupidatat eu irure excepteur Lorem aliqua commodo pariatur eu velit
						consectetur enim anim laborum. Laborum quis qui deserunt adipisicing
						qui ipsum reprehenderit labore duis excepteur mollit in. Pariatur
						labore deserunt irure sit nisi aliquip qui sint elit irure id id.
						Sit sunt deserunt nostrud nostrud incididunt ad et deserunt ad.
						Aliqua aliquip reprehenderit ad sunt. Aliquip eu mollit proident
						commodo exercitation non eiusmod culpa ex. Duis mollit quis duis
						cupidatat excepteur dolor nostrud. Cupidatat ex ipsum ea tempor.
						Exercitation velit cupidatat cillum aute ipsum. Proident commodo
						Lorem quis sint eiusmod magna deserunt voluptate. Mollit consectetur
						labore sunt tempor non consectetur voluptate in elit duis aliqua
						voluptate aliquip. Enim fugiat sit voluptate eu minim exercitation
						qui pariatur nulla culpa. Ex laborum ullamco ea veniam irure ut
						ullamco exercitation nostrud. Non proident ut mollit esse dolor
						officia exercitation excepteur. Ullamco est Lorem sunt ad ad minim
						sunt anim. Proident ullamco exercitation commodo laboris laborum
						aute magna veniam ad occaecat ipsum commodo consequat ullamco.
						Pariatur occaecat labore ex velit sit aliqua. Dolore consequat Lorem
						est quis pariatur aliquip fugiat. Lorem proident dolore laboris
						nulla velit sunt enim et eiusmod est. Nisi tempor duis deserunt ex
						aliqua id consequat veniam consequat incididunt minim eiusmod
						tempor. Ut consectetur dolor ex cillum eu Lorem ipsum nulla
						consequat qui. Nulla fugiat minim fugiat ad magna esse occaecat
						tempor aute. Adipisicing qui ea nulla velit qui pariatur
						reprehenderit magna sit est do eiusmod. Deserunt sit adipisicing et
						ex fugiat laboris quis anim ad anim pariatur. Nisi amet et magna
						commodo pariatur ea commodo aliquip laborum quis excepteur do non.
						Culpa ullamco ea incididunt proident fugiat nulla magna proident
						nostrud. Ut et esse pariatur qui esse reprehenderit. Sint labore
						laboris nulla incididunt in in consectetur ut eiusmod reprehenderit
						dolor. Dolor eu ea pariatur eiusmod officia Lorem in excepteur nulla
						do elit cupidatat non. Pariatur elit consequat eu anim ut cillum
						nostrud culpa amet culpa. Pariatur exercitation pariatur quis
						laborum sunt labore esse mollit reprehenderit veniam mollit non
						adipisicing. Laboris nulla et eiusmod exercitation deserunt. Est
						mollit sunt sint aliqua consectetur consequat labore elit anim
						cupidatat ullamco consectetur commodo magna. Non sit labore Lorem ut
						Lorem anim. Anim cillum irure eiusmod pariatur. Sunt adipisicing
						occaecat ea occaecat et eu non ut in nulla sunt laboris. Eu minim
						Lorem ad excepteur cillum culpa culpa. Ipsum adipisicing sunt tempor
						mollit consequat irure eu culpa elit aute esse occaecat cupidatat.
						Ullamco ut ex labore do. Laboris occaecat id quis dolore in qui
						culpa et non amet voluptate ipsum elit ex. Voluptate sit do ullamco
						sunt quis occaecat velit ex. Lorem ipsum ullamco consectetur dolor
						qui Lorem dolore irure. Consectetur commodo mollit velit labore
						proident voluptate eu ad non. Culpa sint quis eiusmod in ad id id
						laboris anim culpa minim aliquip. Laboris Lorem ipsum elit velit
						cupidatat commodo in exercitation. Quis esse dolor cillum aute
						ullamco ullamco in Lorem. Aute est sint officia sunt occaecat.
						Veniam consectetur adipisicing laboris laboris laboris anim
						consectetur sint quis ea. Laborum labore ipsum dolore veniam
						consequat sit enim et. Laborum do ad voluptate dolor ullamco
						deserunt eu tempor. Sit minim laborum culpa veniam non cupidatat ex
						pariatur ipsum exercitation excepteur aliqua ad. Dolor mollit
						laborum enim culpa velit dolor. Non officia ipsum elit qui nulla ea
						proident. Nulla adipisicing aliquip aliquip velit exercitation elit
						reprehenderit amet sunt consectetur ut tempor anim esse. Id
						cupidatat eu irure excepteur Lorem aliqua commodo pariatur eu velit
						consectetur enim anim laborum. Laborum quis qui deserunt adipisicing
						qui ipsum reprehenderit labore duis excepteur mollit in. Pariatur
						labore deserunt irure sit nisi aliquip qui sint elit irure id id.
						Sit sunt deserunt nostrud nostrud incididunt ad et deserunt ad.
						Aliqua aliquip reprehenderit ad sunt. Aliquip eu mollit proident
						commodo exercitation non eiusmod culpa ex. Duis mollit quis duis
						cupidatat excepteur dolor nostrud. Cupidatat ex ipsum ea tempor.
						Exercitation velit cupidatat cillum aute ipsum. Proident commodo
						Lorem quis sint eiusmod magna deserunt voluptate. Mollit consectetur
						labore sunt tempor non consectetur voluptate in elit duis aliqua
						voluptate aliquip. Enim fugiat sit voluptate eu minim exercitation
						qui pariatur nulla culpa. Ex laborum ullamco ea veniam irure ut
						ullamco exercitation nostrud. Non proident ut mollit esse dolor
						officia exercitation excepteur. Ullamco est Lorem sunt ad ad minim
						sunt anim. Proident ullamco exercitation commodo laboris laborum
						aute magna veniam ad occaecat ipsum commodo consequat ullamco.
						Pariatur occaecat labore ex velit sit aliqua. Dolore consequat Lorem
						est quis pariatur aliquip fugiat. Lorem proident dolore laboris
						nulla velit sunt enim et eiusmod est. Nisi tempor duis deserunt ex
						aliqua id consequat veniam consequat incididunt minim eiusmod
						tempor. Ut consectetur dolor ex cillum eu Lorem ipsum nulla
						consequat qui. Nulla fugiat minim fugiat ad magna esse occaecat
						tempor aute. Adipisicing qui ea nulla velit qui pariatur
						reprehenderit magna sit est do eiusmod. Deserunt sit adipisicing et
						ex fugiat laboris quis anim ad anim pariatur. Nisi amet et magna
						commodo pariatur ea commodo aliquip laborum quis excepteur do non.
						Culpa ullamco ea incididunt proident fugiat nulla magna proident
						nostrud. Ut et esse pariatur qui esse reprehenderit. Sint labore
						laboris nulla incididunt in in consectetur ut eiusmod reprehenderit
						dolor. Dolor eu ea pariatur eiusmod officia Lorem in excepteur nulla
						do elit cupidatat non. Pariatur elit consequat eu anim ut cillum
						nostrud culpa amet culpa. Pariatur exercitation pariatur quis
						laborum sunt labore esse mollit reprehenderit veniam mollit non
						adipisicing. Laboris nulla et eiusmod exercitation deserunt. Est
						mollit sunt sint aliqua consectetur consequat labore elit anim
						cupidatat ullamco consectetur commodo magna. Non sit labore Lorem ut
						Lorem anim. Anim cillum irure eiusmod pariatur. Sunt adipisicing
						occaecat ea occaecat et eu non ut in nulla sunt laboris. Eu minim
						Lorem ad excepteur cillum culpa culpa. Ipsum adipisicing sunt tempor
						mollit consequat irure eu culpa elit aute esse occaecat cupidatat.
						Ullamco ut ex labore do. Laboris occaecat id quis dolore in qui
						culpa et non amet voluptate ipsum elit ex. Voluptate sit do ullamco
						sunt quis occaecat velit ex. Lorem ipsum ullamco consectetur dolor
						qui Lorem dolore irure. Consectetur commodo mollit velit labore
						proident voluptate eu ad non. Culpa sint quis eiusmod in ad id id
						laboris anim culpa minim aliquip. Laboris Lorem ipsum elit velit
						cupidatat commodo in exercitation. Quis esse dolor cillum aute
						ullamco ullamco in Lorem. Aute est sint officia sunt occaecat.
						Veniam consectetur adipisicing laboris laboris laboris anim
						consectetur sint quis ea. Laborum labore ipsum dolore veniam
						consequat sit enim et. Laborum do ad voluptate dolor ullamco
						deserunt eu tempor. Sit minim laborum culpa veniam non cupidatat ex
						pariatur ipsum exercitation excepteur aliqua ad. Dolor mollit
						laborum enim culpa velit dolor. Non officia ipsum elit qui nulla ea
						proident. Nulla adipisicing aliquip aliquip velit exercitation elit
						reprehenderit amet sunt consectetur ut tempor anim esse. Id
						cupidatat eu irure excepteur Lorem aliqua commodo pariatur eu velit
						consectetur enim anim laborum. Laborum quis qui deserunt adipisicing
						qui ipsum reprehenderit labore duis excepteur mollit in. Pariatur
						labore deserunt irure sit nisi aliquip qui sint elit irure id id.
						Sit sunt deserunt nostrud nostrud incididunt ad et deserunt ad.
						Aliqua aliquip reprehenderit ad sunt. Aliquip eu mollit proident
						commodo exercitation non eiusmod culpa ex. Duis mollit quis duis
						cupidatat excepteur dolor nostrud. Cupidatat ex ipsum ea tempor.
						Exercitation velit cupidatat cillum aute ipsum. Proident commodo
						Lorem quis sint eiusmod magna deserunt voluptate. Mollit consectetur
						labore sunt tempor non consectetur voluptate in elit duis aliqua
						voluptate aliquip. Enim fugiat sit voluptate eu minim exercitation
						qui pariatur nulla culpa. Ex laborum ullamco ea veniam irure ut
						ullamco exercitation nostrud. Non proident ut mollit esse dolor
						officia exercitation excepteur. Ullamco est Lorem sunt ad ad minim
						sunt anim. Proident ullamco exercitation commodo laboris laborum
						aute magna veniam ad occaecat ipsum commodo consequat ullamco.
						Pariatur occaecat labore ex velit sit aliqua. Dolore consequat Lorem
						est quis pariatur aliquip fugiat. Lorem proident dolore laboris
						nulla velit sunt enim et eiusmod est. Nisi tempor duis deserunt ex
						aliqua id consequat veniam consequat incididunt minim eiusmod
						tempor. Ut consectetur dolor ex cillum eu Lorem ipsum nulla
						consequat qui. Nulla fugiat minim fugiat ad magna esse occaecat
						tempor aute. Adipisicing qui ea nulla velit qui pariatur
						reprehenderit magna sit est do eiusmod. Deserunt sit adipisicing et
						ex fugiat laboris quis anim ad anim pariatur. Nisi amet et magna
						commodo pariatur ea commodo aliquip laborum quis excepteur do non.
						Culpa ullamco ea incididunt proident fugiat nulla magna proident
						nostrud. Ut et esse pariatur qui esse reprehenderit. Sint labore
						laboris nulla incididunt in in consectetur ut eiusmod reprehenderit
						dolor. Dolor eu ea pariatur eiusmod officia Lorem in excepteur nulla
						do elit cupidatat non. Pariatur elit consequat eu anim ut cillum
						nostrud culpa amet culpa. Pariatur exercitation pariatur quis
						laborum sunt labore esse mollit reprehenderit veniam mollit non
						adipisicing. Laboris nulla et eiusmod exercitation deserunt. Est
						mollit sunt sint aliqua consectetur consequat labore elit anim
						cupidatat ullamco consectetur commodo magna. Non sit labore Lorem ut
						Lorem anim. Anim cillum irure eiusmod pariatur. Sunt adipisicing
						occaecat ea occaecat et eu non ut in nulla sunt laboris. Eu minim
						Lorem ad excepteur cillum culpa culpa. Ipsum adipisicing sunt tempor
						mollit consequat irure eu culpa elit aute esse occaecat cupidatat.
						Ullamco ut ex labore do. Laboris occaecat id quis dolore in qui
						culpa et non amet voluptate ipsum elit ex. Voluptate sit do ullamco
						sunt quis occaecat velit ex. Lorem ipsum ullamco consectetur dolor
						qui Lorem dolore irure. Consectetur commodo mollit velit labore
						proident voluptate eu ad non. Culpa sint quis eiusmod in ad id id
						laboris anim culpa minim aliquip. Laboris Lorem ipsum elit velit
						cupidatat commodo in exercitation. Quis esse dolor cillum aute
						ullamco ullamco in Lorem. Aute est sint officia sunt occaecat.
						Veniam consectetur adipisicing laboris laboris laboris anim
						consectetur sint quis ea. Laborum labore ipsum dolore veniam
						consequat sit enim et. Laborum do ad voluptate dolor ullamco
						deserunt eu tempor. Sit minim laborum culpa veniam non cupidatat ex
						pariatur ipsum exercitation excepteur aliqua ad. Dolor mollit
						laborum enim culpa velit dolor. Non officia ipsum elit qui nulla ea
						proident. Nulla adipisicing aliquip aliquip velit exercitation elit
						reprehenderit amet sunt consectetur ut tempor anim esse. Id
						cupidatat eu irure excepteur Lorem aliqua commodo pariatur eu velit
						consectetur enim anim laborum. Laborum quis qui deserunt adipisicing
						qui ipsum reprehenderit labore duis excepteur mollit in. Pariatur
						labore deserunt irure sit nisi aliquip qui sint elit irure id id.
						Sit sunt deserunt nostrud nostrud incididunt ad et deserunt ad.
						Aliqua aliquip reprehenderit ad sunt. Aliquip eu mollit proident
						commodo exercitation non eiusmod culpa ex. Duis mollit quis duis
						cupidatat excepteur dolor nostrud. Cupidatat ex ipsum ea tempor.
						Exercitation velit cupidatat cillum aute ipsum. Proident commodo
						Lorem quis sint eiusmod magna deserunt voluptate. Mollit consectetur
						labore sunt tempor non consectetur voluptate in elit duis aliqua
						voluptate aliquip. Enim fugiat sit voluptate eu minim exercitation
						qui pariatur nulla culpa. Ex laborum ullamco ea veniam irure ut
						ullamco exercitation nostrud. Non proident ut mollit esse dolor
						officia exercitation excepteur. Ullamco est Lorem sunt ad ad minim
						sunt anim. Proident ullamco exercitation commodo laboris laborum
						aute magna veniam ad occaecat ipsum commodo consequat ullamco.
						Pariatur occaecat labore ex velit sit aliqua. Dolore consequat Lorem
						est quis pariatur aliquip fugiat. Lorem proident dolore laboris
						nulla velit sunt enim et eiusmod est. Nisi tempor duis deserunt ex
						aliqua id consequat veniam consequat incididunt minim eiusmod
						tempor. Ut consectetur dolor ex cillum eu Lorem ipsum nulla
						consequat qui. Nulla fugiat minim fugiat ad magna esse occaecat
						tempor aute. Adipisicing qui ea nulla velit qui pariatur
						reprehenderit magna sit est do eiusmod. Deserunt sit adipisicing et
						ex fugiat laboris quis anim ad anim pariatur. Nisi amet et magna
						commodo pariatur ea commodo aliquip laborum quis excepteur do non.
						Culpa ullamco ea incididunt proident fugiat nulla magna proident
						nostrud. Ut et esse pariatur qui esse reprehenderit. Sint labore
						laboris nulla incididunt in in consectetur ut eiusmod reprehenderit
						dolor. Dolor eu ea pariatur eiusmod officia Lorem in excepteur nulla
						do elit cupidatat non. Pariatur elit consequat eu anim ut cillum
						nostrud culpa amet culpa. Pariatur exercitation pariatur quis
						laborum sunt labore esse mollit reprehenderit veniam mollit non
						adipisicing. Laboris nulla et eiusmod exercitation deserunt. Est
						mollit sunt sint aliqua consectetur consequat labore elit anim
						cupidatat ullamco consectetur commodo magna. Non sit labore Lorem ut
						Lorem anim. Anim cillum irure eiusmod pariatur. Sunt adipisicing
						occaecat ea occaecat et eu non ut in nulla sunt laboris. Eu minim
						Lorem ad excepteur cillum culpa culpa. Ipsum adipisicing sunt tempor
						mollit consequat irure eu culpa elit aute esse occaecat cupidatat.
						Ullamco ut ex labore do. Laboris occaecat id quis dolore in qui
						culpa et non amet voluptate ipsum elit ex. Voluptate sit do ullamco
						sunt quis occaecat velit ex. Lorem ipsum ullamco consectetur dolor
						qui Lorem dolore irure. Consectetur commodo mollit velit labore
						proident voluptate eu ad non. Culpa sint quis eiusmod in ad id id
						laboris anim culpa minim aliquip. Laboris Lorem ipsum elit velit
						cupidatat commodo in exercitation. Quis esse dolor cillum aute
						ullamco ullamco in Lorem. Aute est sint officia sunt occaecat.
						Veniam consectetur adipisicing laboris laboris laboris anim
						consectetur sint quis ea. Laborum labore ipsum dolore veniam
						consequat sit enim et. Laborum do ad voluptate dolor ullamco
						deserunt eu tempor. Sit minim laborum culpa veniam non cupidatat ex
						pariatur ipsum exercitation excepteur aliqua ad. Dolor mollit
						laborum enim culpa velit dolor. Non officia ipsum elit qui nulla ea
						proident. Nulla adipisicing aliquip aliquip velit exercitation elit
						reprehenderit amet sunt consectetur ut tempor anim esse. Id
						cupidatat eu irure excepteur Lorem aliqua commodo pariatur eu velit
						consectetur enim anim laborum. Laborum quis qui deserunt adipisicing
						qui ipsum reprehenderit labore duis excepteur mollit in. Pariatur
						labore deserunt irure sit nisi aliquip qui sint elit irure id id.
						Sit sunt deserunt nostrud nostrud incididunt ad et deserunt ad.
						Aliqua aliquip reprehenderit ad sunt. Aliquip eu mollit proident
						commodo exercitation non eiusmod culpa ex. Duis mollit quis duis
						cupidatat excepteur dolor nostrud. Cupidatat ex ipsum ea tempor.
						Exercitation velit cupidatat cillum aute ipsum. Proident commodo
						Lorem quis sint eiusmod magna deserunt voluptate. Mollit consectetur
						labore sunt tempor non consectetur voluptate in elit duis aliqua
						voluptate aliquip. Enim fugiat sit voluptate eu minim exercitation
						qui pariatur nulla culpa. Ex laborum ullamco ea veniam irure ut
						ullamco exercitation nostrud. Non proident ut mollit esse dolor
						officia exercitation excepteur. Ullamco est Lorem sunt ad ad minim
						sunt anim. Proident ullamco exercitation commodo laboris laborum
						aute magna veniam ad occaecat ipsum commodo consequat ullamco.
						Pariatur occaecat labore ex velit sit aliqua. Dolore consequat Lorem
						est quis pariatur aliquip fugiat. Lorem proident dolore laboris
						nulla velit sunt enim et eiusmod est. Nisi tempor duis deserunt ex
						aliqua id consequat veniam consequat incididunt minim eiusmod
						tempor. Ut consectetur dolor ex cillum eu Lorem ipsum nulla
						consequat qui. Nulla fugiat minim fugiat ad magna esse occaecat
						tempor aute. Adipisicing qui ea nulla velit qui pariatur
						reprehenderit magna sit est do eiusmod. Deserunt sit adipisicing et
						ex fugiat laboris quis anim ad anim pariatur. Nisi amet et magna
						commodo pariatur ea commodo aliquip laborum quis excepteur do non.
						Culpa ullamco ea incididunt proident fugiat nulla magna proident
						nostrud. Ut et esse pariatur qui esse reprehenderit. Sint labore
						laboris nulla incididunt in in consectetur ut eiusmod reprehenderit
						dolor. Dolor eu ea pariatur eiusmod officia Lorem in excepteur nulla
						do elit cupidatat non. Pariatur elit consequat eu anim ut cillum
						nostrud culpa amet culpa. Pariatur exercitation pariatur quis
						laborum sunt labore esse mollit reprehenderit veniam mollit non
						adipisicing. Laboris nulla et eiusmod exercitation deserunt. Est
						mollit sunt sint aliqua consectetur consequat labore elit anim
						cupidatat ullamco consectetur commodo magna. Non sit labore Lorem ut
						Lorem anim. Anim cillum irure eiusmod pariatur. Sunt adipisicing
						occaecat ea occaecat et eu non ut in nulla sunt laboris. Eu minim
						Lorem ad excepteur cillum culpa culpa. Ipsum adipisicing sunt tempor
						mollit consequat irure eu culpa elit aute esse occaecat cupidatat.
						Ullamco ut ex labore do. Laboris occaecat id quis dolore in qui
						culpa et non amet voluptate ipsum elit ex. Voluptate sit do ullamco
						sunt quis occaecat velit ex. Lorem ipsum ullamco consectetur dolor
						qui Lorem dolore irure. Consectetur commodo mollit velit labore
						proident voluptate eu ad non. Culpa sint quis eiusmod in ad id id
						laboris anim culpa minim aliquip. Laboris Lorem ipsum elit velit
						cupidatat commodo in exercitation. Quis esse dolor cillum aute
						ullamco ullamco in Lorem. Aute est sint officia sunt occaecat.
						Veniam consectetur adipisicing laboris laboris laboris anim
						consectetur sint quis ea. Laborum labore ipsum dolore veniam
						consequat sit enim et. Laborum do ad voluptate dolor ullamco
						deserunt eu tempor. Sit minim laborum culpa veniam non cupidatat ex
						pariatur ipsum exercitation excepteur aliqua ad. Dolor mollit
						laborum enim culpa velit dolor. Non officia ipsum elit qui nulla ea
						proident. Nulla adipisicing aliquip aliquip velit exercitation elit
						reprehenderit amet sunt consectetur ut tempor anim esse. Id
						cupidatat eu irure excepteur Lorem aliqua commodo pariatur eu velit
						consectetur enim anim laborum. Laborum quis qui deserunt adipisicing
						qui ipsum reprehenderit labore duis excepteur mollit in. Pariatur
						labore deserunt irure sit nisi aliquip qui sint elit irure id id.
						Sit sunt deserunt nostrud nostrud incididunt ad et deserunt ad.
						Aliqua aliquip reprehenderit ad sunt. Aliquip eu mollit proident
						commodo exercitation non eiusmod culpa ex. Duis mollit quis duis
						cupidatat excepteur dolor nostrud. Cupidatat ex ipsum ea tempor.
						Exercitation velit cupidatat cillum aute ipsum. Proident commodo
						Lorem quis sint eiusmod magna deserunt voluptate. Mollit consectetur
						labore sunt tempor non consectetur voluptate in elit duis aliqua
						voluptate aliquip. Enim fugiat sit voluptate eu minim exercitation
						qui pariatur nulla culpa. Ex laborum ullamco ea veniam irure ut
						ullamco exercitation nostrud. Non proident ut mollit esse dolor
						officia exercitation excepteur. Ullamco est Lorem sunt ad ad minim
						sunt anim. Proident ullamco exercitation commodo laboris laborum
						aute magna veniam ad occaecat ipsum commodo consequat ullamco.
						Pariatur occaecat labore ex velit sit aliqua. Dolore consequat Lorem
						est quis pariatur aliquip fugiat. Lorem proident dolore laboris
						nulla velit sunt enim et eiusmod est. Nisi tempor duis deserunt ex
						aliqua id consequat veniam consequat incididunt minim eiusmod
						tempor. Ut consectetur dolor ex cillum eu Lorem ipsum nulla
						consequat qui. Nulla fugiat minim fugiat ad magna esse occaecat
						tempor aute. Adipisicing qui ea nulla velit qui pariatur
						reprehenderit magna sit est do eiusmod. Deserunt sit adipisicing et
						ex fugiat laboris quis anim ad anim pariatur. Nisi amet et magna
						commodo pariatur ea commodo aliquip laborum quis excepteur do non.
						Culpa ullamco ea incididunt proident fugiat nulla magna proident
						nostrud. Ut et esse pariatur qui esse reprehenderit. Sint labore
						laboris nulla incididunt in in consectetur ut eiusmod reprehenderit
						dolor.
					</p>
				</React.Fragment>
			);

		case CMM_COMPILER:
			return <h1>{type}</h1>;

		case THREED_MODEL:
			return <h1>{type}</h1>;

		case NANO_2020_VR:
			return <h1>{type}</h1>;

		case ULTRASOUNDVR:
			return <h1>{type}</h1>;

		case ORGO_SYSTEMS:
			return <h1>{type}</h1>;

		default:
			return <h1>{type}</h1>;
	}
};
