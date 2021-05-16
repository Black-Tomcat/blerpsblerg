import React, { ReactNode, useCallback, useMemo, useState } from "react";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import { BaseEditor, createEditor, Editor } from "slate";
import { Card, Typography } from "@material-ui/core";

type CustomElement = { type: "paragraph"; children: CustomText[] };
type CustomText = { text: string };

declare module "slate" {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}

const TextEditor = () => {
    const editor = useMemo<ReactEditor>(() => withReact(createEditor()), []);
    const renderElement = useCallback(({ attributes, children, element }) => {
        switch (element.type) {
            default:
                return (
                    <Typography variant={"body1"} {...attributes}>
                        {children}
                    </Typography>
                );
        }
    }, []);
    const [value, setValue] = useState([
        {
            type: "paragraph" as "paragraph",
            children: [{ text: "A line of text in a paragraph." }],
        },
    ]);
    return (
        // Add the editable component inside the context.
        <Card style={{margin: 8, padding: 8}}>
            <Slate
                editor={editor}
                value={value}
                // @ts-ignore
                onChange={(newValue) => setValue(newValue)}
            >
                <Editable renderElement={renderElement} />
            </Slate>
        </Card>
    );
};

export default TextEditor;

// Milimilmilmimlmilmimlmilmimlmilmimimlimlmlmilmilmilmiimkmilmilmilmilmlmmimimiilmiimlimlilmkiklmkilmkilmilmilmimnmilmimik
//I love MILI <3
