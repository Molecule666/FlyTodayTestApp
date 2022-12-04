import {
  CommonActions,
  createNavigationContainerRef,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

/**
 * Recursive function that delays the next call if the navigation is not yet mounted.
 */
const navigationMethod = (successCallback: () => unknown) => {
  if (navigationRef.isReady()) {
    return successCallback();
  }

  setTimeout(() => {
    navigationMethod(successCallback);
  }, 10);
};

/**
 * Navigate to a new route.
 */
export function navigate(name: string, params?: any) {
  navigationMethod(() => {
    // @ts-ignore Suspended complexity warning typescript.
    navigationRef.navigate(name, params);
  });
}

/**
 * Navigate to a new route and reset the stack.
 */
export function resetRoot(routeName: string, params?: object) {
  navigationMethod(() => {
    navigationRef?.current?.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: routeName, params}],
      }),
    );
  });
}

/**
 * Replace the navigator state with a new state.
 */
export function replace(routeName: string, params?: object) {
  navigationMethod(() => {
    navigationRef?.current?.dispatch(StackActions.replace(routeName, params));
  });
}

/**
 * Set params for the current route.
 */
export function setParams(params: object, routeKey?: string) {
  navigationMethod(() => {
    navigationRef.dispatch({
      ...CommonActions.setParams(params),
      source: routeKey,
    });
  });
}

/**
 * Check if it's possible to go back.
 */
export function canGoBack() {
  return navigationMethod(navigationRef.canGoBack);
}

/**
 * Go back to the previous route.
 */
export function goBack() {
  navigationMethod(navigationRef.goBack);
}

/**
 * Returns the navigation state for all navigators in the navigator tree.
 */
export function getRootState() {
  return navigationMethod(navigationRef.getRootState);
}

/**
 * Returns the route object for the currently focused screen.
 */
export function getCurrentRoute() {
  return navigationMethod(navigationRef.getCurrentRoute);
}

/**
 * Checks if the current screen is focused.
 */
export function isFocused() {
  return navigationMethod(navigationRef.isFocused);
}

/**
 * Toggle Drawer.
 */
export function toggleDrawer() {
  return navigationRef?.current.dispatch(DrawerActions.toggleDrawer());
}
