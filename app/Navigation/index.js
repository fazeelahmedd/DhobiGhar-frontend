import { Fragment, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Pressable, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomerHome from '../Screens/Customer/Home';
import FindVendor from '../Screens/Customer/FindVendor';
import { getCurrentIndex, goBack, routes } from '../Utils/navigation';
import Services from '../Screens/Customer/Services';
import Products from '../Screens/Customer/Products';
import OrderHistory from '../Screens/Customer/OrderHistory';
import InhouseService from '../Screens/Customer/InhouseService';
import Checkout from '../Screens/Customer/Checkout';
import Login from '../Screens/Authentication/Login';
import Register from '../Screens/Authentication/Register';
import color from '../Utils/color';
import { setUserData } from '../Redux/Slices/User';
import Modal from '../Components/Modal';
import CheckoutForm from '../Screens/Customer/CheckoutForm';

import VendorHome from '../Screens/Vendor/Home/index';
import VendorMyOrders from '../Screens/Vendor/MyOrders/index';

const Stack = createStackNavigator();

export const MainNavigator = () => {

    const { loggedIn, user } = useSelector(state => state.user)
    console.log("HEHE", loggedIn, user)

    return (
        loggedIn && user.role_name === 'Consumer' ? <CustomerNavigator /> : loggedIn && user.role_name === 'Vendor' ? <VendorNavigator /> : <AuthNavigator />
        // <VendorNavigator />
    )

}

export const CustomerNavigator = () => {

    const dispatch = useDispatch()

    const [logoutModal, setLogoutModal] = useState(false)

    const onPressLogout = () => setLogoutModal(!logoutModal)

    const onPressYes = () => {
        dispatch(setUserData(false))
    }

    return (
        <Fragment>
            {
                logoutModal &&
                <Modal
                    heading="Logout"
                    text="Are you sure you want to logout?"
                    buttons={[
                        {
                            text: "Yes",
                            onPress: onPressYes
                        },
                        {
                            text: "No",
                            onPress: onPressLogout,
                            outlined: true
                        }
                    ]}
                />
            }
            <Stack.Navigator
                screenOptions={{
                    headerTitle: "",
                    headerLeft: () => (
                        getCurrentIndex() > 0 &&
                        <Pressable onPress={goBack} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5 }}>
                            <Icon name='md-chevron-back' size={38} color={color.primary} />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Pressable onPress={onPressLogout} style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                                <Icon name='power' size={30} color={color.secondary} />
                            </Pressable>
                            <Pressable style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                                <Icon name='person-circle' size={32} color={color.secondary} />
                            </Pressable>
                        </View>
                    )
                }}>
                <Stack.Screen name={routes.HOME} component={VendorHome} />
                <Stack.Screen name={routes.FIND_VENDOR} component={FindVendor} />
                <Stack.Screen name={routes.SERVICES} component={Services} />
                <Stack.Screen name={routes.PRODUCTS} component={Products} />
                <Stack.Screen name={routes.ORDER_HISTORY} component={OrderHistory} />
                <Stack.Screen name={routes.INHOUSE_SERVICE} component={InhouseService} />
                <Stack.Screen name={routes.CHECKOUT} component={Checkout} />
                <Stack.Screen name={routes.CHECKOUT_FORM} component={CheckoutForm} />
            </Stack.Navigator>
        </Fragment>
    );
}

export const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerTitle: "" }}>
            <Stack.Screen name={routes.LOGIN} component={Login} />
            <Stack.Screen name={routes.REGISTER} component={Register} />
        </Stack.Navigator>
    )
}

export const VendorNavigator = () => {

    const dispatch = useDispatch()

    const [logoutModal, setLogoutModal] = useState(false)

    const onPressLogout = () => setLogoutModal(!logoutModal)

    const onPressYes = () => {
        dispatch(setUserData(false))
    }

    return (
        <Fragment>
            {
                logoutModal &&
                <Modal
                    heading="Logout"
                    text="Are you sure you want to logout?"
                    buttons={[
                        {
                            text: "Yes",
                            onPress: onPressYes
                        },
                        {
                            text: "No",
                            onPress: onPressLogout,
                            outlined: true
                        }
                    ]}
                />
            }
            <Stack.Navigator
            screenOptions={{
                headerTitle: "",
                headerLeft: () => (
                    getCurrentIndex() > 0 &&
                    <Pressable onPress={goBack} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5 }}>
                        <Icon name='md-chevron-back' size={38} color={color.primary} />
                    </Pressable>
                ),
                headerRight: () => (
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Pressable onPress={onPressLogout} style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                            <Icon name='power' size={30} color={color.secondary} />
                        </Pressable>
                        <Pressable style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10 }}>
                            <Icon name='person-circle' size={32} color={color.secondary} />
                        </Pressable>
                    </View>
                )
            }}
            >
                <Stack.Screen name={routes.VENDOR_HOME} component={VendorHome} />
                <Stack.Screen name={routes.VENDOR_MYORDERS} component={VendorMyOrders} />
                <Stack.Screen name={routes.SERVICES} component={Services} />
                <Stack.Screen name={routes.PRODUCTS} component={Products} />
                <Stack.Screen name={routes.ORDER_HISTORY} component={OrderHistory} />
                <Stack.Screen name={routes.INHOUSE_SERVICE} component={InhouseService} />
                <Stack.Screen name={routes.CHECKOUT} component={Checkout} />
                <Stack.Screen name={routes.CHECKOUT_FORM} component={CheckoutForm} />
            </Stack.Navigator>
        </Fragment>
    );
}