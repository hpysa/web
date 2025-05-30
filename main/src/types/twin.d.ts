import styledImport, { CSSProp, css as cssImport } from 'styled-components';
import 'twin.macro';

declare module 'twin.macro' {
    // The styled and css imports
    const styled: typeof styledImport;
    const css: typeof cssImport;
}

declare module 'react' {
    // The css prop
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        css?: CSSProp;
        tw?: string;
    }
    // The inline svg css prop
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface SVGProps<T> extends SVGProps<SVGSVGElement> {
        css?: CSSProp;
        tw?: string;
    }
}

// The 'as' prop on styled components
declare global {
    namespace JSX {
        interface IntrinsicAttributes<T> extends DOMAttributes<T> {
            as?: string | Element;
        }
    }
}
