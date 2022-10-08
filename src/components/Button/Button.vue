<script setup lang="ts">
import { computed } from 'vue';
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  label?: string;
}
const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  icon: '',
  iconPosition: 'left',
  label: '',
});

defineEmits(['click']);

const classes = computed(() => {
  return {
    btn: true,
    [`btn-${props.variant}`]: true,
    [`btn-${props.size}`]: true,
    'btn-disabled': props.disabled,
    'btn-loading': props.loading,
  };
});
</script>
<template>
  <button
    class="button"
    :class="classes"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
