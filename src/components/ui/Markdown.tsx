import type { ComponentProps } from 'react'
import MarkdownLib from 'react-native-markdown-display'

type Props = {
    content: string
    style?: MarkdownStyles
} & ComponentProps<typeof MarkdownLib>

const Markdown = ({ content, style, ...rest }: Props) => {
    const styles: MarkdownStyles = {
        body: { color: 'white', paddingHorizontal: 20, display: 'flex', fontSize: 10, fontFamily: 'outfit', ...style?.body },
        heading1: { fontSize: 80, ...style?.heading1 },
        paragraph: { fontSize: 16, ...style?.paragraph },
        list_item: { backgroundColor: 'transparent', ...style?.list_item },
        ...style
    }

    return <MarkdownLib style={styles} {...rest} >
        {content}
    </MarkdownLib>
}

export default Markdown

type RenderRule =
    | 'body'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'hr'
    | 'strong'
    | 'em'
    | 's'
    | 'blockquote'
    | 'bullet_list'
    | 'ordered_list'
    | 'list_item'
    | 'code_inline'
    | 'code_block'
    | 'fence'
    | 'table'
    | 'thead'
    | 'tbody'
    | 'th'
    | 'tr'
    | 'td'
    | 'link'
    | 'blocklink'
    | 'image'
    | 'text'
    | 'textgroup'
    | 'paragraph'
    | 'hardbreak'
    | 'softbreak'
    | 'pre'
    | 'inline'
    | 'span'

type MarkdownStyles = Partial<Record<RenderRule, Record<string, string | number>>>
