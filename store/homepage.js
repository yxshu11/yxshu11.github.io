import { defineStore } from 'pinia'

export const useHomepageStore = defineStore('homepage', {
  state: () => ({
    header: {},
    sections: [],
    footer: {},
    loaded: false
  }),

  actions: {
    async fetchHomepageContent() {
      if (this.loaded) return

      await fetchContent('45KM0SJ3XD2ArM0xfx28FN')
        .then((entry) => {
          // transform header data
          const headerData = entry.fields.header.fields

          this.header.imgSrc = headerData.headerImage.fields.file.url
          this.header.imgAlt = headerData.headerImage.fields.file.fileName
          this.header.description = headerData.description
          this.header.readMoreBtnType = headerData.button.fields.type
          this.header.readMoreBtnColor = headerData.button.fields.color
          this.header.readMoreBtnHref = headerData.button.fields.url
          this.header.readMoreBtnLabel = headerData.button.fields.label

          // transform section data
          this.sections = entry.fields.sections.map((section) => {
            return {
              sectionId: section.fields.sectionId,
              title: section.fields.title,
              description: section.fields.description,
              alignment: section.fields.alignment,
              backgroundColor: section.fields.backgroundColor,
              textColor: section.fields.textColor,
            }
          })

          // transform footer data
          const footerData = entry.fields.footer.fields

          this.footer.title = footerData.footerTitle
          this.footer.footerLinks = footerData.footerLinks.map((link) => {
            return {
              title: link.fields.linkTitle,
              url: link.fields.linkUrl,
              iconSrc: link.fields.linkIcon.fields.file.url
            }
          })

          this.loaded = true
        })
    }
  },
});
