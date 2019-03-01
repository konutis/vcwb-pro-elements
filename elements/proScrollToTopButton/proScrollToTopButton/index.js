import vcCake from 'vc-cake'
import ProScrollToTopButton from './component'

const vcvAddElement = vcCake.getService('cook').add

vcvAddElement(
  require('./settings.json'),
  // Component callback
  function (component) {
    component.add(ProScrollToTopButton)
  },
  // css settings // css for element
  {
    css: require('raw-loader!./styles.css'),
    editorCss: require('raw-loader!./editor.css'),
    mixins: {
      background: {
        mixin: require('raw-loader!./cssMixins/background.pcss')
      },
      hoverBackground: {
        mixin: require('raw-loader!./cssMixins/hoverBackground.pcss')
      },
      iconColor: {
        mixin: require('raw-loader!./cssMixins/iconColor.pcss')
      },
      iconHoverColor: {
        mixin: require('raw-loader!./cssMixins/iconHoverColor.pcss')
      },
    }
  }
)
