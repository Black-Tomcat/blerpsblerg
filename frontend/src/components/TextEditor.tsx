import React, { useCallback, useMemo, useState } from "react";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import { BaseEditor, createEditor } from "slate";
import { Card } from "@material-ui/core";
import { ElementTypes, renderElements } from "./editor/Elements";
import { TypographyElementType } from "./editor/elements/TypographyElement";
import {
    asVariant,
    toggleBold,
    toggleItalics,
    toggleStrikethrough,
} from "./editor/EditorCommands";
import { Variant } from "@material-ui/core/styles/createTypography";
import { renderLeafs } from "./editor/Leaf";

export type CustomElement = TypographyElementType;
export type CustomText = {
    text: string;
    bold?: boolean;
    italics?: boolean;
    strikethrough?: boolean;
};

declare module "slate" {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}

const TextEditor = () => {
    const editor = useMemo<ReactEditor>(() => withReact(createEditor()), []);
    const renderElement = useCallback(renderElements, []);
    const renderLeaf = useCallback(renderLeafs, []);

    const [value, setValue] = useState([
        {
            type: ElementTypes.Typography,
            variant: "h3" as "h3",
            children: [
                {
                    text: "Milimilmilmimlmilmimlmilmimlmilmimimlimlmlmilmilmilmiimlmilmilmilmilmlmmimimiilmiimlimlilmlillmkilmlilmilmilmimnmilmimil",
                },
            ],
        },
        {
            type: ElementTypes.Typography,
            variant: "body1" as "body1",
            children: [{ text: "A line of text in a paragraph." }],
        },
    ]);
    return (
        // Add the editable component inside the context.
        <Card style={{ margin: 8, padding: 8 }} square>
            <Slate
                editor={editor}
                value={value}
                // @ts-ignore
                onChange={(newValue) => setValue(newValue)}
            >
                <Editable
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    onKeyDown={(event) => {
                        if (!event.ctrlKey) {
                            return;
                        }

                        // Replace the `onKeyDown` logic with our new commands.
                        switch (event.key) {
                            case "1":
                            case "2":
                            case "3":
                            case "4":
                            case "5":
                            case "6": {
                                asVariant(
                                    editor,
                                    event,
                                    `h${event.key}` as Variant
                                );
                                break;
                            }

                            case "p": {
                                asVariant(editor, event, "body1");
                                break;
                            }

                            case "b": {
                                toggleBold(editor, event);
                                break;
                            }
                            case "i": {
                                toggleItalics(editor, event);
                                break;
                            }
                            case "s": {
                                toggleStrikethrough(editor, event);
                                break;
                            }
                        }
                    }}
                />
            </Slate>
        </Card>
    );
};

export default TextEditor;

// Milimilmilmimlmilmimlmilmimlmilmimimlimlmlmilmilmilmiimlmilmilmilmilmlmmimimiilmiimlimlilmlillmkilmlilmilmilmimnmilmimil
//I love MILI <3
