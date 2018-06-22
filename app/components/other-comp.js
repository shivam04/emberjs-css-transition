import Component from '@ember/component';
import TransitionMixin from 'ember-css-transitions/mixins/transition-mixin';

//use TransitionMixin or transition-group(in hbs) 

export default Component.extend(TransitionMixin,{
	transitionClass: 'example'
});
