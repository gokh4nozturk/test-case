<script setup lang="ts">
import { computed } from 'vue';
import Icon from '../Icon/Icon.vue';
import './_button.scss';
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  label?: string;
  block?: boolean;
}
const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  icon: '',
  iconPosition: 'left',
  label: '',
  block: false,
});

defineEmits(['click']);

const classes = computed(() => {
  return {
    btn: true,
    [`btn--${props.variant}`]: true,
    [`btn--${props.size}`]: true,
    [`btn--icon-${props.iconPosition}`]: props.icon,
    'btn--block': props.block,
    'btn-disabled': props.disabled,
    'btn-loading': props.loading,
  };
});
</script>
<template>
  <button :class="classes" :disabled="disabled" @click="$emit('click')">
    <Icon v-if="props.icon" class="btn__icon" :name="props.icon" />
    <slot />
    <span class="btn__label" v-if="!$slots['default']">{{ props.label }}</span>
  </button>
</template>
