import React from 'react'
import vcCake from 'vc-cake'
const vcvAPI = vcCake.getService('api')

export default class TextTestElement extends vcvAPI.elementComponent {
  render () {
    let { id, atts, editor } = this.props
    let { shape, visibilityOffset, alignment, customClass, metaCustomId } = atts
    let containerClasses = 'pro-scroll-to-top-button-container vce'
    let buttonClasses = 'pro-scroll-to-top-button'
    let customProps = {}

    if (customClass) {
      containerClasses =+ ` ${customClass}`
    }

    if (metaCustomId) {
      customProps.id = metaCustomId
    }

    let mixinData = this.getMixinData('background')
    if (mixinData) {
      containerClasses += ` pro-scroll-to-top-button-background--${mixinData.selector}`
    }

    mixinData = this.getMixinData('hoverBackground')
    if (mixinData) {
      containerClasses += ` pro-scroll-to-top-button-hover-background--${mixinData.selector}`
    }

    mixinData = this.getMixinData('iconColor')
    if (mixinData) {
      containerClasses += ` pro-scroll-to-top-button-icon-color--${mixinData.selector}`
    }

    mixinData = this.getMixinData('iconHoverColor')
    if (mixinData) {
      containerClasses += ` pro-scroll-to-top-button-icon-hover-color--${mixinData.selector}`
    }

    if (shape === 'rounded') {
      containerClasses += ` pro-scroll-to-top-button-shape--rounded`
    }

    if (alignment) {
      containerClasses += ` pro-scroll-to-top-button-align--${alignment}`
    }

    const visibilityOffsetProps = {
      'data-pro-scroll-to-top-visibility-offset': visibilityOffset
    }

    let doRest = this.applyDO('margin animation border background')
    let doPadding = this.applyDO('padding')

    return <div className={containerClasses} {...editor} id={'el-' + id} {...doRest} {...visibilityOffsetProps}>
      <button className={buttonClasses} {...customProps} {...doPadding} title='Scroll To Top'>
        <svg className='pro-scroll-to-top-button-icon' version='1.1' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
          <path d='M16 6.303l-16.162 16.162 3.232 3.232 12.93-12.93 12.93 12.93 3.233-3.233z' />
        </svg>
      </button>
    </div>
  }
}
