// directive.js

import Vue from 'vue'

Vue.directive('focus', {
  inserted: function(el) {
    // console.log(el);
    el.style.backgroundColor = 'orange';
    el.focus();
  }
});

Vue.directive('view', {
  bind: function( /*el, bind, vnode */) {               // beforeMount
    console.log('DOM에 바인딩 되는 시점 3은 beforeMount')
  },

  inserted: function(el, bind, vnode) {                 // DOM에 바인이 완료된 시점 3은 mounted
    console.log(el);          // Element (node)
    console.log(bind);        // 지시자에 전달되는 속성값
    console.log(vnode);       // virtual DOM에 대한 참조

    if(bind.value === true) {
      el.style.display = 'display'
    } else {
      el.style.display = 'none'
    }
  },
  update: function( /*el, bind, vnode */) {
    console.log('컴퍼넌트의 값이 변경이 완료되고 난 후에 실행')
  },
  componentUpdated: function( /*el, bind, vnode */) {
    console.log('컴퍼넌트의 값이 변경이 완료되고 그 자식까지 업데이트가 된 후에 실행')
  },
  unbind: function( /*el, bind, vnode */) {
    console.log('지시자가 컴퍼넌트에서 삭제되는 경우')
  },
})

Vue.directive('alertBtn', {
  inserted: function(el, bind) {
    const btn = document.createElement('button');
    const text = document.createTextNode(bind.value);
    btn.appendChild(text);
    el.appendChild(btn);

    btn.addEventListener('click', function() {
      window.alert('Hello World')
    })

  }
})