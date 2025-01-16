// this is dumb as I'm only using it twice

export const copyToClipboard = (text: string) => {
  try {
    navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
