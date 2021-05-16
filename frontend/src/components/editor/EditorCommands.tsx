import React from "react";
import { TypographyVariant } from "@material-ui/core";
import { Editor, Transforms, Text } from "slate";
import { CustomElement, CustomText } from "../TextEditor";
import { ElementTypes } from "./Elements";
import { LeafProps } from "./Leaf";

export const asVariant = (
    editor: Editor,
    event: any,
    variant: TypographyVariant
): void => {
    event.preventDefault();

    // const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes<CustomElement>(
        editor,
        { type: ElementTypes.Typography, variant: variant },
        { match: (n) => Editor.isBlock(editor, n) }
    );
};

const isTextActive = (
    editor: Editor,
    key: keyof LeafProps["leaf"]
): boolean => {
    const [match] = Editor.nodes(editor, {
        match: (n) => Text.isText(n) && n?.[key] === true,
        universal: true,
    });

    return !!match;
};

const simpleStyles = (key: keyof LeafProps["leaf"]) => {
    return (editor: Editor, event: any) => {
        event.preventDefault();
        const isActive = isTextActive(editor, key);

        const props: { [key: string]: boolean } = {};
        props[key] = !isActive;

        Transforms.setNodes<CustomElement>(editor, props, {
            match: (n) => Text.isText(n),
            split: true,
        });
    };
};

const toggleBold = simpleStyles("bold");
const toggleItalics = simpleStyles("italics");
const toggleStrikethrough = simpleStyles("strikethrough");

export { toggleBold, toggleItalics, toggleStrikethrough };
