Bootstrap = window.Bootstrap
get = Ember.get
set = Ember.set

Bootstrap.TypeSupport = Ember.Mixin.create(
    classTypePrefix: ""
    classNameBindings: ['typeClass']
    type: 'default'

    typeClass: ( ->
        type = @get 'type'
        type = 'default' if not type?

        pref = @get 'classTypePrefix'
        "#{pref}-#{type}"
    ).property('type')
)