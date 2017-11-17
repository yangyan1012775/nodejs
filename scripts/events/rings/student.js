function Student(event, name) {
	this.name = name;
	this.event = event;
	console.log("student: constructor");
	this.event.on("ring", () => {
		console.log("ringed");
		this.response();
	});
}
Student.prototype.response = function() {
	console.log("student <" + this.name + "> repsonsed");
};
exports.Student = Student;
