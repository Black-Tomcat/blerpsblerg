import React from "react";
import { RenderElementProps } from "slate-react";
import { ElementTypes } from "../Elements";
import { CustomText } from "../../TextEditor";
import { Typography, TypographyVariant } from "@material-ui/core";

export type TypographyElementType = {
    type: ElementTypes.Typography;
    variant: TypographyVariant;
    children: CustomText[];
};

export interface TypographyElementProps extends RenderElementProps {
    element: TypographyElementType;
}

const TypographyElement: React.FC<TypographyElementProps> = (
    props: TypographyElementProps
) => {
    const { attributes, element, children } = props;

    return (
        <Typography variant={element.variant} {...attributes}>
            {children}
        </Typography>
    );
};

export default TypographyElement;
