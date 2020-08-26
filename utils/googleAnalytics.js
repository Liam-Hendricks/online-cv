import ReactGA from 'react-ga';
export const initGA = () => {
	console.log('GA Init');
	ReactGA.initialize('UA-175547566-1');
};

export const logPageView = () => {
	console.log(`Logging pageview for ${window.location.pathname}`);
	ReactGA.set({ page: window.location.pathname });
	ReactGA.pageview(window.location.pathname);
};

// export const logEvent = (category = '', action = '') => {
// 	if (category && action) {
// 		ReactGA.event({ category, action, label });
// 	}
// };

export const logException = (description = '', fatal = false) => {
	if (description) {
		ReactGA.exception({ description, fatal });
	}
};

export const Event = (category, action, label) => {
	ReactGA.event({
	  category,
	  action,
	  label
	});
  };