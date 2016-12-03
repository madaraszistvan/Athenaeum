import { AthenaeumPage } from './app.po';

describe('athenaeum App', function() {
  let page: AthenaeumPage;

  beforeEach(() => {
    page = new AthenaeumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
