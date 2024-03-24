<script setup lang="ts">
import { mergeProps } from 'vue'

const theme = useVTheme()
const drawer = useState('drawer')
const route = useRoute()
const isDark = useDark({ onChanged })
const toggleDark = useToggle<true, false | null>(isDark)
const $auth = useAuth()
const breadcrumbs = computed(() =>
  route.matched
    .filter((item) => item.meta?.title && item.meta?.breadcrumb !== 'hidden')
    .map((r) => ({
      title: r.meta.title!,
      disabled: r.meta?.breadcrumb === false || r.path === route.path || false,
      to: r.path,
    })),
)
function onChanged(dark: boolean) {
  theme.global.name.value = dark ? 'dark' : 'light'
}
</script>

<template>
  <VAppBar flat>
    <VAppBarNavIcon @click="drawer = !drawer" />
    <VBreadcrumbs :items="breadcrumbs" />
    <VSpacer />
    <VSwitch
      color=""
      density="compact"
      false-icon="mdi-white-balance-sunny"
      hide-details
      inset
      :model-value="isDark"
      true-icon="mdi-weather-night"
      @update:model-value="toggleDark"
    />
    <VMenu location="bottom">
      <template #activator="{ props: menu }">
        <VTooltip location="bottom">
          <template #activator="{ props: tooltip }">
            <VBtn v-bind="mergeProps(menu, tooltip)" class="ml-1" icon large>
              <VIcon v-if="!$auth.loggedIn" icon="mdi-account-circle" size="36" />
              <VAvatar v-else color="primary" size="36">
                <VImg src="~/assets/images/avatar.svg" />
              </VAvatar>
            </VBtn>
          </template>
          <span>{{ $auth.loggedIn ? $auth.user?.name : 'User' }}</span>
        </VTooltip>
      </template>
      <VList density="comfortable" nav>
        <VListItem nav>
          <template #prepend>
            <VIcon icon="mdi-account" />
          </template>
          <VListItemTitle>
            {{ $t('common.title.profileSetting') }}
          </VListItemTitle>
        </VListItem>
        <VListItem>
          <template #prepend>
            <VIcon start>mdi-translate</VIcon>
          </template>
          <VListItemTitle>
            {{ $t('common.title.switchLang') }}
          </VListItemTitle>
        </VListItem>
        <VDivider thickness="1" />
        <VListItem @click="$auth.logout()">
          <template #prepend>
            <VIcon start>mdi-logout-variant</VIcon>
          </template>
          <VListItemTitle>
            {{ $t('auth.logout') }}
          </VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
  </VAppBar>
</template>
