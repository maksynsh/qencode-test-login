export const formatLogoName = (name: string) => {
  if (!name) {
    throw new Error(`Icon's name '${name}' not found.`)
  }
  if (name.endsWith('Icon')) return name

  return `${name}Icon`
}
