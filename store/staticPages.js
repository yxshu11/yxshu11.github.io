import { defineStore } from 'pinia'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export const useStaticPagesStore = defineStore('staticPages', {
  state: () => ({
    staticPages: [],
    loaded: false
  }),

  getters: {
    getStaticPageByType: (state) => (type) => {
      return state.staticPages.find((page) => page.type === type)
    }
  },

  actions: {
    async fetchStaticPagesContent() {
      if (this.loaded) return

      await fetchContents('staticPage')
        .then((entries) => {
          // transform static pages data
          this.staticPages = entries.items.map((entry) => {
            return {
              title: entry.fields.pageTitle,
              description: entry.fields.pageDescription,
              type: entry.fields.type,
              sections: transformData(entry.fields.cardSection)
            }
          })          
          this.loaded = true
        })
    }
  }
})

function transformData(sections) {
  const data = sections.map((section) => {
    const fields = {}

    Object.keys(section.fields).forEach(function (key, index) {
      if (section.fields[key].nodeType && section.fields[key].nodeType === 'document') {
        fields[key] = documentToHtmlString(section.fields[key])
      }
      else if (section.fields[key].sys && section.fields[key].sys.type === 'Asset') {
        fields[key] = section.fields[key].fields.file.url
      } else if (key === 'cards') {
        fields[key] = transformData(section.fields[key])
      } else {
        fields[key] = section.fields[key]
      }
    })

    return fields
  })

  return data
}
