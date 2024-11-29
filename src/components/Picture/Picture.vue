<template>
    <picture class="c-picture">
        <AtPictureSource
            v-for="source in sources"
            :key="source.id"
            :srcset="source.srcset"
            :media="source.media"
            :type="source.type"
        />
        <img
            class="c-picture__img"
            :class="{ 'lazyload': lazy }"
            :src="lazy ? shim : src"
            :data-src="lazy && src"
            :alt="alt"
            :title="title"
        >
    </picture>
</template>

<script>
    import AtPictureSource from './PictureSource.vue'

    export default {
        name: 'AtPicture',
        components: {
            AtPictureSource
        },
        props: {
            src: {
                type: String,
                default: 'https://source.unsplash.com/random/1920x1080'
            },
            alt: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: undefined
            },
            lazy: {
                type: Boolean,
                default: false
            },
            sources: {
                type: Array,
                default: () => []
            }
        },
        data () {
            return {
                shim: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
            }
        }
    }
</script>

<style lang="scss">
  .c-picture {
    --c-picture-ratio-width: 16;
    --c-picture-ratio-height: 9;
    --c-picture-overlay: transparent;

    overflow: hidden;
    position: relative;


    &::before {
      display: block;
      width: 100%;
      padding-top: calc(calc(var(--c-picture-ratio-height) / var(--c-picture-ratio-width)) * 100%);
      content: "";
    }

    img,
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    &::after {
      content: "";
      background: var(--c-picture-overlay);
      z-index: 2;
    }
  }
</style>
