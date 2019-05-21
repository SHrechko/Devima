import NavigationDispatcher from "../data/NavigationDispatcher";

export const NavigationActionTypes = {
  HOME: "HOME",
  SERVICES: "SERVICES",
  ABOUT_US: "ABOUT_US",
  PORTFOLIO: "PORTFOLIO",
  TESTIMONIALS: "TESTIMONIALS",
  CONTACTS: "CONTACTS"
};

const Actions = {
  scrollToHome() {
    NavigationDispatcher.dispatch({
      type: NavigationActionTypes.HOME
    });
  },
  scrollToServices() {
    NavigationDispatcher.dispatch({
      type: NavigationActionTypes.SERVICES
    });
  },
  scrollToAboutUs() {
    NavigationDispatcher.dispatch({
      type: NavigationActionTypes.ABOUT_US
    });
  },
  scrollToPortfolio() {
    NavigationDispatcher.dispatch({
      type: NavigationActionTypes.PORTFOLIO
    });
  },
  scrollToTestimonials() {
    NavigationDispatcher.dispatch({
      type: NavigationActionTypes.TESTIMONIALS
    });
  },
  scrollToContacts() {
    NavigationDispatcher.dispatch({
      type: NavigationActionTypes.CONTACTS
    });
  }
};

export default Actions;
