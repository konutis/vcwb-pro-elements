import vcCake from 'vc-cake'
import ProModalBox from './component'

const vcvAddElement = vcCake.getService('cook').add

vcvAddElement(
  require('./settings.json'),
  // Component callback
  function (component) {
    component.add(ProModalBox)
  },
  // css settings // css for element
  {
    css: require('raw-loader!./styles.css'),
    editorCss: false,
    mixins: {
      overlayBackground: {
        mixin: require('raw-loader!./cssMixins/overlayBackground.pcss')
      },
      modalBackground: {
        mixin: require('raw-loader!./cssMixins/modalBackground.pcss')
      },
      closeColor: {
        mixin: require('raw-loader!./cssMixins/closeColor.pcss')
      },
      closeHoverColor: {
        mixin: require('raw-loader!./cssMixins/closeHoverColor.pcss')
      }
    }
  }
)
