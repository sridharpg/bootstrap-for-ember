/* ========================================================================
 * Bootstrap: button.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, Button.DEFAULTS, options)
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d);
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
        .prop('checked', !this.$element.hasClass('active'))
        .trigger('change')
      if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')
    }

    this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(window.jQuery);

(function() {
  Bootstrap.BsButtonComponent = Ember.Component.extend(Bootstrap.TypeSupport, Bootstrap.SizeSupport, {
    layoutName: 'components/bs-button',
    tagName: 'button',
    classNames: ['btn'],
    classNameBindings: ['blockClass'],
    classTypePrefix: 'btn',
    clickedParam: null,
    block: null,
    attributeBindings: ['disabled', 'dismiss:data-dismiss', '_type:type', 'style', 'loadingText:data-loading-text', 'failText:data-fail-text', 'successText:data-success-text', 'loading', 'clicked'],
    _type: 'button',
    bubbles: true,
    allowedProperties: ['title', '_type', 'type', 'size', 'block', 'disabled', 'clicked', 'dismiss', 'class', 'loadingText', 'failText', 'successText', 'loading'],
    icon_active: void 0,
    icon_inactive: void 0,
    successText: 'Saved!',
    failText: 'Failed!'
  }, {
    init: function() {
      var attr, c, key, _i, _len, _ref, _results;
      this._super();
      if ((this.get('content') != null) && Ember.typeOf(this.get('content')) === 'instance') {
        c = this.get('content');
        _ref = this.get('allowedProperties');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          key = _ref[_i];
          if (c[key] != null) {
            this.set(key, c[key]);
          }
        }
      } else {
        if (this.get('title') == null) {
          this.set('title', this.get('content'));
        }
      }
      _results = [];
      for (attr in this) {
        if (attr.match(/^data-[\w-]*$/) != null) {
          _results.push(this.attributeBindings.pushObject(attr));
        }
      }
      return _results;
    },
    blockClass: (function() {
      if (this.block) {
        return "" + this.classTypePrefix + "-block";
      } else {
        return null;
      }
    }).property('block'),
    click: function(evt) {
      if (!this.get('bubbles')) {
        evt.stopPropagation();
      }
      return this.sendAction('clicked', this.get('clickedParam'));
    },
    loadingChanged: (function() {
      var loading;
      loading = this.get('loading') !== null ? this.get('loading') : "reset";
      return Ember.$("#" + this.elementId).button(loading);
    }).observes('loading'),
    icon: (function() {
      if (this.get('isActive')) {
        return this.get('icon_active');
      } else {
        return this.get('icon_inactive');
      }
    }).property('isActive')
  });

  Ember.Handlebars.helper('bs-button', Bootstrap.BsButtonComponent);

}).call(this);

/*
Button Group.

In its simple form, each item in the button group is a Bootstrap.Button component,
In case this is a Radio, each item is rendered as a label.
*/


(function() {
  Bootstrap.BsBtnGroup = Bootstrap.ItemsView.extend(Bootstrap.SizeSupport, Bootstrap.ItemsSelection, {
    classTypePrefix: ['btn-group'],
    classNames: ['btn-group'],
    classNameBindings: ['vertical:btn-group-vertical'],
    itemViewClass: Bootstrap.BsButtonComponent.extend(Bootstrap.ItemValue, Bootstrap.ItemSelection, {
      init: function() {
        this._super();
        this.set('icon_active', this.get('parentView.icon_active'));
        return this.set('icon_inactive', this.get('parentView.icon_inactive'));
      }
    })
  });

  Ember.Handlebars.helper('bs-btn-group', Bootstrap.BsBtnGroup);

}).call(this);

/*
Button Toolbar.

A collection of button groups
*/


(function() {
  Bootstrap.BsBtnToolbarComponent = Ember.Component.extend({
    layoutName: 'components/bs-btn-toolbar',
    classNames: ['btn-toolbar']
  });

  Ember.Handlebars.helper('bs-btn-toolbar', Bootstrap.BsBtnToolbarComponent);

}).call(this);

Ember.TEMPLATES["components/bs-button"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.12.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("i");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [1]);
        element(env, element0, context, "bind-attr", [], {"class": "icon"});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.12.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block, content = hooks.content;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(fragment,1,1,contextualElement);
      var morph2 = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      block(env, morph0, context, "if", [get(env, context, "icon")], {}, child0, null);
      content(env, morph1, context, "title");
      content(env, morph2, context, "yield");
      return fragment;
    }
  };
}()));
Ember.TEMPLATES["components/bs-btn-toolbar"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.12.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, content = hooks.content;
      dom.detectNamespace(contextualElement);
      var fragment;
      if (env.useFragmentCache && dom.canClone) {
        if (this.cachedFragment === null) {
          fragment = this.build(dom);
          if (this.hasRendered) {
            this.cachedFragment = fragment;
          } else {
            this.hasRendered = true;
          }
        }
        if (this.cachedFragment) {
          fragment = dom.cloneNode(this.cachedFragment, true);
        }
      } else {
        fragment = this.build(dom);
      }
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      content(env, morph0, context, "yield");
      return fragment;
    }
  };
}()));