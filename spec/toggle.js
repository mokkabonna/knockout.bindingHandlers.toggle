define(['knockout', 'src/toggle'], function(ko, toggle) {

  describe('Toggle', function() {
    var viewModel;
    var element;
    var root;

    before(function () {
      root = document.createElement('div');
      root.innerHTML = '<button id="btn" data-bind="toggle:obs">This button toggles</button>';
      document.body.appendChild(root);
      element = document.getElementById('btn');
    });

    beforeEach(function() {
      viewModel = {
        obs: ko.observable()
      };

      ko.applyBindings(viewModel, root);
    });

    afterEach(function() {
      ko.cleanNode(root);
    });

    it('should be bound', function() {
      expect(ko.dataFor(element)).to.be(viewModel);
    });

    it('should flip the underlying value on clicking the button ', function() {
      element.click();
      expect(viewModel.obs()).to.be(true);
      element.click();
      expect(viewModel.obs()).to.be(false);
      element.click();
      expect(viewModel.obs()).to.be(true);
    });

  });
});
