import { Platform } from "react-native";

// eslint-disable-next-line import/no-mutable-exports
let Modal;

if (Platform.OS !== "web") {
  Modal = require("react-native").Modal;
} else {
  Modal = require("./WebModal").default;
}

export default Modal;
