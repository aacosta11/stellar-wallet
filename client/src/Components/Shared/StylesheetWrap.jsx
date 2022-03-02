// wraps all children in stylings with universal class names
import "../../wwwroot/style/global/global.scss";
import "../../wwwroot/style/global/filter.scss";
import "../../wwwroot/style/global/flex.scss";
import "../../wwwroot/style/global/gap.scss";
import "../../wwwroot/style/global/height.scss";
import "../../wwwroot/style/global/width.scss";
import "../../wwwroot/style/global/overflow.scss";
import "../../wwwroot/style/global/position.scss";
import "../../wwwroot/style/global/text.scss";
import "../../wwwroot/style/global/transition.scss";
import "../../wwwroot/style/global/z-index.scss";

const StylesheetWrap = ({children}) => <>{children}</>;

export default StylesheetWrap;