import React from 'react'
import vcCake from 'vc-cake'
const vcvAPI = vcCake.getService('api')

export default class ProScrollToTopButton extends vcvAPI.elementComponent {
  validateSize (value) {
    let units = [ 'px', 'em', 'rem', '%', 'vw', 'vh' ]
    let re = new RegExp('^-?\\d*(\\.\\d{0,9})?(' + units.join('|') + ')?$')
    if (value === '' || value.match(re)) {
      return value
    } else {
      return null
    }
  }

  render () {
    let { id, atts, editor, children } = this.props
    let { modalSelector, width, customClass, metaCustomId } = atts
    let containerClasses = 'pro-modal-box-container'
    let innerClasses = 'pro-modal-box vce'
    let customProps = {
      'data-vce-pro-modal-selector': modalSelector
    }
    let customInnerProps = {}
    customInnerProps.style = {}

    if (customClass) {
      containerClasses += ` ${customClass}`
    }

    if (metaCustomId) {
      customProps.id = metaCustomId
    }

    if (width) {
      width = this.validateSize(width)

      if (width) {
        width = /^\d+$/.test(width) ? width + 'px' : width
        customInnerProps.style.maxWidth = width
      }
    }

    let mixinData = this.getMixinData('overlayBackground')
    if (mixinData) {
      containerClasses += ` pro-modal-box-overlay-background--${mixinData.selector}`
    }

    mixinData = this.getMixinData('modalBackground')
    if (mixinData) {
      containerClasses += ` pro-modal-box-modal-background--${mixinData.selector}`
    }

    mixinData = this.getMixinData('closeColor')
    if (mixinData) {
      containerClasses += ` pro-modal-box-close-color--${mixinData.selector}`
    }

    mixinData = this.getMixinData('closeHoverColor')
    if (mixinData) {
      containerClasses += ` pro-modal-box-close-hover-color--${mixinData.selector}`
    }

    const doAll = this.applyDO('all')

    return (
      <div className={containerClasses} {...customProps}>
        <div className={innerClasses} {...editor} {...customInnerProps} id={'el-' + id} {...doAll}>
          <button className='pro-modal-box-close-button'>
            <svg width='15px' height='15px' viewBox='0 0 20 20'>
              <polygon points='9.5 7.38888889 2.11111111 0 0 2.11111111 7.38888889 9.5 0 16.8888889 2.11111111 19 9.5 11.6111111 16.8888889 19 19 16.8888889 11.6111111 9.5 19 2.11111111 16.8888889 1.76780781e-15' />
            </svg>
          </button>
          <div className='pro-modal-box-inner'>
            {children}
          </div>
        </div>
      </div>
    )
  }
}
