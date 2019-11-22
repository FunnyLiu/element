
# 源码分析

## 文件结构

``` bash
/Users/liufang/openSource/FunnyLiu/element
├── CHANGELOG.en-US.md
├── CHANGELOG.es.md
├── CHANGELOG.fr-FR.md
├── CHANGELOG.zh-CN.md
├── FAQ.md
├── LICENSE
├── Makefile
├── README.md
├── build
|  ├── bin
|  |  ├── build-entry.js
|  |  ├── build-locale.js
|  |  ├── gen-cssfile.js
|  |  ├── gen-indices.js
|  |  ├── i18n.js
|  |  ├── iconInit.js
|  |  ├── new-lang.js
|  |  ├── new.js
|  |  ├── template.js
|  |  └── version.js
|  ├── config.js
|  ├── deploy-ci.sh
|  ├── deploy-faas.sh
|  ├── gen-single-config.js
|  ├── git-release.sh
|  ├── md-loader
|  |  ├── config.js
|  |  ├── containers.js
|  |  ├── fence.js
|  |  ├── index.js
|  |  └── util.js
|  ├── release.sh
|  ├── webpack.common.js
|  ├── webpack.component.js
|  ├── webpack.conf.js
|  ├── webpack.demo.js
|  ├── webpack.extension.js
|  └── webpack.test.js
├── components.json
├── element_logo.svg
├── examples
|  ├── app.vue
|  ├── assets
|  |  ├── images
|  |  |  ├── Axure-Components.svg
|  |  |  ├── Module.svg
|  |  |  ├── Sketch-Template.svg
|  |  |  ├── button-d-cn.png
|  |  |  ├── button-d-en.png
|  |  |  ├── button-l-cn.png
|  |  |  ├── button-l-en.png
|  |  |  ├── cloud-1.png
|  |  |  ├── cloud-2.png
|  |  |  ├── compo-1.png
|  |  |  ├── compo-2.png
|  |  |  ├── compo-3.png
|  |  |  ├── component.png
|  |  |  ├── consistency.png
|  |  |  ├── controllability.png
|  |  |  ├── dialog-close.png
|  |  |  ├── duohui.svg
|  |  |  ├── efficiency.png
|  |  |  ├── element-demo.jpeg
|  |  |  ├── element-logo-small.svg
|  |  |  ├── element-logo.svg
|  |  |  ├── feedback.png
|  |  |  ├── figure-1.png
|  |  |  ├── figure-2.png
|  |  |  ├── guide.png
|  |  |  ├── hamburger.png
|  |  |  ├── icon-check.png
|  |  |  ├── icon-copy.png
|  |  |  ├── icon-download.png
|  |  |  ├── icon-edit.png
|  |  |  ├── icon-redo.svg
|  |  |  ├── icon-undo.svg
|  |  |  ├── icon-upload.svg
|  |  |  ├── intro-theme-b.png
|  |  |  ├── navbar_0.png
|  |  |  ├── navbar_1.png
|  |  |  ├── navbar_2.png
|  |  |  ├── navbar_3.png
|  |  |  ├── plant-1.png
|  |  |  ├── plant-2.png
|  |  |  ├── qrcode.png
|  |  |  ├── resource-placeholder.svg
|  |  |  ├── resource.png
|  |  |  ├── search-by-algolia.svg
|  |  |  ├── term-arial.png
|  |  |  ├── term-helvetica.png
|  |  |  ├── term-hiragino.png
|  |  |  ├── term-microsoft.png
|  |  |  ├── term-pingfang.png
|  |  |  ├── term-sf.png
|  |  |  ├── theme-index-blue.png
|  |  |  ├── theme-index-icon.svg
|  |  |  ├── theme-index-red.png
|  |  |  ├── theme-intro.png
|  |  |  ├── tipe.svg
|  |  |  ├── typography.png
|  |  |  └── web.png
|  |  └── styles
|  |     ├── common.css
|  |     └── fonts
|  |        ├── icomoon.eot
|  |        ├── icomoon.svg
|  |        ├── icomoon.ttf
|  |        ├── icomoon.woff
|  |        └── style.css
|  ├── bus.js
|  ├── color.js
|  ├── components
|  |  ├── demo-block.vue
|  |  ├── footer-nav.vue
|  |  ├── footer.vue
|  |  ├── header.vue
|  |  ├── search.vue
|  |  ├── side-nav.vue
|  |  ├── theme
|  |  |  ├── basic-tokens-preview.vue
|  |  |  ├── components-preview.vue
|  |  |  ├── constant.js
|  |  |  ├── loader
|  |  |  |  ├── ajax.js
|  |  |  |  ├── api.js
|  |  |  |  ├── docStyle.vue
|  |  |  |  ├── index.vue
|  |  |  |  └── loading
|  |  |  |     ├── index.vue
|  |  |  |     ├── progress.js
|  |  |  |     └── progress.vue
|  |  |  ├── localstorage.js
|  |  |  ├── theme-card.vue
|  |  |  ├── theme-list.js
|  |  |  └── utils.js
|  |  ├── theme-configurator
|  |  |  ├── action.vue
|  |  |  ├── editor
|  |  |  |  ├── borderRadius.vue
|  |  |  |  ├── boxShadow.vue
|  |  |  |  ├── color-picker
|  |  |  |  |  ├── index.js
|  |  |  |  |  └── src
|  |  |  |  |     ├── color.js
|  |  |  |  |     ├── components
|  |  |  |  |     |  ├── alpha-slider.vue
|  |  |  |  |     |  ├── color-list.vue
|  |  |  |  |     |  ├── hue-slider.vue
|  |  |  |  |     |  ├── picker-dropdown.vue
|  |  |  |  |     |  ├── predefine.vue
|  |  |  |  |     |  └── sv-panel.vue
|  |  |  |  |     ├── draggable.js
|  |  |  |  |     └── main.vue
|  |  |  |  ├── color.vue
|  |  |  |  ├── fontLineHeight.vue
|  |  |  |  ├── fontSize.vue
|  |  |  |  ├── fontWeight.vue
|  |  |  |  ├── input.vue
|  |  |  |  ├── mixin.vue
|  |  |  |  └── simpleText.vue
|  |  |  ├── index.vue
|  |  |  ├── main.vue
|  |  |  ├── shortcut.vue
|  |  |  └── utils
|  |  |     ├── boxShadow.js
|  |  |     └── utils.js
|  |  └── theme-picker.vue
|  ├── demo-styles
|  |  ├── alert.scss
|  |  ├── avatar.scss
|  |  ├── badge.scss
|  |  ├── border.scss
|  |  ├── button.scss
|  |  ├── calendar.scss
|  |  ├── card.scss
|  |  ├── carousel.scss
|  |  ├── cascader.scss
|  |  ├── collapse.scss
|  |  ├── color-picker.scss
|  |  ├── color.scss
|  |  ├── container.scss
|  |  ├── date-picker.scss
|  |  ├── datetime-picker.scss
|  |  ├── dialog.scss
|  |  ├── divider.scss
|  |  ├── drawer.scss
|  |  ├── dropdown.scss
|  |  ├── form.scss
|  |  ├── i18n.scss
|  |  ├── icon.scss
|  |  ├── image.scss
|  |  ├── index.scss
|  |  ├── infinite-scroll.scss
|  |  ├── input-number.scss
|  |  ├── input.scss
|  |  ├── layout.scss
|  |  ├── loading.scss
|  |  ├── menu.scss
|  |  ├── pagination.scss
|  |  ├── popover.scss
|  |  ├── progress.scss
|  |  ├── rate.scss
|  |  ├── select.scss
|  |  ├── slider.scss
|  |  ├── switch.scss
|  |  ├── table.scss
|  |  ├── tag.scss
|  |  ├── time-picker.scss
|  |  ├── timeline.scss
|  |  ├── tooltip.scss
|  |  ├── transfer.scss
|  |  ├── transition.scss
|  |  ├── tree.scss
|  |  ├── typography.scss
|  |  └── upload.scss
|  ├── docs
|  |  ├── en-US
|  |  |  ├── alert.md
|  |  |  ├── avatar.md
|  |  |  ├── backtop.md
|  |  |  ├── badge.md
|  |  |  ├── border.md
|  |  |  ├── breadcrumb.md
|  |  |  ├── button.md
|  |  |  ├── calendar.md
|  |  |  ├── card.md
|  |  |  ├── carousel.md
|  |  |  ├── cascader.md
|  |  |  ├── checkbox.md
|  |  |  ├── collapse.md
|  |  |  ├── color-picker.md
|  |  |  ├── color.md
|  |  |  ├── container.md
|  |  |  ├── custom-theme.md
|  |  |  ├── date-picker.md
|  |  |  ├── datetime-picker.md
|  |  |  ├── dialog.md
|  |  |  ├── divider.md
|  |  |  ├── drawer.md
|  |  |  ├── dropdown.md
|  |  |  ├── form.md
|  |  |  ├── i18n.md
|  |  |  ├── icon.md
|  |  |  ├── image.md
|  |  |  ├── infiniteScroll.md
|  |  |  ├── input-number.md
|  |  |  ├── input.md
|  |  |  ├── installation.md
|  |  |  ├── layout.md
|  |  |  ├── link.md
|  |  |  ├── loading.md
|  |  |  ├── menu.md
|  |  |  ├── message-box.md
|  |  |  ├── message.md
|  |  |  ├── notification.md
|  |  |  ├── page-header.md
|  |  |  ├── pagination.md
|  |  |  ├── popconfirm.md
|  |  |  ├── popover.md
|  |  |  ├── progress.md
|  |  |  ├── quickstart.md
|  |  |  ├── radio.md
|  |  |  ├── rate.md
|  |  |  ├── select.md
|  |  |  ├── slider.md
|  |  |  ├── steps.md
|  |  |  ├── switch.md
|  |  |  ├── table.md
|  |  |  ├── tabs.md
|  |  |  ├── tag.md
|  |  |  ├── time-picker.md
|  |  |  ├── timeline.md
|  |  |  ├── tooltip.md
|  |  |  ├── transfer.md
|  |  |  ├── transition.md
|  |  |  ├── tree.md
|  |  |  ├── typography.md
|  |  |  └── upload.md
|  |  ├── es
|  |  |  ├── alert.md
|  |  |  ├── avatar.md
|  |  |  ├── backtop.md
|  |  |  ├── badge.md
|  |  |  ├── border.md
|  |  |  ├── breadcrumb.md
|  |  |  ├── button.md
|  |  |  ├── calendar.md
|  |  |  ├── card.md
|  |  |  ├── carousel.md
|  |  |  ├── cascader.md
|  |  |  ├── checkbox.md
|  |  |  ├── collapse.md
|  |  |  ├── color-picker.md
|  |  |  ├── color.md
|  |  |  ├── container.md
|  |  |  ├── custom-theme.md
|  |  |  ├── date-picker.md
|  |  |  ├── datetime-picker.md
|  |  |  ├── dialog.md
|  |  |  ├── divider.md
|  |  |  ├── drawer.md
|  |  |  ├── dropdown.md
|  |  |  ├── form.md
|  |  |  ├── i18n.md
|  |  |  ├── icon.md
|  |  |  ├── image.md
|  |  |  ├── infiniteScroll.md
|  |  |  ├── input-number.md
|  |  |  ├── input.md
|  |  |  ├── installation.md
|  |  |  ├── layout.md
|  |  |  ├── link.md
|  |  |  ├── loading.md
|  |  |  ├── menu.md
|  |  |  ├── message-box.md
|  |  |  ├── message.md
|  |  |  ├── notification.md
|  |  |  ├── page-header.md
|  |  |  ├── pagination.md
|  |  |  ├── popconfirm.md
|  |  |  ├── popover.md
|  |  |  ├── progress.md
|  |  |  ├── quickstart.md
|  |  |  ├── radio.md
|  |  |  ├── rate.md
|  |  |  ├── select.md
|  |  |  ├── slider.md
|  |  |  ├── steps.md
|  |  |  ├── switch.md
|  |  |  ├── table.md
|  |  |  ├── tabs.md
|  |  |  ├── tag.md
|  |  |  ├── time-picker.md
|  |  |  ├── timeline.md
|  |  |  ├── tooltip.md
|  |  |  ├── transfer.md
|  |  |  ├── transition.md
|  |  |  ├── tree.md
|  |  |  ├── typography.md
|  |  |  └── upload.md
|  |  ├── fr-FR
|  |  |  ├── alert.md
|  |  |  ├── avatar.md
|  |  |  ├── backtop.md
|  |  |  ├── badge.md
|  |  |  ├── border.md
|  |  |  ├── breadcrumb.md
|  |  |  ├── button.md
|  |  |  ├── calendar.md
|  |  |  ├── card.md
|  |  |  ├── carousel.md
|  |  |  ├── cascader.md
|  |  |  ├── checkbox.md
|  |  |  ├── collapse.md
|  |  |  ├── color-picker.md
|  |  |  ├── color.md
|  |  |  ├── container.md
|  |  |  ├── custom-theme.md
|  |  |  ├── date-picker.md
|  |  |  ├── datetime-picker.md
|  |  |  ├── dialog.md
|  |  |  ├── divider.md
|  |  |  ├── drawer.md
|  |  |  ├── dropdown.md
|  |  |  ├── form.md
|  |  |  ├── i18n.md
|  |  |  ├── icon.md
|  |  |  ├── image.md
|  |  |  ├── infiniteScroll.md
|  |  |  ├── input-number.md
|  |  |  ├── input.md
|  |  |  ├── installation.md
|  |  |  ├── layout.md
|  |  |  ├── link.md
|  |  |  ├── loading.md
|  |  |  ├── menu.md
|  |  |  ├── message-box.md
|  |  |  ├── message.md
|  |  |  ├── notification.md
|  |  |  ├── page-header.md
|  |  |  ├── pagination.md
|  |  |  ├── popconfirm.md
|  |  |  ├── popover.md
|  |  |  ├── progress.md
|  |  |  ├── quickstart.md
|  |  |  ├── radio.md
|  |  |  ├── rate.md
|  |  |  ├── select.md
|  |  |  ├── slider.md
|  |  |  ├── steps.md
|  |  |  ├── switch.md
|  |  |  ├── table.md
|  |  |  ├── tabs.md
|  |  |  ├── tag.md
|  |  |  ├── time-picker.md
|  |  |  ├── timeline.md
|  |  |  ├── tooltip.md
|  |  |  ├── transfer.md
|  |  |  ├── transition.md
|  |  |  ├── tree.md
|  |  |  ├── typography.md
|  |  |  └── upload.md
|  |  └── zh-CN
|  |     ├── alert.md
|  |     ├── avatar.md
|  |     ├── backtop.md
|  |     ├── badge.md
|  |     ├── border.md
|  |     ├── breadcrumb.md
|  |     ├── button.md
|  |     ├── calendar.md
|  |     ├── card.md
|  |     ├── carousel.md
|  |     ├── cascader.md
|  |     ├── checkbox.md
|  |     ├── collapse.md
|  |     ├── color-picker.md
|  |     ├── color.md
|  |     ├── container.md
|  |     ├── custom-theme.md
|  |     ├── date-picker.md
|  |     ├── datetime-picker.md
|  |     ├── dialog.md
|  |     ├── divider.md
|  |     ├── drawer.md
|  |     ├── dropdown.md
|  |     ├── form.md
|  |     ├── i18n.md
|  |     ├── icon.md
|  |     ├── image.md
|  |     ├── infiniteScroll.md
|  |     ├── input-number.md
|  |     ├── input.md
|  |     ├── installation.md
|  |     ├── layout.md
|  |     ├── link.md
|  |     ├── loading.md
|  |     ├── menu.md
|  |     ├── message-box.md
|  |     ├── message.md
|  |     ├── notification.md
|  |     ├── page-header.md
|  |     ├── pagination.md
|  |     ├── popconfirm.md
|  |     ├── popover.md
|  |     ├── progress.md
|  |     ├── quickstart.md
|  |     ├── radio.md
|  |     ├── rate.md
|  |     ├── select.md
|  |     ├── slider.md
|  |     ├── steps.md
|  |     ├── switch.md
|  |     ├── table.md
|  |     ├── tabs.md
|  |     ├── tag.md
|  |     ├── time-picker.md
|  |     ├── timeline.md
|  |     ├── tooltip.md
|  |     ├── transfer.md
|  |     ├── transition.md
|  |     ├── tree.md
|  |     ├── typography.md
|  |     └── upload.md
|  ├── dom
|  |  └── class.js
|  ├── entry.js
|  ├── extension
|  |  └── src
|  |     ├── app.js
|  |     ├── background.js
|  |     ├── editor
|  |     |  ├── editor.vue
|  |     |  ├── gallery.vue
|  |     |  ├── icon-close.png
|  |     |  ├── icon-entrance.png
|  |     |  ├── index.vue
|  |     |  └── utils.js
|  |     ├── entry.js
|  |     ├── icon.png
|  |     └── manifest.json
|  ├── favicon.ico
|  ├── i18n
|  |  ├── component.json
|  |  ├── page.json
|  |  ├── route.json
|  |  ├── theme-editor.json
|  |  └── title.json
|  ├── icon.json
|  ├── index.tpl
|  ├── nav.config.json
|  ├── pages
|  |  └── template
|  |     ├── changelog.tpl
|  |     ├── component.tpl
|  |     ├── design.tpl
|  |     ├── guide.tpl
|  |     ├── index.tpl
|  |     ├── nav.tpl
|  |     ├── resource.tpl
|  |     ├── theme-nav.tpl
|  |     ├── theme-preview.tpl
|  |     └── theme.tpl
|  ├── play
|  |  └── index.vue
|  ├── play.js
|  ├── route.config.js
|  ├── util.js
|  └── versions.json
├── package.json
├── packages
|  ├── alert
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── aside
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── autocomplete
|  |  ├── index.js
|  |  └── src
|  |     ├── autocomplete-suggestions.vue
|  |     └── autocomplete.vue
|  ├── avatar
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── backtop
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── badge
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── breadcrumb
|  |  ├── index.js
|  |  └── src
|  |     ├── breadcrumb-item.vue
|  |     └── breadcrumb.vue
|  ├── breadcrumb-item
|  |  └── index.js
|  ├── button
|  |  ├── index.js
|  |  └── src
|  |     ├── button-group.vue
|  |     └── button.vue
|  ├── button-group
|  |  └── index.js
|  ├── calendar
|  |  ├── index.js
|  |  └── src
|  |     ├── date-table.vue
|  |     └── main.vue
|  ├── card
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── carousel
|  |  ├── index.js
|  |  └── src
|  |     ├── item.vue
|  |     └── main.vue
|  ├── carousel-item
|  |  └── index.js
|  ├── cascader
|  |  ├── index.js
|  |  └── src
|  |     └── cascader.vue
|  ├── cascader-panel
|  |  ├── index.js
|  |  └── src
|  |     ├── cascader-menu.vue
|  |     ├── cascader-node.vue
|  |     ├── cascader-panel.vue
|  |     ├── node.js
|  |     └── store.js
|  ├── checkbox
|  |  ├── index.js
|  |  └── src
|  |     ├── checkbox-button.vue
|  |     ├── checkbox-group.vue
|  |     └── checkbox.vue
|  ├── checkbox-button
|  |  └── index.js
|  ├── checkbox-group
|  |  └── index.js
|  ├── col
|  |  ├── index.js
|  |  └── src
|  |     └── col.js
|  ├── collapse
|  |  ├── index.js
|  |  └── src
|  |     ├── collapse-item.vue
|  |     └── collapse.vue
|  ├── collapse-item
|  |  └── index.js
|  ├── color-picker
|  |  ├── index.js
|  |  └── src
|  |     ├── color.js
|  |     ├── components
|  |     |  ├── alpha-slider.vue
|  |     |  ├── hue-slider.vue
|  |     |  ├── picker-dropdown.vue
|  |     |  ├── predefine.vue
|  |     |  └── sv-panel.vue
|  |     ├── draggable.js
|  |     └── main.vue
|  ├── container
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── date-picker
|  |  ├── index.js
|  |  └── src
|  |     ├── basic
|  |     |  ├── date-table.vue
|  |     |  ├── month-table.vue
|  |     |  ├── time-spinner.vue
|  |     |  └── year-table.vue
|  |     ├── panel
|  |     |  ├── date-range.vue
|  |     |  ├── date.vue
|  |     |  ├── month-range.vue
|  |     |  ├── time-range.vue
|  |     |  ├── time-select.vue
|  |     |  └── time.vue
|  |     ├── picker
|  |     |  ├── date-picker.js
|  |     |  ├── time-picker.js
|  |     |  └── time-select.js
|  |     └── picker.vue
|  ├── dialog
|  |  ├── index.js
|  |  └── src
|  |     └── component.vue
|  ├── divider
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── drawer
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── dropdown
|  |  ├── index.js
|  |  └── src
|  |     ├── dropdown-item.vue
|  |     ├── dropdown-menu.vue
|  |     └── dropdown.vue
|  ├── dropdown-item
|  |  └── index.js
|  ├── dropdown-menu
|  |  └── index.js
|  ├── footer
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── form
|  |  ├── index.js
|  |  └── src
|  |     ├── form-item.vue
|  |     ├── form.vue
|  |     └── label-wrap.vue
|  ├── form-item
|  |  └── index.js
|  ├── header
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── icon
|  |  ├── index.js
|  |  └── src
|  |     └── icon.vue
|  ├── image
|  |  ├── index.js
|  |  └── src
|  |     ├── image-viewer.vue
|  |     └── main.vue
|  ├── infinite-scroll
|  |  ├── index.js
|  |  └── src
|  |     └── main.js
|  ├── input
|  |  ├── index.js
|  |  └── src
|  |     ├── calcTextareaHeight.js
|  |     └── input.vue
|  ├── input-number
|  |  ├── index.js
|  |  └── src
|  |     └── input-number.vue
|  ├── link
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── loading
|  |  ├── index.js
|  |  └── src
|  |     ├── directive.js
|  |     ├── index.js
|  |     └── loading.vue
|  ├── main
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── menu
|  |  ├── index.js
|  |  └── src
|  |     ├── menu-item-group.vue
|  |     ├── menu-item.vue
|  |     ├── menu-mixin.js
|  |     ├── menu.vue
|  |     └── submenu.vue
|  ├── menu-item
|  |  └── index.js
|  ├── menu-item-group
|  |  └── index.js
|  ├── message
|  |  ├── index.js
|  |  └── src
|  |     ├── main.js
|  |     └── main.vue
|  ├── message-box
|  |  ├── index.js
|  |  └── src
|  |     ├── main.js
|  |     └── main.vue
|  ├── notification
|  |  ├── index.js
|  |  └── src
|  |     ├── main.js
|  |     └── main.vue
|  ├── option
|  |  └── index.js
|  ├── option-group
|  |  └── index.js
|  ├── page-header
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── pagination
|  |  ├── index.js
|  |  └── src
|  |     ├── pager.vue
|  |     └── pagination.js
|  ├── popconfirm
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── popover
|  |  ├── index.js
|  |  └── src
|  |     ├── directive.js
|  |     └── main.vue
|  ├── progress
|  |  ├── index.js
|  |  └── src
|  |     └── progress.vue
|  ├── radio
|  |  ├── index.js
|  |  └── src
|  |     ├── radio-button.vue
|  |     ├── radio-group.vue
|  |     └── radio.vue
|  ├── radio-button
|  |  └── index.js
|  ├── radio-group
|  |  └── index.js
|  ├── rate
|  |  ├── index.js
|  |  └── src
|  |     └── main.vue
|  ├── row
|  |  ├── index.js
|  |  └── src
|  |     └── row.js
|  ├── scrollbar
|  |  ├── index.js
|  |  └── src
|  |     ├── bar.js
|  |     ├── main.js
|  |     └── util.js
|  ├── select
|  |  ├── index.js
|  |  └── src
|  |     ├── navigation-mixin.js
|  |     ├── option-group.vue
|  |     ├── option.vue
|  |     ├── select-dropdown.vue
|  |     └── select.vue
|  ├── slider
|  |  ├── index.js
|  |  └── src
|  |     ├── button.vue
|  |     ├── main.vue
|  |     └── marker.js
|  ├── spinner
|  |  ├── index.js
|  |  └── src
|  |     └── spinner.vue
|  ├── step
|  |  └── index.js
|  ├── steps
|  |  ├── README.md
|  |  ├── index.js
|  |  └── src
|  |     ├── step.vue
|  |     └── steps.vue
|  ├── submenu
|  |  └── index.js
|  ├── switch
|  |  ├── index.js
|  |  └── src
|  |     └── component.vue
|  ├── tab-pane
|  |  └── index.js
|  ├── table
|  |  ├── index.js
|  |  └── src
|  |     ├── config.js
|  |     ├── dropdown.js
|  |     ├── filter-panel.vue
|  |     ├── layout-observer.js
|  |     ├── store
|  |     |  ├── current.js
|  |     |  ├── expand.js
|  |     |  ├── helper.js
|  |     |  ├── index.js
|  |     |  ├── tree.js
|  |     |  └── watcher.js
|  |     ├── table-body.js
|  |     ├── table-column.js
|  |     ├── table-footer.js
|  |     ├── table-header.js
|  |     ├── table-layout.js
|  |     ├── table.vue
|  |     └── util.js
|  ├── table-column
|  |  └── index.js
|  ├── tabs
|  |  ├── index.js
|  |  └── src
|  |     ├── tab-bar.vue
|  |     ├── tab-nav.vue
|  |     ├── tab-pane.vue
|  |     └── tabs.vue
|  ├── tag
|  |  ├── index.js
|  |  └── src
|  |     └── tag.vue
|  ├── theme-chalk
|  |  ├── README.md
|  |  ├── gulpfile.js
|  |  ├── package.json
|  |  └── src
|  |     ├── alert.scss
|  |     ├── aside.scss
|  |     ├── autocomplete.scss
|  |     ├── avatar.scss
|  |     ├── backtop.scss
|  |     ├── badge.scss
|  |     ├── base.scss
|  |     ├── breadcrumb-item.scss
|  |     ├── breadcrumb.scss
|  |     ├── button-group.scss
|  |     ├── button.scss
|  |     ├── calendar.scss
|  |     ├── card.scss
|  |     ├── carousel-item.scss
|  |     ├── carousel.scss
|  |     ├── cascader-panel.scss
|  |     ├── cascader.scss
|  |     ├── checkbox-button.scss
|  |     ├── checkbox-group.scss
|  |     ├── checkbox.scss
|  |     ├── col.scss
|  |     ├── collapse-item.scss
|  |     ├── collapse.scss
|  |     ├── color-picker.scss
|  |     ├── common
|  |     |  ├── popup.scss
|  |     |  ├── transition.scss
|  |     |  └── var.scss
|  |     ├── container.scss
|  |     ├── date-picker
|  |     |  ├── date-picker.scss
|  |     |  ├── date-range-picker.scss
|  |     |  ├── date-table.scss
|  |     |  ├── month-table.scss
|  |     |  ├── picker-panel.scss
|  |     |  ├── picker.scss
|  |     |  ├── time-picker.scss
|  |     |  ├── time-range-picker.scss
|  |     |  ├── time-spinner.scss
|  |     |  └── year-table.scss
|  |     ├── date-picker.scss
|  |     ├── dialog.scss
|  |     ├── display.scss
|  |     ├── divider.scss
|  |     ├── drawer.scss
|  |     ├── dropdown-item.scss
|  |     ├── dropdown-menu.scss
|  |     ├── dropdown.scss
|  |     ├── fonts
|  |     |  ├── element-icons.ttf
|  |     |  └── element-icons.woff
|  |     ├── footer.scss
|  |     ├── form-item.scss
|  |     ├── form.scss
|  |     ├── header.scss
|  |     ├── icon.scss
|  |     ├── image.scss
|  |     ├── index.scss
|  |     ├── infinite-scroll.scss
|  |     ├── infiniteScroll.scss
|  |     ├── input-number.scss
|  |     ├── input.scss
|  |     ├── link.scss
|  |     ├── loading.scss
|  |     ├── main.scss
|  |     ├── menu-item-group.scss
|  |     ├── menu-item.scss
|  |     ├── menu.scss
|  |     ├── message-box.scss
|  |     ├── message.scss
|  |     ├── mixins
|  |     |  ├── _button.scss
|  |     |  ├── config.scss
|  |     |  ├── function.scss
|  |     |  ├── mixins.scss
|  |     |  └── utils.scss
|  |     ├── notification.scss
|  |     ├── option-group.scss
|  |     ├── option.scss
|  |     ├── page-header.scss
|  |     ├── pagination.scss
|  |     ├── popconfirm.scss
|  |     ├── popover.scss
|  |     ├── popper.scss
|  |     ├── progress.scss
|  |     ├── radio-button.scss
|  |     ├── radio-group.scss
|  |     ├── radio.scss
|  |     ├── rate.scss
|  |     ├── reset.scss
|  |     ├── row.scss
|  |     ├── scrollbar.scss
|  |     ├── select-dropdown.scss
|  |     ├── select.scss
|  |     ├── slider.scss
|  |     ├── spinner.scss
|  |     ├── step.scss
|  |     ├── steps.scss
|  |     ├── submenu.scss
|  |     ├── switch.scss
|  |     ├── tab-pane.scss
|  |     ├── table-column.scss
|  |     ├── table.scss
|  |     ├── tabs.scss
|  |     ├── tag.scss
|  |     ├── time-picker.scss
|  |     ├── time-select.scss
|  |     ├── timeline-item.scss
|  |     ├── timeline.scss
|  |     ├── tooltip.scss
|  |     ├── transfer.scss
|  |     ├── tree.scss
|  |     └── upload.scss
|  ├── time-picker
|  |  └── index.js
|  ├── time-select
|  |  └── index.js
|  ├── timeline
|  |  ├── index.js
|  |  └── src
|  |     ├── item.vue
|  |     └── main.vue
|  ├── timeline-item
|  |  └── index.js
|  ├── tooltip
|  |  ├── index.js
|  |  └── src
|  |     └── main.js
|  ├── transfer
|  |  ├── index.js
|  |  └── src
|  |     ├── main.vue
|  |     └── transfer-panel.vue
|  ├── tree
|  |  ├── index.js
|  |  └── src
|  |     ├── model
|  |     |  ├── node.js
|  |     |  ├── tree-store.js
|  |     |  └── util.js
|  |     ├── tree-node.vue
|  |     └── tree.vue
|  └── upload
|     ├── index.js
|     └── src
|        ├── ajax.js
|        ├── index.vue
|        ├── upload-dragger.vue
|        ├── upload-list.vue
|        └── upload.vue
├── src
|  ├── directives
|  |  ├── mousewheel.js
|  |  └── repeat-click.js
|  ├── index.js
|  ├── locale
|  |  ├── format.js
|  |  ├── index.js
|  |  └── lang
|  |     ├── af-ZA.js
|  |     ├── ar.js
|  |     ├── bg.js
|  |     ├── ca.js
|  |     ├── cs-CZ.js
|  |     ├── da.js
|  |     ├── de.js
|  |     ├── ee.js
|  |     ├── el.js
|  |     ├── en.js
|  |     ├── eo.js
|  |     ├── es.js
|  |     ├── eu.js
|  |     ├── fa.js
|  |     ├── fi.js
|  |     ├── fr.js
|  |     ├── he.js
|  |     ├── hr.js
|  |     ├── hu.js
|  |     ├── hy-AM.js
|  |     ├── id.js
|  |     ├── it.js
|  |     ├── ja.js
|  |     ├── kg.js
|  |     ├── km.js
|  |     ├── ko.js
|  |     ├── ku.js
|  |     ├── kz.js
|  |     ├── lt.js
|  |     ├── lv.js
|  |     ├── mn.js
|  |     ├── nb-NO.js
|  |     ├── nl.js
|  |     ├── pl.js
|  |     ├── pt-br.js
|  |     ├── pt.js
|  |     ├── ro.js
|  |     ├── ru-RU.js
|  |     ├── sk.js
|  |     ├── sl.js
|  |     ├── sr.js
|  |     ├── sv-SE.js
|  |     ├── ta.js
|  |     ├── th.js
|  |     ├── tk.js
|  |     ├── tr-TR.js
|  |     ├── ua.js
|  |     ├── ug-CN.js
|  |     ├── uz-UZ.js
|  |     ├── vi.js
|  |     ├── zh-CN.js
|  |     └── zh-TW.js
|  ├── mixins
|  |  ├── emitter.js
|  |  ├── focus.js
|  |  ├── locale.js
|  |  └── migrating.js
|  ├── transitions
|  |  └── collapse-transition.js
|  └── utils
|     ├── after-leave.js
|     ├── aria-dialog.js
|     ├── aria-utils.js
|     ├── clickoutside.js
|     ├── date-util.js
|     ├── date.js
|     ├── dom.js
|     ├── menu
|     |  ├── aria-menubar.js
|     |  ├── aria-menuitem.js
|     |  └── aria-submenu.js
|     ├── merge.js
|     ├── popper.js
|     ├── popup
|     |  ├── index.js
|     |  └── popup-manager.js
|     ├── resize-event.js
|     ├── scroll-into-view.js
|     ├── scrollbar-width.js
|     ├── shared.js
|     ├── types.js
|     ├── util.js
|     ├── vdom.js
|     └── vue-popper.js
├── types
|  ├── alert.d.ts
|  ├── aside.d.ts
|  ├── autocomplete.d.ts
|  ├── avatar.d.ts
|  ├── backtop.d.ts
|  ├── badge.d.ts
|  ├── breadcrumb-item.d.ts
|  ├── breadcrumb.d.ts
|  ├── button-group.d.ts
|  ├── button.d.ts
|  ├── calendar.d.ts
|  ├── card.d.ts
|  ├── carousel-item.d.ts
|  ├── carousel.d.ts
|  ├── cascader-panel.d.ts
|  ├── cascader.d.ts
|  ├── checkbox-button.d.ts
|  ├── checkbox-group.d.ts
|  ├── checkbox.d.ts
|  ├── col.d.ts
|  ├── collapse-item.d.ts
|  ├── collapse.d.ts
|  ├── color-picker.d.ts
|  ├── component.d.ts
|  ├── container.d.ts
|  ├── date-picker.d.ts
|  ├── dialog.d.ts
|  ├── divider.d.ts
|  ├── drawer.d.ts
|  ├── dropdown-item.d.ts
|  ├── dropdown-menu.d.ts
|  ├── dropdown.d.ts
|  ├── element-ui.d.ts
|  ├── footer.d.ts
|  ├── form-item.d.ts
|  ├── form.d.ts
|  ├── header.d.ts
|  ├── icon.d.ts
|  ├── image.d.ts
|  ├── index.d.ts
|  ├── infinite-scroll.d.ts
|  ├── input-number.d.ts
|  ├── input.d.ts
|  ├── link.d.ts
|  ├── loading.d.ts
|  ├── main.d.ts
|  ├── menu-item-group.d.ts
|  ├── menu-item.d.ts
|  ├── menu.d.ts
|  ├── message-box.d.ts
|  ├── message.d.ts
|  ├── notification.d.ts
|  ├── option-group.d.ts
|  ├── option.d.ts
|  ├── page-header.d.ts
|  ├── pagination.d.ts
|  ├── popconfirm.d.ts
|  ├── popover.d.ts
|  ├── progress.d.ts
|  ├── radio-button.d.ts
|  ├── radio-group.d.ts
|  ├── radio.d.ts
|  ├── rate.d.ts
|  ├── row.d.ts
|  ├── select.d.ts
|  ├── slider.d.ts
|  ├── step.d.ts
|  ├── steps.d.ts
|  ├── submenu.d.ts
|  ├── switch.d.ts
|  ├── tab-pane.d.ts
|  ├── table-column.d.ts
|  ├── table.d.ts
|  ├── tabs.d.ts
|  ├── tag.d.ts
|  ├── time-picker.d.ts
|  ├── time-select.d.ts
|  ├── timeline-item.d.ts
|  ├── timeline.d.ts
|  ├── tooltip.d.ts
|  ├── transfer.d.ts
|  ├── tree.d.ts
|  └── upload.d.ts
└── yarn.lock

directory: 201 file: 1053

ignored: directory (1)

```

## 外部模块依赖

请在： http://npm.broofa.com?q=element-ui 查看

## 内部模块依赖

![img](./inner.svg)
  