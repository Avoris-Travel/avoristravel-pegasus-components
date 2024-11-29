import Vue from 'vue'
import Router from 'vue-router'

import EmptyRoute from '@/pages/EmptyRoute.vue'

// Home
import Index from '@/pages/Index.vue'
import NotFound404 from '@/pages/NotFound404.vue'

// Components
import Banner from '@/pages/components/Banner.vue'
import BannerOrion from '@/pages/components/BannerOrion.vue'
import BannerSirius from '@/pages/components/BannerSirius.vue'
import Button from '@/pages/components/Button.vue'
import CheckBox from '@/pages/components/CheckBox.vue'
import Heading from '@/pages/components/Heading.vue'
import Icon from '@/pages/components/Icon.vue'
import IconList from '@/pages/components/IconList.vue'
import Price from '@/pages/components/Price.vue'
import PriceButton from '@/pages/components/PriceButton.vue'
import Input from '@/pages/components/Input.vue'
import Radio from '@/pages/components/Radio.vue'
import Select from '@/pages/components/Select.vue'
import Textarea from '@/pages/components/Textarea.vue'
import Tip from '@/pages/components/Tip.vue'
import Tetris from '@/pages/components/Tetris'
import Text from '@/pages/components/Text'
import ToggleSwitch from '@/pages/components/ToggleSwitch'

Vue.use(Router)

const publicPath = (process.env && process.env.publicPath) || '/'

export default new Router({
    base: publicPath,
    mode: 'hash',
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-active-exact',
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '*',
            component: NotFound404
        },
        {
            path: '/',
            name: 'Home',
            component: Index
        },
        {
            path: '/components',
            component: EmptyRoute,
            children: [
                {
                    path: 'banner',
                    name: 'Banner',
                    component: Banner
                },
                {
                    path: 'banner-orion',
                    name: 'BannerOrion',
                    component: BannerOrion
                },
                {
                    path: 'banner-sirius',
                    name: 'BannerSirius',
                    component: BannerSirius
                },
                {
                    path: 'button',
                    name: 'Button',
                    component: Button
                },
                {
                    path: 'checkbox',
                    name: 'Checkbox',
                    component: CheckBox
                },
                {
                    path: 'heading',
                    name: 'Heading',
                    component: Heading
                },
                {
                    path: 'icon',
                    name: 'Icon',
                    component: Icon
                },
                {
                    path: 'icon-list',
                    name: 'IconList',
                    component: IconList
                },
                {
                    path: 'price',
                    name: 'Price',
                    component: Price
                },
                {
                    path: 'price-button',
                    name: 'PriceButton',
                    component: PriceButton
                },
                {
                    path: 'input',
                    name: 'Input',
                    component: Input
                },
                {
                    path: 'radio',
                    name: 'Radio',
                    component: Radio
                },
                {
                    path: 'select',
                    name: 'Select',
                    component: Select
                },
                {
                    path: 'textarea',
                    name: 'Textarea',
                    component: Textarea
                },
                {
                    path: 'tip',
                    name: 'Tip',
                    component: Tip
                },
                {
                    path: 'tetris',
                    name: 'Tetris',
                    component: Tetris
                },
                {
                    path: 'text',
                    name: 'Text',
                    component: Text
                },
                {
                    path: 'toggle-switch',
                    name: 'ToggleSwitch',
                    component: ToggleSwitch
                }
            ]
        }
    ]
})
