export const getCustomerId = (state: any) =>
    state.authorization.signIn.data.userProfile.paymentInfo.customerId;
export const getIsUserAuthorized = (state: any) => state.authorization.signIn.data.isUserAuthorized;
export const getUserProfileData = (state: any) => state.authorization.signIn.data.userProfile;
export const getIsUserProfileDataLoading = (state: any) => state.authorization.signIn.loading;
