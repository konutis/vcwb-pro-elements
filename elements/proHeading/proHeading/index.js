/* eslint-disable import/no-webpack-loader-syntax */
import vcCake from 'vc-cake'
import ProHeadingElement from './component'

const vcvAddElement = vcCake.getService('cook').add

vcvAddElement(
  require('./settings.json'),
  // Component callback
  function (component) {
    //
    component.add(ProHeadingElement)
  },
  // css settings // css for element
  {
    css: require('raw-loader!./styles.css'),
    editorCss: require('raw-loader!./editor.css'),
    mixins: {
      textColor: {
        mixin: require('raw-loader!./cssMixins/textColor.pcss')
      },
      fontSize: {
        mixin: require('raw-loader!./cssMixins/fontSize.pcss')
      },
      fontSizeXS: {
        mixin: require('raw-loader!./cssMixins/fontSizeXS.pcss')
      },
      fontSizeSM: {
        mixin: require('raw-loader!./cssMixins/fontSizeSM.pcss')
      },
      fontSizeMD: {
        mixin: require('raw-loader!./cssMixins/fontSizeMD.pcss')
      },
      fontSizeLG: {
        mixin: require('raw-loader!./cssMixins/fontSizeLG.pcss')
      },
      fontSizeXL: {
        mixin: require('raw-loader!./cssMixins/fontSizeXL.pcss')
      },
      letterSpacing: {
        mixin: require('raw-loader!./cssMixins/letterSpacing.pcss')
      },
      letterSpacingXS: {
        mixin: require('raw-loader!./cssMixins/letterSpacingXS.pcss')
      },
      letterSpacingSM: {
        mixin: require('raw-loader!./cssMixins/letterSpacingSM.pcss')
      },
      letterSpacingMD: {
        mixin: require('raw-loader!./cssMixins/letterSpacingMD.pcss')
      },
      letterSpacingLG: {
        mixin: require('raw-loader!./cssMixins/letterSpacingLG.pcss')
      },
      letterSpacingXL: {
        mixin: require('raw-loader!./cssMixins/letterSpacingXL.pcss')
      },
      lineHeight: {
        mixin: require('raw-loader!./cssMixins/lineHeight.pcss')
      },
      lineHeightXS: {
        mixin: require('raw-loader!./cssMixins/lineHeightXS.pcss')
      },
      lineHeightSM: {
        mixin: require('raw-loader!./cssMixins/lineHeightSM.pcss')
      },
      lineHeightMD: {
        mixin: require('raw-loader!./cssMixins/lineHeightMD.pcss')
      },
      lineHeightLG: {
        mixin: require('raw-loader!./cssMixins/lineHeightLG.pcss')
      },
      lineHeightXL: {
        mixin: require('raw-loader!./cssMixins/lineHeightXL.pcss')
      }
    }
  },
  // javascript callback
  ''
)
