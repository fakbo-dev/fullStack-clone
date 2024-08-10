import { FC } from "react";


interface ElementWrapperShape {
    elementType: "div" | "span" | "h1" | "button";
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
const Wrapper: FC<ElementWrapperShape> = ({
    elementType,
    children,
    className,
    onClick,
}) => {
    const Element = elementType as keyof JSX.IntrinsicElements;
    return (
        <Element
            className={className}
            onClick={onClick}
        >
            {children}
        </Element>
    )
}

export default Wrapper