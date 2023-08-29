<template>
  <div class="homepage">
    <HomepageHeader v-bind="headerProps" />
    <HomepageSection v-for="section in sectionProps" :key="section.sectionId" v-bind="section" />
    <HomepageFooter v-bind="footerProps" />
  </div>
</template>

<script setup lang="js">
const { $contentfulClient } = useNuxtApp()
const headerProps = {
  imgSrc: String,
  imgAlt: String,
  description: String,
  readMoreBtnType: String,
  readMoreBtnLabel: String,
  readMoreBtnHref: String,
  readMoreBtnColor: String
}
let sectionProps = [{
  sectionId: String,
  title: String,
  description: String,
  alignment: String,
  backgroundColor: String,
  textColor: String
}]
const footerProps = {
  title: String,
  footerLinks: Array
}

await $contentfulClient.getEntry('45KM0SJ3XD2ArM0xfx28FN', { include: 10 }).then((entry) => {
  // transform header props
  const headerData = entry.fields.header.fields
  
  headerProps.imgSrc = headerData.headerImage.fields.file.url
  headerProps.imgAlt = headerData.headerImage.fields.file.fileName
  headerProps.description = headerData.description
  headerProps.readMoreBtnType = headerData.button.fields.type
  headerProps.readMoreBtnColor = headerData.button.fields.color
  headerProps.readMoreBtnHref = headerData.button.fields.url
  headerProps.readMoreBtnLabel = headerData.button.fields.label

  // transform section props
  sectionProps = entry.fields.sections.map((section) => {
    return {
      sectionId: section.fields.sectionId,
      title: section.fields.title,
      description: section.fields.description,
      alignment: section.fields.alignment,
      backgroundColor: section.fields.backgroundColor,
      textColor: section.fields.textColor,
    }
  })

  // transform footer props
  const footerData = entry.fields.footer.fields

  footerProps.title = footerData.footerTitle
  footerProps.footerLinks = footerData.footerLinks.map((link) => {
    return {
      title: link.fields.linkTitle,
      url: link.fields.linkUrl,
      iconSrc: link.fields.linkIcon.fields.file.url
    }
  })
})
</script>
