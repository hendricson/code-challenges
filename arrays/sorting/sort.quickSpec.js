beforeEach(function () {
  jasmine.addMatchers({
    toBeSorted: function () {
      return {
        compare: function (actual) {
          var sorted = true;
		  var closest = actual[0].value;
		  for (i = 1; i < actual.length; i++) {
			if (actual[0].value > actual[i].value || actual[i-1].value > actual[i].value) {
				sorted = false;
				break;
			}
		  }
          return {
            pass: sorted
          };
        }
      };
    }
  });
});
describe("Test quicksort method", function() {
  var a;

  describe("when array of numbers is given", function() {
	beforeEach(function() {
		a = [1,5,3,3,5,6,8,9,3];		
	});
	it("should return reordered array with nearest distances come first", function() {
		expect(a.quicksort()).toBeSorted();
	});
  });    

});
