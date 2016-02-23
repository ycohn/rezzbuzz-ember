import Ember from 'ember';

export function prettyDate(uglyDate) {
  return moment(uglyDate[0]).format('MMMM Do YYYY');
}

export default Ember.Helper.helper(prettyDate);

// {{prettyDate user.topic.date "LL"}}