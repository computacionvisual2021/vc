import { ThemedComponentThis } from "@connectv/jss-theme"; // @see [CONNECTIVE JSS Theme](https://github.com/CONNECT-platform/connective-jss-theme)
import { RendererLike } from "@connectv/html"; // @see [CONNECTIVE HTML](https://github.com/CONNECT-platform/connective-html)

export interface InputOptions {
    object: string;
}

export function input(
    this: ThemedComponentThis, // --> keep typescript strict typing happy
    options: InputOptions, // --> the component props (attributes)
    renderer: RendererLike<any, any>, // --> our beloved renderer
    content: any // --> the content of the component
) {
    return (
        <div>
            <script src="/js/wmd.combined.min.js"></script>
            <script>
                {/* alert(x.a); */}
            </script>
            <input type="text" value={`${JSON.stringify(options)}`} />
        </div >
    );
}