import React from "react";
import { RenderLeafProps } from "slate-react";

export interface LeafProps extends RenderLeafProps {}

const Leaf: React.FC<LeafProps> = (props: LeafProps) => {
    const {
        leaf: { bold, italics, strikethrough },
    } = props;
    return (
        <span
            {...props.attributes}
            style={{
                fontWeight: bold ? "bold" : "normal",
                fontStyle: italics ? "italic" : "normal",
                textDecoration: strikethrough ? "line-through" : "none",
            }}
        >
            {props.children}
        </span>
    );
};

export const renderLeafs = (props: RenderLeafProps) => {
    return <Leaf {...props} />;
};

export default Leaf;
