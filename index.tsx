import { FC, type PropsWithChildren } from "react";
import { chakra, useStyleConfig } from "@chakra-ui/react";

export const Component: FC<PropsWithChildren> = (props) => {
  const hoverStyles = useStyleConfig("hover");
  return <chakra.div __css={{ "&:hover": { ...hoverStyles } }} {...props} />;
};
