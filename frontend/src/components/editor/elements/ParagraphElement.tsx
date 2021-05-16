import React from "react";
import { Typography, TypographyProps } from "@material-ui/core";
import { RenderElementProps } from "slate-react";

export interface ParagraphElementProps extends RenderElementProps {}

const ParagraphElement: React.FC<ParagraphElementProps> = (
    props: ParagraphElementProps
) => {
    const { attributes, children } = props;
    return (
        <Typography variant={"body1"} {...attributes}>
            {children}
        </Typography>
    );
};

export default ParagraphElement;
