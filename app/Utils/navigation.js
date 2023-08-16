import { CommonActions, createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const routes = {
    HOME: 'Home',
    FIND_VENDOR: 'FindVendor',
    SERVICES: 'Services',
    PRODUCTS: 'Products',
    ORDER_HISTORY: 'OrderHistory',
    INHOUSE_SERVICE: 'InhouseService',
    CHECKOUT: 'Checkout',
    CHECKOUT_FORM: 'CheckoutForm',
    LOGIN: 'Login',
    REGISTER: "Register",
    VENDOR_HOME: 'VendorHome',
    VENDOR_MYORDERS: 'VendorMyOrders'
};

export const navigate = (name, params) => {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
};

export const goBack = () => {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.goBack());
    }
};

export const getCurrentIndex = () => {
    if (navigationRef.isReady()) {
        let curr = navigationRef.getState()?.index
        return curr
    }
};