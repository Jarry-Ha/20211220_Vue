// custom.js

const CustomPlugin = {
  install: function(Vue, option) {
    console.log(option);

    // mixin
    Vue.mixin({
      data() {
        return {
          pluginName: 'Custom Plugin'
        }
      }
    });

    // filter
    Vue.filter('lowercase', function(value){
      if(typeof(value) === 'string') return value.toLowerCase()
      else return value
    })

    // directive
    Vue.directive('confirmBtn', {
      inserted: function(el, bind) {
        const btn = document.createElement('button');
        const text = document.createTextNode(bind.value);
        btn.appendChild(text);
        el.appendChild(btn);
    
        btn.addEventListener('click', function() {
          window.confirm(option.name || 'UN')
        })
    
      }
    })

    // prototype 함수
    Vue.prototype.onMin = function(x, y) {
      return `${x} - ${y} = ${x - y}`;
    }
  }
}
export default CustomPlugin;
