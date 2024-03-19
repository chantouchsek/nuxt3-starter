import { so1ve } from '@so1ve/eslint-config'

export default so1ve(
  {},
  {
    ignores: ['pnpm-lock.yaml'],
    rules: {
      'vue/define-macros-order': [
        'error',
        {
          order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
        },
      ],
    },
  },
)
