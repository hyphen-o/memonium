import { marked } from "marked"
import sanitizeHtml from "sanitize-html"

export const parseMarkedHtml = (text: string) => {
  const markedText = sanitizeHtml(text, {
    allowedTags: [],
    disallowedTagsMode: "recursiveEscape",
  })

  marked.setOptions({
    gfm: true,
    breaks: true,
  })

  const htmlText = marked.parse(markedText)

  return {
    __html: htmlText,
  }
}
