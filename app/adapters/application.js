import ActiveModelAdapter from 'active-model-adapter';
// import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
// export default ActiveModelAdapter.extend(DataAdapterMixin, {


export default ActiveModelAdapter.extend({
  host: "http://localhost:3000",
  namespace: "api/v1"
  // authorizer: "authorizer:devise"
});
