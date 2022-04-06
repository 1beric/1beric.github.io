import BODY_TYPES from "../../modules/body/util/bodyTypes";
import HEADER_TYPES from "../../modules/header/util/headerTypes";
import themes from "../../util/theme";

const INITIAL_STATE = {
  theme: themes.defaultTheme,

  modal: null,
  loading: 0,
  bodyType: BODY_TYPES.HOME.id,
  headerType: HEADER_TYPES.DEFAULT,
};

export default INITIAL_STATE;
