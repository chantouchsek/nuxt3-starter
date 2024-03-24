import type { IconProps, IconSet } from 'vuetify'
import type { VDataTable } from 'vuetify/components'

export type DataTableHeaders = VDataTable['$props']['headers']

const getFilename = (path: string) =>
  path
    .split('/')
    .pop()!
    .replace(/\.[^/.]+$/, '')
const svgIcons = Object.fromEntries(
  Object.entries(
    import.meta.glob('~/assets/icons/*.svg', { eager: true, query: '?raw', import: 'default' }),
  ).map(([path, value]) => [getFilename(path), value]),
)
const custom: IconSet = {
  component: (props: IconProps) => h(props.tag, { innerHTML: svgIcons[props.icon] }),
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vuetify:configuration', ({ vuetifyOptions }) => {
    vuetifyOptions.icons!.sets!.custom = custom
    const primary = useLocalStorage('theme-primary', '#1697f6').value
    vuetifyOptions.theme = {
      themes: {
        light: { colors: { primary } },
        dark: { colors: { primary } },
      },
    }
  })
})
