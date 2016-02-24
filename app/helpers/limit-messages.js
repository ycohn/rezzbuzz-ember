import Ember from 'ember';

export function limitMessages(params/*, hash*/) {
  var messagesLength = params[0].slice(0).length;
  if (messagesLength > 2) {
    return Ember.String.htmlSafe(`<li class="list-group-item">${params[0].slice(0)[messagesLength-1].get('content')}</li><li class="list-group-item">${params[0].slice(0)[messagesLength-2].get('content')}</li><li class="list-group-item">${params[0].slice(0)[messagesLength-3].get('content')}</li>`)
  } else if (messagesLength == 2){
    return Ember.String.htmlSafe(`<li class="list-group-item">${params[0].slice(0)[messagesLength-1].get('content')}</li><li class="list-group-item">${params[0].slice(0)[messagesLength-2].get('content')}</li>`)
  } else if (messagesLength == 1){
    return Ember.String.htmlSafe(`<li class="list-group-item">${params[0].slice(0)[messagesLength-1].get('content')}</li>`)
  }
} 

export default Ember.Helper.helper(limitMessages);
