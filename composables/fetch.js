export const fetchContent = async (entryId) => {
  const { $contentfulClient } = useNuxtApp()

  const response = await $contentfulClient.getEntry(entryId, { include: 10 })

  return response
}

export const fetchContents = async (contentType) => {
  const { $contentfulClient } = useNuxtApp()

  const response = await $contentfulClient.getEntries({
    content_type: contentType,
  })

  return response
}
