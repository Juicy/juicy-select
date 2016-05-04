# juicy-select

Simple Polymer select element with `multiple` support.

### Properties

Name                | Type    | Description
--------------------|---------|-----------------------------------------------------------------------------------------------------
`options`           | Array   | Array of objects to generate select options
`text-property`     | String  | Name of the object property to take text for the options
`value-property`    | String  | Name of the object property to take value for the options
`value`             | String  | Currently selected value, for single selection only (see the `multiple` property)
`multiple`          | Boolean | Same as `<select multiple>`
`selected-property` | String  | Name of the object property to indicate whether it's selected, for multiple selection only (see the `multiple` property)

**Simple select**

```html
<juicy-select 
    caption-text="No favorite country" 
    value="{{model.FavoriteCountry}}" 
    options="{{model.Countries}}" 
    selected-property="Selected$" 
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

**Note:** `<juicy-select>` keeps actual `<select>` element in light DOM. If the `<select>` not is not present withing `<juicy-select>` it will be created.
