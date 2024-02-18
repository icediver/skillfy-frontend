import React, { CSSProperties, FC } from "react";
import * as MaterialIcons from "react-icons/md";

export type TypeMaterialIconName = keyof typeof MaterialIcons;

const DynamicIcon: FC<{
  name: TypeMaterialIconName;
  style: CSSProperties;
}> = ({ name, style }) => {
  const IconComponent = MaterialIcons[name];
  return (
    <IconComponent style={style} /> || (
      <MaterialIcons.MdDragIndicator style={style} />
    )
  );
};

export default DynamicIcon;
