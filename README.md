# juicy-select

Simple Polymer select element with `multiple` support.

This element is a workaround for Polymer binding issues.

1. IE11 does not support `<template is="dom-repeat">` element inside `<select>`. See the [Polymer issue #1735](https://github.com/Polymer/polymer/issues/1735).
2. The initial value of a `<select>` is being lost when generating options with a `dom-repeat`.

```html
<select value="{{model.SelectedValue::change}}">
	<template is="dom-repeat" items="{{model.Options}}">
		<option value="{{item.Value}}">{{item.Name}}</option>
	</template>
</select>
```

In this case the `value="{{model.SelectedValue::change}}"` binding is executed before options are rendered by the `dom-repeat`.
The HTML `<select>` element can not contain a value which does not exists in it's options collection. This leads to the loss of the initial value.

### Properties

Name                | Type    | Description
--------------------|---------|-----------------------------------------------------------------------------------------------------
`options`           | Array   | Array of objects to generate select options
`text-property`     | String  | Name of the object property to take text for the options
`value-property`    | String  | Name of the object property to take value for the options
`caption-text`      | String  | Text of an empty option, empty option will not be created if the value is not set
`value`             | String  | Currently selected value, for single selection only (see the `multiple` property)
`multiple`          | Boolean | Same as `<select multiple>`
`selected-property` | String  | Name of the object property to indicate whether it's selected, for multiple selection only (see the `multiple` property)

**Simple select**

```html
<juicy-select
    caption-text="No favorite country"
    value="{{model.FavoriteCountry}}"
    options="{{model.Countries}}"
    text-property="Name"
    value-property="Name">
</juicy-select>
```

**Multiple select**

```html
<juicy-select
    multiple="true"
    options="{{model.Countries}}"
    selected-property="Selected"
    text-property="Name"
    value-property="Name">
</juicy-select>
```

**Custom `<select>` node**

```html
<juicy-select
    caption-text="No favorite country"
    value="{{model.FavoriteCountry}}"
    options="{{model.Countries}}"
    text-property="Name"
    value-property="Name">
    <select class="form-control"></select>
</juicy-select>
```

See the [demo](http://juicy.github.io/juicy-select/index.html) for more details.

**Note:** `<juicy-select>` keeps actual `<select>` element in the light DOM. If the `<select>` node is not present within `<juicy-select>`, it will be created.

## License

MIT
