import { FC, type PropsWithChildren } from "react";
import { chakra, type SystemStyleObject } from "@chakra-ui/react";

declare const hoverStyles: SystemStyleObject;

export const Component: FC<PropsWithChildren> = (props) => {
  return <chakra.div __css={{ "&:hover": { ...hoverStyles } }} {...props} />;
};
