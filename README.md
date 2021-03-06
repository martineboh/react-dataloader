# react-dataloader
We built the data loading layer so you don't have to.

## Why
The main purpose of this component library is to take care of data loading, store generation, and persistence so that you can focus on views instead of data fetching.

## What's included:
- ObjectLoader
- Datasource
- DependentDatasource
- FilteredDatasource
- Examples

## Usage
```javascript
// Somewhere
var exampleConfig = {
  name: "Parents",
  idAttribute: "id",
  basePath: "http://localhost:8083/api/",
  endpoint: "checklists",
  storeType: "shared"
};

// In your render function
<Datasource {...exampleConfig}>
  <SomeViewComponent>
</Datasource>
```
- SomeViewComponent should expect to receive `(array) collection`, `(object) actions`, and any other props passed to Datasource

#### At Procore we use it in this way
```javascript
<Datasource {...exampleConfig}>
  <Collection>
    <ChecklistCell onSelect={this.onSelect}/>
  </Collection>
</Datasource>
```
- Collection can be thought of as a `layout` component, its inputs are an `(array) collection`, `(object) actions`, and a `(ReactComponent) cell`. It maps over `collection` and returns `cells`.
- This approach allows us to quickly create customizable lists by simply swapping out the layout cell, and the endpoint we're hitting.
