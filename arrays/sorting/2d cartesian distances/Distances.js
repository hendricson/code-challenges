function Distances() {}
Distances.prototype.reorder = function(x, y, json) {
	this.x = x;
	this.y = y;
	this.dots = JSON.parse(json);
	this.generate();
	return this.quicksort(this.dots);
}
Distances.prototype.generate = function() {
	for (var i = 0; i < this.dots.length; i++) {
		this.dots[i].value = this.distance([this.x, this.y], this.dots[i].value.split(","));
	}	
}
Distances.prototype.distance = function (d1, d2) {//calculates the distance between points d1 = [x1, y1] and  d2 = [x2, y2], rounded to 2 digits after the dot
	return Math.round(Math.sqrt(Math.pow(d1[0]-d2[0], 2) + Math.pow(d1[1]-d2[1], 2))*100)/100
}
Distances.prototype.quicksort = function(a){
	var a_left = [];
    var a_right = [];
	if (a.length <= 1) return a;
	for (var i = 1; i < a.length; i++) {
		if (a[i].value < a[0].value) {
			a_left.push(a[i]);
		} else if (a[i].value > a[0].value) {
			a_right.push(a[i]);
		} else {
			a_right = [a[0]].concat(a_right);
		}
	}
	return this.quicksort(a_left).concat( a[0] , this.quicksort(a_right));
}

