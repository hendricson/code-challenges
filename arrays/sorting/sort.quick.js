// Quicksort algorithm implementation
Array.prototype.quicksort = function (){
	var a_left = [];
    var a_right = [];
	if (this.length <= 1) return this;
	for (var i = 1; i < this.length; i++) {
		if (this[i]<this[0]) {
			a_left.push(this[i]);
		} else if (this[i]>this[0]) {
			a_right.push(this[i]);
		} else {
			a_right = [this[0]].concat(a_right);
		}
	}
	return a_left.quicksort().concat( this[0] , a_right.quicksort());
}



