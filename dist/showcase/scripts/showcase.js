Ember.TEMPLATES["ads"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      var el2 = dom.createTextNode("Bootstrap for Ember");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
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
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["application"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("a");
      dom.setAttribute(el1,"class","sr-only");
      dom.setAttribute(el1,"href","#content");
      var el2 = dom.createTextNode("Skip navigation");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-header");
      dom.setAttribute(el1,"id","content22");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","container");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("p");
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","container bs-docs-container");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","row");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-md-3");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","bs-sidebar hidden-print");
      dom.setAttribute(el4,"role","complementary");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("ul");
      dom.setAttribute(el5,"class","nav bs-sidenav");
      var el6 = dom.createTextNode("\n            ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","col-md-9");
      dom.setAttribute(el3,"role","main");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("footer");
      dom.setAttribute(el1,"class","bs-footer");
      dom.setAttribute(el1,"role","contentinfo");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","container");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, content = hooks.content, get = hooks.get;
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
      var element0 = dom.childAt(fragment, [12, 1]);
      var element1 = dom.childAt(fragment, [14, 1]);
      var element2 = dom.childAt(element1, [3]);
      var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
      var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
      var morph2 = dom.createMorphAt(fragment,6,6,contextualElement);
      var morph3 = dom.createMorphAt(fragment,8,8,contextualElement);
      var morph4 = dom.createMorphAt(fragment,10,10,contextualElement);
      var morph5 = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
      var morph6 = dom.createMorphAt(element0,3,3);
      var morph7 = dom.createMorphAt(dom.childAt(element1, [1, 1, 1]),1,1);
      var morph8 = dom.createMorphAt(element2,1,1);
      var morph9 = dom.createMorphAt(element2,3,3);
      var morph10 = dom.createMorphAt(dom.childAt(fragment, [16, 1]),1,1);
      var morph11 = dom.createMorphAt(fragment,18,18,contextualElement);
      dom.insertBoundary(fragment, 0);
      inline(env, morph0, context, "outlet", ["bs-tooltip-box"], {});
      inline(env, morph1, context, "partial", ["header"], {});
      inline(env, morph2, context, "partial", ["nav-main"], {});
      inline(env, morph3, context, "bs-notifications", [], {"style": "z-index: 9999; position: fixed; width: 50%; left: 0; right: 0; margin-left: auto; margin-right: auto; margin-top: 50px;"});
      content(env, morph4, context, "bs-growl-notifications");
      content(env, morph5, context, "page.lead");
      inline(env, morph6, context, "partial", ["ads"], {});
      inline(env, morph7, context, "partial", ["leftnav"], {});
      content(env, morph8, context, "bs-breadcrumbs");
      content(env, morph9, context, "outlet");
      inline(env, morph10, context, "partial", [get(env, context, "social-buttons")], {});
      inline(env, morph11, context, "partial", [get(env, context, "footer")], {});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["demo-template"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
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
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "message");
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, block = hooks.block;
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
      var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      inline(env, morph0, context, "bs-page-header", [], {"title": "Hello", "sub": "Hello world."});
      block(env, morph1, context, "bs-well", [], {}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["footer"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
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
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
        content(env, morph0, context, "val");
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("ul");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
      block(env, morph0, context, "each", [get(env, context, "content.numbers")], {"keyword": "val"}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["header"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
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
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["index"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-docs-section");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","page-header");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h1");
      dom.setAttribute(el3,"id","js-overview");
      var el4 = dom.createTextNode("Showcase");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("h3");
      dom.setAttribute(el3,"id","js-individual-compiled");
      var el4 = dom.createTextNode("Project Created!");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("p");
      var el4 = dom.createTextNode("Please choose components from the left pane.");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
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
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["leftnav"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.1",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
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
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "bs-label", [], {"content": "Special", "type": "danger"});
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.1",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
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
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "bs-label", [], {"content": "New", "type": "info"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.1",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
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
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
          var morph2 = dom.createMorphAt(fragment,4,4,contextualElement);
          dom.insertBoundary(fragment, null);
          content(env, morph0, context, "item.title");
          block(env, morph1, context, "if", [get(env, context, "item.special")], {}, child0, null);
          block(env, morph2, context, "if", [get(env, context, "item.new")], {}, child1, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
        var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
        block(env, morph0, context, "link-to", [get(env, context, "item.route")], {}, child0, null);
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
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
      var hooks = env.hooks, get = hooks.get, block = hooks.block;
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
      block(env, morph0, context, "each", [get(env, context, "controller")], {"keyword": "item"}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["nav-main"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Bootstrap for Ember");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Home");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Components");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("header");
      dom.setAttribute(el1,"class","navbar navbar-inverse navbar-fixed-top bs-docs-nav");
      dom.setAttribute(el1,"role","banner");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","container");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","navbar-header");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("button");
      dom.setAttribute(el4,"class","navbar-toggle");
      dom.setAttribute(el4,"type","button");
      dom.setAttribute(el4,"data-toggle","collapse");
      dom.setAttribute(el4,"data-target",".bs-navbar-collapse");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","sr-only");
      var el6 = dom.createTextNode("Toggle navigation");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","icon-bar");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","icon-bar");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("span");
      dom.setAttribute(el5,"class","icon-bar");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createComment("");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("nav");
      dom.setAttribute(el3,"class","collapse navbar-collapse bs-navbar-collapse");
      dom.setAttribute(el3,"role","navigation");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("ul");
      dom.setAttribute(el4,"class","nav navbar-nav");
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      var el6 = dom.createTextNode("\n            ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n\n        ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("li");
      var el6 = dom.createTextNode("\n            ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n        ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n      ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, block = hooks.block;
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
      var element0 = dom.childAt(fragment, [0, 1]);
      var element1 = dom.childAt(element0, [3, 1]);
      var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),3,3);
      var morph1 = dom.createMorphAt(dom.childAt(element1, [1]),1,1);
      var morph2 = dom.createMorphAt(dom.childAt(element1, [3]),1,1);
      block(env, morph0, context, "link-to", ["index"], {"class": "navbar-brand"}, child0, null);
      block(env, morph1, context, "link-to", ["index"], {}, child1, null);
      block(env, morph2, context, "link-to", ["show_components"], {}, child2, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/alert"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h4");
        dom.setAttribute(el1,"class","alert-heading");
        var el2 = dom.createTextNode("Oh snap! You got an error!");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Alert can also be used in a ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("strong");
        var el3 = dom.createTextNode("block form");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(".");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2,"class","btn btn-danger");
        var el3 = dom.createTextNode("Take this action");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"class","btn btn-default");
        var el3 = dom.createTextNode("Or do this");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
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
        var element0 = dom.childAt(fragment, [5, 1]);
        element(env, element0, context, "action", ["submit"], {});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","alert");
      var el2 = dom.createTextNode("Alert");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","usage-examples");
      var el2 = dom.createTextNode("Usage Examples");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-alert message=\"A warning alert with simple message.\" type=\"warning\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-alert message=\"With close button\" type=\"warning\" dismiss=true}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{bs-alert message=\"Close button will fade\" type=\"warning\" dismiss=true fade=true}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{bs-alert message=\"Dismissed after 5 seconds\" type=\"info\" dismissAfter=5}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{bs-alert message=\"Other types such as Sucess\" type=\"success\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{#bs-alert type=\"danger\"}}\n<h4 class=\"alert-heading\">Oh snap! You got an error!</h4>\n<p>Alert can also be used in a <strong>block form</strong>.</p>\n<p>\n<button class=\"btn btn-danger\" {{action \"submit\"}}>Take this action</button> <a class=\"btn btn-default\">Or do this</a>\n</p>\n{{/bs-alert}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{bs-alert message=\"Close will trigger a function in controller\" type=\"warning\" dismiss=true closed=\"didAlertClosed\" close=\"didAlertClose\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","component-properties");
      var el2 = dom.createTextNode("Component Properties");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","table-responsive");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("table");
      dom.setAttribute(el2,"class","table table-bordered table-striped");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("thead");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      dom.setAttribute(el5,"style","width: 150px;");
      var el6 = dom.createTextNode("Property");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      var el6 = dom.createTextNode("Description");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tbody");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("message");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("The string to display in the alert.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("type");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Alert types: success | info | warning | danger");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("dismiss");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("if true an ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("code");
      var el7 = dom.createTextNode("X");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" link is set to dismiss the alert.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("dismissAfter");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("If set the alert will be automatically dismissed after the specified amount of ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("code");
      var el7 = dom.createTextNode("seconds");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("fade");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("If true, the dialog will be faded out when closed.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("close");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Triggers the specified function name on the ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("strong");
      var el7 = dom.createTextNode("controller");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" immediately when the close instance method is called.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("closed");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Triggers the specified function name on the ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("strong");
      var el7 = dom.createTextNode("controller");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" when the alert has been closed (will wait for CSS transitions to complete).");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, block = hooks.block;
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
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
      var morph1 = dom.createMorphAt(dom.childAt(fragment, [8]),1,1);
      var morph2 = dom.createMorphAt(dom.childAt(fragment, [12]),1,1);
      var morph3 = dom.createMorphAt(dom.childAt(fragment, [16]),1,1);
      var morph4 = dom.createMorphAt(dom.childAt(fragment, [20]),1,1);
      var morph5 = dom.createMorphAt(dom.childAt(fragment, [24]),1,1);
      var morph6 = dom.createMorphAt(dom.childAt(fragment, [28]),1,1);
      inline(env, morph0, context, "bs-alert", [], {"message": "A warning alert with simple message.", "type": "warning"});
      inline(env, morph1, context, "bs-alert", [], {"message": "With close button", "type": "warning", "dismiss": true});
      inline(env, morph2, context, "bs-alert", [], {"message": "Close button will fade", "type": "warning", "dismiss": true, "fade": true});
      inline(env, morph3, context, "bs-alert", [], {"message": "Dismissed after 5 seconds!!", "type": "info", "fade": true, "dismissAfter": 5});
      inline(env, morph4, context, "bs-alert", [], {"message": "Other types such as Sucess", "type": "success"});
      block(env, morph5, context, "bs-alert", [], {"type": "danger"}, child0, null);
      inline(env, morph6, context, "bs-alert", [], {"message": "Close will trigger a function in controller", "type": "warning", "dismiss": true, "closed": "didAlertClosed", "close": "didAlertClose"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/badge"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","badge");
      var el2 = dom.createTextNode("Badge");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"href","#");
      var el3 = dom.createTextNode(" Inbox ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("<a href=\"#\"> Inbox{{bs-badge content=\"42\"}} </a>");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","built-in-styles");
      var el2 = dom.createTextNode("Built-in styles");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Works well with built-in styles that are included for placing badges in active states in pill and list navigations.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("ul");
      dom.setAttribute(el2,"class","nav nav-pills");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      dom.setAttribute(el3,"class","active");
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","#");
      var el5 = dom.createTextNode("Home ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","#");
      var el5 = dom.createTextNode("Profile");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","#");
      var el5 = dom.createTextNode("Messages ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("ul");
      dom.setAttribute(el2,"class","nav nav-pills nav-stacked");
      dom.setAttribute(el2,"style","max-width: 260px;");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      dom.setAttribute(el3,"class","active");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","#");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                Home\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","#");
      var el5 = dom.createTextNode("Profile");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","#");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createComment("");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                Messages\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("<ul class=\"nav nav-pills\">\n    <li class=\"active\"><a href=\"#\">Home {{bs-badge content=42}}</a></li>\n    <li><a href=\"#\">Profile</a></li>\n    <li><a href=\"#\">Messages {{bs-badge content=3}}</a></li>\n</ul>\n<br>\n<ul class=\"nav nav-pills nav-stacked\" style=\"max-width: 260px;\">\n    <li class=\"active\">\n        <a href=\"#\">\n            {{bs-badge class=\"pull-right\"content=42}}\n            Home\n        </a>\n    </li>\n    <li><a href=\"#\">Profile</a></li>\n    <li>\n        <a href=\"#\">\n            {{bs-badge class=\"pull-right\"content=3}}\n            Messages\n        </a>\n    </li>\n</ul>");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","component-properties");
      var el2 = dom.createTextNode("Component Properties");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","table-responsive");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("table");
      dom.setAttribute(el2,"class","table table-bordered table-striped");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("thead");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      dom.setAttribute(el5,"style","width: 150px;");
      var el6 = dom.createTextNode("Property");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      var el6 = dom.createTextNode("Description");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tbody");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("content");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("string: The content of the badge.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline;
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
      var element0 = dom.childAt(fragment, [10]);
      var element1 = dom.childAt(element0, [1]);
      var element2 = dom.childAt(element0, [5]);
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [2, 1]),1,1);
      var morph1 = dom.createMorphAt(dom.childAt(element1, [1, 0]),1,1);
      var morph2 = dom.createMorphAt(dom.childAt(element1, [5, 0]),1,1);
      var morph3 = dom.createMorphAt(dom.childAt(element2, [1, 1]),1,1);
      var morph4 = dom.createMorphAt(dom.childAt(element2, [5, 1]),1,1);
      inline(env, morph0, context, "bs-badge", [], {"content": "42"});
      inline(env, morph1, context, "bs-badge", [], {"content": 42});
      inline(env, morph2, context, "bs-badge", [], {"content": 3});
      inline(env, morph3, context, "bs-badge", [], {"class": "pull-right", "content": 42});
      inline(env, morph4, context, "bs-badge", [], {"class": "pull-right", "content": 3});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/breadcrumbs"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","breadcrumbs");
      var el2 = dom.createTextNode("Breadcrumbs");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Indicate the current page's location within a navigational hierarchy.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("The breadcrumbs is magically constructed by interpreting the current router location,");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Move between components and look at the showcase's breadcrumbs on the top of the screen ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("The only thing needed to setup breadcrumbs is add to one of your top templates (such ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("application");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" template):");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-breadcrumbs}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","breadcrumbs-names");
      var el2 = dom.createTextNode("Breadcrumbs Names");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("By default the name of the breadcrumbs is set to the route name,\nyou can change this behavior by specifying some meta info on the route:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("SomeRoute = Ember.Route.extend({\n    breadcrumbs: {name: 'Primary'}\n\n    ...\n})");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
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
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/button"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Content");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Primary");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Link");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child3 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Default Large button");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child4 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Block Button");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child5 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Disabled Button");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child6 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Button with Param");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","button");
      var el2 = dom.createTextNode("Button");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","types");
      var el2 = dom.createTextNode("Types");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("All other types such as ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("strong");
      var el4 = dom.createTextNode("info");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(", ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("strong");
      var el4 = dom.createTextNode("warning");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(", ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("strong");
      var el4 = dom.createTextNode("danger");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" are supported.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("<!-- Standard gray default button with gradient -->\n{{#bs-button}}Content{{/bs-button}}\n\n<!--Inline text as button content-->\n{{bs-button title=\"Inline Text\"}}\n\n<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n{{#bs-button type=\"primary\"}}Primary{{/bs-button}}\n\n<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->\n{{#bs-button type=\"link\"}}Link{{/bs-button}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","sizes");
      var el2 = dom.createTextNode("Sizes");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("In correspondence with bootstrap css class button sizes ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode(".btn-lg");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(", ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode(".btn-sm");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(", or ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode(".btn-xs");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(", size can simply defined by the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("size");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property or use one of the size properties: ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("small=true");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(", ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("large=true");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(", ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("xs=true");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-button type=\"primary\" size=\"xs\" title=\"Primary Extra Small Button\"}}\n{{bs-button type=\"info\" small=true title=\"Info Small Button\"}}\n{{bs-button type=\"danger\" title=\"Danger Default size button\"}}\n{{#bs-button size=\"lg\"}}Default Large button{{/bs-button}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","icon");
      var el2 = dom.createTextNode("Icon");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Simply add an ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("icon");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property to the button meta data, such:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-button icon=\"fa fa-check\" title=\"Danger Default size button\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Will render an ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("<i class=\"fa fa-check\"></i>");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" tag within the button tag.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","block-level");
      var el2 = dom.createTextNode("Block Level");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("block level buttons—those that span the full width of a parent— by adding ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("block=true");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{#bs-button type=\"primary\" xs=true block=true}}Block Button{{/bs-button}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","disbled-state");
      var el2 = dom.createTextNode("Disbled state");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("As in Bootstrap, set ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("disabled=\"disabled\"");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("/");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("disabled=true");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" to make the button unclickable.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{#bs-button type=\"primary\" disabled=true}}Disabled Button{{/bs-button}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Disabled state can also be hooked to a controller property");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-button type=\"primary\" title=\"Click to disable\" disabled=isButtonDisabled clicked=\"disableButton\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("isButtonDisabled");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" is a boolean property on the controller");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("disableButton");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" is a function on the controller that sets ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("isButtonDisabled");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" to ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("em");
      var el4 = dom.createTextNode("false");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","param");
      var el2 = dom.createTextNode("Param");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("It is possible to pass a parameter to the action in the controller that is bound to the click event by using the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("clickedParam");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{#bs-button type=\"primary\" clicked=\"buttonWithParam\" clickedParamBinding=\"controller\"}}Button with Param{{/bs-button}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Action in controller:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("MyController = Ember.Controller.extend({\n    actions: {\n        buttonWithParam: function(expectedMyself) {\n            alert(\"Passed controller as a param: \" + expectedMyself);\n        }\n    }\n)}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","state");
      var el2 = dom.createTextNode("State");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("By Bootstrap:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("blockquote");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Add ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("data-loading-text=\"Loading...\"");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" to use a loading state on a button.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Then extra ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("loading=loadingState");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" is needed where ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("loadingState");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" is a property in the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("controller");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" that returns a string which\ndefines the current state of the button:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("If ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("loadingState");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" property equals ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("loading");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" then the button will be disabled and its text will change to the value of the ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("data-loading-text");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" button property.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("If its value is ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("null");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" then the button will be re-enabled and its text will be modified to the original value defined in the ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("title");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" button property.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-button type=\"primary\" data-loading-text=\"Loading...\" loading=loadingState title=\"Submit\" clicked=\"startLoading\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("In controller:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("startLoading: function() {\n    var _this = this;\n    this.set('loadingState', 'loading');\n    return Ember.run.later(function() {\n      return _this.set('loadingState', null);\n    }, 2000);\n}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("The ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("loading");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property may also return any string that matches one of the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("data-foo-text");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" button property to render other text\nbut the original text of the button when the loading state completes.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("startLoading1: function() {\n    var _this = this;\n    this.set('loadingState', 'loading');\n    return Ember.run.later(function() {\n      return _this.set('loadingState', 'completed');\n    }, 2000);\n}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Pay attention that this time the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("loadingState");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" is set to ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("completed");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" and not ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("null");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(".");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","component-properties");
      var el2 = dom.createTextNode("Component Properties");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","table-responsive");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("table");
      dom.setAttribute(el2,"class","table table-bordered table-striped");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("thead");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      dom.setAttribute(el5,"style","width: 150px;");
      var el6 = dom.createTextNode("Property");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      var el6 = dom.createTextNode("Description");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tbody");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("type");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Alert types: ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("success");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" | ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("info");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" | ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("warning");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" | ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("danger");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("title");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("A string representing the text of the button (");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("not required if component is used as a block component");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(")");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("clicked");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Triggers the specified function name on the ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("strong");
      var el7 = dom.createTextNode("controller");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" immediately when the button is clicked.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("clickedParam");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("A parameter to pass the action to be invoked immediately when the button is clicked");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("size");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Can be: ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("xs");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" | ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("sm");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" | ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("lg");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("xs");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("If set to ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("true");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" it is equivalent to ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("code");
      var el7 = dom.createTextNode("size=xs");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("small");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("If set to ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("true");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" it is equivalent to ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("code");
      var el7 = dom.createTextNode("size=small");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("large");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("If set to ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("true");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" it is equivalent to ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("code");
      var el7 = dom.createTextNode("size=large");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("block");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("If ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("true");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" the button is a block level and will span the full width of its parent");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("disabled");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("If ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("true");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" the button will be disabled, can also be bound to a ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("controller");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" property");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("loading");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Bound to a controller property that defines the state of the button.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("data-loading-text");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("If ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("code");
      var el7 = dom.createTextNode("loading=foo");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" and ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("code");
      var el7 = dom.createTextNode("foo");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" is a property in the ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("controller");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" and ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("code");
      var el7 = dom.createTextNode("foo");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" property returns ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("code");
      var el7 = dom.createTextNode("loading");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(", then the text of the button will be changed to the value of ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("this");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" property.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("data-xxx-text");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("If ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("code");
      var el7 = dom.createTextNode("loading=foo");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" and ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("code");
      var el7 = dom.createTextNode("foo");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" is a property in the ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("controller");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" and ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("code");
      var el7 = dom.createTextNode("foo");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" property returns ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("code");
      var el7 = dom.createTextNode("xxx");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(", then the text of the button will be changed to the value of ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("this");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" property.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, block = hooks.block, inline = hooks.inline, get = hooks.get;
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
      var element0 = dom.childAt(fragment, [4]);
      var element1 = dom.childAt(fragment, [12, 1]);
      var morph0 = dom.createMorphAt(element0,1,1);
      var morph1 = dom.createMorphAt(element0,3,3);
      var morph2 = dom.createMorphAt(element0,5,5);
      var morph3 = dom.createMorphAt(element0,7,7);
      var morph4 = dom.createMorphAt(element1,1,1);
      var morph5 = dom.createMorphAt(element1,3,3);
      var morph6 = dom.createMorphAt(element1,5,5);
      var morph7 = dom.createMorphAt(element1,7,7);
      var morph8 = dom.createMorphAt(dom.childAt(fragment, [18, 1]),1,1);
      var morph9 = dom.createMorphAt(dom.childAt(fragment, [30]),1,1);
      var morph10 = dom.createMorphAt(dom.childAt(fragment, [38]),1,1);
      var morph11 = dom.createMorphAt(dom.childAt(fragment, [44]),1,1);
      var morph12 = dom.createMorphAt(dom.childAt(fragment, [54]),1,1);
      var morph13 = dom.createMorphAt(dom.childAt(fragment, [72]),1,1);
      var morph14 = dom.createMorphAt(dom.childAt(fragment, [82]),1,1);
      block(env, morph0, context, "bs-button", [], {}, child0, null);
      inline(env, morph1, context, "bs-button", [], {"title": "Inline Text"});
      block(env, morph2, context, "bs-button", [], {"type": "primary"}, child1, null);
      block(env, morph3, context, "bs-button", [], {"type": "link"}, child2, null);
      inline(env, morph4, context, "bs-button", [], {"type": "primary", "size": "xs", "title": "Primary Extra Small Button"});
      inline(env, morph5, context, "bs-button", [], {"type": "info", "small": true, "title": "Info Small Button"});
      inline(env, morph6, context, "bs-button", [], {"type": "danger", "title": "Danger Default size button"});
      block(env, morph7, context, "bs-button", [], {"size": "lg"}, child3, null);
      inline(env, morph8, context, "bs-button", [], {"icon": "fa fa-check", "title": "Button with Icon"});
      block(env, morph9, context, "bs-button", [], {"type": "primary", "xs": true, "block": true}, child4, null);
      block(env, morph10, context, "bs-button", [], {"type": "primary", "disabled": true}, child5, null);
      inline(env, morph11, context, "bs-button", [], {"type": "primary", "title": "Click to disable", "disabled": get(env, context, "isButtonDisabled"), "clicked": "disableButton"});
      block(env, morph12, context, "bs-button", [], {"type": "primary", "clicked": "buttonWithParam", "clickedParamBinding": "controller"}, child6, null);
      inline(env, morph13, context, "bs-button", [], {"type": "primary", "data-loading-text": "Loading...", "loading": get(env, context, "loadingState"), "clicked": "disableButton", "title": "Submit", "clicked": "startLoading"});
      inline(env, morph14, context, "bs-button", [], {"type": "primary", "data-loading-text": "Loading...", "data-completed-text": "Completed!", "loading": get(env, context, "loadingState1"), "title": "Submit!", "clicked": "startLoading1"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/buttonGroup"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
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
        var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
        var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
        inline(env, morph0, context, "bs-btn-group", [], {"contentBinding": "options", "selectedBinding": "selected"});
        inline(env, morph1, context, "bs-btn-group", [], {"contentBinding": "options2", "selectedBinding": "selected"});
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
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
        var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
        inline(env, morph0, context, "bs-btn-group", [], {"size": "lg", "contentBinding": "options", "selectedBinding": "selected"});
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
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
        var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
        inline(env, morph0, context, "bs-btn-group", [], {"contentBinding": "options", "selectedBinding": "selected"});
        return fragment;
      }
    };
  }());
  var child3 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
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
        var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
        inline(env, morph0, context, "bs-btn-group", [], {"small": true, "contentBinding": "options", "selectedBinding": "selected"});
        return fragment;
      }
    };
  }());
  var child4 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
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
        var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
        inline(env, morph0, context, "bs-btn-group", [], {"size": "xs", "contentBinding": "options", "selectedBinding": "selected"});
        return fragment;
      }
    };
  }());
  var child5 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
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
        var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
        inline(env, morph0, context, "bs-btn-group", [], {"size": "lg", "contentBinding": "optionsWithMeta", "selectedBinding": "selected"});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","button-group");
      var el2 = dom.createTextNode("Button Group");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("To wrap a series of buttons, use the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("bs-btn-group");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" component.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","standard");
      var el2 = dom.createTextNode("Standard");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    Controller say selected item is: ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("content");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" is an array of options, each option is rendered as a ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("button");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" tag.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("strong");
      var el3 = dom.createTextNode("TODO: SHOW CODE");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","icons");
      var el2 = dom.createTextNode("Icons");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("It is possible to set an icon for the selected button in a group or/and an icon for the in-active buttons by\nsetting the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("icon_active");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" and/or ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("icon_inactive");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" properties to the icon class name.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    Controller say selected item is: ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("<div class=\"bs-example\">\n    {{bs-btn-group icon_inactive=\"fa fa-square-o\" icon_active=\"fa fa-check-square-o\" contentBinding=\"options\" selectedBinding=\"selected\"}}\n    <br/>\n    Controller say selected item is: {{selected}}\n</div>");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","button-toolbar");
      var el2 = dom.createTextNode("Button Toolbar");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Combine sets of bs-btn-groups into a bs-btn-toolbar for more complex components.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","sizing");
      var el2 = dom.createTextNode("Sizing");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("You can set size in the group level instead of setting size per button.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","vertical-variation");
      var el2 = dom.createTextNode("Vertical variation");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Make a set of buttons appear vertically stacked rather than horizontally by adding ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("vertical=true");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(".");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","buttons-with-metadata");
      var el2 = dom.createTextNode("Buttons with Metadata");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("It is possible to provide extra metadata per button in the group.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-btn-group size=\"lg\" contentBinding=\"optionsWithMeta\" selectedBinding=\"selected\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Controller's code");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(":");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("\nShowcase.ShowComponentsButtonGroupController = Ember.Controller.extend({\n  optionsWithMeta: [\n    Ember.Object.create({title: 'Create', type: 'primary'}),\n    Ember.Object.create(({title: 'Destroy', type: 'danger'})\n  ]\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, content = hooks.content, block = hooks.block;
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
      var element0 = dom.childAt(fragment, [6]);
      var element1 = dom.childAt(fragment, [16]);
      var element2 = dom.childAt(fragment, [30]);
      var morph0 = dom.createMorphAt(element0,1,1);
      var morph1 = dom.createMorphAt(element0,5,5);
      var morph2 = dom.createMorphAt(element1,1,1);
      var morph3 = dom.createMorphAt(element1,5,5);
      var morph4 = dom.createMorphAt(dom.childAt(fragment, [24]),1,1);
      var morph5 = dom.createMorphAt(element2,1,1);
      var morph6 = dom.createMorphAt(element2,2,2);
      var morph7 = dom.createMorphAt(element2,3,3);
      var morph8 = dom.createMorphAt(element2,4,4);
      var morph9 = dom.createMorphAt(dom.childAt(fragment, [36]),1,1);
      var morph10 = dom.createMorphAt(dom.childAt(fragment, [42]),1,1);
      inline(env, morph0, context, "bs-btn-group", [], {"contentBinding": "options", "selectedBinding": "selected"});
      content(env, morph1, context, "selected");
      inline(env, morph2, context, "bs-btn-group", [], {"icon_inactive": "fa fa-square-o", "icon_active": "fa fa-check-square-o", "contentBinding": "options", "selectedBinding": "selected"});
      content(env, morph3, context, "selected");
      block(env, morph4, context, "bs-btn-toolbar", [], {}, child0, null);
      block(env, morph5, context, "bs-btn-toolbar", [], {}, child1, null);
      block(env, morph6, context, "bs-btn-toolbar", [], {}, child2, null);
      block(env, morph7, context, "bs-btn-toolbar", [], {}, child3, null);
      block(env, morph8, context, "bs-btn-toolbar", [], {}, child4, null);
      inline(env, morph9, context, "bs-btn-group", [], {"contentBinding": "options", "selectedBinding": "selected", "vertical": true});
      block(env, morph10, context, "bs-btn-toolbar", [], {}, child5, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/growl-notif"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","growl-like-notifications");
      var el2 = dom.createTextNode("Growl like Notifications");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Growl Notifications");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" is not a Bootstrap component but is mandatory for almost every web application.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Growl Notifications");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" are just like the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Notification");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" component but messages that are rendered as small boxes on the right top of the screen, they fade in for a short period of time with a title, sub text and icon and then fade out.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("To use growl notifications, put somewhere in your ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("application");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" template the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("bs-growl-notifications");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" component.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-growl-notifications}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Then use the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("GrowlNotificationManager");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" / ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("GNM");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" to push new notifications with a message and type.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Controller code:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsGrowlNotifController = Ember.Controller.extend({\n  pushInfo: function() {\n    Bootstrap.GNM.push('INFO!', 'Hello, this is just an info message.', 'info');\n  },\n  pushSuccess: function() {\n    Bootstrap.GNM.push('SUCCESS!', 'Successfully performed operation!', 'success');\n  },\n  pushWarn: function() {\n    Bootstrap.GNM.push('WARN!', 'Could not perform operation!', 'warning');\n  },\n  pushDanger: function() {\n    Bootstrap.GNM.push('Danger!', 'System is halting!', 'danger');\n  }\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("You can control the visibility duration of each message by specifying the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("showTime");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","component-files");
      var el2 = dom.createTextNode("Component Files");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createElement("em");
      var el4 = dom.createTextNode("css/bs-growl-notifications.min.css");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createElement("em");
      var el4 = dom.createTextNode("js/bs-growl-notifications.min.js");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","component-properties");
      var el2 = dom.createTextNode("Component Properties");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","table-responsive");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("table");
      dom.setAttribute(el2,"class","table table-bordered table-striped");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("thead");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      dom.setAttribute(el5,"style","width: 150px;");
      var el6 = dom.createTextNode("Property");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      var el6 = dom.createTextNode("Description");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      var el6 = dom.createTextNode("Default");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tbody");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("showTime");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("A number in ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("ms");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" that defines how long the notification is displayed before it starts to fade out.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("10 seconds");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline;
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
      var element0 = dom.childAt(fragment, [12]);
      var morph0 = dom.createMorphAt(element0,1,1);
      var morph1 = dom.createMorphAt(element0,3,3);
      var morph2 = dom.createMorphAt(element0,5,5);
      var morph3 = dom.createMorphAt(element0,7,7);
      inline(env, morph0, context, "bs-button", [], {"clicked": "pushInfo", "title": "Push Info"});
      inline(env, morph1, context, "bs-button", [], {"clicked": "pushWarn", "title": "Push Warning"});
      inline(env, morph2, context, "bs-button", [], {"clicked": "pushSuccess", "title": "Push Success"});
      inline(env, morph3, context, "bs-button", [], {"clicked": "pushDanger", "title": "Push Danger"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/items_action_bar"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","item-action-bar");
      var el2 = dom.createTextNode("Item action bar");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("When listing items that support selection, it usually make sense to perform some actions on the selected item(s).");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("The Items action bar component make it possible to build an bar of buttons where each button visibility may behave differently according to the selection,");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("For example an 'Edit' button may be disabled unless 1 item is selected, or a 'Delete' button may be enabled only\nwhen there is 1 or more items selected.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("In the template, only 1 expression is needed, the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("content");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property is expected to be an array of array, where each array represents a section in the action bar and contains objects that represent a button defintion in the bar, the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("selectedItems");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property is expected to be an array of the currently selected items on a list.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("For the sake of simplicity in this example we use the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("bs-pills");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" component to list items with signle itemselection support,\nbut this can be replaced with a table or any other visual form that supports selection.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-items-action-bar contentBinding=\"actionsInBar\" selectedItemsBinding=\"selection\"}}\n{{bs-pills contentBinding=\"items\" selectedBinding=\"selection\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Per action defined in the controller (see below), it is possible to define whether the action should be disabled or not\nand what should happen when an enabled action is clicked,");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("Implement the ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("disabled");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" function per action and return ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("true");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" if the action should be disabled, the method recieve the current selection so logic may take the selection into consideration whether the action should be disabled or not.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("Define ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("transitionTo");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" property with a route name if you want the action to transition to another route when pressed.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("Define the ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("clickActionName");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" property with an action name to be invoked on the controller when action is clicked.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Controller's code:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsItemsActionBarController = Ember.Controller.extend({\n  actionsInBar: [\n    [\n      {\n        title: 'To Alerts',\n        disabled: function(selection) {\n          var _ref;\n          if (selection.size < 1 || (selection != null ? (_ref = selection[0]) != null ? _ref.title : void 0 : void 0) !== 'Alerts') {\n            return true;\n          }\n        },\n        transitionTo: 'show_components.alert'\n      }, {\n        title: 'To Panels',\n        transitionTo: 'show_components.panel',\n        disabled: function(selection) {\n          var _ref;\n          if (selection.size < 1 || (selection != null ? (_ref = selection[0]) != null ? _ref.title : void 0 : void 0) !== 'Panels') {\n            return true;\n          }\n        }\n      }\n    ], [\n      {\n        title: 'To Wizard',\n        disabled: function(selection) {\n          var _ref;\n          if (selection.size < 1 || (selection != null ? (_ref = selection[0]) != null ? _ref.title : void 0 : void 0) !== 'Wizards') {\n            return true;\n          }\n        },\n        clickActionName: 'wizard'\n      }\n    ]\n  ],\n  actions: {\n    wizard: function(selection) {\n      return alert(\"Wizard pressed!\");\n    }\n  },\n  items: [\n    Ember.Object.create({\n      title: 'Alerts'\n    }), Ember.Object.create({\n      title: 'Panels'\n    }), Ember.Object.create({\n      title: 'Wizards'\n    })\n  ]\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline;
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
      var element0 = dom.childAt(fragment, [10]);
      var morph0 = dom.createMorphAt(element0,1,1);
      var morph1 = dom.createMorphAt(element0,5,5);
      inline(env, morph0, context, "bs-items-action-bar", [], {"contentBinding": "actionsInBar", "selectedItemsBinding": "selection"});
      inline(env, morph1, context, "bs-pills", [], {"contentBinding": "items", "selectedBinding": "selection"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/label"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","label");
      var el2 = dom.createTextNode("Label");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","basic");
      var el2 = dom.createTextNode("Basic");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h4");
      var el3 = dom.createTextNode("Heading with label ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    <h3>Heading with label {{bs-label content=\"Label\"}}</h3>");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","with-type");
      var el2 = dom.createTextNode("With Type");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h3");
      var el3 = dom.createTextNode("Heading with ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("strong");
      var el4 = dom.createTextNode("danger");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    <h3>Heading with <strong>danger</strong> {{bs-label content=\"Careful!\" type=\"danger\"}}</h3>");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","component-properties");
      var el2 = dom.createTextNode("Component Properties");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","table-responsive");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("table");
      dom.setAttribute(el2,"class","table table-bordered table-striped");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("thead");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      dom.setAttribute(el5,"style","width: 150px;");
      var el6 = dom.createTextNode("Property");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      var el6 = dom.createTextNode("Description");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tbody");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("content");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("string: the label content.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("type");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Label types: success | info | warning | danger");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline;
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
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [4, 1]),1,1);
      var morph1 = dom.createMorphAt(dom.childAt(fragment, [10, 1]),3,3);
      inline(env, morph0, context, "bs-label", [], {"content": "Label"});
      inline(env, morph1, context, "bs-label", [], {"content": "Careful!", "type": "danger"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/list-group"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","list-group");
      var el2 = dom.createTextNode("List Group");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("blockquote");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("List groups are a flexible and powerful component for displaying not only simple lists of elements, but complex ones with custom content.\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("small");
      var el4 = dom.createTextNode("By Bootstrap");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("All list items are linkable and selection can easily be observed");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","simple");
      var el2 = dom.createTextNode("Simple");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("The most basic list group is simply an unordered list with list items.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\nSelected: ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-list-group contentBinding=\"listSimple\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Controller's code:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsListGroupController = Ember.Controller.extend({\n    listSimple: Ember.A(['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus'])\n})");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","badges");
      var el2 = dom.createTextNode("Badges");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Each item in the list can have badge component that will automatically be positioned on the right.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-list-group contentBinding=\"listWithBadges\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Controller's code:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsListGroupController = Ember.Controller.extend({\n  listWithBadges: Ember.A([\n    Ember.Object.create({title: 'Inbox', badge: '45'}),\n    Ember.Object.create({ title: 'Sent', badge: '33'})\n  ])\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","list-with-sub-text");
      var el2 = dom.createTextNode("List with Sub Text");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Items can have a sub text enabled if an item metadata has the 'sub' property.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-list-group contentBinding=\"listWithSub\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Controller's code:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsListGroupController = Ember.Controller.extend({\n  listWithSub: Ember.A([\n    Ember.Object.create({title: 'Inbox', badge: '45'}),\n    Ember.Object.create({ title: 'Sent', badge: '33'})\n  ])\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, content = hooks.content;
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
      var element0 = dom.childAt(fragment, [10]);
      var morph0 = dom.createMorphAt(element0,1,1);
      var morph1 = dom.createMorphAt(element0,3,3);
      var morph2 = dom.createMorphAt(dom.childAt(fragment, [22]),1,1);
      var morph3 = dom.createMorphAt(dom.childAt(fragment, [34]),1,1);
      inline(env, morph0, context, "bs-list-group", [], {"contentBinding": "listSimple", "selectedBinding": "selected"});
      content(env, morph1, context, "selected");
      inline(env, morph2, context, "bs-list-group", [], {"contentBinding": "listWithBadges"});
      inline(env, morph3, context, "bs-list-group", [], {"contentBinding": "listWithSub"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/modal"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Modal content!");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","modal");
      var el2 = dom.createTextNode("Modal");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("blockquote");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("small");
      var el4 = dom.createTextNode("by Bootstrap");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","blocked-modal");
      var el2 = dom.createTextNode("Blocked Modal");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("A rendered modal with header, body, and set of actions in the footer.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{bs-button title=\"Show Modal\" clicked=\"show\"}}\n    {{#bs-modal name=\"myModal\" fade=true footerButtonsBinding=\"myModalButtons\" title=\"My Modal\"}}\n        <p>Modal content!</p>\n    {{/bs-modal}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Controller's code");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(":");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsModalController = Ember.Controller.extend({\n  myModalButtons: [\n      Ember.Object.create({title: 'Submit', clicked:\"submit\"})\n      Ember.Object.create({title: 'Cancel', clicked:\"cancel\", dismiss: 'modal'})\n  ],\n\n  actions: {\n    //Submit the modal\n    submit: function() {\n      Bootstrap.NM.push('Successfully submitted modal', 'success');\n      return Bootstrap.ModalManager.hide('myModal');\n    },\n\n    //Cancel the modal, we don't need to hide the model manually because we set {..., dismiss: 'modal'} on the button meta data\n    cancel: function() {\n      return Bootstrap.NM.push('Modal was cancelled', 'info');\n    },\n\n    //Show the modal\n    show: function() {\n      return Bootstrap.ModalManager.show('myModal');\n    }\n  }\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("NOTE: The buttons defined in the array object can contain the same attributes as the button component. For example: for a 'danger' button, add \"type='danger'\" to the object defining the button.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","confirmation-modal");
      var el2 = dom.createTextNode("Confirmation Modal");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("For a simple confirmation modal, you can simply invoke ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("Bootstrap.ModalManager.confirm(this);");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-button title=\"Delete\" clicked=\"confirm\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Controller's code");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(":");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsModalController = Ember.Controller.extend({\n    confirm: {\n        confirm: {\n            Bootstrap.ModalManager.confirm(@);\n        },\n        //invoked when user press \"confirm\"\n        modalConfirmed: {\n            Bootstrap.NM.push('Confirmed!', 'success')\n        },\n        //invoked when user press \"cancel\"\n        modalCanceled: {\n            Bootstrap.NM.push('Cancelled!', 'info')\n        }\n    }\n})");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("The ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("Bootstrap.ModalManager.confirm");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" method accept the following parameters:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","table-responsive");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("table");
      dom.setAttribute(el2,"class","table table-bordered table-striped");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("thead");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      dom.setAttribute(el5,"style","width: 150px;");
      var el6 = dom.createTextNode("Property");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      var el6 = dom.createTextNode("Description");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      var el6 = dom.createTextNode("Optional?");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tbody");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("controller");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("A reference to the controller that the confirm/cancel actions will be triggered on");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("no");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("title");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("The title of the modal that.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("yes");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("message");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("The body text of the modal.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("yes");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("confirmButtonTitle");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("The title of the confirm button");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("yes");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("cancelButtonTitle");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("The title of the cancel button");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("yes");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","programatically-modal-creation");
      var el2 = dom.createTextNode("Programatically Modal Creation");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("It is also possible to programatically create a modal, this approach is useful if the modal contains a lot of elements and it makes sense to push the modal elements into the DOM programatically and totally destroy the modal when it is closed.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("//we only render a button which will programatically create the modal\n{{bs-button title=\"Create Modal\" clicked=\"createModalProgramatically\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Controller's code");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(":");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsModalController = Ember.Controller.extend({\n    manualButtons: [\n        Ember.Object.create({title: 'Submit', clicked:\"submitManual\"})\n        Ember.Object.create({title: 'Cancel', dismiss: 'modal'})\n    ],\n\n    actions: {\n      submitManual: function() {\n        Bootstrap.NM.push('Modal destroyed!', 'success');\n        return Bootstrap.ModalManager.close('manualModal');\n      },\n      createModalProgramatically: function() {\n        //@property {string} The name of the modal, required later to close the modal (see submitManual function above)\n        //@property {string} The title of the modal.\n        //@property {string} The template name to render within the modal body, a View class may also be specified.\n        //@property {array} Array of Button meta data\n        //@property {object} The controller instance that instantiate the modal.\n        Bootstrap.ModalManager.open('manualModal', 'Hello', 'demo-template', this.manualButtons, this);\n      }\n    }\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","adding-states-to-modal-buttons");
      var el2 = dom.createTextNode("Adding States To Modal Buttons");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-button title=\"Create Modal With Button States\" clicked=\"createLoadingModalProgramatically\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Controller's code");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(":");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsModalController = Ember.Controller.extend({\n    loadingManualButtons: [\n        Ember.Object.create({title: 'Submit', clicked:\"submitLoadingManual\", loadingText:\"Saving...\"})\n        Ember.Object.create({title: 'Cancel', dismiss: 'modal'})\n    ],\n\n    actions: {\n      submitLoadingManual: function() {\n        Ember.set(@modalInstance, 'loadingState', 'loading')\n        Ember.run.later(() =>\n            Ember.set(@modalInstance, 'loadingState', 'success')\n            Ember.run.later(() =>\n                Ember.set(@modalInstance, 'loadingState', null)                \n            , 2000)\n        , 2000)\n      },\n      createLoadingModalProgramatically: function() {\n        //@property {string} The name of the modal, required later to close the modal (see submitManual function above)\n        //@property {string} The title of the modal.\n        //@property {string} The template name to render within the modal body, a View class may also be specified.\n        //@property {array} Array of Button meta data\n        //@property {object} The controller instance that instantiate the modal.\n        Bootstrap.ModalManager.open('manualModal', 'Hello', 'demo-template', this.loadingManualButtons, this);\n      }\n    }\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, block = hooks.block;
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
      var element0 = dom.childAt(fragment, [8]);
      var morph0 = dom.createMorphAt(element0,1,1);
      var morph1 = dom.createMorphAt(element0,3,3);
      var morph2 = dom.createMorphAt(dom.childAt(fragment, [22]),1,1);
      var morph3 = dom.createMorphAt(dom.childAt(fragment, [38]),1,1);
      var morph4 = dom.createMorphAt(dom.childAt(fragment, [48]),1,1);
      inline(env, morph0, context, "bs-button", [], {"title": "Show Modal", "clicked": "show"});
      block(env, morph1, context, "bs-modal", [], {"name": "myModal", "fade": true, "footerButtonsBinding": "myModalButtons", "title": "My Modal"}, child0, null);
      inline(env, morph2, context, "bs-button", [], {"title": "Delete", "clicked": "confirm"});
      inline(env, morph3, context, "bs-button", [], {"title": "Create Modal", "clicked": "createModalProgramatically"});
      inline(env, morph4, context, "bs-button", [], {"title": "Create Modal With Button States", "clicked": "createLoadingModalProgramatically"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/notifications"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","notifications");
      var el2 = dom.createTextNode("Notifications");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Notifications");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" is not a Bootstrap component but is mandatory for almost every web application.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Notifications");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" are messages that are rendered as ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Alerts");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(", they fade in for a short period of time with some message and type and then they fade out.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Notifications are pushed into an array, so different parts of the application may push notifications to the user\nand each will be displayed one after another.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("To use notifications, put somewhere in your ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("application");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" template the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("bs-notifications");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" component.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-notifications style=\"z-index: 1000; position: fixed; width: 50%; left: 0; right: 0; margin-left: auto; margin-right: auto; margin-top: 50px;\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("How you style the component is up to you, this is just an example for centralizing the notifications on the screen.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Then use the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("NotificationManager");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" / ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("NM");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" to push new notifications with a message and type.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Controller code:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsNotificationsController = Ember.Controller.extend({\n  pushInfo: function() {\n    return Bootstrap.NM.push('Hello, this is just an info message.', 'info');\n  },\n  pushWarn: function() {\n    return Bootstrap.NM.push('Could not perform operation!', 'warning');\n  },\n  pushSuccess: function() {\n    return Bootstrap.NM.push('Successfully performed operation!', 'success');\n  },\n  pushDanger: function() {\n    return Bootstrap.NM.push('Danger! system is halting!', 'danger');\n  }\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("During fade out, If user hover with the mouse in the notification area, it will cancel the fade in animation so the user can have more time to read the message, moving the mouse out will retrigger the fade out.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("You can control the duration messages are displayed, the fade out and fade in time by providing properties for each, for more info see the properties options below.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","component-properties");
      var el2 = dom.createTextNode("Component Properties");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","table-responsive");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("table");
      dom.setAttribute(el2,"class","table table-bordered table-striped");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("thead");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      dom.setAttribute(el5,"style","width: 150px;");
      var el6 = dom.createTextNode("Property");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      var el6 = dom.createTextNode("Description");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tbody");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("showTime");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("A number in ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("ms");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" that defines how long the notification is displayed before it starts to fade out.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("fadeInTime");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("A number in ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("ms");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" that defines how long it takes a notification to fades in.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("fadeOutTime");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("A number in ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("ms");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" that defines how long it takes a notification to fade out.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline;
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
      var element0 = dom.childAt(fragment, [16]);
      var morph0 = dom.createMorphAt(element0,1,1);
      var morph1 = dom.createMorphAt(element0,3,3);
      var morph2 = dom.createMorphAt(element0,5,5);
      var morph3 = dom.createMorphAt(element0,7,7);
      inline(env, morph0, context, "bs-button", [], {"type": "info", "clicked": "pushInfo", "title": "Push Info"});
      inline(env, morph1, context, "bs-button", [], {"type": "warning", "clicked": "pushWarn", "title": "Push Warning"});
      inline(env, morph2, context, "bs-button", [], {"type": "success", "clicked": "pushSuccess", "title": "Push Success"});
      inline(env, morph3, context, "bs-button", [], {"type": "danger", "clicked": "pushDanger", "title": "Push Danger"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/page-header"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","page-header");
      var el2 = dom.createTextNode("Page Header");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("blockquote");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("A simple shell for an h1 to appropriately space out and segment sections of content on a page. It can utilize the h1's default small element, as well as most other components (with additional styles).\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("small");
      var el4 = dom.createTextNode("By Bootstrap");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{bs-page-header title=\"Example page header\" sub=\"Subtext for header\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline;
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
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [6]),1,1);
      inline(env, morph0, context, "bs-page-header", [], {"title": "Example page header", "sub": "Subtext for header"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/panel"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Panel content goes here...!");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Panel content.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Panel content.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child3 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Panel content.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child4 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Panel content.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child5 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Panel content.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child6 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Panel content.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child7 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Panel content.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child8 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Panel content goes here...!");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child9 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("IM OPEN NOW!");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","panel");
      var el2 = dom.createTextNode("Panel");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("blockquote");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("While not always necessary, sometimes you need to put your DOM in a box. For those situations, try the panel component.\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("small");
      var el4 = dom.createTextNode("By Bootstrap");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","basic");
      var el2 = dom.createTextNode("Basic");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{#bs-panel heading=\"Simple Panel\" footer=\"Panel Footer\"}}\n    <p>Panel content goes here...!</p>\n{{/bs-panel}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","contextual-alternatives");
      var el2 = dom.createTextNode("Contextual alternatives");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("blockquote");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Like other components, easily make a panel more meaningful to a particular context by adding any of the contextual state classes.\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("small");
      var el4 = dom.createTextNode("By Bootstrap");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{#bs-panel heading=\"Primary Panel\" type=\"primary\"}}\n        <p>Panel content.</p>\n    {{/bs-panel}}\n    {{#bs-panel heading=\"Success Panel\" type=\"success\"}}\n        <p>Panel content.</p>\n    {{/bs-panel}}\n    {{#bs-panel heading=\"Info Panel\" type=\"info\"}}\n        <p>Panel content.</p>\n    {{/bs-panel}}\n    {{#bs-panel heading=\"Warning Panel\" type=\"warning\"}}\n        <p>Panel content.</p>\n    {{/bs-panel}}\n    {{#bs-panel heading=\"Danger Panel\" type=\"danger\"}}\n        <p>Panel content.</p>\n    {{/bs-panel}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","dismissable-panels");
      var el2 = dom.createTextNode("Dismissable Panels");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("This goes beyond what Bootstrap offers and let you create a closable panels by adding the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("dismiss=true");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{#bs-panel heading=\"Primary Panel\" type=\"primary\" dismiss=true onClose=\"panelClosed\"}}\n    <p>Panel content.</p>\n{{/bs-panel}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","clickable-panels");
      var el2 = dom.createTextNode("Clickable Panels");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Panels can also be clickable, the click is propagated to the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("current controller");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" via the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("clicked");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{#bs-panel heading=\"Primary Panel\" type=\"primary\" clicked=\"panelClicked\"}}\n    <p>Panel content.</p>\n{{/bs-panel}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","collapsible-panels");
      var el2 = dom.createTextNode("Collapsible Panels");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Panels can be collapsible, to enable collapsible support set ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("collapsible=true");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" on the component tag:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{#bs-panel heading=\"Simple Panel\" collapsible=true dismiss=true footer=\"Panel Footer\"}}\n    <p>Panel content goes here...!</p>\n{{/bs-panel}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Collapsible panels can also be closed by default by setting ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("open=false");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(".");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{#bs-panel heading=\"Simple Panel\" collapsible=true dismiss=true footer=\"Panel Footer\"}}\n    <p>Panel content goes here...!</p>\n{{/bs-panel}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, block = hooks.block;
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
      var element0 = dom.childAt(fragment, [14]);
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [6]),1,1);
      var morph1 = dom.createMorphAt(element0,1,1);
      var morph2 = dom.createMorphAt(element0,2,2);
      var morph3 = dom.createMorphAt(element0,3,3);
      var morph4 = dom.createMorphAt(element0,4,4);
      var morph5 = dom.createMorphAt(element0,5,5);
      var morph6 = dom.createMorphAt(dom.childAt(fragment, [22]),1,1);
      var morph7 = dom.createMorphAt(dom.childAt(fragment, [30]),1,1);
      var morph8 = dom.createMorphAt(dom.childAt(fragment, [38]),1,1);
      var morph9 = dom.createMorphAt(dom.childAt(fragment, [44]),1,1);
      block(env, morph0, context, "bs-panel", [], {"heading": "Simple Panel", "footer": "Panel Footer"}, child0, null);
      block(env, morph1, context, "bs-panel", [], {"heading": "Primary Panel", "type": "primary"}, child1, null);
      block(env, morph2, context, "bs-panel", [], {"heading": "Success Panel", "type": "success"}, child2, null);
      block(env, morph3, context, "bs-panel", [], {"heading": "Info Panel", "type": "info"}, child3, null);
      block(env, morph4, context, "bs-panel", [], {"heading": "Warning Panel", "type": "warning"}, child4, null);
      block(env, morph5, context, "bs-panel", [], {"heading": "Danger Panel", "type": "danger"}, child5, null);
      block(env, morph6, context, "bs-panel", [], {"heading": "Primary Panel", "type": "primary", "dismiss": true, "onClose": "panelClosed"}, child6, null);
      block(env, morph7, context, "bs-panel", [], {"heading": "Primary Panel", "type": "primary", "clicked": "panelClicked"}, child7, null);
      block(env, morph8, context, "bs-panel", [], {"heading": "Simple Panel", "collapsible": true, "dismiss": true, "footer": "Panel Footer"}, child8, null);
      block(env, morph9, context, "bs-panel", [], {"heading": "Open me!", "collapsible": true, "dismiss": true, "open": false}, child9, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/pills"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","pills");
      var el2 = dom.createTextNode("Pills");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"href","http://getbootstrap.com/components/#nav-pills");
      var el3 = dom.createTextNode("Pills");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" are a button-like navigation style,");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Bootstrap doesn't dictate nor assist with how you respond when an item is selected in the Pills navigation,\nBut using ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("bs-pills");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" helps by making the navigation more interactive by providing selection bindings and styling the\nactive element, see examples below.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    Selected: ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("\n{{bs-pills contentBinding=\"content\" selectedBinding=\"selected\"}}\n\nSelected: {{selected}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("content");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" and ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("selected");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" are properties in the current ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("controller");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("The ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("em");
      var el4 = dom.createTextNode("content");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" controller property is an array of strings where each string is rendered as a possible item selection.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("When an item selection is changed, the ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("em");
      var el4 = dom.createTextNode("selected");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" property in the current ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("em");
      var el4 = dom.createTextNode("controller");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" will be set with the value of the selected item.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Here's the controller sample code:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsPillsController = Ember.Controller.extend({\n  content: ['Home', 'Profile', 'Messages'],\n  contentChanged: (function() {\n    return console.log(\"Selection has changed to: \" + (this.get('selected')));\n  }).observes('selected')\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","stacked");
      var el2 = dom.createTextNode("Stacked");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("blockquote");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Pills are also vertically stackable. Just add `stacked=true``");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{bs-pills contentBinding=\"content\" selectedBinding=\"selected\" stacked=true style=\"max-width: 300px;\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","justified");
      var el2 = dom.createTextNode("Justified");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("blockquote");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Easily make tabs or pills equal widths of their parent with setting ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("justified=true");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{bs-pills contentBinding=\"content\" selectedBinding=\"selected\" justified=true}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","disabled-links");
      var el2 = dom.createTextNode("Disabled links");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Bootstrap doesn't stop the propagation of the redirection of disabled links for you:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("blockquote");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode(" This class will only change the ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("em");
      var el4 = dom.createTextNode("anchor");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("'s appearance, not its functionality. Use custom JavaScript to disable links here.\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("small");
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","http://getbootstrap.com/components/#nav-disabled-links");
      var el5 = dom.createTextNode("By Bootstrap");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("But using ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("bs-pills");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" ease your pain by giving you the opportunity to bind the disable state of each item by providing extra metadata per item, clicking a disabled item disables the links too.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("To define links (items) as disabed, you need to provide extra metadata per defined item in the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("contentBinding");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-pills contentBinding=\"content\" selectedBinding=\"selected\"}}\n{{bs-button clicked=\"disableHome\" content=\"Disable Home\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Controller sample code:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("\nShowcase.ShowComponentsPillsController = Ember.Controller.extend({\n  init: function() {\n    this._super();\n    this.set('content', Ember.A([\n      Ember.Object.create({title: 'Home',disabled: false}),\n      Ember.Object.create({title: 'Admin',disabled: true})\n    ]));\n    this.set('selected', this.get('content').objectAt(0));\n  },\n\n  disableHome: function() {\n    this.get('content').objectAt(0).set('disabled', true);\n  }\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, content = hooks.content;
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
      var element0 = dom.childAt(fragment, [6]);
      var element1 = dom.childAt(fragment, [44]);
      var morph0 = dom.createMorphAt(element0,1,1);
      var morph1 = dom.createMorphAt(element0,3,3);
      var morph2 = dom.createMorphAt(dom.childAt(fragment, [22]),1,1);
      var morph3 = dom.createMorphAt(dom.childAt(fragment, [30]),1,1);
      var morph4 = dom.createMorphAt(element1,1,1);
      var morph5 = dom.createMorphAt(element1,3,3);
      inline(env, morph0, context, "bs-pills", [], {"contentBinding": "content", "selectedBinding": "selected"});
      content(env, morph1, context, "selected");
      inline(env, morph2, context, "bs-pills", [], {"contentBinding": "content", "selectedBinding": "selected", "stacked": true, "style": "max-width: 300px;"});
      inline(env, morph3, context, "bs-pills", [], {"contentBinding": "content", "selectedBinding": "selected", "justified": true});
      inline(env, morph4, context, "bs-pills", [], {"contentBinding": "content1", "selectedBinding": "selected1"});
      inline(env, morph5, context, "bs-button", [], {"clicked": "disableHome", "title": "Disable Home"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/popover"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","popover-tooltips");
      var el2 = dom.createTextNode("Popover & Tooltips");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","setup");
      var el2 = dom.createTextNode("Setup");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("For Popover support, it is required to adapt the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("application route");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" and add a named outlet to your main template and reference a controller that extends from ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("Bootstrap.TooltipBoxController");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("//Create some controller in your app that references _Bootstrap.TooltipBoxController_\nApp.TooltipBoxController = Bootstrap.TooltipBoxController\n\n//Application route\nApp.ApplicationRoute = Ember.Route.extend({\n    renderTemplate: function() {\n        // Render default outlet\n        this.render();\n        // render extra outlets\n        var controller = this.controllerFor('tooltip-box');\n        this.render(\"bs-tooltip-box\", {\n            outlet: \"bs-tooltip-box\",\n            controller: controller,\n            into: \"application\" // important when using at root level\n        });\n    }\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","tooltips");
      var el2 = dom.createTextNode("Tooltips");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h3");
      dom.setAttribute(el1,"id","simple-content");
      var el2 = dom.createTextNode("Simple content");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      dom.setAttribute(el2,"class","muted");
      dom.setAttribute(el2,"style","margin-bottom: 0;");
      var el3 = dom.createTextNode("Here is ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("a");
      dom.setAttribute(el3,"href","#");
      var el4 = dom.createTextNode("a very");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" link with a tooltip,.\n    You can mix as many ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("a");
      dom.setAttribute(el3,"href","#");
      var el4 = dom.createTextNode("tooltips");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" as you wish.\n");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("<p class=\"muted\" style=\"margin-bottom: 0;\">\n    Here is <a href=\"#\" {{bs-bind-tooltip content=\"A tooltip!\"}}>a very</a> link with a tooltip,.\n    You can mix as many <a href=\"#\" {{bs-bind-tooltip title=\"Another tooltip!\"}}>tooltips</a> as you wish.\n</p>");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h3");
      dom.setAttribute(el1,"id","bindings-sticky");
      var el2 = dom.createTextNode("Bindings & Sticky");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("You can bind the value of the tooltip to an object and make the tooltip sticky by:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("a");
      dom.setAttribute(el2,"href","#");
      var el3 = dom.createTextNode("Hover me for a sticky tooltip!");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("In template:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("<a href=\"#\" {{bs-bind-tooltip testObject.sticky}}>Hover me for a sticky tooltip!</a>");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("In controller:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("    stickyTooltip: Ember.Object.createWithMixins({\n        popover: (function() {\n          return Ember.Object.create({\n            user: this,\n            content: 'know this is a sticky tooltip! You can hover over it.',\n            trigger: 'hover',\n            sticky: true\n          });\n        }).property()\n      })");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","popovers");
      var el2 = dom.createTextNode("Popovers");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h3");
      dom.setAttribute(el1,"id","examples");
      var el2 = dom.createTextNode("Examples");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Here are some examples for popovers:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("ul");
      dom.setAttribute(el2,"class","list-group");
      dom.setAttribute(el2,"style","width:250px");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      dom.setAttribute(el3,"class","list-group-item");
      var el4 = dom.createTextNode("\n                 Hover for a sticky popup\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      dom.setAttribute(el3,"class","list-group-item");
      var el4 = dom.createTextNode("\n                 Click for a popup\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      dom.setAttribute(el3,"class","list-group-item");
      var el4 = dom.createTextNode("\n                 Click for a popup with template\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("In template:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("<ul class=\"list-group\" style=\"width:250px\">\n    <li class=\"list-group-item\" {{bs-bind-popover hoverPop}}>\n             Hover for a sticky popup\n    </li>\n    <li class=\"list-group-item\" {{bs-bind-popover clickPop}}>\n             Click for a popup\n    </li>\n    <li class=\"list-group-item\" {{bs-bind-popover templPop}}>\n             Click for a popup with template\n    </li>\n</ul>");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("In controller:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("  hoverPop: Ember.Object.create({\n    title: \"I'm a title!\",\n    content: \"And i'm a content!\",\n    trigger: \"hover\",\n    placement: \"right\",\n    sticky: true\n  }),\n\n  clickPop: Ember.Object.create({\n    title: \"Clickable!\",\n    content: \"This is a clickable popover\",\n    placement: \"left\"\n  }),\n\n  templPop: Ember.Object.create({\n      firstName: 'numbers',\n      title: 'Popover with Template',\n      template: 'numbers:<ul>' +\n              '{{#each val in content.numbers}}' +\n              '   <li>{{val}}</li>' + '{{/each}}' +\n              '</ul>',\n      content: {\n        numbers: [1, 2, 3]\n      }\n  })");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","object-options");
      var el2 = dom.createTextNode("Object Options");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Following are the options that back a tooltip/popover entry:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","table-responsive");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("table");
      dom.setAttribute(el2,"class","table table-bordered table-striped");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("thead");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      dom.setAttribute(el5,"style","width: 100px;");
      var el6 = dom.createTextNode("Property Name");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      dom.setAttribute(el5,"style","width: 100px;");
      var el6 = dom.createTextNode("Type");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      dom.setAttribute(el5,"style","width: 50px;");
      var el6 = dom.createTextNode("Default");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      var el6 = dom.createTextNode("Description");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tbody");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("html");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("boolean");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("false");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Insert HTML into the popover.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("placement");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("string | function");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("'right'");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("how to position the popover - top | bottom | left | right | auto.");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("br");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" When \"auto\" is specified, it will dynamically reorient the popover. For example, if placement is \"auto left\", the popover will display to the left when possible, otherwise it will display right.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("trigger");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("string");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("'click' for popover| 'hover' for tooltip");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("how popover is triggered - click | hover | focus | manual");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("sticky");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("boolean");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("false");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("To be used when trigger is 'hover'.\n                    When the tooltip appears you have 100ms to hover over it and only after you leave the popover/tooltip it will disappear");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("show");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("boolean");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("false");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("To be used when trigger is 'manual'.\n                    Will show the tip when true, hide when false.\n                    The property will be observed for changes with \"addObserver\"\n                ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("title");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("string");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("''");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("content");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("string | function");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("''");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("template");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("string");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("null");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Use this template to display. The context will be the popover/tooltip. The data is available in content.*");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, element = hooks.element, get = hooks.get;
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
      var element0 = dom.childAt(fragment, [12, 1]);
      var element1 = dom.childAt(element0, [1]);
      var element2 = dom.childAt(element0, [3]);
      var element3 = dom.childAt(fragment, [20, 1]);
      var element4 = dom.childAt(fragment, [36, 1]);
      var element5 = dom.childAt(element4, [1]);
      var element6 = dom.childAt(element4, [3]);
      var element7 = dom.childAt(element4, [5]);
      element(env, element1, context, "bs-bind-tooltip", [], {"content": "A tooltip!"});
      element(env, element2, context, "bs-bind-tooltip", [], {"title": "Another tooltip!"});
      element(env, element3, context, "bs-bind-tooltip", [get(env, context, "testObject.sticky")], {});
      element(env, element5, context, "bs-bind-popover", [get(env, context, "hoverPop")], {});
      element(env, element6, context, "bs-bind-popover", [get(env, context, "clickPop")], {});
      element(env, element7, context, "bs-bind-popover", [get(env, context, "templPop")], {});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/progressbar"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, inline = hooks.inline;
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
        var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
        var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
        var morph2 = dom.createMorphAt(fragment,5,5,contextualElement);
        inline(env, morph0, context, "bs-progressbar", [], {"type": "success", "progress": "35"});
        inline(env, morph1, context, "bs-progressbar", [], {"type": "warning", "progress": "20"});
        inline(env, morph2, context, "bs-progressbar", [], {"type": "danger", "progress": "10"});
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","progress-bar");
      var el2 = dom.createTextNode("Progress Bar");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("blockquote");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("small");
      var el4 = dom.createTextNode("By Bootstrap");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","basic-usage");
      var el2 = dom.createTextNode("Basic usage");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{bs-progress progress=60}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("strong");
      var el3 = dom.createTextNode("Simple as that! a single short line, compared to ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("a");
      dom.setAttribute(el3,"href","http://getbootstrap.com/components/#progress");
      var el4 = dom.createTextNode("Bootstarp Tags");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" 5 long lines that\nproduces the same result.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("The progress component respects all ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("aria");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" tags mentioned in ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Bootstrap");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" documentation.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("hr");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("blockquote");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Progress bars use some of the same button and alert classes for consistent styles\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("small");
      var el4 = dom.createTextNode("By Bootstrap");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{bs-progress progress=40 type=\"success\"}}\n    {{bs-progress progress=20 type=\"info\"}}\n    {{bs-progress progress=60 type=\"warning\"}}\n    {{bs-progress progress=80 type=\"danger\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("hr");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("The ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("progress");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property can be bound to a controller property:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{bs-progress progressBinding=\"prog\"}}\n    {{bs-button clicked=\"increment\" content=\"Increment!\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Controller sample code:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsProgressbarController = Ember.Controller.extend({\n  prog: 0,\n  incrementBy: 20,\n  increment: function() {\n    if (this.prog < 100) {\n      return this.incrementProperty(\"prog\", this.incrementBy);\n    } else {\n      return this.set(\"prog\", this.incrementBy);\n    }\n  }\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","striped");
      var el2 = dom.createTextNode("Striped");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("blockquote");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Uses a gradient to create a striped effect. Not available in IE8.\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("small");
      var el4 = dom.createTextNode("By Bootstrap");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("This is simply done by setting the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("stripped=true");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","animated");
      var el2 = dom.createTextNode("Animated");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("In addition to ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("stripped=true");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(", add ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("animated=true");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property to animate the stripes right to left.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{bs-progress progress=45 stripped=true animated=true}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","stacked");
      var el2 = dom.createTextNode("Stacked");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Multiple bars can be placed into the same ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("bs-progress");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" to stack them:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{#bs-progress}}\n        {{bs-progressbar type=\"success\" progress=\"35\"}}\n        {{bs-progressbar type=\"warning\" progress=\"20\"}}\n        {{bs-progressbar type=\"danger\" progress=\"10\"}}\n    {{/bs-progress}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, block = hooks.block;
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
      var element0 = dom.childAt(fragment, [18]);
      var element1 = dom.childAt(fragment, [26]);
      var element2 = dom.childAt(fragment, [40]);
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [6]),1,1);
      var morph1 = dom.createMorphAt(element0,1,1);
      var morph2 = dom.createMorphAt(element0,3,3);
      var morph3 = dom.createMorphAt(element0,5,5);
      var morph4 = dom.createMorphAt(element0,7,7);
      var morph5 = dom.createMorphAt(element1,1,1);
      var morph6 = dom.createMorphAt(element1,3,3);
      var morph7 = dom.createMorphAt(element2,1,1);
      var morph8 = dom.createMorphAt(element2,3,3);
      var morph9 = dom.createMorphAt(element2,5,5);
      var morph10 = dom.createMorphAt(element2,7,7);
      var morph11 = dom.createMorphAt(dom.childAt(fragment, [46]),1,1);
      var morph12 = dom.createMorphAt(dom.childAt(fragment, [54]),1,1);
      inline(env, morph0, context, "bs-progress", [], {"progress": 60});
      inline(env, morph1, context, "bs-progress", [], {"progress": 40, "type": "success"});
      inline(env, morph2, context, "bs-progress", [], {"progress": 20, "type": "info"});
      inline(env, morph3, context, "bs-progress", [], {"progress": 60, "type": "warning"});
      inline(env, morph4, context, "bs-progress", [], {"progress": 80, "type": "danger"});
      inline(env, morph5, context, "bs-progress", [], {"progressBinding": "prog"});
      inline(env, morph6, context, "bs-button", [], {"clicked": "increment", "title": "Increment!"});
      inline(env, morph7, context, "bs-progress", [], {"progress": 40, "type": "success", "stripped": true});
      inline(env, morph8, context, "bs-progress", [], {"progress": 20, "type": "info", "stripped": true});
      inline(env, morph9, context, "bs-progress", [], {"progress": 60, "type": "warning", "stripped": true});
      inline(env, morph10, context, "bs-progress", [], {"progress": 80, "type": "danger", "stripped": true});
      inline(env, morph11, context, "bs-progress", [], {"progress": 45, "stripped": true, "animated": true});
      block(env, morph12, context, "bs-progress", [], {}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/tabs-panes"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Tab Component");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","tab-panes");
      var el2 = dom.createTextNode("Tab Panes");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Defining ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" covers the Tabs rendering and help you to interact with the selected tab. But usually some content should be rendered as a response for a tab click right?");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("This is where ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Tab Panes");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" come into play, a tab pane is the content area of each rendered tab, when a tab is selected, the corresponding ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("tab pane");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" becomes visible, see below for the possible options.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Tab Panes expects a ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("contentBinding");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property just like the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("bs-tabs");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" component, the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Tabs Panes");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" component also must be aware of the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("bs-tabs");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" component it is bound to by specifying the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("items-id");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property set to the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("id");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" of the corresponding ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("bs-tabs");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-tabs id=\"tabs1\" contentBinding=\"tabsMeta\" default=\"Foo\"}}\n{{bs-tabs-panes items-id=\"tabs1\" contentBinding=\"tabsMeta\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("An ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("id");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" property is required for the ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("em");
      var el4 = dom.createTextNode("bs-tabs");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(".");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("The ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("em");
      var el4 = dom.createTextNode("bs-tabs-panes");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" generates a tab pane per element in the ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("em");
      var el4 = dom.createTextNode("content");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" array.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("The ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("items-id");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" property must refer to the ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("id");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" of the ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("bs-tabs");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" component.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createTextNode("If you like one tab to be activated by default, set the ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("default");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" property of the ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("em");
      var el4 = dom.createTextNode("bs-tabs");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" component to a title of the tab you would like to be activated by default.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Here is the controller ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("tabsPanesOptions");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("SomeController = Ember.Controller.extend({\n    tabsMeta: Ember.A([\n            Ember.Object.create({ title: 'Foo', template: 'tabs/foo-tabpane', controller: 'ShowcaseComponentsTabsFoo'}),\n            Ember.Object.create({ title: 'Bar', template: 'tabs/bar-tabpane'})\n    ]);\n});\n\nThe `template: 'some-template'` defines what template to render in the corresponding _Tab Pane_ when the Tab is selected.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Note that for the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("Foo");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" tab, a ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("controller");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" property was defined, calling ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("{{controller}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" within the tab pane template ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("tabs/foo-tabpane");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" will point to the specified ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("ShowcaseComponentsTabsFoo");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" controller instead of the default controller\nwhich is the controller of the template the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("{{bs-tabs-panes}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" was called from.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Thats all needed! awesome isn't it?");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, block = hooks.block, inline = hooks.inline;
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
      var element0 = dom.childAt(fragment, [8]);
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
      var morph1 = dom.createMorphAt(element0,1,1);
      var morph2 = dom.createMorphAt(element0,3,3);
      block(env, morph0, context, "link-to", ["show_components.tabs"], {}, child0, null);
      inline(env, morph1, context, "bs-tabs", [], {"id": "tabs1", "contentBinding": "tabsMeta", "default": "Foo"});
      inline(env, morph2, context, "bs-tabs-panes", [], {"items-id": "tabs1", "contentBinding": "tabsMeta"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/tabs-with-routes"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("User Profile");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","tabs-in-conjuction-with-routes");
      var el2 = dom.createTextNode("Tabs in conjuction with Routes");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Rendering tab content can be simply done by providing a template per tab using the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("bs-tabs-panes");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" component,\nAnother possiblity is to have a ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("route per tab");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" for rendering tabs contents, Choose this approach if:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("ul");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createElement("strong");
      var el4 = dom.createTextNode("You need your tabs to be bookmarkable, this is possible because each route is bound to some URL path.");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      var el3 = dom.createElement("strong");
      var el4 = dom.createTextNode("Your tabs are complicated and have a lot of logic and you need a controller per tab.");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("If one or more of the reasons above makes sense to you, read on, otherwise use ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("bs-tabs-panes");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" because its setup is much simpler.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","users-profile-example");
      var el2 = dom.createTextNode("Users Profile Example");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("This is much easier to explain by example, so for the sake of example, we'll build a User profile with 3 tabs.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","defining-routes");
      var el2 = dom.createTextNode("Defining routes");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("First, lets define the routes of the User profile:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("this.resource('user', function() {\n  this.route('general');\n  this.route('privacy');\n  return this.route('activities');\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("A resource is required per tabs component, here we define the resource as ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("user");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" because tabs deals with managing a ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("User");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" and a ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("@route");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" is required per tab.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","putting-the-tabs-component-in-the-resource-template-");
      var el2 = dom.createTextNode("Putting the Tabs component in the Resource template.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("In Ember.js, every resource page has its own main template, nested routes are rendered within the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("resource");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" page, with such hierarchy, it makes sense to put the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("tabs component");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" in the resource page so it will be available for any nested route that the user visits.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Content goes into the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("user");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" template.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{bs-tabs contentBinding=\"tabsMeta\"}}\n    {{outlet}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("The ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("tabsMeta");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" is an array of the Tabs metadata in the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("UserController");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(":");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("\nApp.UserController = Ember.Controller.extend({\n  tabsMeta: [\n    Ember.Object.create({title: 'General', linkTo: 'user.general'}),\n    Ember.Object.create({title: 'Privacy', linkTo: 'user.privacy'}),\n    Ember.Object.create({title: 'Activities', linkTo: 'user.activities'})\n  ]\n});\n`");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("The ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("outlet");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" is important so the content of each tab will be rendered beneath the tabs component.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","defining-templates");
      var el2 = dom.createTextNode("Defining Templates");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Simply define a template per nested route, just like you would do if each nested route wouldnt be apart of the tab component.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","live-example");
      var el2 = dom.createTextNode("Live example");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Want to see it alive? take a look here: ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, block = hooks.block;
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
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [40]),1,1);
      block(env, morph0, context, "link-to", ["user.general"], {}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/tabs"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Tab Panes");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","tabs");
      var el2 = dom.createTextNode("Tabs");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Tabs are like Pills but styled differently,\nThe share exactly the same concepts, so this page doesn't repeat everything, visit Pills for the complete details.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","simple-tabs");
      var el2 = dom.createTextNode("Simple Tabs");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("strong");
      var el3 = dom.createTextNode("Selected");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(": ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("    {{bs-tabs contentBinding=\"content\" selectedBinding=\"selected\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Controller's code:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsTabsController = Ember.Controller.extend({\n  content: ['Home', 'Profile', 'Messages']\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","panes");
      var el2 = dom.createTextNode("Panes");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Please see ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" for more info about Tab Panes.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, content = hooks.content, block = hooks.block;
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
      var element0 = dom.childAt(fragment, [6]);
      var morph0 = dom.createMorphAt(element0,1,1);
      var morph1 = dom.createMorphAt(element0,7,7);
      var morph2 = dom.createMorphAt(dom.childAt(fragment, [16]),1,1);
      inline(env, morph0, context, "bs-tabs", [], {"contentBinding": "content", "selectedBinding": "selected"});
      content(env, morph1, context, "selected");
      block(env, morph2, context, "link-to", ["show_components.tabs-panes"], {}, child0, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/well"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    I am in a well, click me!\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child1 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    Look, I'm in a large well!\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  var child2 = (function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.1",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    Look, I'm in a small well!\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
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
        return fragment;
      }
    };
  }());
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","well");
      var el2 = dom.createTextNode("Well");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","default-well");
      var el2 = dom.createTextNode("Default Well");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Here is a default well, but ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("strong");
      var el3 = dom.createTextNode("pay attention");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" that it is clickable, the click will be propagated to the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("strong");
      var el3 = dom.createTextNode("controller");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(".");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{#bs-well clicked=\"wellClick\"}}\nI am in a well!\n{{/bs-well}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("wellClick");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" is the function name in the ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("strong");
      var el3 = dom.createTextNode("controller");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(".");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","optional-classes");
      var el2 = dom.createTextNode("Optional classes");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("As explained by Bootstrap:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("blockquote");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Control padding and rounded corners with two optional modifier classes.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h3");
      dom.setAttribute(el1,"id","large-well");
      var el2 = dom.createTextNode("Large Well");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{#bs-well large=true}}\nLook, I'm in a large well!\n{{/bs-well}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("b");
      var el3 = dom.createTextNode("You can set large well by adding ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("class=\"well-lg\"");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" or just set the ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("large");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" property to true");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h3");
      dom.setAttribute(el1,"id","small-well");
      var el2 = dom.createTextNode("Small Well");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{#bs-well small=true}}\nLook, I'm in a small well!\n{{/bs-well}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("b");
      var el3 = dom.createTextNode("You can set large well by adding ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("class=\"well-sm\"");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" or just set the ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("code");
      var el4 = dom.createTextNode("small");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" property to true");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","component-properties");
      var el2 = dom.createTextNode("Component Properties");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","table-responsive");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("table");
      dom.setAttribute(el2,"class","table table-bordered table-striped");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("thead");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      dom.setAttribute(el5,"style","width: 150px;");
      var el6 = dom.createTextNode("Property");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("th");
      var el6 = dom.createTextNode("Description");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("tbody");
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("large");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("If true, a large well ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("will");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" be rendered by adding the ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("strong");
      var el7 = dom.createTextNode("well-lg");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" class.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("small");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("If true, a small ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("em");
      var el7 = dom.createTextNode("well");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" will be rendered by adding the ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("strong");
      var el7 = dom.createTextNode("well-sm");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" class.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n            ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("tr");
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("clicked");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n                ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("td");
      var el6 = dom.createTextNode("Triggers the specified function name on the ");
      dom.appendChild(el5, el6);
      var el6 = dom.createElement("strong");
      var el7 = dom.createTextNode("controller");
      dom.appendChild(el6, el7);
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode(" immediately when user clicks the area of the well.");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n            ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, block = hooks.block;
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
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [6]),1,1);
      var morph1 = dom.createMorphAt(dom.childAt(fragment, [20]),1,1);
      var morph2 = dom.createMorphAt(dom.childAt(fragment, [28]),1,1);
      block(env, morph0, context, "bs-well", [], {"clicked": "wellClick"}, child0, null);
      block(env, morph1, context, "bs-well", [], {"large": true}, child1, null);
      block(env, morph2, context, "bs-well", [], {"small": true}, child2, null);
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["show_components/wizard"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"id","wizard");
      var el2 = dom.createTextNode("Wizard");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Wizard is a multi step view component with transitioning workflow,\nWizard has a lot in common with the Tabs component as you can think about each Wizard step as a tab & pane, the main different is that with the Wizard component the transitioning order of the steps is defined a head.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","wizard-sample");
      var el2 = dom.createTextNode("Wizard Sample");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Defining an inline content Wizard with blocks is the simplest form of using the wizard component.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-wizard contentBinding=\"steps\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("contentBinding=\"steps\"");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" defines a property named ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("steps");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" in the current controll that defines the wizard steps,\nHere is the current controll of this example:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsWizardController = Ember.Controller.extend({\n  init: function() {\n    this._super();\n    this.set('steps', Ember.A([\n      Ember.Object.create({title: 'Foo', template: 'tabs/foo-tabpane'}),\n      Ember.Object.create({title: 'Bar', template: 'tabs/bar-tabpane'}),\n      Ember.Object.create({title: 'Baz', template: 'tabs/baz-tabpane'})\n    ]));\n  }\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","disable-step-selection");
      var el2 = dom.createTextNode("Disable Step Selection");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Sometimes it makes sense to create a wizard with fixed step flow, this can be done by disabling the steps by providing ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("code");
      var el3 = dom.createTextNode("disabled=true");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" per step.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("It is also possible to disallow moving to previous step if needed.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-wizard prevAllowed=false contentBinding=\"stepsNoPrev\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsWizardController = Ember.Controller.extend({\n  init: function() {\n    this._super();\n    this.set('steps', Ember.A([\n      Ember.Object.create({title: 'Step1', template: 'tabs/foo-tabpane', disabled=\"true\"}),\n      Ember.Object.create({title: 'Step2', template: 'tabs/bar-tabpane', disabled=\"true\"}),\n      Ember.Object.create({title: 'Step3', template: 'tabs/baz-tabpane', disabled=\"true\"})\n    ]));\n  }\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"id","programatically-created-wizard");
      var el2 = dom.createTextNode("Programatically Created Wizard");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Creating a wizard programatically should be used if rendering a Wizard is based on some action such as a button click, for example, a modal can be rendered by pressing a button that will render a Wizard within a modal as the example shown below:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-example");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-html");
      var el3 = dom.createTextNode("{{bs-button title=\"Start Wizard\" type=\"primary\" clicked=\"createWizard\"}}");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("Controller's code:");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("pre");
      var el2 = dom.createElement("code");
      dom.setAttribute(el2,"class","lang-javascript");
      var el3 = dom.createTextNode("Showcase.ShowComponentsWizardController = Ember.Controller.extend({\n  actions: {\n    createWizard: function() {\n      var body;\n      body = Bootstrap.BsWizardComponent.extend({\n        content: [\n          Ember.Object.create({title: 'Step1', template: 'wizard/step1', disabled: true}),\n          Ember.Object.create({title: 'Step2', template: 'wizard/step2', disabled: true}),\n          Ember.Object.create({title: 'Step3', template: 'wizard/step3', disabled: true})\n        ],\n        targetObject: this,\n        onNext: \"onNext\",\n        onPrev: \"onPrev\",\n        onFinish: 'onFinish'\n      });\n      Bootstrap.ModalManager.open('manualModal', 'Wizard Title...', body, null, this);\n    },\n    onNext: function() {\n      return console.log('NEXT');\n    },\n    onPrev: function() {\n      return console.log('PREV');\n    },\n    onFinish: function() {\n      Bootstrap.ModalManager.close('manualModal');\n      return Bootstrap.NM.push('Wizard completed!');\n    }\n  }\n});");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("The controller is responsible for creating the Modal and the Wizard components, our controller listens to the Wizard ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("em");
      var el3 = dom.createTextNode("onFinish");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode(" event and close the modal as a response plus send an application notification.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline;
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
      var morph0 = dom.createMorphAt(dom.childAt(fragment, [8]),1,1);
      var morph1 = dom.createMorphAt(dom.childAt(fragment, [22]),1,1);
      var morph2 = dom.createMorphAt(dom.childAt(fragment, [32]),1,1);
      inline(env, morph0, context, "bs-wizard", [], {"contentBinding": "steps"});
      inline(env, morph1, context, "bs-wizard", [], {"prevAllowed": false, "contentBinding": "stepsNoPrev"});
      inline(env, morph2, context, "bs-button", [], {"title": "Start Wizard", "type": "primary", "clicked": "createWizard"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["social-buttons"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","bs-social");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("ul");
      dom.setAttribute(el2,"class","bs-social-buttons");
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("iframe");
      dom.setAttribute(el4,"class","github-btn");
      dom.setAttribute(el4,"src","http://ghbtns.com/github-btn.html?user=ember-addons&repo=bootstrap-for-ember&type=watch&count=true");
      dom.setAttribute(el4,"width","100");
      dom.setAttribute(el4,"height","20");
      dom.setAttribute(el4,"title","Star on GitHub");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("iframe");
      dom.setAttribute(el4,"class","github-btn");
      dom.setAttribute(el4,"src","http://ghbtns.com/github-btn.html?user=ember-addons&repo=bootstrap-for-ember&type=fork&count=true");
      dom.setAttribute(el4,"width","102");
      dom.setAttribute(el4,"height","20");
      dom.setAttribute(el4,"title","Fork on GitHub");
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("li");
      dom.setAttribute(el3,"class","follow-btn");
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("a");
      dom.setAttribute(el4,"href","https://twitter.com/bs_for_ember");
      dom.setAttribute(el4,"class","twitter-follow-button");
      dom.setAttribute(el4,"data-link-color","#0069D6");
      dom.setAttribute(el4,"data-show-count","true");
      var el5 = dom.createTextNode("Follow @bs_for_ember");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n    ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
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
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["tabs/bar-tabpane"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\nController is: ");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, content = hooks.content;
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
      var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      inline(env, morph0, context, "bs-page-header", [], {"title": "BAR ", "sub": "Tab Pane Content"});
      content(env, morph1, context, "controller");
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["tabs/baz-tabpane"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
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
      var hooks = env.hooks, inline = hooks.inline;
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
      inline(env, morph0, context, "bs-page-header", [], {"title": "BAZ", "sub": "Tab Pane Content"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["tabs/foo-tabpane"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\nController is: ");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, content = hooks.content;
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
      var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      inline(env, morph0, context, "bs-page-header", [], {"title": "FOO", "sub": "Tab Pane Content"});
      content(env, morph1, context, "controller");
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["user"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
      var hooks = env.hooks, inline = hooks.inline, content = hooks.content;
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
      var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
      dom.insertBoundary(fragment, null);
      dom.insertBoundary(fragment, 0);
      inline(env, morph0, context, "bs-tabs", [], {"contentBinding": "tabsMeta"});
      content(env, morph1, context, "outlet");
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["user/activities"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
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
      var hooks = env.hooks, inline = hooks.inline;
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
      inline(env, morph0, context, "bs-page-header", [], {"title": "Activities", "sub": "User latest Activities"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["user/general"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
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
      var hooks = env.hooks, inline = hooks.inline;
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
      inline(env, morph0, context, "bs-page-header", [], {"title": "General", "sub": "User general details"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["user/privacy"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
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
      var hooks = env.hooks, inline = hooks.inline;
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
      inline(env, morph0, context, "bs-page-header", [], {"title": "Privacy", "sub": "User Privacy details"});
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["wizard/step1"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      var el2 = dom.createTextNode(" Step1 ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
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
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["wizard/step2"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      var el2 = dom.createTextNode("Step 2");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
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
      return fragment;
    }
  };
}()));

Ember.TEMPLATES["wizard/step3"] = Ember.HTMLBars.template((function() {
  return {
    isHTMLBars: true,
    revision: "Ember@1.11.1",
    blockParams: 0,
    cachedFragment: null,
    hasRendered: false,
    build: function build(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h1");
      var el2 = dom.createTextNode("Step 3 ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    render: function render(context, env, contextualElement) {
      var dom = env.dom;
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
      return fragment;
    }
  };
}()));
(function() {

(function() {
  var Bootstrap, Showcase;

  Bootstrap = window.Bootstrap;

  Showcase = window.Showcase = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_ACTIVE_GENERATION: true
  });

  Ember.ENV = {
    HELPER_PARAM_LOOKUPS: true
  };

  Ember.Handlebars.registerHelper('raw', function(value) {
    return value.fn(value);
  });


})();

(function() {

(function() {
  Showcase.Router.map(function() {
    return this.resource('show_components', function() {
      this.route('alert');
      this.route('breadcrumbs');
      this.route('modal');
      this.route('label');
      this.route('badge');
      this.route('well');
      this.route('list-group');
      this.route('panel');
      this.route('page-header');
      this.route('button');
      this.route('buttonGroup');
      this.route('progressbar');
      this.route('pills');
      this.route('tabs');
      this.route('tabs-panes');
      this.route('wizard');
      this.route('items_action_bar');
      this.route('tabs-with-routes');
      this.route('notifications');
      this.route('growl-notif');
      this.route('popover');
      return this.resource('user', function() {
        this.route('general');
        this.route('privacy');
        return this.route('activities');
      });
    });
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ApplicationRoute = Ember.Route.extend({
    model: function() {
      return [
        Ember.Object.create({
          title: "Alert",
          route: "show_components.alert"
        }), Ember.Object.create({
          title: "Breadcrumbs",
          route: "show_components.breadcrumbs",
          "new": true
        }), Ember.Object.create({
          title: "Modal",
          route: "show_components.modal"
        }), Ember.Object.create({
          title: "Label",
          route: "show_components.label"
        }), Ember.Object.create({
          title: "Badge",
          route: "show_components.badge"
        }), Ember.Object.create({
          title: "Well",
          route: "show_components.well"
        }), Ember.Object.create({
          title: "List Group",
          route: "show_components.list-group"
        }), Ember.Object.create({
          title: "Panel",
          route: "show_components.panel"
        }), Ember.Object.create({
          title: "Page Header",
          route: "show_components.page-header"
        }), Ember.Object.create({
          title: "Button",
          route: "show_components.button"
        }), Ember.Object.create({
          title: "Button Group",
          route: "show_components.buttonGroup"
        }), Ember.Object.create({
          title: "Progressbar",
          route: "show_components.progressbar"
        }), Ember.Object.create({
          title: "Tooltips & Popover",
          "new": true,
          route: "show_components.popover"
        }), Ember.Object.create({
          title: "Nav - Pills",
          route: "show_components.pills"
        }), Ember.Object.create({
          title: "Nav - Tabs",
          route: "show_components.tabs"
        }), Ember.Object.create({
          title: "Nav - Tabs Panes",
          route: "show_components.tabs-panes"
        }), Ember.Object.create({
          title: "Nav - Tabs with Routes",
          special: true,
          route: "show_components.tabs-with-routes"
        }), Ember.Object.create({
          title: "Wizard",
          special: true,
          route: "show_components.wizard"
        }), Ember.Object.create({
          title: "Notifications",
          special: true,
          route: "show_components.notifications"
        }), Ember.Object.create({
          title: "Items Action Bar",
          "new": true,
          route: "show_components.items_action_bar"
        }), Ember.Object.create({
          title: "Growl Notifications",
          special: true,
          route: "show_components.growl-notif"
        })
      ];
    }
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsPopoverRoute = Ember.Route.extend({
    renderTemplate: function() {
      var controller;
      this.render();
      controller = this.controllerFor('ShowComponentsTooltipBox');
      return this.render('bs-tooltip-box', {
        outlet: "bs-tooltip-box",
        controller: controller,
        into: "application"
      });
    }
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsAlertController = Ember.Controller.extend({
    actions: {
      submit: function() {
        return alert("Action taken by controller!");
      },
      didAlertClosed: function() {
        return alert("From controller: The -closed- event was triggered.");
      },
      didAlertClose: function() {
        return alert("From controller: The -close- event was triggered.");
      }
    }
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsButtonController = Ember.Controller.extend({
    isButtonDisabled: false,
    loadingState: null,
    loadingState1: null,
    actions: {
      disableButton: function() {
        return this.set('isButtonDisabled', true);
      },
      startLoading: function() {
        var _this = this;
        this.set('loadingState', 'loading');
        return Ember.run.later(function() {
          return _this.set('loadingState', null);
        }, 2000);
      },
      startLoading1: function() {
        var _this = this;
        this.set('loadingState1', 'loading');
        return Ember.run.later(function() {
          return _this.set('loadingState1', 'completed');
        }, 2000);
      },
      buttonWithParam: function(expectedMyself) {
        return alert("Passed controller as a param: " + expectedMyself);
      }
    }
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsItemsActionBarController = Ember.Controller.extend({
    actionsInBar: [
      [
        {
          title: 'To Alerts',
          disabled: function(selection) {
            var _ref;
            if (selection.size < 1 || (selection != null ? (_ref = selection[0]) != null ? _ref.title : void 0 : void 0) !== 'Alerts') {
              return true;
            }
          },
          transitionTo: 'show_components.alert'
        }, {
          title: 'To Panels',
          transitionTo: 'show_components.panel',
          disabled: function(selection) {
            var _ref;
            if (selection.size < 1 || (selection != null ? (_ref = selection[0]) != null ? _ref.title : void 0 : void 0) !== 'Panels') {
              return true;
            }
          }
        }
      ], [
        {
          title: 'To Wizard',
          disabled: function(selection) {
            var _ref;
            if (selection.size < 1 || (selection != null ? (_ref = selection[0]) != null ? _ref.title : void 0 : void 0) !== 'Wizards') {
              return true;
            }
          },
          clickActionName: 'wizard'
        }
      ]
    ],
    actions: {
      wizard: function(selection) {
        return alert("Wizard pressed!");
      }
    },
    items: [
      Ember.Object.create({
        title: 'Alerts'
      }), Ember.Object.create({
        title: 'Panels'
      }), Ember.Object.create({
        title: 'Wizards'
      })
    ]
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsPanelController = Ember.Controller.extend({
    actions: {
      panelClicked: function() {
        return alert("Hello from controller: A click in a panel!");
      },
      panelClosed: function() {
        return alert("Hello from controller: The panel was closed!");
      }
    }
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsPopoverController = Ember.Controller.extend({
    testObject: Ember.Object.createWithMixins({
      sticky: (function() {
        return Ember.Object.create({
          user: this,
          content: 'know this is a sticky tooltip! You can hover over it.',
          trigger: 'hover',
          sticky: true
        });
      }).property()
    }),
    user: Ember.Object.create({
      firstNameBinding: 'content.name',
      title: 'rename',
      template: 'name: {{input type="text" value=content.name}}',
      content: {
        name: 'John'
      },
      trigger: 'hover',
      sticky: true
    }),
    hoverPop: Ember.Object.create({
      title: "I'm a title!",
      content: "And i'm a content!",
      trigger: "hover",
      placement: "right",
      sticky: true
    }),
    clickPop: Ember.Object.create({
      title: "Clickable!",
      content: '<h1>Hello</h1><small>This is a clickable popover with html content!</small>',
      placement: "left",
      html: true
    }),
    templPop: Ember.Object.create({
      firstName: 'numbers',
      title: 'Popover with Template',
      template: 'footer',
      content: {
        numbers: [1, 2, 3]
      }
    })
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsProgressbarController = Ember.Controller.extend({
    prog: 0,
    incrementBy: 20,
    actions: {
      increment: function() {
        if (this.prog < 100) {
          return this.incrementProperty("prog", this.incrementBy);
        } else {
          return this.set("prog", this.incrementBy);
        }
      }
    }
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsTooltipBoxController = Bootstrap.TooltipBoxController;

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsWellController = Ember.Controller.extend({
    wellClick: function() {
      return alert("Hello from controller: A click in a well!");
    }
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsButtonGroupController = Ember.Controller.extend({
    options: ['Home', 'Profile', 'Messages'],
    options2: ['Admin', 'Settings'],
    optionsWithMeta: [
      Ember.Object.create({
        title: 'Create',
        type: 'primary'
      }), Ember.Object.create({
        title: 'Destroy',
        type: 'danger'
      })
    ]
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsPillsController = Ember.Controller.extend({
    content: ['Home', 'Profile', 'Messages'],
    init: function() {
      this._super();
      this.set('content1', Ember.A([
        Ember.Object.create({
          title: 'Home',
          "default": true,
          disabled: false
        }), Ember.Object.create({
          title: 'Admin',
          disabled: true
        })
      ]));
      return this.set('selected1', this.get('content1').objectAt(0));
    },
    contentChanged: (function() {
      return console.log("Selection has changed to: " + (this.get('selected')));
    }).observes('selected'),
    actions: {
      disableHome: function() {
        return this.get('content1').objectAt(0).set('disabled', true);
      }
    }
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsGrowlNotifController = Ember.Controller.extend({
    actions: {
      pushInfo: function() {
        return Bootstrap.GNM.push('INFO!', 'Hello, this is just an info message.', 'info');
      },
      pushSuccess: function() {
        return Bootstrap.GNM.push('SUCCESS!', 'Successfully performed operation!', 'success');
      },
      pushWarn: function() {
        return Bootstrap.GNM.push('WARN!', 'Could not perform operation!', 'warning');
      },
      pushDanger: function() {
        return Bootstrap.GNM.push('Danger!', 'System is halting!', 'danger');
      }
    }
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsListGroupController = Ember.Controller.extend({
    listSimple: Ember.A(['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus']),
    listWithBadges: Ember.A([
      Ember.Object.create({
        title: 'Inbox',
        badge: '45'
      }), Ember.Object.create({
        title: 'Sent',
        badge: '33'
      })
    ]),
    listWithSub: Ember.A([
      Ember.Object.create({
        title: 'Inbox',
        sub: 'Incoming mails folder',
        badge: '45'
      }), Ember.Object.create({
        title: 'Sent',
        sub: 'Sent emails folder',
        badge: '33'
      })
    ])
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsModalController = Ember.Controller.extend({
    message: 'Welcome to Bootstrap for Ember..!',
    loadingState: null,
    modalInstance: null,
    myModalButtons: [
      Ember.Object.create({
        title: 'Submit',
        clicked: "submit"
      }), Ember.Object.create({
        title: 'Cancel',
        clicked: "cancel",
        dismiss: 'modal'
      })
    ],
    manualButtons: [
      Ember.Object.create({
        title: 'Submit',
        clicked: "submitManual"
      }), Ember.Object.create({
        title: 'Cancel',
        dismiss: 'modal'
      })
    ],
    loadingManualButtons: [
      Ember.Object.create({
        title: 'Submit',
        clicked: "submitLoadingManual",
        loadingText: "Saving..."
      }), Ember.Object.create({
        title: 'Cancel',
        dismiss: 'modal'
      })
    ],
    actions: {
      submit: function() {
        Bootstrap.NM.push('Successfully submitted modal', 'success');
        return Bootstrap.ModalManager.hide('myModal');
      },
      cancel: function() {
        return Bootstrap.NM.push('Modal was cancelled', 'info');
      },
      show: function() {
        return Bootstrap.ModalManager.show('myModal');
      },
      submitManual: function() {
        Bootstrap.NM.push('Modal destroyed!', 'success');
        return Bootstrap.ModalManager.close('manualModal');
      },
      submitLoadingManual: function() {
        var _this = this;
        Ember.set(this.modalInstance, 'loadingState', 'loading');
        return Ember.run.later(function() {
          Ember.set(_this.modalInstance, 'loadingState', 'success');
          return Ember.run.later(function() {
            return Ember.set(_this.modalInstance, 'loadingState', null);
          }, 2000);
        }, 2000);
      },
      createModalProgramatically: function() {
        var body;
        body = Ember.View.extend({
          template: Ember.Handlebars.compile('This is a programatic ')
        });
        return Bootstrap.ModalManager.open('manualModal', 'Hello', 'demo-template', this.manualButtons, this);
      },
      createLoadingModalProgramatically: function() {
        var body;
        body = Ember.View.extend({
          template: Ember.Handlebars.compile('This is a programatic ')
        });
        return this.set('modalInstance', Bootstrap.ModalManager.open('manualModal', 'Hello', 'demo-template', this.loadingManualButtons, this));
      },
      confirm: function() {
        return Bootstrap.ModalManager.confirm(this);
      },
      modalConfirmed: function() {
        return Bootstrap.NM.push('Confirmed!', 'success');
      },
      modalCanceled: function() {
        return Bootstrap.NM.push('Cancelled!', 'info');
      }
    }
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsNotificationsController = Ember.Controller.extend({
    actions: {
      pushInfo: function() {
        return Bootstrap.NM.push('Hello, this is just an info message.', 'info');
      },
      pushWarn: function() {
        return Bootstrap.NM.push('Could not perform operation!', 'warning');
      },
      pushSuccess: function() {
        return Bootstrap.NM.push('Successfully performed operation!', 'success');
      },
      pushDanger: function() {
        return Bootstrap.NM.push('Danger! system is halting!', 'danger');
      }
    }
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsTabsController = Ember.Controller.extend({
    content: ['Home', 'Profile', 'Messages'],
    init: function() {
      this._super();
      this.set('selected', 'Home');
      return this.set('tabsPanesOptions', Ember.A([
        Ember.Object.create({
          title: 'Foo',
          template: 'tabs/foo-tabpane'
        }), Ember.Object.create({
          title: 'Bar',
          template: 'tabs/bar-tabpane'
        })
      ]));
    }
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowcaseComponentsTabsFooController = Ember.Controller.extend();

}).call(this);


})();

(function() {

(function() {
  Showcase.ShowComponentsTabsPanesController = Ember.Controller.extend({
    tabsMeta: Ember.A([
      Ember.Object.create({
        title: 'Foo',
        template: 'tabs/foo-tabpane',
        controller: 'ShowcaseComponentsTabsFoo'
      }), Ember.Object.create({
        title: 'Bar',
        template: 'tabs/bar-tabpane'
      })
    ])
  });

}).call(this);


})();

(function() {

(function() {
  var _this = this;

  Showcase.ShowComponentsWizardController = Ember.Controller.extend({
    init: function() {
      this._super();
      this.set('steps', Ember.A([
        Ember.Object.create({
          title: 'Foo',
          template: 'tabs/foo-tabpane'
        }), Ember.Object.create({
          title: 'Bar',
          template: 'tabs/bar-tabpane'
        }), Ember.Object.create({
          title: 'Baz',
          template: 'tabs/baz-tabpane'
        })
      ]));
      return this.set('stepsNoPrev', Ember.A([
        Ember.Object.create({
          title: 'Step1',
          template: 'tabs/foo-tabpane',
          disabled: true
        }), Ember.Object.create({
          title: 'Step2',
          template: 'tabs/bar-tabpane',
          disabled: true
        }), Ember.Object.create({
          title: 'Step3',
          template: 'tabs/baz-tabpane',
          disabled: true
        })
      ]));
    },
    actions: {
      createWizard: function() {
        var body;
        body = Bootstrap.BsWizardComponent.extend({
          content: [
            Ember.Object.create({
              title: 'Step1',
              template: 'wizard/step1',
              disabled: true
            }), Ember.Object.create({
              title: 'Step2',
              template: 'wizard/step2',
              disabled: true
            }), Ember.Object.create({
              title: 'Step3',
              template: 'wizard/step3',
              disabled: true
            })
          ],
          targetObject: this,
          onNext: "onNext",
          onPrev: "onPrev",
          onFinish: 'onFinish'
        });
        return Bootstrap.ModalManager.open('manualModal', 'Wizard Title...', body, null, this);
      },
      onNext: function() {
        return console.log('NEXT');
      },
      onPrev: function() {
        return console.log('PREV');
      },
      onFinish: function() {
        Bootstrap.ModalManager.close('manualModal');
        return Bootstrap.NM.push('Wizard completed!');
      }
    }
  });

}).call(this);


})();

(function() {

(function() {
  Showcase.UserController = Ember.Controller.extend({
    tabsMeta: [
      Ember.Object.create({
        title: 'General',
        linkTo: 'user.general'
      }), Ember.Object.create({
        title: 'Privacy',
        linkTo: 'user.privacy'
      }), Ember.Object.create({
        title: 'Activities',
        linkTo: 'user.activities'
      })
    ]
  });

}).call(this);


})();

(function() {

}).call(this);


})();