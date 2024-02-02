export const countGrapheme = (str: string) => {
  const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" })
  return Array.from(segmenter.segment(str.replace(/\n/g, ""))).length
}
