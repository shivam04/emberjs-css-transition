import Component from '@ember/component';
const {$} = Ember;

export default Component.extend({
	didInsertElement(){
		this._super(...arguments);
		$('#blah').hide().fadeIn(2000);
	}
});
