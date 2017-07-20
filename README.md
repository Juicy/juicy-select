# &lt;juicy-select&gt;

> Simple Polymer select element with `multiple` support.

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

## Demo

[Check it live!](http://juicy.github.io/juicy-select/)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install juicy-select --save
```

Or [download as ZIP](https://github.com/Juicy/juicy-select/archive/master.zip).

## Usage

1. Import Web Components' polyfill (if needed):

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/juicy-select/juicy-select.html">
    ```

3. Start using it!

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

### Notes
- `<juicy-select>` keeps actual `<select>` element in the light DOM. If the `<select>` node is not present within `<juicy-select>`, it will be created.

- `<juicy-select>` is a [hybrid element](https://www.polymer-project.org/2.0/docs/devguide/hybrid-elements).

## [Contributing and Development](CONTRIBUTING.md)

## History

For detailed changelog, check [Releases](https://github.com/Juicy/juicy-select/releases).

## License

MIT
