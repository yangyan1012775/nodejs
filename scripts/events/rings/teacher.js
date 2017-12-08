function Teacher(event, name) {
	this.name = name;
	this.event = event;
	this.lastCount = 0;
	console.log("teacher: constructor");
	this.event.on("ring", () => {
		console.log("ringed");
		if (this.lastCount % 10 === 9) {
			this.event.once("ring", () => {
				this.response();
			});
		}
		this.lastCount++;
	});
}
Teacher.prototype.response = function() {
	console.log("teacher <" + this.name + "> repsonsed");
};
exports.Teacher = Teacher;
