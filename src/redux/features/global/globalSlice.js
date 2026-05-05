import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: 0,
  addBank: false,
  showLoginModal: false,
  showForgotPasswordModal: false,
  showChangePasswordModal: false,
  selectedCategory: "ALL",
  showLanguageModal: false,
  showNotification: false,
  showBanner: false,
  showAppPopUp: false,
  showAPKModal: false,
  windowWidth: window.innerWidth,
  closePopupForForever: false,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setGroup: (state, action) => {
      state.group = action.payload;
    },
    setAddBank: (state, action) => {
      state.addBank = action.payload;
    },
    setShowLoginModal: (state, action) => {
      state.showLoginModal = action.payload;
    },
    setShowForgotPasswordModal: (state, action) => {
      state.showForgotPasswordModal = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setShowLanguageModal: (state, action) => {
      state.showLanguageModal = action.payload;
    },
    setShowNotification: (state, action) => {
      state.showNotification = action.payload;
    },
    setShowBanner: (state, action) => {
      state.showBanner = action.payload;
    },
    setShowAppPopUp: (state, action) => {
      state.showAppPopUp = action.payload;
    },
    setShowAPKModal: (state, action) => {
      state.showAPKModal = action.payload;
    },
    setWindowWidth: (state, action) => {
      state.windowWidth = action.payload;
    },
    setClosePopUpForForever: (state, action) => {
      state.closePopupForForever = action.payload;
    },
    setShowChangePasswordModal: (state, action) => {
      state.showChangePasswordModal = action.payload;
    },
  },
});

export const {
  setGroup,
  setAddBank,
  setShowLoginModal,
  setShowForgotPasswordModal,
  setSelectedCategory,
  setShowLanguageModal,
  setShowNotification,
  setShowBanner,
  setShowAppPopUp,
  setWindowWidth,
  setShowAPKModal,
  setClosePopUpForForever,
  setShowChangePasswordModal,
} = stateSlice.actions;

export default stateSlice.reducer;
