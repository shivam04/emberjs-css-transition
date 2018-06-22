import Controller from '@ember/controller';

export default Controller.extend({
	show:false,
	actions:{
		pressed(){
			this.toggleProperty('show');
		}
	}
});
