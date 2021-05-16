import React from "react";
import { RenderElementProps } from "slate-react";
import TypographyElement from "./elements/TypographyElement";

export enum ElementTypes {
    Typography = "Typography",
}

export const renderElements = ({
    attributes,
    children,
    element,
}: RenderElementProps) => {
    switch (element.type) {
        case ElementTypes.Typography:
            return (
                <TypographyElement attributes={attributes} element={element}>
                    {children}
                </TypographyElement>
            );
    }
};
