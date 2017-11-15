function timing(ms) {
	ms = ms || 1000;
  return new Promise(function(resolve, reject) {
	  setTimeout(() => {
		  resolve(ms);
	  }, ms);
  });
}
async function timed() {
   const ms = await timing();
	console.log(ms + " ms passed!");
}

timed()
