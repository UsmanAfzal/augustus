const testHelper = require('../../../../../../helpers/test-helper');

describe('Group layings index page', function(){
  testHelper.setupBefore();

  it('should render content for the group layings index page', function(done){
    testHelper.shunterTest('index', 'layout', 'groups/12345678/made-available/availability-types/layings', done, true);
  });
});
