// import original module declarations
import "styled-components";
import { theme } from "./theme";

// and extend them!
type CustomTheme = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
