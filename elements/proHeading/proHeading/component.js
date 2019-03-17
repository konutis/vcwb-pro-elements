import React from 'react'
import vcCake from 'vc-cake'

const vcvAPI = vcCake.getService('api')

export default class ProHeadingElement extends vcvAPI.elementComponent {
  render () {
    let { id, atts, editor } = this.props
    let { text, elementTag, font, devicesSettings, alignment, lineHeight, letterSpacing, link, colorType, customClass, metaCustomId } = atts
    let classes = 'pro-heading'
    let wrapperClasses = 'pro-heading-wrapper'
    let customProps = {}
    let innerClasses = 'pro-heading-inner'
    let backgroundClasses = 'pro-heading--background vce'
    let innerCustomProps = {}
    innerCustomProps.style = {}
    let CustomTag = elementTag
    let headingHtml = text
    const devices = ['xs', 'sm', 'md', 'lg', 'xl']

    if (link && link.url) {
      let { url, title, targetBlank, relNofollow } = link
      let linkProps = {
        'href': url,
        'title': title,
        'target': targetBlank ? '_blank' : undefined,
        'rel': relNofollow ? 'nofollow' : undefined
      }

      headingHtml = (
        <a className='pro-heading-link' {...linkProps}>
          {headingHtml}
        </a>
      )
    }

    if (typeof customClass === 'string' && customClass) {
      classes += ' ' + customClass
    }

    let mixinData = this.getMixinData('textColor')

    if (mixinData) {
      switch (colorType) {
        case 'gradient':
          classes += ` pro-heading--gradient-${mixinData.selector}`
          break
        case 'color':
          classes += ` pro-heading--color-${mixinData.selector}`
          break
        default:
          console.warn('There was an issue assigning color type!')
      }
    }


    if (devicesSettings === 'all') {
      if (alignment) {
        classes += ` pro-heading--align-${alignment}`
      }

      mixinData = this.getMixinData('fontSize')

      if (mixinData) {
        classes += ` pro-heading-font-size--${mixinData.selector}`
      }

      mixinData = this.getMixinData('lineHeight')

      if (mixinData) {
        classes += ` pro-heading-line-height--${mixinData.selector}`
      }

      mixinData = this.getMixinData('letterSpacing')

      if (mixinData) {
        classes += ` pro-heading-letter-spacing--${mixinData.selector}`
      }
    } else {
      devices.forEach((device) => {
        const deviceAlignment = atts[`alignment${device.toUpperCase()}`]
        if (deviceAlignment) {
          classes += ` pro-heading--${device}-align-${deviceAlignment}`
        }

        mixinData = this.getMixinData(`fontSize${device.toUpperCase()}`)
        if (mixinData) {
          classes += ` pro-heading-font-size--${device}-${mixinData.selector}`
        }

        mixinData = this.getMixinData(`lineHeight${device.toUpperCase()}`)
        if (mixinData) {
          classes += ` pro-heading-line-height--${device}-${mixinData.selector}`
        }

        mixinData = this.getMixinData(`letterSpacing${device.toUpperCase()}`)
        if (mixinData) {
          classes += ` pro-heading-letter-spacing--${device}-${mixinData.selector}`
        }
      })
    }

    if (font && font.status === 'active') {
      let fontStyle = font.fontStyle ? (font.fontStyle.style === 'regular' ? null : font.fontStyle.style) : null
      innerCustomProps.style.fontFamily = font.fontFamily
      innerCustomProps.style.fontWeight = font.fontStyle ? font.fontStyle.weight : null
      innerCustomProps.style.fontStyle = fontStyle
    }

    if (metaCustomId) {
      customProps.id = metaCustomId
    }

    let doAll = this.applyDO('border background animation padding margin')

    return <div {...customProps} className={classes} {...editor}>
      <div className={wrapperClasses}>
        <div className={backgroundClasses} id={'el-' + id} {...doAll}>
          <CustomTag className={innerClasses} {...innerCustomProps}>
            {headingHtml}
          </CustomTag>
        </div>
      </div>
    </div>
  }
}
