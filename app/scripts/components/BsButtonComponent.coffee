Bootstrap.BsButtonComponent = Ember.Component.extend(Bootstrap.TypeSupport, Bootstrap.SizeSupport,
    layoutName: 'components/bs-button'
    tagName: 'button'
    classNames: ['btn']
    classNameBindings: ['blockClass']
    classTypePrefix: 'btn'
    clickedParam: null
    block: null
    attributeBindings: ['disabled', 'dismiss:data-dismiss', '_type:type', 'style', 'loadingText:data-loading-text', 'failText:data-fail-text', 'successText:data-success-text', 'loading', 'clicked']
    _type: 'button'
    bubbles: true
    allowedProperties: ['title', 'type', 'size', 'block', 'disabled', 'clicked', 'dismiss', 'class', 'loadingText', 'failText', 'successText', 'loading']
    icon_active: undefined
    icon_inactive: undefined
    successText: 'Saved!'
    failText: 'Failed!'

   init: ->
       @_super()
       # If model is an object (may happen when a button is the view class of a collectionView), then assign allowed properties to the button component.
       if @get('model')? and Ember.typeOf(@get('model')) is 'instance'
           c = @get('model')
           @set key, c[key] for key in @get('allowedProperties') when c[key]?
       else
           if not @get('title')?
               @set('title', @get('model'))
       @attributeBindings.pushObject attr for attr of @ when attr.match(/^data-[\w-]*$/)?

    blockClass: ( ->
        if @block then "#{@classTypePrefix}-block" else null
    ).property('block').cacheable()

    click: (evt) ->
        evt.stopPropagation() unless @get('bubbles')
        @sendAction('clicked', @get('clickedParam'))

    loadingChanged: (->
        loading = if @get('loading') isnt null then @get('loading') else "reset"
        Ember.$("##{@elementId}").button(loading)
    ).observes('loading')

    icon: (->
        if @get('isActive') then @get('icon_active') else @get('icon_inactive')
    ).property('isActive')
)

Ember.Handlebars.helper 'bs-button', Bootstrap.BsButtonComponent
