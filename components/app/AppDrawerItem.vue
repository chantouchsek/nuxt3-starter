<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

defineOptions({ name: 'AppDrawerItem' })
const props = withDefaults(
  defineProps<{
    level?: number
    item: RouteRecordRaw
  }>(),
  {
    level: 0,
  },
)
const children = computed(() =>
  props.item.children
    ?.filter((child) => child.meta?.icon)
    .sort((a, b) => (Number(a.meta?.drawerIndex) ?? 99) - (Number(b.meta?.drawerIndex) ?? 98)),
)
const isItem = computed(() => !props.item.children || (children.value?.length ?? 0) <= 1)
const title = computed(() => props.item.meta?.title)
const icon = computed(() => props.item.meta?.icon)
</script>

<template>
  <VListItem
    v-if="isItem && icon"
    active-class="text-primary"
    :prepend-icon="icon"
    :title="title"
    :to="{ name: item.name || children?.[0].name }"
  />
  <VListGroup v-else-if="icon" color="primary" :prepend-icon="icon">
    <template #activator="{ props: vProps }">
      <VListItem :title="title" v-bind="vProps" />
    </template>
    <AppDrawerItem v-for="child in children" :key="child.name" :item="child" :level="level + 1" />
  </VListGroup>
</template>
