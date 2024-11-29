<template>
    <component
        :is="tag"
        class="c-tip"
        :class="{
            'c-tip--has-icon': icon,
            'c-tip--icon-right': iconAlign === 'right',
            'c-tip--icon-bottom': iconAlign === 'bottom',
            'c-tip--icon-top': iconAlign === 'top'
        }"
    >
        <AtIcon
            v-if="icon"
            class="c-tip__icon"
            :icon="icon"
        />
        <div class="c-tip__info">
            <div class="c-tip__title">{{ title }}</div>
            <div class="c-tip__text">{{ text }}</div>
        </div>
    </component>
</template>

<script>
    export default {
        name: 'AtTip',
        props: {
            tag: {
                type: String,
                default: 'div'
            },
            icon: {
                type: [String, Boolean],
                default: undefined
            },
            iconAlign: {
                type: [String],
                default: undefined
            },
            title: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss">
    .c-tip {
        --c-tip-icon-color: var(--color-shade-1900);
        --c-tip-icon-font-size: var(--c-input-icon-font-size, 1.8em);
        --c-tip-title-color: var(--color-shade-1500);
        --c-tip-title-font-size: var(--font-size-m);
        --c-tip-text-color: var(--color-shade-1500);
        --c-tip-text-font-size: var(--font-size-xs);
        --c-tip-title-font-weight: 700;

        $this: &;

        display: flex;
        align-items: flex-start;

        &--icon {
            &-right {
                #{$this}__icon {
                    margin-right: 0;
                    margin-left: 1em;
                    order: 1;
                }
            }

            &-top {
                flex-direction: column;

                #{$this}__icon {
                    margin-bottom: .4em;
                    margin-right: 0;
                }
            }

            &-bottom {
            flex-direction: column-reverse;

                #{$this}__icon {
                    margin-right: 0;
                    margin-top: .4em;
                }
            }
        }

        &__icon {
            font-size: var(--c-tip-icon-font-size);
            color: var(--c-tip-icon-color);
            margin-right: 1em;
        }

        &__title {
            color: var(--c-tip-title-color);
            font-size: var(--c-tip-title-font-size);
            font-weight: var(--c-tip-title-font-weight);
            margin-bottom: .5em;
        }

        &__text {
            color: var(--c-tip-text-color);
            font-size: var(--c-tip-text-font-size);
        }
    }
</style>
